import { useFetch } from './request';

export const authAPI = {
  signin: (user: any) => useFetch('/auth/signin').post(user),
};
