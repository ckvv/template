<script setup lang="ts">
import { Sign } from '@/constant/schema';
import { router, useRoute } from '@/router';
import { useSignStore } from '@/stores/sign';
import { ref } from 'vue';

definePage({
  name: 'sign',
});

const type = ref<'signin' | 'signup'>('signin');
const sign = useSignStore();
const route = useRoute();

const user = ref({
  username: '',
  password: '',
});

function signin() {
  // 模拟登录
  sign.signIn({ id: 1 });

  router.push({ path: route.query?.to as string ?? '/auth' });
}

function _signup() {
  type.value = 'signin';
}
</script>

<template>
  <div class="text-center select-none">
    <UForm :schema="Sign" :state="user" class="w-2xl flex flex-col gap-2 m-auto">
      <UFormField label="Username" name="username">
        <UInput v-model="user.username" class="w-full" />
      </UFormField>
      <UFormField label="Password" name="password">
        <UInput v-model="user.password" class="w-full" />
      </UFormField>
      <div v-if="type === 'signin'" class="flex flex-col gap-2">
        <UButton class="w-full justify-center" @click="signin">
          登录
        </UButton>
        <div class="flex justify-between items-center">
          <span class="flex">
            第三方登录 <UIcon name="i-bytesize-github" class="size-5" />
          </span>
          <UButton link variant="link" @click="type = 'signup'">
            注册
          </UButton>
        </div>
      </div>
    </UForm>
  </div>
</template>
