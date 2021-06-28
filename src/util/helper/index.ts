import { isArray, isNil, isObject, isString } from 'lodash';
import { ValueType } from '@/@types/global';

export const awaitWrapper = <T = unknown, E = unknown>(
  promise: Promise<T>
): Promise<Array<T | E>> => promise.then((data: T) => [null, data]).catch((err: E) => [err, null]);

export function snakeNameWithObject<T = unknown>(data: T | Array<T>, encode = false): T | Array<T> {
  if (isString(data)) {
    return data;
  }

  if (isArray(data)) {
    data.forEach((item, index) => {
      // @ts-ignore
      data[index] = snakeNameWithObject(item, encode);
    });
  } else if (isObject(data)) {
    data = Object.assign({}, data);

    for (const key in data) {
      if (isObject(data[key])) {
        // @ts-ignore
        data[key] = snakeNameWithObject(data[key], encode);
      }

      const newKey = encode
        ? key.replace(/([A-Z])/g, '_$1').toLowerCase()
        : key.replace(/_(\w)/g, ($0, $1) => {
            return $1.toUpperCase();
          });

      if (newKey !== key) {
        // @ts-ignore
        data[newKey] = data[key];
        // @ts-ignore
        delete data[key];
      }
    }
  }
  return data;
}

/**
 * 转换
 * @param uri
 * @param query
 */
export const queryFormat = (
  uri: string,
  query?: Record<string, ValueType | Array<ValueType>>
): string => {
  const keys = Object.keys(query || {});
  if (!keys.length) return uri;

  const joiner = uri.lastIndexOf('?') === -1 ? '?' : uri.indexOf('?') === uri.length - 1 ? '' : '&';

  return (
    uri +
    joiner +
    keys
      .map((item) => {
        if (isNil(query[item])) {
          return ' ';
        }

        if (!isArray(query[item])) {
          return `${item}=${query[item]}`;
        }

        if (isArray(query[item])) {
          if (!(<Array<ValueType>>query[item]).length) {
            return '';
          }
          //  如果当前为数组,那么就解析数组参数
          return (<Array<ValueType>>query[item])
            .map((d, i) => `${item}[${i}]=${d}`)
            .filter((item) => item !== '')
            .join('&');
        }
      })
      .filter((item) => item !== '')
      .join('&')
      .replace(/ /g, '')
      .replace(/&&/g, '&')
  );
};

/**
 * modules 过滤
 * @param modules
 * @param filter
 * @returns
 */
export const moduleFilter = <T extends { default: unknown }>(
  modules: Record<string, T>,
  filter?: RegExp
): Record<string, T> => {
  return Object.keys(modules)
    .map((key) => {
      if (filter && !filter.test(key)) return null;

      //@ts-ignore
      if (!modules[key] || modules[key][Symbol.toStringTag] !== 'Module' || !modules[key].default)
        return null;
      return { key, module: modules[key] };
    })
    .filter((f) => f)
    .reduce<Record<string, T>>((accumulator, current) => {
      accumulator[current.key] = current.module;
      return accumulator;
    }, {});
};
