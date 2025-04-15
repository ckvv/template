<script setup lang="ts">
</script>

<template>
  <UApp :toaster="{ position: 'top-right' }">
    <TopBar />
    <RouterView />
  </UApp>
</template>
