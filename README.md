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
  },
  {
    path: '/sing',
    component: OtherPage,
    meta: { layout: 'guest' },
    children: [
      {
        path: '/in',
        component: () => import('./pages/sign-in'),
      },
      {
        path: '/up',
        component: () => import('./pages/sign-up'),
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

Ensure you include the LayoutsProvider component in your application’s entry point (e.g., main.ts).

```vue
<template>
  <LayoutsProvider>
    <RouterView />
  </LayoutsProvider>
</template>

<script lang="ts" setup>
import { LayoutsProvider } from 'vue3-layouts';
</script>
```

Contributions are welcome! Please feel free to open issues, submit pull requests, or suggest improvements.