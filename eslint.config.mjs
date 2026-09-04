import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Where files go when they need deleting and the tooling has no rm.
    // Nothing in here is part of the site, and linting stale snapshots of
    // old config files fails the build for no reason.
    "_to_delete/**",
  ]),
]);

export default eslintConfig;
