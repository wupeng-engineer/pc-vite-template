import { Router } from 'vue-router';
import { useUserStore } from '@/store/modules/user';

export function createStateGuard(router: Router): void {
  router.afterEach((to) => {
    const userStore = useUserStore();
    // if (to.path === '/account/login') {
    //   userStore.$reset();
    // }
  });
}
