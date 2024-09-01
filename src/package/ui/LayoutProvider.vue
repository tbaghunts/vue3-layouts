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

import { useBaghuntsLayoutProvider } from "../model/use";
import type { BaghuntsLayoutProviderProps } from "../model/types";

const $props = defineProps<BaghuntsLayoutProviderProps>();

const $route = useRoute();
const $BaghuntsLayoutProvider = useBaghuntsLayoutProvider();

const component = computed(() =>
  $BaghuntsLayoutProvider.getComponent($route.meta.layout, $props.default),
);
</script>
