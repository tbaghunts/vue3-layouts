<template>
  <h1>vue3-layouts</h1>

  <p>
    `vue3-layouts` is a Vue.js package designed to simplify the process of creating
    and managing layouts in Vue.js projects. It provides a configurable Vue.js plugin to set up
    layouts dependent on Vue Router.
  </p>

  <h2>Features</h2>
  <ul>
    <li><b>Customizable Layouts</b>: Easily manage and switch between different layouts.</li>
    <li><b>Quick Integration</b>: Simplify the layout management process with minimal setup.</li>
  </ul>

  <h2>Installation</h2>
  <p>You can install `vue3-layouts` via npm:</p>

  <div class="card">
    <div class="card-body">
      npm install vue3-layouts
    </div>
  </div>

  <hr />

  <h3>Import and Setup</h3>
  <p>
    Import createLayoutsProvider from vue3-layouts and set it up in your Vue application. You will need to provide the default layout and any other layout aliases.
  </p>

  <div class="card">
    <div class="card-body">
      <pre>
        <code>
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
        </code>
      </pre>
    </div>
  </div>

  <hr />

  <h3>Define Layouts in Vue Router</h3>
  <p>Specify the `layout` for each `route` in the `meta` field of your Vue Router configuration.</p>

  <div class="card">
    <div class="card-body">
      <pre>
        <code>
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
        </code>
      </pre>
    </div>
  </div>

  <hr />

  <h3>Add LayoutsProvider in Your Entry Point</h3>
  <p>
    Ensure you include the LayoutsProvider component in your application’s entry point (e.g., App.vue).
  </p>

  <div class="card">
    <div class="card-body">
      <pre>
        <code>
          &lt;template>
            &lt;LayoutsProvider&gt;
              &lt;RouterView /&gt;
            &lt;/LayoutsProvider&gt;
          &lt;/template&gt;

          &lt;script lang="ts" setup&gt;
          import { LayoutsProvider } from 'vue3-layouts';
          &lt;/script&gt;
        </code>
      </pre>
    </div>
  </div>

  <i>Contributions are welcome! Please feel free to open issues, submit pull requests, or suggest improvements.</i>
</template>