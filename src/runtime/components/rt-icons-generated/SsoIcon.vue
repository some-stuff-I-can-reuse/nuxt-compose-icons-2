
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const vnodeChildren = ["\n",{"__v_isVNode":true,"__v_skip":true,"type":"G","props":{"clip-path":"url(#clip0_4629_24135)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M12.75 9.80701C12.7497 8.68487 12.4348 7.5853 11.8409 6.63319C11.247 5.68108 10.3981 4.91458 9.39043 4.42076C8.38279 3.92694 7.25687 3.72559 6.14053 3.83957C5.0242 3.95355 3.9622 4.37831 3.07516 5.06559C2.18812 5.75286 1.51159 6.67512 1.12241 7.72761C0.733232 8.7801 0.647 9.92063 0.87351 11.0197C1.10002 12.1187 1.63019 13.1322 2.40381 13.945C3.17744 14.7579 4.1635 15.3375 5.25 15.618V21.754C5.25 22.1518 5.40804 22.5334 5.68934 22.8147C5.97065 23.096 6.35218 23.254 6.75 23.254C7.14783 23.254 7.52936 23.096 7.81066 22.8147C8.09197 22.5334 8.25 22.1518 8.25 21.754V15.618C9.53819 15.2854 10.6793 14.5341 11.4939 13.4822C12.3085 12.4303 12.7503 11.1374 12.75 9.80701Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M13.563 15.75C14.3465 15.6418 15.1008 15.3791 15.782 14.977L20.689 19.883C20.9719 20.1562 21.3508 20.3074 21.7441 20.304C22.1374 20.3006 22.5136 20.1428 22.7917 19.8647C23.0698 19.5866 23.2276 19.2104 23.231 18.8171C23.2344 18.4238 23.0832 18.0449 22.81 17.762L17.9 12.856C18.5736 11.715 18.8506 10.3831 18.6877 9.06808C18.5249 7.75309 17.9313 6.529 16.9996 5.58682C16.0679 4.64464 14.8506 4.03737 13.5375 3.85976C12.2244 3.68215 10.8895 3.94419 9.74097 4.605","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M6.75 10.557C7.57843 10.557 8.25 9.88543 8.25 9.05701C8.25 8.22858 7.57843 7.55701 6.75 7.55701C5.92157 7.55701 5.25 8.22858 5.25 9.05701C5.25 9.88543 5.92157 10.557 6.75 10.557Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M6.75 7.557V3C6.75 2.40326 6.98705 1.83097 7.40901 1.40901C7.83097 0.987053 8.40326 0.75 9 0.75C9.59674 0.75 10.169 0.987053 10.591 1.40901C11.0129 1.83097 11.25 2.40326 11.25 3V3.989","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"DEFS","props":{},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"CLIPPATH","props":{"id":"clip0_4629_24135"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"RECT","props":{"width":"24","height":"24","fill":"white"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'SsoIcon',
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
  