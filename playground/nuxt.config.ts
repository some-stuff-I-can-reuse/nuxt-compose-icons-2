import { resolve } from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt-Compose-Icons',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'title', content: 'Nuxt-Compose-Icons' },
        { hid: 'description', name: 'description', content: '' },
        // favicon https://realfavicongenerator.net/
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      //       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      // <link rel="manifest" href="/site.webmanifest">
      // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
      // <meta name="msapplication-TileColor" content="#da532c">
      // <meta name="theme-color" content="#ffffff">
      link: [
        // favicon https://realfavicongenerator.net/
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },

        // prismjs
        { rel: 'stylesheet', href: '/prism/prism.css' },
        // { rel: 'stylesheet', href: '/prism/treeview/prism-treeview.css' },
      ],
      script: [
        // prismjs
        // `window.Prism = window.Prism || {};
        //  window.Prism.manual = true;`,
        { src: '/prism/prism.js' },
        // { src: '/libs/prismjs/treeview/prism-treeview.js' },
      ],
    },
  },
  // plugins: [{ src: './plugins/prismjs.ts' }],
  modules: [
    [
      '../src/module',
      {
        pathToIcons: resolve(__dirname, 'assets/icons'),
        // iconComponentList: iconComponentList,
        iconSizes: {
          s: '2rem',
          m: '3rem',
          l: '4rem',
          xl: '6rem',
        },
      },
    ],
  ],
  css: ['/assets/scss/main.scss', '/assets/scss/_variables.scss'],

  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => ['AntiqueIconFromModule'].includes(tag),
  //   },
  // },
  build: {
    transpile: ['fsevents'],
  },
  devtools: { enabled: true },
});
