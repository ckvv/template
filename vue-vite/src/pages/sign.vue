<script setup lang="ts">
import { authAPI } from '@/api';
import { Sign } from '@/constant/schema';
import { router, useRoute } from '@/router';
import { useSignStore } from '@/stores/sign';
import { ref } from 'vue';

definePage({
  name: 'sign',
});

const toast = useToast();
const type = ref<'signin' | 'signup'>('signin');
const sign = useSignStore();
const route = useRoute();

const user = ref({
  username: '',
  password: '',
});

const { execute: signin, isFetching: isSigning, onFetchResponse: onSignin } = authAPI.signin(user);

onSignin(({ data }) => {
  if (data?.code !== 0)
    return;
  toast.add({ description: '登录成功', color: 'success' });
  sign.signIn(data?.data);
  router.push({ path: route.query?.to as string ?? '/auth' });
});

function signinGithub() {
  window.open('https://github.com/ckvv');
}

function _signup() {
  type.value = 'signin';
}
</script>

<template>
  <div class="text-center select-none">
    <UForm :schema="Sign" :state="user" class="w-2xl flex flex-col gap-2 m-auto" @submit="signin()">
      <UFormField label="Username" name="username" class="text-left">
        <UInput v-model="user.username" class="w-full" />
      </UFormField>
      <UFormField label="Password" name="password" class="text-left">
        <UInput v-model="user.password" class="w-full" />
      </UFormField>
      <div v-if="type === 'signin'" class="flex flex-col gap-2">
        <UButton class="w-full justify-center" type="submit" :loading="isSigning">
          登录
        </UButton>
        <div class="flex justify-between items-center">
          <span class="flex">
            第三方登录: <UIcon name="i-bytesize-github" class="size-6 ml-2 cursor-pointer" @click="signinGithub" />
          </span>
          <UButton link variant="link" @click="type = 'signup'">
            注册
          </UButton>
        </div>
      </div>
    </UForm>
  </div>
</template>
