import { getCurrentInstance, defineComponent, onMounted } from 'vue';
import { h } from 'vue';
import type { ComposeIconProps } from '../types/compose-icons';

export default defineComponent({
  setup(...args: any[]) {
    console.log('🖇️ ~ setup ~ args → ', args);
    // Created
    // console.log(': created getCurrentInstance', getCurrentInstance());
    // console.log(': created getCurrentInstance type', getCurrentInstance()?.type);
    // console.log(': created getCurrentInstance type name', getCurrentInstance()?.type.__name);

    const componentName = getCurrentInstance()?.type.__name;
    // console.log('🖇️ ~ setup ~ componentName → ', componentName);

    const instance = getCurrentInstance();
    const meta = instance?.type.meta || {};

    console.log('import.meta', import.meta);
    console.log('import.meta.url', import.meta.url);
    // console.log('🖇️ ~ setup ~ meta → ', meta);

    // console.log('🖇️ ~ setup ~ getCurrentInstance → ', getCurrentInstance);
    const test = getCurrentInstance()?.type;

    const handleClick = () => {
      console.log('Button clicked!');
    };

    return () => {
      // return h('button', { onClick: handleClick }, 'click on button');
      return h('button', {}, 'click on button');
    };
  },
});
