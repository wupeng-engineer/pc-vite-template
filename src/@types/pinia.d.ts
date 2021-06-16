
import 'pinia';
declare module 'pinia' {
  export interface DefineStoreOptions<Id extends string, S extends StateTree, G extends GettersTree<S>, A> {
    debounce?: {
      [k in keyof A]?: number
    }
  }
}