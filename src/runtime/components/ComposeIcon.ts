import { defineComponent, h, getCurrentInstance } from 'vue';
import type { ComposeIconProps } from '../types/compose-icons';
import { useSlots } from '#imports';

export default defineComponent({
  props: {
    size: {
      type: [String, Number],
      default: '24',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    svgContent: {
      type: String,
      required: true,
    },
  },
  setup(props: ComposeIconProps) {
    const instance = getCurrentInstance();
    const slots = useSlots();

    // Dynamically set the component name based on the prop
    if (instance && instance.type) {
      instance.type.name = props.componentName;
      console.log('🖇️ ~ setup ~ type → ', instance.type);
      console.log('🖇️ ~ setup ~ instance → ', instance);
    }

    console.log(`Component name: ${props.componentName}`);

    return () => {
      if (slots.default) {
        return h(slots.default, { ...props });
      }
      return h('svg', {
        width: props.size,
        height: props.size,
        fill: props.color,
        innerHTML: props.svgContent,
      });
    };
  },
});
