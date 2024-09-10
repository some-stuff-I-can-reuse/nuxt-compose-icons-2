import { createResolver, defineNuxtModule } from '@nuxt/kit';
import type { Component, ComponentsOptions } from '@nuxt/schema';
import fs from 'node:fs';
import path from 'node:path';
import type { IconSizes } from './runtime/types/icon-sizes';
import {
  createComponentFromName,
  createSvgComponentCode,
  readDirectoryRecursively,
  toPascalCase,
  writeComponentFile,
} from './utils';
import { generateCssFile } from './utils/styles/generate-css-file';
// export { parseSvg };

// Module options TypeScript interface definition
export interface ModuleOptions {
  pathToIcons?: string;
  iconComponentList?: { [key: string]: Component };
  iconSizes?: IconSizes;
  generatedComponentOptions?: ComponentsOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-compose-icons',
    configKey: 'composeIcons',
  },
  setup(options, nuxt) {
    const pathToIcons = options.pathToIcons;
    const iconComponentList = options.iconComponentList;

    if (!pathToIcons && !iconComponentList) {
      console.error('pathToIcons or iconComponentList is required');
      return;
    }

    const { resolve } = createResolver(import.meta.url);

    if (pathToIcons) {
      const absolutePathToIcons = path.resolve(nuxt.options.rootDir, pathToIcons);
      // replace "&" by "-" in the folder name / the file name
      // absolutePathToIcons = absolutePathToIcons.replace(/&/g, '-');

      if (fs.existsSync(absolutePathToIcons) && fs.statSync(absolutePathToIcons).isDirectory()) {
        const files = readDirectoryRecursively(absolutePathToIcons);

        files.forEach((file) => {
          const filePath = path.join(absolutePathToIcons, file);
          console.log('🖇️ ~ files.forEach ~ filePath → ', filePath);
          console.log('🖇️ ~ files.forEach ~ file → ', file);
          const fileInfo = path.parse(file);
          const svgContent = fs.readFileSync(file, 'utf-8');
          const componentName = (toPascalCase(fileInfo.name) + 'Icon').replace(/&/g, 'And');
          const componentCode = createSvgComponentCode(componentName, svgContent);
          console.log('📟 - file: module.ts:56 - componentCode → ', componentCode);
          const generatedFilePath = writeComponentFile(componentName, componentCode);
          console.log('generatedFilePath → ', generatedFilePath);

          const component = createComponentFromName({
            ...options.generatedComponentOptions,
            name: componentName,
            shortPath: generatedFilePath,
            filePath: generatedFilePath,
          });
          console.log('📟 - file: module.ts:75 - component → ', component);

          const cssContent = generateCssFile(options.iconSizes);
          // Define the path to save the CSS file within the module
          const cssFilePath = resolve(nuxt.options.buildDir, 'runtime', 'icon-sizes.css');
          // const cssFilePathCompose = resolve(nuxt.options.buildDir, 'runtime', 'compose-icon.css');

          // Ensure the directory exists
          fs.mkdirSync(path.dirname(cssFilePath), { recursive: true });

          // Write the CSS content to the file
          fs.writeFileSync(cssFilePath, cssContent, 'utf-8');

          // Push the CSS file into the Nuxt app's CSS array
          nuxt.options.css.push(cssFilePath);
          nuxt.options.css.push(resolve('./runtime/assets/compose-icon.css'));
          console.log('xd', resolve('./runtime/assets/compose-icon.css'));
          nuxt.options.alias = {
            '@/types': resolve('./types'),
          };
          nuxt.hook('components:extend', (components) => {
            components.push(component);
          });
        });
      } else {
        console.error(`Folder does not exist: ${absolutePathToIcons}`);
      }
    } else if (iconComponentList) {
      Object.keys(iconComponentList).forEach((iconComponentName) => {
        const componentName = toPascalCase(iconComponentName);
        const svgContent = ''; // Placeholder: you need to load the actual SVG content as needed
        const componentCode = createSvgComponentCode(componentName, svgContent);
        const generatedFilePath = writeComponentFile(componentName, componentCode);

        const component = createComponentFromName({
          ...options.opts,
          name: componentName,
          shortPath: generatedFilePath,
          filePath: generatedFilePath,
        });

        nuxt.hook('components:extend', (components) => {
          components.push(component);
        });
      });
    }
  },
});
