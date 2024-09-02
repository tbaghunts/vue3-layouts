<template>
  <HeaderMenu />
  <LayoutsProvider>
    <RouterReport />
    <RouterView />
  </LayoutsProvider>
</template>

<script setup lang="ts">
import { HeaderMenu, RouterReport } from "./components";
</script>
