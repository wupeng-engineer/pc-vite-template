import { Router } from 'vue-router';
import { createStateGuard } from './state';

export function setupRouterGuard(router: Router): void {
  createStateGuard(router);
}
