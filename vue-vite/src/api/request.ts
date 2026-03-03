import { createFetch } from '@vueuse/core';
import { ENV_CONFIG } from '@/constant/config';

const toast = useToast();

export const useFetch = createFetch({
  baseUrl: ENV_CONFIG.BASE_URL,
  options: {
    immediate: false,
    async beforeFetch(ctx) {
      const headers = new Headers(ctx.options.headers || {});
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `${localStorage.getItem('token')}`);

      ctx.options.headers = headers;
      return ctx;
    },
    async afterFetch(ctx) {
      if (ctx.response.headers.get('content-type') === 'application/json') {
        const result = await ctx.response.json();
        if (result.code !== 0 && ctx.context.options?._toast !== false) {
          toast.add({ description: result.message, color: 'error' });
        }
        ctx.response.data = result;
      }
      return ctx;
    },
  },
  fetchOptions: {

  },
});
