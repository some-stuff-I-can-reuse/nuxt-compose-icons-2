
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","fill":"none","viewBox":"0 0 24 24"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#6D6E8F","d":"M9.93 3.93a9.71 9.71 0 0 0-9.43 10v1.24a4.94 4.94 0 1 0 4.94-4.94c-.374 0-.747.047-1.11.14a.24.24 0 0 1-.26-.09.26.26 0 0 1 0-.28 6.83 6.83 0 0 1 5.86-3.57 1.25 1.25 0 1 0 0-2.5Zm12.32 2.5a1.25 1.25 0 1 0 0-2.5 9.71 9.71 0 0 0-9.43 10v1.24a4.95 4.95 0 1 0 4.94-4.94 4.52 4.52 0 0 0-1.11.14.24.24 0 0 1-.26-.09.26.26 0 0 1 0-.28 6.83 6.83 0 0 1 5.86-3.57Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'EditorQuoteIcon',
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
  