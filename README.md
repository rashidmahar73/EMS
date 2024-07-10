# event-management-system

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## App Structure

- **src/assets/**: Contains icons and images used throughout the project.
- **src/components/**: Reusable Vue components used in various parts of the application.
- **src/pages/**: Representing different pages of the application.
- **src/router/**: Handles routing within the application.
- **src/store/**: Vuex store for state management, storing details data.
- **src/utils/**:
  - **helpers.js**: Contains reusable pure utility functions.
  - **apihandler.js**: Functions for making API calls.
  - **index.js**: Imports all utility functions for easier access.

## Project Description

## `index.ts` Usage

The `index.ts` file centralizes the import of utility functions and components:

## `SCSS` Usage

Used Module Based Styling because in simple scss files the class will be overwrite from DOM:
