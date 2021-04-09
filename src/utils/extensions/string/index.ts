import { isEmpty } from 'ramda';

/***
 * TODO: 命名问题
 * @param value
 * @param sym
 */
export const toCamelCase = (value: string, sym = '-'): string => {
  if (isEmpty(value)) throw new Error('');
  return value.replace(/([A-Z])/g,
    (a, b, index) => (index > 0 ? sym : '') + b.toLowerCase());
};

export function isString(value: Object): value is string { return  value instanceof String }
