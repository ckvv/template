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
    <UButton class="absolute right-4" to="https://github.com/ckvv/template" target="_blank">
      Github
    </UButton>
  </div>
</template>
