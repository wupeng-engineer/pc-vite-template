interface IInstance<T> {
  new(...params: Array<object>): T
}

export class Singleton {
  static instances: Map<string | IInstance<Object>, Object> = new Map();

  static make<T>(instance: IInstance<T>, key?: string, ...params: Array<object>): T {
    this.instances.has(key || instance) || this.instances.set(key || instance, new instance(...params));
    return this.instances.get(instance) as T;
  }
}
