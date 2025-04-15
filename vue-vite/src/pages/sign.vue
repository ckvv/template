<script setup lang="ts">
import { authAPI } from '@/api';
import { signSchema } from '@/constant/schema';
import { router, useRoute } from '@/router';
import { useSignStore } from '@/stores/sign';
import { ref, useTemplateRef } from 'vue';

type TYPE = 'signin' | 'signup';

definePage({
  name: '登录|注册',
  meta: {
    auth: false,
  },
});

const formRef = useTemplateRef('formRef');
const toast = useToast();
const type = ref<TYPE>('signin');
const signStore = useSignStore();
const route = useRoute();

const user = ref({
  username: '',
  password: '',
});

const { execute: signin, isFetching: isSignin, onFetchResponse: onSignin } = authAPI.signin(user);
onSignin(({ data }) => {
  if (data?.code !== 0)
    return;
  toast.add({ description: '登录成功', color: 'success' });
  signStore.signIn(data?.data);
  router.push({ path: route.query?.to as string ?? '/auth' });
  resetForm();
});

const { execute: signup, isFetching: isSignUp, onFetchResponse: onSignUp } = authAPI.signup(user);
onSignUp(({ data }) => {
  if (data?.code !== 0)
    return;
  toast.add({ description: '注册成功', color: 'success' });
  handlerSwitch('signin');
});

async function onSubmit() {
  switch (type.value) {
    case 'signin':
      await signin();
      break;
    case 'signup':
      await signup();
      break;
    default:
      break;
  }
}

function signinGithub() {
  window.open(`https://github.com/login/oauth/authorize?${new URLSearchParams({
    client_id: 'Ov23liEYh2qc0fubOEEd',
  })}`);
}

function handlerSwitch(value?: TYPE) {
  resetForm();
  type.value = value || type.value === 'signup' ? 'signin' : 'signup';
}

function resetForm() {
  formRef.value?.setErrors([]);
  user.value = {
    username: '',
    password: '',
  };
}
</script>

<template>
  <div class="text-center">
    <UForm ref="formRef" :schema="signSchema" :state="user" class="w-2xl max-w-full flex flex-col gap-2 m-auto" @submit="onSubmit()">
      <UFormField label="用户名" name="username" class="text-left">
        <UInput v-model="user.username" class="w-full" />
      </UFormField>
      <UFormField label="密码" name="password" class="text-left">
        <UInput v-model="user.password" class="w-full" type="password" />
      </UFormField>
      <div class="flex flex-col gap-2">
        <UButton class="w-full justify-center" type="submit" :loading="isSignin || isSignUp">
          {{ type === 'signin' ? '登录' : '注册' }}
        </UButton>
        <div class="flex justify-between items-center">
          <span class="flex">
            第三方登录: <UIcon name="i-bytesize-github" class="size-6 ml-2 cursor-pointer" @click="signinGithub" />
          </span>
          <UButton link variant="link" @click="handlerSwitch()">
            {{ type !== 'signin' ? '登录' : '注册' }}
          </UButton>
        </div>
      </div>
    </UForm>
  </div>
</template>
