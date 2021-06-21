import { App } from 'vue';
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import routes from './routes';
import { setupRouterGuard } from './guard';



export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes as Array<RouteRecordRaw>,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function  setupRouter(app: App<Element>): Promise<App<Element>> {
  app.use(router);
  setupRouterGuard(router);
  await router.isReady();
  return app;
}
