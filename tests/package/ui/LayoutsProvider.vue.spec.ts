import { describe, expect, it } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import { LayoutsProvider } from "@/package/ui";
import { createLayoutsProvider } from "@/package";

const provider = createLayoutsProvider({
  default: { template: '<div id="layout-default"><RouterView /></div>' },
  aliases: {
    layoutA: { template: '<div id="layout-a"><RouterView /></div>' },
    layoutB: { template: '<div id="layout-b"><RouterView /></div>' },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: {
        template: '<div id="page-home">Home</div>',
      },
    },
    {
      path: "/a",
      component: {
        template: '<div id="page-a">Page A</div>',
      },
      meta: {
        layout: "layoutA",
      },
    },
    {
      path: "/b",
      component: {
        template: '<div id="page-b">Page B</div>',
      },
      meta: {
        layout: "layoutB",
      },
    },
    {
      path: "/c",
      meta: { layout: "layoutB" },
      children: [
        {
          path: "/c/1",
          component: { template: '<div id="page-c-1">Page C 1</div>' },
        },
        {
          path: "/c/2",
          component: { template: '<div id="page-c-2">Page C 2</div>' },
          meta: {
            layout: "layoutA",
          },
        },
      ],
    },
  ],
});

let wrapper: VueWrapper;

describe("UI - LayoutsProvider.vue", () => {
  it("/ page testing", async () => {
    await router.push("/");

    wrapper = mount(LayoutsProvider, {
      global: {
        plugins: [router, provider],
      },
    });
    expect(wrapper.html()).toContain(`<div id="page-home">Home</div>`);
    expect(wrapper.html().startsWith('<div id="layout-default">')).toBeTruthy();
  });

  it("/a page testing", async () => {
    await router.push("/a");

    wrapper = mount(LayoutsProvider, {
      global: {
        plugins: [router, provider],
      },
    });
    expect(wrapper.html()).toContain(`<div id="page-a">Page A</div>`);
    expect(wrapper.html().startsWith('<div id="layout-a">')).toBeTruthy();
  });

  it("/b page testing", async () => {
    await router.push("/b");

    wrapper = mount(LayoutsProvider, {
      global: {
        plugins: [router, provider],
      },
    });
    expect(wrapper.html()).toContain(`<div id="page-b">Page B</div>`);
    expect(wrapper.html().startsWith('<div id="layout-b">')).toBeTruthy();
  });

  it("/c/1 page testing", async () => {
    await router.push("/c/1");

    wrapper = mount(LayoutsProvider, {
      global: {
        plugins: [router, provider],
      },
    });
    expect(wrapper.html()).toContain(`<div id="page-c-1">Page C 1</div>`);
    expect(wrapper.html().startsWith('<div id="layout-b">')).toBeTruthy();
  });

  it("/c/2 page testing", async () => {
    await router.push("/c/2");

    wrapper = mount(LayoutsProvider, {
      global: {
        plugins: [router, provider],
      },
    });
    expect(wrapper.html()).toContain(`<div id="page-c-2">Page C 2</div>`);
    expect(wrapper.html().startsWith('<div id="layout-a">')).toBeTruthy();
  });
});
