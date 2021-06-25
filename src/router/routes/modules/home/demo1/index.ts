import { AppRouteRecordRaw } from '@/router/types';
const router: AppRouteRecordRaw = {
  path: 'demo1',
  name: 'home-demo1',
  component: () => import('@/pages/home/demo1/index.vue'),
};

export default router;
