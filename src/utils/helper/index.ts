import { isObject } from 'rxjs/internal-compatibility';
import { isString } from '@/utils/extensions/string';
import { isNil } from 'ramda';

export const awaitWrapper = <T = Object, E = Object>(promise: Promise<T>): Promise<Array<T | E>> => {
  // @ts-ignore
  return promise.then((data: T) => [null, data]).catch((err: E) => [err, null]);
};


export const snakeNameWithObject = (data: Object | Array<Object> | string, encode = false): Object => {
  if (isString(data)) {
    return data;
  }

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      // @ts-ignore
      data[index] = snakeNameWithObject(item, encode);
    });
  } else if (isObject(data)) {
    data = Object.assign({}, data);

    for (const key in data) {
      // @ts-ignore
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
};


/**
 * 转换
 * @param uri
 * @param data
 */
export const formatGetJson = (uri: string, data: { [T: string]: string | Array<string> } = {}): string => {
  const keys = Object.keys(data);
  if (!keys.length) return uri;
  const joiner = uri.lastIndexOf('?') === -1 ? '?' : '&';
  return (
    uri +
        joiner +
        keys
          .map(item => {
            if (isNil(data[item])) {
              return '';
            }
            if (!Array.isArray(data[item])) {
              return `${item}=${data[item]}`;
            }

            //  如果当前为数组,那么就解析数组参数
            if (!data[item].length) {
              return '';
            }
            // @ts-ignore
            const arrData: Array<string> = data[item];
            return arrData
              .map((d, i) => `${item}[${i}]=${d}`)
              .filter(item => item !== '')
              .join('&');
          })
          .filter(item => item !== '')
          .join('&')
  );
};
