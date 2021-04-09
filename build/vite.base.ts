import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from './config';
export default defineConfig({
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      vue: '@vue/runtime-dom'
    },
    mainFields: ['index'],
    extensions: ['.vue', '.ts', '.tsx', '.json', '.jsx', '.mjs', '.js',]
  }
});
