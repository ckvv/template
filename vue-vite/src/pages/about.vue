<script setup lang="ts">
import { authAPI } from '@/api';
import { useSignStore } from '@/stores/sign';

definePage({
  name: '关于我',
});

const sign = useSignStore();

const { execute: signout, isFetching, onFetchResponse: onSignout } = authAPI.signout();

onSignout(({ data }) => {
  if (data?.code !== 0)
    return;
  sign.signOut({ to: { name: '登录|注册' } });
});
</script>

<template>
  <div class="me flex flex-col items-center gap-2">
    {{ sign.user }}
    <UButton label="退出" :loading="isFetching" @click="signout()" />
  </div>
</template>
