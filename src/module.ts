import { addComponent, defineNuxtModule } from '@nuxt/kit';
import type { Component, ComponentsOptions } from '@nuxt/schema';
import fs from 'fs';
import path, { resolve } from 'path';
// import { type AsyncComponent } from "vue";
import { toPascalCase } from './utils';
import { createComponentFromName } from './utils/create-component-from-name';
import { createSvgComponentCode } from './utils/create-svg-component';
import { writeComponentFile } from './utils/write-component-file';

// Module options TypeScript interface definition
export interface ModuleOptions {
  // Path to the icons folders
  pathToIcons?: string;
  iconComponentList?: { [key: string]: /*AsyncComponent | */ Component };
  opts: ComponentsOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-compose-icons',
    configKey: 'composeIcons',
  },
  // Default configuration options of the Nuxt module
  // defaults: {},
  async setup(options, nuxt) {
    const pathToIcons = options.pathToIcons;
    console.error('🖇️ ~ setup ~ pathToIcons → ', pathToIcons);
    const iconComponentList = options.iconComponentList;
    console.error('🖇️ ~ setup ~ iconComponentList → ', iconComponentList);
    const opts = options.opts;

    if (!pathToIcons && !iconComponentList) {
      console.error('pathToIcons or iconComponentList is required');
      return;
    }

    if (pathToIcons) {
      const absolutePathToIcons: string = path.resolve(process.cwd(), pathToIcons);

      // Check if the folder exists
      if (fs.existsSync(absolutePathToIcons) && fs.statSync(absolutePathToIcons).isDirectory()) {
        // Read the files in the folder
        const files = fs.readdirSync(absolutePathToIcons);
        console.log('🖇️ ~ setup ~ files → ', files);

        // let fileInfo;
        // Your logic for each file
        files.forEach((file) => {
          const filePath = path.join(absolutePathToIcons, file);
          console.log('filePath', filePath);

          // Use path.parse to get file information
          const fileInfo = path.parse(filePath);

          // Access the file name and extension using fileInfo.name and fileInfo.ext

          const svgContent = fs.readFileSync(filePath, 'utf-8');
          // const transformedContent = svgLoader(svgContent);
          const componentName = toPascalCase(fileInfo.name);

          const componentCode = createSvgComponentCode(componentName, svgContent);

          const generatedFilePath = writeComponentFile(componentName, componentCode);

          const component = createComponentFromName(fileInfo.name, {
            ...options.opts,
            shortPath: generatedFilePath,
            filePath: generatedFilePath,
          });

          nuxt.hook('components:extend', (components) => {
            const existingComponent = components.find((c) => {
              return (
                (c.pascalName === component.pascalName || c.kebabName === component.kebabName) &&
                c.mode === component.mode
              );
            });

            if (existingComponent) {
              console.log('existingComponent', existingComponent);
              const existingPriority = existingComponent.priority ?? 0;
              const newPriority = component.priority ?? 0;

              if (newPriority < existingPriority) {
                return;
              }

              // We override where new component priority is equal or higher
              // but we warn if they are equal.
              if (newPriority === existingPriority) {
                const name = existingComponent.pascalName || existingComponent.kebabName;
                console.warn(
                  `Overriding ${name} component. You can specify a \`priority\` option when calling \`addComponent\` to avoid this warning.`,
                );
              }
              Object.assign(existingComponent, component);
            } else {
              console.log('component', component);
              components.push(component);
            }
          });
        });
        // const newComponent = createComponentFromName('TestOnVaVoir', {
        //   pascalName: toPascalCase('TestOnVaVoir'),
        //   filePath: resolve('src/runtime/components/CardComponent.vue'),
        //   meta: {
        //     name: 'TestOnVaVoir',
        //     yolo: 'swag',
        //     marche: 'bien',
        //   },
        // });
      } else {
        console.error(`Folder does not exist: ${absolutePathToIcons}`);
      }
    } else if (iconComponentList) {
      console.log('🖇️ ~ setup ~ iconComponentList → ', Object.keys(iconComponentList));
      Object.keys(iconComponentList).forEach((iconComponentName) => {
        console.log('🖇️ ~ Object.keys ~ iconComponentName → ', iconComponentName);
        const component = createComponentFromName(iconComponentName, opts);
        console.log('🖇️ ~ Object.keys ~ component → ', component);

        addComponent({
          name: 'MyIconCustom', // name of the component to be used in vue templates
          export: 'MyIconCustom', // (optional) if the component is a named (rather than default) export
          filePath: resolve('src/runtime/components/ComposeIcon.ts'),
        });

        nuxt.hook('components:extend', function (components: Component[]) {
          const existingComponent = components.find((c) => {
            return (
              (c.pascalName === component.pascalName || c.kebabName === component.kebabName) &&
              c.mode === component.mode
            );
          });
          if (existingComponent) {
            const existingPriority = existingComponent.priority ?? 0;
            const newPriority = component.priority ?? 0;

            if (newPriority < existingPriority) {
              return;
            }

            // We override where new component priority is equal or higher
            // but we warn if they are equal.
            if (newPriority === existingPriority) {
              const name = existingComponent.pascalName || existingComponent.kebabName;
              console.warn(
                `Overriding ${name} component. You can specify a \`priority\` option when calling \`addComponent\` to avoid this warning.`,
              );
            }
            Object.assign(existingComponent, component);
          } else {
            // console.log('component push', component);
            components.push(component);
          }
        });
      });
    }

    // const iconList = resolver.resolve(
    //   options.pathToIcons,
    //   "icon-component-list"
    // );
    // const testList = [];
    // resolvePath(options.pathToIcons)
    //   .then((response) => {
    //     console.log("response", response);
    //     console.log("response", typeof response);
    //     // response.forEach((item) => {
    //     // console.log("item", item);
    //     // testList.push(item);
    //     // });
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
    // console.log("testList", testList);
    // console.log(
    //   "createResolver(import.meta.url)",
    //   createResolver(import.meta.url)
    // );
    // console.log("iconList", iconList);
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve("./runtime/plugin"));
    // },
  },
});
