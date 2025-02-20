# Turborepo Svelte starter

This is an unofficial starter Turborepo.

## Using this example

Run the following command:

```bash
npx create-turbo@latest -e https://github.com/IslamZaoui/turbo-sveltekit-shadcn
```

## Adding components

You can add components to the project by running the following command:

```bash
npm ui add <component-name>

# Example:
npm ui add button input
```

Then export the added components in the [`src/index.ts`](https://github.com/IslamZaoui/turbo-sveltekit-shadcn/blob/main/packages/ui/src/index.ts) to access them.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [sveltekit](https://kit.svelte.dev/) app
- `@repo/ui`: a stub Svelte component library (🚀 powered by [shadcn-svelte](https://next.shadcn-svelte.com) & [tailwind v4](https://tailwindcss.com/blog/tailwindcss-v4) )
- `@repo/eslint-config`: `eslint` configurations (using the recommended settings by svelte team)
- `@repo/typescript-config`: `typescript` configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
