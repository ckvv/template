<script setup lang="ts">
import { useSignStore } from '@/stores/sign';

definePage({
  name: 'about',
  meta: {
    auth: true,
  },
});

const sign = useSignStore();
</script>

<template>
  <div class="about">
    <HelloWorld :msg="`hello: ${sign.user.id}`" />
  </div>
</template>
