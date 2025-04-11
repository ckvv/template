import { ofetch } from 'ofetch';

export { useFetch } from '@/composition/useFetch';
const request = ofetch.create({
  baseURL: 'http://template.ckvv.net/',
});

export const authAPI = {
  signin(user: any) {
    return request('/auth/signin', {
      method: 'POST',
      body: user,
    });
  },
};
