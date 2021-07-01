import { UserConfigExport } from 'vite';
import { merge } from 'webpack-merge';
import baseConfig from './vite.base';

export default merge<UserConfigExport>(baseConfig, {
  mode: 'development',
  define: {},

  server: {
    open: true
  }
});
