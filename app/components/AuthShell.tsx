import Link from "next/link";
import { Logo } from "./Logo";
import { Pixel } from "./Mascots";

// The shared frame for the login and register pages: brand and welcome message
// on the left, the form card on the right.
//
// Written once and used by both pages. If the two pages had their own copies,
// they'd drift apart the moment either changed — that's the actual argument for
// components, more than "reuse" in the abstract.
export function AuthShell({
  heading,
  subheading,
  children,
}: {
  heading: string;
  subheading: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-8">
      {/* --- Top bar --- */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <span className="text-2xl font-semibold tracking-tight">
            Revision Lab
          </span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/60 px-4 py-2.5 text-sm font-medium shadow-sm backdrop-blur transition hover:bg-white/90 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>
      </div>

      {/* --- Two columns on desktop, stacked on mobile --- */}
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
        {/* Left: welcome + mascot. Hidden on small screens, where the form is
            the only thing that matters and vertical space is precious. */}
        <div className="hidden lg:block">
          <h1 className="text-5xl font-bold tracking-tight xl:text-6xl">
            {heading}
          </h1>
          <p className="mt-4 text-xl opacity-70">{subheading}</p>

          <div
            className="relative mt-10 flex h-80 items-center justify-center overflow-hidden rounded-3xl shadow-[0_24px_60px_-30px_rgba(37,99,235,0.8)]"
            style={{
              backgroundImage:
                "linear-gradient(150deg, #60a5fa 0%, #2563eb 55%, #1a3a8f 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/25 opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/30" />
            <Pixel className="relative h-64 drop-shadow-[0_10px_18px_rgba(0,0,0,0.35)]" />
          </div>
        </div>

        {/* Right: the form card */}
        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_24px_60px_-35px_rgba(22,24,43,0.6)] backdrop-blur-sm sm:p-10 dark:border-white/10 dark:bg-white/5">
          {children}
        </div>
      </div>
    </main>
  );
}
