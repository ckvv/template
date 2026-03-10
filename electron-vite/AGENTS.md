# Repository Guidelines

## Project Structure & Module Organization

This repository is an Electron Forge desktop app with a Vite + Vue 3 renderer.

- `src/main/`: Electron main-process startup, lifecycle, constants, and window creation.
- `src/preload/`: secure bridge APIs exposed to the renderer through preload scripts.
- `src/renderer/`: Vue application code, including `pages/`, `components/`, `layouts/`, `router/`, `composables/`, `i18n/`, and shared styles.
- `docs/`: contributor-facing documentation such as [`docs/i18n.md`](./docs/i18n.md).
- Root config: `vite.*`, `forge.config.ts`, `tsconfig.json`, `eslint.config.mjs`.

Keep desktop integrations in `src/main/` or `src/preload/`; keep UI logic in `src/renderer/`.

If a change affects project structure, core development commands, validation workflow, or dependency policy, update `AGENTS.md` in the same change. If the change also affects shared behavior or needs contributor-facing explanation, add or update the relevant documentation under `docs/`.

## Build, Test, and Development Commands

Prefer `pnpm`.

- `pnpm install`: install dependencies.
- `pnpm start`: run the Electron Forge development app.
- `pnpm lint`: run ESLint with autofix (`eslint --fix`).
- `pnpm typecheck`: run Vue + TypeScript type checking with `vue-tsc --noEmit`.
- `pnpm package`: build the app without creating installers.
- `pnpm make`: generate platform distribution artifacts.

Run `pnpm lint` and `pnpm typecheck` before opening a pull request.

## Coding Style & Naming Conventions

Use TypeScript across the app. For Vue files, follow Composition API with `<script setup lang="ts">`.

- Indentation: 2 spaces.
- Vue components: PascalCase, e.g. `LocaleSwitcher.vue`.
- Composables: `useX.ts`, e.g. `useLocale.ts`.
- Route pages: place file-based pages under `src/renderer/pages/`.

Linting is handled by ESLint with `@antfu/eslint-config`. Keep code simple, typed, and consistent with existing module boundaries.

## Testing Guidelines

There is no dedicated automated test framework configured yet. Until one is added, validate changes manually:

- start the app with `pnpm start`
- verify affected routes and UI flows
- confirm preload-exposed features still work
- rerun `pnpm lint`
- rerun `pnpm typecheck`

## Commit & Pull Request Guidelines

Use clear, imperative commit messages such as `feat: add locale persistence` or `fix: guard missing preload API`.

Pull requests should include:

- a short description of the change and its impact
- linked issue or task when applicable
- screenshots or recordings for UI changes
- confirmation that `pnpm lint` and `pnpm typecheck` passed

Ask for confirmation before adding new production dependencies.
