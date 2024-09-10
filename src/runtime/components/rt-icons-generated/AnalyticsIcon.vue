
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"25","height":"25","fill":"none","viewBox":"0 0 25 25"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"G","props":{"clip-path":"url(#a)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n    ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"stroke":"#6D6E8F","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","d":"m7.3 5.413-4.01 4.01m11.44-2.81-4.67-1.24m10.75-2.19-3.58 2.8m-8.56.31a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13.5-2.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-13.5 3.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1.5 11.25h22.5m-17.25-5.5h-3a.76.76 0 0 0-.75.75v4.75h4.5v-4.75a.75.75 0 0 0-.75-.75Zm7.5-7h-3a.76.76 0 0 0-.75.75v11.75h4.5v-11.75a.75.75 0 0 0-.75-.75Zm7.5 4h-3a.76.76 0 0 0-.75.75v7.75h4.5v-7.75a.75.75 0 0 0-.75-.75Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"DEFS","props":{},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n    ",{"__v_isVNode":true,"__v_skip":true,"type":"CLIPPATH","props":{"id":"a"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n      ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#fff","d":"M0 0h25v25H0z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n    "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'AnalyticsIcon',
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
  