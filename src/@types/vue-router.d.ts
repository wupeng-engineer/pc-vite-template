export {};
declare module 'vue-router' {
  interface ObjectDirective extends Record<string | number | symbol, unknown> {
    title?: string;
    auth?: boolean;
    roles?: Array<number>;
  }
}
