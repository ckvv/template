<script setup lang="ts">
import { useSignStore } from '@/stores/sign';

definePage({
  name: 'auth',
  meta: {
    auth: true,
  },
});
const sign = useSignStore();
</script>

<template>
  <div class="auth">
    当前用户 {{ sign.user }}
  </div>
</template>
