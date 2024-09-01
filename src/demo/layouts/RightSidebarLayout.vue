<template>
  <div class="container">
    <div class="row">
      <div class="col-9">
        <RouterView />
      </div>
      <div class="col-3">
        <AsideMenu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AsideMenu } from "../components";
</script>
