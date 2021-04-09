import { isString } from '@/utils/extensions/type';

/**
 * 获取指定元素的off
 * @param el
 */
export const offset = (el: Element | string): { left: number; top: number; right: number; bottom: number } => {
  el = isString(el) ? document.querySelector(el) : el;
  return el.getBoundingClientRect();
};
