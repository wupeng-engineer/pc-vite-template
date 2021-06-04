import { Observable } from 'rxjs';
import { reactive, readonly } from 'vue';
import { isNil } from '@/utils/extensions/type';

type StoreContainer<T> = {
  value: T;
};

export abstract class BaseStore<T extends Object> {
  protected _state: StoreContainer<T>;

  constructor() {
    this._state = reactive({ value: null }) as StoreContainer<T>;

    const res = this.init();

    if (isNil(res)) {
      this.setup(undefined, 'init() returned value is null');
      return;
    }

    if (res instanceof Observable) {
      const subscribe = res.subscribe({
        next: (d: T) => {
          subscribe.unsubscribe();
          this._state.value = d;
          this.setup(d);
        },
        error: (err) => {
          subscribe.unsubscribe();
          this.setup(undefined, err);
        },

        complete: () => {
          subscribe.unsubscribe();
        },
      });
    } else if (res instanceof Promise) {
      res
        .then((d: T) => {
          this._state.value = d;
          this.setup(d);
        })
        .catch((err) => {
          this.setup(undefined, err);
        });
    } else {
      this._state.value = res;
      this.setup(res);
    }
  }

  get data(): Readonly<T> {
    return readonly(this._state.value) as T;
  }

  protected abstract init(): Observable<T> | Promise<T> | T;

  /**
   *  数据初始化完毕之后调用的钩子函数
   * @param data  初始化数据
   * @param err 数据初始化错误,
   * @protected
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected setup(data?: T, err?: unknown): void {}
}
