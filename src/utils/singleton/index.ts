interface IInstance<T> {
    new (...params: Object[]): T
}
export class Singleton {
    static instances: Map<string | IInstance<Object>, Object> = new Map()

    static make<T>(instance: IInstance<T>, key?: string): T {
      this.instances.has(key || instance) || this.instances.set(key || instance, new instance());
      return this.instances.get(instance) as T;
    }
}
