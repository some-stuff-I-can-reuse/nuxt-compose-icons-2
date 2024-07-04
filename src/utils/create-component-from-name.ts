import type { Component } from '@nuxt/schema';
import { resolve } from 'path';
import { toKebabCase, toPascalCase } from '.';

export { createComponentFromName };

// Apply defaults
const defaultComponent: Component = {
  export: 'default',
  chunkName: 'components/' + '',
  global: true,
  kebabName: '',
  pascalName: '',
  prefetch: true,
  preload: true,
  mode: 'all',
  shortPath: '',
  filePath: '',
  priority: 0,
};

function createComponentFromName(name, opts) {
  const componentPascalName = toPascalCase(name);
  console.log('🖇️ ~ createComponentFromName ~ name → ', name);
  const componentKebabCaseName = toKebabCase(name);

  const component: Component = {
    ...defaultComponent,
    pascalName: componentPascalName + 'Icon',
    kebabName: componentKebabCaseName + '-icon',
    chunkName: 'assets/' + name + '.svg',

    shortPath: resolve('src/runtime/components/ComposeIcon.ts'),
    filePath: resolve('src/runtime/components/ComposeIcon.ts'),
    meta: {
      name: componentPascalName,
      yolo: 'swag',
    },
    ...opts,
  };

  return component;
}
