
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","stroke":"currentColor"};
    const vnodeChildren = [{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M12.524 12.966a4.642 4.642 0 1 0 5.934-7.138","fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M9.412 8.347A10.033 10.033 0 0 0 8.1 7.433a7.544 7.544 0 0 1 4.132-4.972 10.053 10.053 0 0 0 1.133 1.127 9.981 9.981 0 0 0 8.3 2.147.773.773 0 0 1 .844.432 7.7 7.7 0 0 1-8.928 10.741.771.771 0 0 1-.575-.754 10.05 10.05 0 0 0-3.594-7.807Z","fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"m15.32 4.868 1.311-1.577a1.547 1.547 0 1 0-2.373-1.984L12.8 3.065m-1.781 6.978-5.761 6.932c-.989 1.189-.2 3.867-.1 4.958s-4.194 2.121-4.35.4c-.3-3.273.594-5.554 1.583-6.743L8.8 7.878","fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'AntiqueIcon',
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
  