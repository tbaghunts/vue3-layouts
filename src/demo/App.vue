<template>
  <HeaderMenu />
  <RouterReport />
  <LayoutsProvider>
    <RouterView />
  </LayoutsProvider>
</template>

<script setup lang="ts">
import { HeaderMenu, RouterReport } from "./components";
</script>
