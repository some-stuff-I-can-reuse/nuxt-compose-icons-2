
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","fill":"none","viewBox":"0 0 24 24"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#6D6E8F","d":"M12 .5A4.51 4.51 0 0 0 7.5 5v3.13a1 1 0 0 0 2 0V5a2.5 2.5 0 0 1 5 0v5.5A2.5 2.5 0 0 1 12 13a1 1 0 0 0 0 2 4.51 4.51 0 0 0 4.5-4.5V5A4.51 4.51 0 0 0 12 .5Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#6D6E8F","d":"M15.5 15.63a1 1 0 0 0-1 1V19a2.5 2.5 0 0 1-5 0v-5a2.5 2.5 0 0 1 2.5-2.5 1 1 0 0 0 0-2A4.51 4.51 0 0 0 7.5 14v5a4.5 4.5 0 1 0 9 0v-2.37a1 1 0 0 0-1-1ZM5.24 6.88l-1.3-.75a1.003 1.003 0 1 0-1 1.74l1.3.75a1 1 0 0 0 1.36-.37 1 1 0 0 0-.36-1.37ZM4 12.5a1 1 0 0 0 0-2H2.5a1 1 0 0 0 0 2H4Zm.24 1.88-1.3.75a1.003 1.003 0 1 0 1 1.74l1.3-.75a1.003 1.003 0 1 0-1-1.74Zm15.02-5.63a1 1 0 0 0 .5-.13l1.3-.75a1.003 1.003 0 1 0-1-1.74l-1.3.75a1 1 0 0 0 .5 1.87Zm2.24 1.75H20a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2Zm-.44 4.63-1.3-.75a1.003 1.003 0 0 0-1 1.74l1.3.75a1.004 1.004 0 0 0 1-1.74Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'EditorUnlinkIcon',
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
  