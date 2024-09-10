
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"25","fill":"none","viewBox":"0 0 24 25"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"M21.5 1h-18A1.5 1.5 0 0 0 2 2.5V22a1.5 1.5 0 0 0 1.5 1.5h18A1.5 1.5 0 0 0 23 22V2.5A1.5 1.5 0 0 0 21.5 1ZM8 1v3m0 3.5V12m0 8.5v3"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"M10.5 5.75A1.75 1.75 0 0 1 8.75 7.5h-1.5a1.75 1.75 0 1 1 0-3.5h1.5a1.75 1.75 0 0 1 1.75 1.75Zm0 8a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1 0-3.5h1.5a1.75 1.75 0 0 1 1.75 1.75Zm0 5a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1 0-3.5h1.5a1.75 1.75 0 0 1 1.75 1.75ZM17 23.5v-3m0-3.5v-4.5M17 4V1m2.5 17.75A1.75 1.75 0 0 0 17.75 17h-1.5a1.75 1.75 0 0 0 0 3.5h1.5a1.75 1.75 0 0 0 1.75-1.75Zm0-8A1.75 1.75 0 0 0 17.75 9h-1.5a1.75 1.75 0 0 0 0 3.5h1.5a1.75 1.75 0 0 0 1.75-1.75Zm0-5A1.75 1.75 0 0 0 17.75 4h-1.5a1.75 1.75 0 0 0 0 3.5h1.5a1.75 1.75 0 0 0 1.75-1.75ZM17 7.5V9m-9 6.5V17"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'AccountingIcon',
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
  