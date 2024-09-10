
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","fill":"none","viewBox":"0 0 24 24"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"M23.25 9.75v-1.5m0 6v-1.5m0 6v-1.5m-13.5 6h-1.5m6 0h-1.5m6 0h-1.5m4.5 0a1.5 1.5 0 0 0 1.5-1.5M6 18.75H1.75a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V7"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"m14.212 9.997-.838-.827a1.193 1.193 0 0 0-1.676 0 1.162 1.162 0 0 0 0 1.654l-.417-.412a1.193 1.193 0 0 0-1.677 0 1.162 1.162 0 0 0 0 1.654l.42.414a1.193 1.193 0 0 0-1.677 0 1.162 1.162 0 0 0 0 1.654l1.257 1.24a2.324 2.324 0 0 0-.694 1.655c0 .62.25 1.216.694 1.654a5.57 5.57 0 0 0 3.011 1.53l1.473.24a3.6 3.6 0 0 0 1.668-.12 3.564 3.564 0 0 0 1.428-.859l2.13-2.102a3.99 3.99 0 0 0 .878-1.297 3.946 3.946 0 0 0 0-3.057 3.991 3.991 0 0 0-.879-1.296l-3.424-3.38a1.193 1.193 0 0 0-1.677 0 1.162 1.162 0 0 0 0 1.655Zm-4.609 5.376 1.257 1.24m0-3.308-.838-.827m2.514-.827-.838-.827"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'LayoutArrangeIcon',
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
  