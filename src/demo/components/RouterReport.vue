<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h4>Router</h4>
        <pre><code>{{ meta }}</code></pre>
      </div>
      <div class="col-6">
        <h4>Layouts provider</h4>
        <pre><code>{{ provider }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useLayoutsProvider } from "../../package/model/use";

const $route = useRoute();
const $layoutsProvider = useLayoutsProvider();

const pretty = (value: object) => JSON.stringify(value, null, 2);

const meta = computed(() => pretty($route.meta));
const provider = computed(() => pretty($layoutsProvider.getConfig() ?? {}));
</script>

<style>
pre {
  display: block;

  padding: 20px;

  overflow: auto;

  background: #414141;
  border: 3px solid black;

  color: white;
}
</style>
