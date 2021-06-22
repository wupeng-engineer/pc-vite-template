import { AppRouteRecordRaw } from '@/router/types';
const router: AppRouteRecordRaw = {
  path: '/home',
  name: 'home',
  component: () => import('@/pages/home/index.vue'),
  meta: {
    auth: true,
  },
  children: [
    {
      path: '',
      redirect: { name: 'home-demo1' },
    },
    {
      path: 'demo1',
      name: 'home-demo1',
      component: () => import('@/pages/home/demo1/index.vue'),
    },
  ],
};

export default router;
