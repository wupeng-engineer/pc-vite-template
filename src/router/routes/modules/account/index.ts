import { AppRouteRecordRaw } from '@/router/types';

const router: AppRouteRecordRaw = {
  path: '/account',
  name: 'account',
  component:  () => import('@/pages/account/index.vue'),
  children: [
    {
      path: 'login',
      name: 'account-login',
      component:  () => import('@/pages/account/login/index.vue'),
    },
  ],
};

export default router;
