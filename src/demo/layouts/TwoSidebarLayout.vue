<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <AsideMenu />
      </div>
      <div class="col-6">
        <RouterView />
      </div>
      <div class="col-3">
        <img src="/logo.jpg" class="img-thumbnail" alt="Vue.js Logo" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { AsideMenu } from "../components";
</script>
