import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from './config';
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly',
      generateScopedName: (name: string, filename: string, css: string) => {
        console.log('name',name);
        console.log('filename',filename);
        console.log('css',css);
        return '';
      }
    },
    preprocessorOptions: {
      less: {
        // modifyVars: {
        // 	hack: `true; @import (reference) "@/styles/global/index.less";`,
        // },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx({
      optimize: true,
      transformOn: true
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],

  resolve: {
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      vue: '@vue/runtime-dom',
    },
    mainFields: ['index', 'module', 'jsnext:main', 'jsnext'],
    extensions: ['.vue', '.ts', '.tsx', '.json', '.jsx', '.mjs', '.js'],
  },
});
