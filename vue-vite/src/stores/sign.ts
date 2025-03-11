import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface User {
  id?: number;
}

export const useSignStore = defineStore('user', () => {
  const user = ref<User>({});
  const isSign = computed(() => !!user.value?.id);
  function signIn(data: User) {
    user.value = data;
  }

  return { user, isSign, signIn };
});
