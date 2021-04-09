/***
 *  知否为空
 * @param value
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/***
 *是否为字符串
 * @param value
 */
export function isString(value: unknown): value is string {
  return !isNil(value) && value instanceof String;
}

/**
 * 是否为数组
 * @param value
 */
export function isArray<T = unknown>(value: unknown): value is Array<T> {
  return !isNil(value) && value instanceof Array;
}

/**
 * 是否为Object
 * @param value
 */
export function isObject(value: unknown): value is Object {
  return !isNil(value) && value instanceof Object;
}

/**
 *  是否为函数
 * @param value
 */
export function isFunction(value: unknown): value is Function {
  return !isNil(value) && value instanceof Function;
}
