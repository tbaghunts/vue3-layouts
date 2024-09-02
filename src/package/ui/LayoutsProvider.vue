<template>
  <component :is="component">
    <slot>
      <RouterView />
    </slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useLayoutsProvider } from "../model/use";
import type { LayoutsProviderProps } from "../model/types";

const $props = defineProps<LayoutsProviderProps>();

const $route = useRoute();
const $LayoutsProvider = useLayoutsProvider();

const component = computed(() =>
  $LayoutsProvider.getComponent($route.meta.layout, $props.default),
);
</script>
