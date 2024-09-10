
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const vnodeChildren = ["\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M11.9751 7.70004C12.8036 7.70004 13.4751 7.02847 13.4751 6.20004C13.4751 5.37162 12.8036 4.70004 11.9751 4.70004C11.1467 4.70004 10.4751 5.37162 10.4751 6.20004C10.4751 7.02847 11.1467 7.70004 11.9751 7.70004Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M5.17505 19.2C6.00347 19.2 6.67505 18.5285 6.67505 17.7C6.67505 16.8716 6.00347 16.2 5.17505 16.2C4.34662 16.2 3.67505 16.8716 3.67505 17.7C3.67505 18.5285 4.34662 19.2 5.17505 19.2Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M18.675 19.2C19.5034 19.2 20.175 18.5285 20.175 17.7C20.175 16.8716 19.5034 16.2 18.675 16.2C17.8466 16.2 17.175 16.8716 17.175 17.7C17.175 18.5285 17.8466 19.2 18.675 19.2Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M15.4999 21C17.2999 22.8 20.0999 22.8 21.8999 21C23.6999 19.2 23.6999 16.4 21.8999 14.6C20.3999 13.1 18.0999 12.9 16.3999 13.9L12.6267 7.54507","stroke":"#6D6E8F","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M3.95 13.4C2.15 13.9 0.75 15.7 0.75 17.7C0.75 20.2 2.75 22.2 5.25 22.2C7.75 22.2 9.75 20.2 9.75 17.7H17.1808","stroke":"#6D6E8F","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M16.3749 7.39998C16.6749 5.89998 16.2749 4.29998 15.1749 3.19998C13.3749 1.39998 10.5749 1.39998 8.7749 3.19998C6.7749 5.29998 7.0749 8.69998 9.6749 10.3L6.08936 16.502","stroke":"#6D6E8F","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'WebhookIcon',
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
  