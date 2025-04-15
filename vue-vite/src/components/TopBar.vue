<script setup lang="ts">
import { routes } from 'vue-router/auto-routes';

const items = routes.map((v) => {
  return {
    label: v.name,
    to: v.path,
  };
});
</script>

<template>
  <div class="flex justify-center items-center">
    <UNavigationMenu :items="items" class="justify-center" />
  </div>
</template>
