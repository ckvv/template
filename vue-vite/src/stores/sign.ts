import { authAPI } from '@/api';
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

  function signIn(data: User) {
    user.value = data;
    localStorage.setItem('token', data.token!);
  }

  function signOut() {
    user.value = {};
  }

  return { user, isSign, signIn, signOut, fetchUserInfo };
});
