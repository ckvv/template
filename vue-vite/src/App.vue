<script setup lang="ts">
</script>

<template>
  <UApp :toaster="{ position: 'top-right' }">
    <RoutesList />
    <RouterView />
  </UApp>
</template>
