import { useSignStore } from '@/stores/sign';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

export { type RouteLocationRaw, useLink, useRoute, useRouter } from 'vue-router';

export const defaultRoutePath = '/';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: defaultRoutePath,
    // },
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      redirect: defaultRoutePath,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta?.auth !== false) {
    const { user } = useSignStore();
    if (!user?.id) {
      if (to.name !== '登录|注册') {
        useToast().add({ description: '请先登录', color: 'error' });
      }
      return next({ name: `登录|注册`, query: { to: to.path } });
    }
  }
  next();
});
