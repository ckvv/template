import type { RouteLocationRaw } from '@/router';
import { authAPI } from '@/api';
import { router } from '@/router';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface User {
  id?: number;
  token?: string;
}

export const useSignStore = defineStore('user', () => {
  const user = ref<User>({});
  const isSign = computed(() => !!user.value?.id);

  async function fetchUserInfo() {
    const { data } = await authAPI.me();
    user.value = data.value?.data as any;
  }

  function signIn({ token, ...value }: User) {
    user.value = value;
    localStorage.setItem('token', token!);
  }

  async function signOut(options?: { to?: RouteLocationRaw }) {
    user.value = {};
    localStorage.removeItem('token');
    if (options?.to) {
      router.push(options?.to);
    }
  }

  return { user, isSign, signIn, signOut, fetchUserInfo };
});
