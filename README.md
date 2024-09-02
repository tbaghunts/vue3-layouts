[![npm version](https://badge.fury.io/js/vue3-layouts.svg)](https://badge.fury.io/js/vue3-layouts)
[![Tests](https://github.com/tbaghunts/vue3-layouts/actions/workflows/node.js.yml/badge.svg)](https://github.com/tbaghunts/vue3-layouts/actions/workflows/node.js.yml)
[![downloads](https://img.shields.io/npm/d18m/vue3-layouts.svg)](https://www.npmjs.com/package/vue3-layouts)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# vue3-layouts

`vue3-layouts` is a Vue.js package designed to simplify the process of creating and managing layouts in Vue.js projects. It provides a configurable Vue.js plugin to set up layouts dependent on Vue Router.

## Features

- **Customizable Layouts**: Easily manage and switch between different layouts.
- **Quick Integration**: Simplify the layout management process with minimal setup.

## Installation

You can install `vue3-layouts` via npm:

```bash
npm install vue3-layouts
```

### Import and Setup

Import createLayoutsProvider from vue3-layouts and set it up in your Vue application. You will need to provide the default layout and any other layout aliases.

```typescript
import { createLayoutsProvider } from "vue3-layouts";

import EntryPoint from "./EntryPoint.vue";

const layoutsProvider = createLayoutsProvider({
  default: () => import('./layouts/DefaultLayout.vue'),
  aliases: {
    guest: () => import('./layouts/GuestLayout.vue'),
    authenticated: () => import('./layouts/AuthenticatedLayout.vue')
  }
});

createApp(EntryPoint)
  .use(layoutsProvider)
  .mount('#app')
```

### Define Layouts in Vue Router

Specify the `layout` for each `route` in the `meta` field of your Vue Router configuration.

```typescript
const routes = [
  {
    path: '/',
    component: Home,
    // Will be used default layout
  },
  {
    path: '/sing',
    component: OtherPage,
    meta: { layout: 'guest' },
    children: [
      {
        path: '/in',
        component: () => import('./pages/sign-in'),
        // Will be used parent layout
      },
      {
        path: '/up',
        component: () => import('./pages/sign-up'),
        // Will be used parent layout
      }
    ]
  },
  {
    path: '/dashboard',
    meta: { layout: 'authenticated' },
    component: () => import('./pages/dashboard'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);
```

### Add LayoutsProvider in Your Entry Point

Ensure you include the LayoutsProvider component in your application’s entry point (e.g., App.vue).\
`LayoutsProvider` is the global registered component, and you do not need to import it before using it.

```vue
<template>
  <LayoutsProvider>
    <RouterView />
  </LayoutsProvider>
</template>
```

Contributions are welcome! Please feel free to open issues, submit pull requests, or suggest improvements.