import * as path from 'path';

export const root = path.join(__dirname, '../');

export const resolve = (dir: string): string => {
  return path.join(root, dir);
};
