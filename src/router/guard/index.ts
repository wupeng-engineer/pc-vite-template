import { Router } from 'vue-router';
import { createAuthGuard } from './auth';
import { createPermissionGuard } from './permission';

export function setupRouterGuard(router: Router): void {
  createAuthGuard(router);
  createPermissionGuard(router);
}
