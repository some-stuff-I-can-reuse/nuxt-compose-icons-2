
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","fill":"none","viewBox":"0 0 24 24"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#6D6E8F","d":"M17.79 3.77a12.54 12.54 0 0 0-13-.86.24.24 0 0 1-.29-.05L1.94.27a.53.53 0 0 0-.55-.11.51.51 0 0 0-.31.46v6.7a.51.51 0 0 0 .5.5h6.7a.5.5 0 0 0 .46-.31.49.49 0 0 0-.11-.51L6.78 5.11a.22.22 0 0 1-.06-.22.23.23 0 0 1 .15-.18 9.94 9.94 0 0 1 9.46 1.1 9.74 9.74 0 0 1 .1 15.8 1.25 1.25 0 0 0-.27 1.75 1.22 1.22 0 0 0 1 .51 1.25 1.25 0 0 0 .73-.24 12.25 12.25 0 0 0-.11-19.86h.01Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'EditorUndoIcon',
      props: {
        size: {
          type: String as () => RtIconSize,
          default: 'm',
        },
        color: {
          type: String,
        },
      } as PropType<ComposeIconProps>,

      setup(props: ComposeIconProps) {

      const iconSize = computed(() => {
        return getIconSize(props.size);
      });

      const styles = computed(() => ({
        '--icon-stroke': props.color,
        '--icon-stroke-width': props.strokeWidth
      }));

      const iconClasses = computed(() => {
          return [
            'compose-icon',
            `size-${iconSize.value}`,
          ];
        });

      const iconAttributes = computed(() => ({
        ...svgAttributes,
        style: styles.value,
        class: iconClasses.value,
      }));
    console.log('iconAttributes', iconAttributes.value);

        return () => h('svg', iconAttributes.value, recreateVNodes(vnodeChildren));
      },
    });
    </script>
  