
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"width":"25","height":"25","viewBox":"0 0 25 25","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const vnodeChildren = ["\n",{"__v_isVNode":true,"__v_skip":true,"type":"G","props":{"id":"Keyboard Arrow Return 1","clip-path":"url(#clip0_4735_24873)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"id":"Vector","d":"M5.53418 23.3315L1.03418 18.8315L5.53418 14.3315","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"id":"Vector_2","d":"M1.03418 18.8315H19.0342C20.2277 18.8315 21.3722 18.3574 22.2162 17.5135C23.0601 16.6695 23.5342 15.525 23.5342 14.3315V5.33148C23.5342 4.13801 23.0601 2.99341 22.2162 2.1495C21.3722 1.30559 20.2277 0.831482 19.0342 0.831482H10.7842","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"DEFS","props":{},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"CLIPPATH","props":{"id":"clip0_4735_24873"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"RECT","props":{"width":"24","height":"24","fill":"white","transform":"translate(0.28418 0.0844727)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'ArrowReturnIcon',
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
  