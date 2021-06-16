interface Instance<T> {
  new(...params: Array<object>): T
}

export class Singleton {
  static instances: Map<string | Instance<Object>, Object> = new Map();

  static make<T>(instance: Instance<T>, key?: string, ...params: Array<object>): T {
    this.instances.has(key || instance) || this.instances.set(key || instance, new instance(...params));
    return this.instances.get(instance) as T;
  }
}
