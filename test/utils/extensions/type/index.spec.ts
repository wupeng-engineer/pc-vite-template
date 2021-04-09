
import { isObject } from '@/src/utils/extensions/type/index';
test('测试 isObject', () => {
  expect(isObject('123')).toEqual(false);
})
