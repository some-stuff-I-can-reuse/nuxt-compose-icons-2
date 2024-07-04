import { resolve } from 'path';
import { iconComponentList } from './src/runtime/icon-component-list';

export default defineNuxtConfig({
  modules: [
    // '../src/svg-to-vue-component',
    [
      '../src/module',
      {
        // pathToIcons: resolve(__dirname, './src/runtime/assets/images/icons'),
        iconComponentList: iconComponentList,
      },
    ],
  ],
  components: [
    {
      path: '~/src/runtime/assets/images/icons/*.vue',
      // ignore: ['**/icons/**', 'src/runtime/components/CardComponent.ts'],
    },
  ],
  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => ['AntiqueIconFromModule'].includes(tag),
  //   },
  // },
  devtools: { enabled: true },
});
