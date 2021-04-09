import { UserConfigExport } from 'vite';
import { merge } from 'webpack-merge';
import legacy from '@vitejs/plugin-legacy'
import visualizer from 'rollup-plugin-visualizer';
import baseConfig from './vite.base';

let viteConfig = merge<UserConfigExport>(baseConfig, {
  mode: 'production',
  plugins: [
    //legacy()
  ],

  define: {
    '__DEV__': false
  },

  build: {
    terserOptions: {
      compress: {
        //pure_funcs: ['console.log', 'alert'] // 移除console
      }
    },
    rollupOptions: {
      // external: ["rxjs", "rxjs/operators", 'rxjs/internal-compatibility'],
      // plugins: [
      //   commonjs({
      //     include: /node_modules/
      //   }),
      //   resolve({
      //     // 将自定义选项传递给解析插件
      //     customResolveOptions: {
      //       moduleDirectory: 'node_modules'
      //     }
      //   })
      // ]
    }
  }
});

if (process.env.npm_config_report) {
  viteConfig = merge(viteConfig, {
    build: {
      rollupOptions: {
        plugins: [visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
          template: 'treemap' // "sunburst" | "treemap" | "network"
        })],
      }
    }
  });
}

export default viteConfig;
