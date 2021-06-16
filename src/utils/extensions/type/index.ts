import { isArray, isObject } from 'lodash';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNumeric(val: any): val is number | string {
  return !isArray(val) && !isObject(val) && val - parseFloat(val) + 1 >= 0;
}
