import homeRoute from './home';
import accountRoute from './account';
import { AppRouteRecordRaw } from '../types';
export const routes: Array<AppRouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  homeRoute,
  accountRoute,
];

// const modules = import.meta.globEager('./modules/**/*.ts');

export default routes;
