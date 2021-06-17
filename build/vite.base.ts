import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from './config';
export default defineConfig({

  css: {
    preprocessorOptions: {
      less: {
				// modifyVars: {
				// 	hack: `true; @import (reference) "@/styles/global/index.less";`,
				// },
				javascriptEnabled: true,
			},
    }
  },
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      vue: '@vue/runtime-dom'
    },
    mainFields: ['index', 'module', 'jsnext:main', 'jsnext'],
    extensions: ['.vue', '.ts', '.tsx', '.json', '.jsx', '.mjs', '.js',]
  }
});
