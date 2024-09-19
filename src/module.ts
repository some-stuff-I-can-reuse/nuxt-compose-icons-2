import { createResolver, defineNuxtModule } from '@nuxt/kit';
import type { Component, ComponentsOptions } from '@nuxt/schema';
import fs from 'node:fs';
import path from 'node:path';
import type { ComposeIconSize } from './runtime/types/icon-sizes';
import {
  createComponentFromName,
  createSvgComponentCode,
  readDirectoryRecursively,
  toPascalCase,
  writeComponentFile,
} from './utils';
import { generateCssFile } from './utils/styles/generate-css-file';

export interface ModuleOptions {
  pathToIcons?: string;
  iconComponentList?: { [key: string]: Component };
  iconSize?: ComposeIconSize;
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
      // Resolve the path to the icons directory provided
      const absolutePathToIcons = path.resolve(nuxt.options.rootDir, pathToIcons);

      if (fs.existsSync(absolutePathToIcons) && fs.statSync(absolutePathToIcons).isDirectory()) {
        // We first read all the files recursively to flatten the structure
        const files = readDirectoryRecursively(absolutePathToIcons);

        /*
         * For each file we:
         * 1. Parse the content (as HTML string)
         * 2. Create the component code as literal string template by:
         *   . Recreating the Vue VNode structure dynamically based on the SVG content
         *   . Set the props and attributes based on the SVG content and the options passed
         * 3. Write the component to the file system
         * 4. Create the "official" component object with the name and path
         * 5. Add the component to the Nuxt app's components array at build time
         * 6. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
         *
         * We use a literal string template to create the Vue component
         * see https://nuxt-compose-icons.arthurplazanet.com//why-literal-strings-to-create-vue-components
         */
        files.forEach((filePath) => {
          const fileInfo = path.parse(filePath);
          // 1. Parse the content (as HTML string)
          const svgContent = fs.readFileSync(filePath, 'utf-8');

          // TODO: Check if necessary to handle snake case as well
          const componentName = (toPascalCase(fileInfo.name) + 'Icon').replace(/&/g, 'And');

          // 2. Create the component code as literal string template
          const componentCode = createSvgComponentCode(componentName, svgContent);

          // 3. Write the component to the file system
          const generatedFilePath = writeComponentFile(componentName, componentCode);

          // 4. Create the "official" component object with the name and path
          const component = createComponentFromName({
            ...options.generatedComponentOptions,
            name: componentName,
            shortPath: generatedFilePath,
            filePath: generatedFilePath,
          });

          // 5. Add the component to the Nuxt app's components array at build time
          nuxt.hook('components:extend', (components) => {
            components.push(component);
          });

          // 6. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
          const cssContent = generateCssFile(options.iconSize);
          // Define the path to save the CSS file within the module
          const cssFilePath = path.resolve(__dirname, './runtime/assets/compose-sizes.css');
          // Ensure the directory exists
          fs.mkdirSync(path.dirname(cssFilePath), { recursive: true });
          // Write the CSS content to the file
          fs.writeFileSync(cssFilePath, cssContent, 'utf-8');

          nuxt.options.alias = {
            '@/types': resolve('./types'),
          };

          // Push the CSS file into the Nuxt app's CSS array
          nuxt.options.css.push(cssFilePath);
          nuxt.options.css.push(path.resolve(__dirname, './runtime/assets/compose-icon.css'));
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
          ...options,
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
