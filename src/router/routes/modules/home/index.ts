import { AppRouteRecordRaw } from '@/router/types';
import Demo1Router from './demo1';
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
    Demo1Router,
    {
      path: 'demo2',
      name: 'home-demo2',
      component: () => import('@/pages/home/demo2/index.vue'),
    },
  ],
};

export default router;
