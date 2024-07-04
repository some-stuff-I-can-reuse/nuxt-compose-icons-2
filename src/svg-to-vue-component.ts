import { defineNuxtModule, createResolver } from '@nuxt/kit';
import { readFileSync } from 'fs';
import { extname } from 'path';
import { svgLoader } from './utils/svg-vue-loader.js';

const svgLoaderPath = createResolver(import.meta.url).resolve('./utils/svg-vue-loader.js');

function svgToVueComponent() {
  return {
    name: 'svg-to-vue-component',
    transform(src, id) {
      if (extname(id) === '.svg') {
        const svgContent = readFileSync(id, 'utf-8');
        const transformedContent = svgLoader(svgContent);
        console.log('transformedContent', transformedContent);
        return {
          code: transformedContent,
          map: null,
        };
      }
    },
  };
}

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('vite:extendConfig', (viteConfig) => {
      viteConfig.plugins = viteConfig.plugins || [];
      viteConfig.plugins.push(svgToVueComponent());
    });
  },
});
