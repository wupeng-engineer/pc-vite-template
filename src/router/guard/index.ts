import { Router } from 'vue-router';
import { createAuthGuard } from './auth';
import { createStateGuard } from './state';

export function setupRouterGuard(router: Router): void {
  createAuthGuard(router);
  createStateGuard(router);
}
