import { flatMap, isArray } from 'lodash';
import { XOR } from '@/@types/global';
import { moduleFilter } from '@/util/helper';
import { AppRouteRecordRaw } from '../types';

/**
 * 遍历moduleRoutes
 * @returns
 */
const findModuleRoutes = (): Array<AppRouteRecordRaw> => {
  const modules = moduleFilter(import.meta.globEager('./modules/*/*.ts'));

  return flatMap(
    Object.keys(modules).map((key) => {
      //@ts-ignore
      const module: XOR<Array<AppRouteRecordRaw>, AppRouteRecordRaw> = modules[key].default;
      return isArray(module) ? module : [module];
    })
  );
};

const moduleRoutes = findModuleRoutes();

export const routes: Array<AppRouteRecordRaw> = [
  ...moduleRoutes,
  {
    path: '/',
    redirect: '/home',
  },
];

export default routes;
