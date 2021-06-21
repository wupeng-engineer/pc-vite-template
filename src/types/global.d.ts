declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type IntervalHandle = ReturnType<typeof setInterval>;

export type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

declare type Nullable<T> = T | null;
declare type NonNullable<T> = T extends null | undefined ? never : T;
declare type Recordable<T = unknown> = Record<string, T>;
declare type ReadonlyRecordable<T = unknown> = {
  readonly [key: string]: T;
};
declare type Indexable<T = unknown> = {
  [key: string]: T;
};


declare type ValueType = string | number | boolean | undefined | null;

declare type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

declare type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;