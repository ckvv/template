import { useSignStore } from '@/stores/sign';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

export { useLink, useRoute, useRouter } from 'vue-router';

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
  if (to.meta?.auth !== false && !`${to.name?.toString()}`.includes('sign')) {
    const { user } = useSignStore();
    if (!user.id) {
      return next({ name: `sign`, query: { to: to.path } });
    }
  }
  next();
});
