
import 'pinia';
declare module 'pinia' {
  export interface DefineStoreOptions<S extends StateTree, G extends GettersTree<S>, A> {
    debounce?: {
      [k in keyof A]?: number
    }
  }
}