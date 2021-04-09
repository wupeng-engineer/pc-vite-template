import { defineConfig } from 'vite';
import { merge } from 'webpack-merge';
import baseConfig from './vite.base';

export default merge(baseConfig, defineConfig({
    mode: 'production'
}));