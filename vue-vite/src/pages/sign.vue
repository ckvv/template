<script setup lang="ts">
import { router, useRoute } from '@/router';
import { useSignStore } from '@/stores/sign';

definePage({
  name: 'sign',
});

const sign = useSignStore();
const route = useRoute();

function signIn() {
  // 模拟登录
  sign.signIn({ id: 1 });

  router.push({ path: route.query?.to as string ?? '/auth' });
}

function signOut() {
  sign.signOut();

  router.push({ path: '/' });
}
</script>

<template>
  <div class="text-center">
    <ElButton v-if="!sign.user?.id" type="primary" @click="signIn">
      登录
    </ElButton>
    <ElButton v-else type="primary" @click="signOut">
      退出
    </ElButton>
  </div>
</template>
