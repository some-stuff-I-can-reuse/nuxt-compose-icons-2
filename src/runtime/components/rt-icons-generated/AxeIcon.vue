
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","stroke":"currentColor"};
    const vnodeChildren = [{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M12.03 14.1a7.689 7.689 0 0 1 1.284 3.93.748.748 0 0 0 .732.715 8.99 8.99 0 0 0 9.2-9.2.751.751 0 0 0-.716-.732 7.684 7.684 0 0 1-3.93-1.291M16.48 5.4a7.69 7.69 0 0 1-1.288-3.935.75.75 0 0 0-.732-.713 8.99 8.99 0 0 0-9.2 9.2.749.749 0 0 0 .715.732 7.684 7.684 0 0 1 3.933 1.286","fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M17.435 4.444a1.5 1.5 0 0 1 2.121 2.121L3.311 22.811a1.5 1.5 0 0 1-2.122-2.122ZM8.432 11.2a6 6 0 0 1 7.278-7.275M12.8 15.568a6 6 0 0 0 7.275-7.278","fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'AxeIcon',
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
  