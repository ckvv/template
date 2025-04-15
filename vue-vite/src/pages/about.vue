<script setup lang="ts">
import { useSignStore } from '@/stores/sign';

definePage({
  name: '关于我',
});

const sign = useSignStore();
</script>

<template>
  <div class="me text-center">
    {{ sign.user }}
  </div>
</template>
