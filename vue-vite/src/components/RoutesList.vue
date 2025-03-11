<script setup lang="ts">
import { useRouter } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

const router = useRouter();
</script>

<template>
  <el-space wrap size="large" class="justify-center">
    <el-link v-for="route in routes" :key="route.path" class="w-40" :underline="false" @click="router.push(route.path)">
      {{ route.name }}
    </el-link>
    <div v-for="n in 9" :key="n" class="w-40 h-0" />
  </el-space>
</template>
