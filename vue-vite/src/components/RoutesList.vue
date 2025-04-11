<script setup lang="ts">
import { useRouter } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

const router = useRouter();
</script>

<template>
  <div class="flex gap-4">
    <span v-for="route in routes" :key="route.path" :underline="false" @click="router.push(route.path)">
      {{ route.name }}
    </span>
    <div v-for="n in 9" :key="n" class="w-40 h-0" />
  </div>
</template>
