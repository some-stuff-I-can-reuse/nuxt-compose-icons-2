
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","fill":"none","viewBox":"0 0 24 24"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"m22.68 2-2.158.24a7.5 7.5 0 0 0-4.475 2.151L6.24 14.198l4.24 4.242 9.809-9.807a7.494 7.494 0 0 0 2.151-4.475L22.68 2ZM6.24 14.198 2.618 12.99a.75.75 0 0 1-.293-1.241l.232-.232a6 6 0 0 1 6.14-1.45l1.255.418-3.712 3.713Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"M6.24 14.198 2.618 12.99a.75.75 0 0 1-.293-1.241l.232-.232a6 6 0 0 1 6.14-1.45l1.255.418-3.712 3.713Zm4.24 4.242 1.208 3.622a.748.748 0 0 0 1.241.293l.233-.232a6 6 0 0 0 1.449-6.14l-.416-1.25-3.715 3.707Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"m10.48 18.44 1.208 3.622a.748.748 0 0 0 1.241.293l.233-.232a6 6 0 0 0 1.449-6.14l-.416-1.25-3.715 3.707Zm-2.521.531a2.244 2.244 0 0 1-.659 1.591c-.878.878-5.3 2.121-5.3 2.121s1.243-4.425 2.121-5.3c.386-.387.899-.62 1.444-.655"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'RocketIcon',
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
  