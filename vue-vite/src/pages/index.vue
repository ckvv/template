<script setup lang="ts">
definePage({
  name: '首页',
  meta: {
    auth: false,
  },
});
</script>

<template>
  <div class="flex justify-center items-center flex-col">
    VUE 项目启动模版

    <div>
      <UButton to="https://github.com/ckvv/template/tree/main/vue-vite" target="_blank" variant="link" color="neutral" class="underline">
        前端代码
      </UButton>
      <UButton to="https://github.com/ckvv/template/tree/main/server-hono" target="_blank" variant="link" color="neutral" class="underline">
        后端代码
      </UButton>
    </div>
  </div>
</template>
