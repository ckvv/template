import type { SignSchema } from '@/constant/schema';
import type { MaybeRef } from 'vue';
import { useFetch } from './request';

export const authAPI = {
  signin: (user: MaybeRef<SignSchema>) => useFetch('/auth/signin').post(user),
  signup: (user: MaybeRef<SignSchema>) => useFetch('/auth/signup').post(user),
  signout: () => useFetch('/auth/signout').post(),
  me: () => useFetch('/auth/me', { _toast: false }, { immediate: true }).get().json(),
};
