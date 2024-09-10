modules: [
  [
    '@nuxt-compose-icons',
    {
      // Give a path to your icon files directory
      pathToIcons: resolve(__dirname, './src/runtime/assets/images/icons'),
      //  or
      iconComponentList: iconComponentList,
      // pass your desired icon sizes depending on your design system
      iconSizes: {
        s: '2rem',
        m: '3rem',
        l: '4rem',
        xl: '6rem',
      },
    },
  ],
];
