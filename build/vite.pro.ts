import { UserConfigExport } from 'vite';
import { merge } from 'webpack-merge';
import visualizer from 'rollup-plugin-visualizer';
import baseConfig from './vite.base';

let viteConfig = merge<UserConfigExport>(baseConfig, {
  mode: 'production',
});

if (process.env.npm_config_report) {
  viteConfig = merge(viteConfig, {
    build: {
      rollupOptions: {
        plugins: [visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
          template:"treemap" //| "treemap" | "network"
        })]
      }
    }
  });
}

export default viteConfig;
