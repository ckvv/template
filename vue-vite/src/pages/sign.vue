<script setup lang="ts">
import { router, useRoute } from '@/router';
import { useSignStore } from '@/stores/sign';

definePage({
  name: 'sign',
  meta: {
    auth: false,
  },
});

const sign = useSignStore();
const route = useRoute();

function signIn() {
  // 模拟登录
  sign.signIn({ id: 1 });

  router.push({ path: route.query?.to as string ?? '/auth' });
}
</script>

<template>
  <div class="sign">
    <ElButton type="primary" @click="signIn">
      登录
    </ElButton>
  </div>
</template>
