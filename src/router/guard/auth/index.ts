import { Router } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import { AppRouteRecordRaw } from '@/router/types';

export function createAuthGuard(router: Router): void {
  router.beforeEach((to) => {
    const auth = (to as AppRouteRecordRaw)?.meta?.auth;

    console.log('auth', (to as AppRouteRecordRaw)?.meta);
    
    if (auth) {
      const userStore = useUserStore();

      console.log('user', userStore.token);
    }

    return true;
    // if (to.path === '/account/login') {
    //   userStore.$reset();
    // }
  });
}
