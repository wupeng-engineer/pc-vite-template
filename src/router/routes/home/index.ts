import { AppRouteRecordRaw } from '@/router/types';
const router: AppRouteRecordRaw = {
  path: '/home',
  name: 'home',
  component: () => import('@/pages/home/index.vue'),
  children: [
    {
      path: '/',
      component: () => import('@/pages/home/index.vue'),
      meta: {
        
      }
    },
  ],
  meta: {},
};

export default router;
