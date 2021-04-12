import { isNil, isObject, isString, isArray, isBoolean, isFunction, isNumber } from '@/utils/extensions/type';

describe('isNil test', () => {
  it('{} is isNil', () => {
    expect(isNil({})).toEqual(false);
  });
  it('[] is isNil', () => {
    expect(isNil([])).toEqual(false);
  });

  it('123 is isNil', () => {
    expect(isNil('123')).toEqual(false);
  });

  it('null is isNil', () => {
    expect(isNil(null)).toEqual(true);
  });

  it('undefined is isNil', () => {
    expect(isNil(undefined)).toEqual(true);
  });

  it('0 is isNil', () => {
    expect(isNil(0)).toEqual(false);
  });

  it('false is isNil', () => {
    expect(isNil(false)).toEqual(false);
  });

  it('()=>{} is isNil', () => {
    expect(isNil(() => {})).toEqual(false);
  });
});


it('测试 isObject', () => {
  expect(isObject({})).toEqual(true);
  expect(isObject([])).toEqual(false);
  expect(isObject('123')).toEqual(false);
  expect(isObject(null)).toEqual(false);
  expect(isObject(undefined)).toEqual(false);
  expect(isObject(123)).toEqual(false);
  expect(isObject(true)).toEqual(false);
  expect(isObject(() => {})).toEqual(false);
});

it('测试 isString', () => {
  expect(isString('123')).toEqual(true);
  expect(isString([])).toEqual(false);
  expect(isString({})).toEqual(false);
  expect(isString(null)).toEqual(false);
  expect(isString(undefined)).toEqual(false);
  expect(isString(123)).toEqual(false);
  expect(isString(true)).toEqual(false);
  expect(isString(() => {})).toEqual(false);
});

it('测试 isArray', () => {
  expect(isArray([])).toEqual(true);
  expect(isArray('123')).toEqual(false);
  expect(isArray({})).toEqual(false);
  expect(isArray(null)).toEqual(false);
  expect(isArray(undefined)).toEqual(false);
  expect(isArray(123)).toEqual(false);
  expect(isArray(true)).toEqual(false);
  expect(isArray(() => {})).toEqual(false);
});


it('测试 isBoolean', () => {
  expect(isBoolean(true)).toEqual(true);
  expect(isBoolean([])).toEqual(false);
  expect(isBoolean('123')).toEqual(false);
  expect(isBoolean({})).toEqual(false);
  expect(isBoolean(null)).toEqual(false);
  expect(isBoolean(undefined)).toEqual(false);
  expect(isBoolean(123)).toEqual(false);
  expect(isBoolean(() => {})).toEqual(false);
});

it('测试 isFunction', () => {
  expect(isFunction(true)).toEqual(false);
  expect(isFunction([])).toEqual(false);
  expect(isFunction('123')).toEqual(false);
  expect(isFunction({})).toEqual(false);
  expect(isFunction(null)).toEqual(false);
  expect(isFunction(undefined)).toEqual(false);
  expect(isFunction(123)).toEqual(false);
  expect(isFunction(() => {})).toEqual(true);
});

it('测试 isNumber', () => {
  expect(isNumber(true)).toEqual(false);
  expect(isNumber([])).toEqual(false);
  expect(isNumber('123')).toEqual(false);
  expect(isNumber({})).toEqual(false);
  expect(isNumber(null)).toEqual(false);
  expect(isNumber(undefined)).toEqual(false);
  expect(isNumber(0)).toEqual(true);
  expect(isNumber(123)).toEqual(true);
  expect(isNumber(123.1)).toEqual(true);
  expect(isNumber(() => {})).toEqual(false);

});
