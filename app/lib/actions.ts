"use server";

// SERVER ACTIONS.
//
// That "use server" line at the top is doing something clever. These functions
// live on the server, but you can hand one straight to a <form> in the browser
// and React wires up the plumbing: the browser posts the form, Next runs the
// function on the server, and the result comes back. You never write a fetch
// call or an API endpoint.
//
// Why it matters here: password checking happens on the SERVER, where the
// browser can't see it. Nothing in this file is ever sent to the visitor.
// If you tried to validate a password in the browser, anyone could open dev
// tools and skip the check.

import { redirect } from "next/navigation";
import { createSession, destroySession, getSessionUserId } from "./session";
import { createUser, findUserByEmail, findUserById, verifyPassword } from "./users";

// What a form sends back to the page when something goes wrong. `fieldErrors`
// puts a message under the specific input; `formError` is for the whole form.
export type AuthState = {
  fieldErrors?: { name?: string; email?: string; password?: string };
  formError?: string;
} | null;

// A deliberately boring check. Proper email validation is famously impossible
// to do perfectly with a pattern — the only real test is sending an email and
// seeing if it arrives. This catches typos, which is all it's for.
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function register(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const fieldErrors: NonNullable<AuthState>["fieldErrors"] = {};

  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!looksLikeEmail(email))
    fieldErrors.email = "That doesn't look like an email address.";
  if (password.length < 8)
    fieldErrors.password = "Passwords need to be at least 8 characters.";

  if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

  try {
    const user = await createUser({ name, email, password });
    await createSession(user.id, true);
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_TAKEN") {
      return { fieldErrors: { email: "An account with that email already exists." } };
    }
    return { formError: "Something went wrong. Please try again." };
  }

  // `redirect` works by throwing a special signal that Next catches, so nothing
  // after this line runs. It also has to sit OUTSIDE the try/catch above —
  // otherwise the catch block would swallow that signal and the redirect would
  // silently never happen. This catches people out constantly.
  redirect("/");
}

export async function login(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const rememberMe = formData.get("rememberMe") === "on";

  if (!email || !password) {
    return { formError: "Please enter your email and password." };
  }

  const user = await findUserByEmail(email);

  // NOTE THE WORDING. Whether the email is unknown or the password is wrong,
  // the message is identical: "Email or password is incorrect."
  //
  // Saying "no account with that email" would let anyone type addresses in and
  // learn who has an account here — which is a privacy leak, and a gift to
  // someone about to guess passwords. Vague on purpose.
  const genericFailure = { formError: "Email or password is incorrect." };

  if (!user) return genericFailure;

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) return genericFailure;

  await createSession(user.id, rememberMe);

  redirect("/");
}

export async function logout() {
  await destroySession();
  redirect("/");
}

// Used by pages to find out who's logged in. Returns just the safe fields —
// never hand a password hash to a page, even by accident.
export async function getCurrentUser() {
  const userId = await getSessionUserId();
  if (!userId) return null;

  const user = await findUserById(userId);
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
}
