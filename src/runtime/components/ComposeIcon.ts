import { getCurrentInstance, defineComponent, onMounted } from 'vue';
import { h } from 'vue';
import type { ComposeIconProps } from '../types/compose-icons';
import { useSlots } from '#imports';
import { dirname } from 'path';

// const __filename = import.meta.resolve('./ComposeIcon.ts');
// console.log('__filename:', __filename ?? '');
// console.log('__dirname:', __dirname);
// TODO: https://vuejs.org/api/general.html#function-signature
// TODO: https://nuxt.com/docs/api/utils/define-nuxt-component

const Comp = defineComponent({
  setup(props: ComposeIconProps) {
    // Created
    // console.log(': created getCurrentInstance', getCurrentInstance());
    // console.log(': created getCurrentInstance type', getCurrentInstance()?.type);
    // console.log(': created getCurrentInstance type name', getCurrentInstance()?.type.__name);
    onMounted(() => {});
    const componentName = getCurrentInstance()?.type.__name;
    if (process.client) {
      var script = document.currentScript;
      var fullUrl = script?.src;
      console.log('🖇️ ~ file: ComposeIcon.ts ~ line 77 ~ setup ~ fullUrl', fullUrl);
      console.log('🖇️ ~ file: ComposeIcon.ts ~ line 77 ~ setup ~ script', script);
    }
    // console.log('__filename:', __filename);
    const instance = getCurrentInstance();
    onMounted(() => {});
    // console.log('🖇️ ~ setup ~ meta → ', meta);

    // console.log('🖇️ ~ setup ~ getCurrentInstance → ', getCurrentInstance);
    const test = getCurrentInstance()?.type;

    const slot = useSlots().$default;

    return () => {
      return h(h(slot), { ...props });
    };
  },
  mounted() {
    console.log('🖇️ ~ mounted ~ this.$options.meta → ', this.$options.__file);
    console.log('🖇️ ~ mounted ~ this.$options._componentTag → ', this.$options._componentTag);
    console.log('🖇️ ~ mounted ~ this.$options.name → ', this.$options.name);
    // this.$options.name = 'ComposeIcon';
    console.log('🖇️ ~ mounted ~ this.$options.name  → ', this.$options.name);
  },
});

export { Comp };
