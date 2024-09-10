
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","fill":"none","viewBox":"0 0 24 24"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"G","props":{"clip-path":"url(#a)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n    ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#6D6E8F","d":"M7.75 4.5h15a1 1 0 1 0 0-2h-15a1 1 0 0 0 0 2Zm15 6.5h-15a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2Zm0 8.5h-15a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2ZM2.21 17.25a2 2 0 0 0-1.93 1.48.75.75 0 0 0 1.45.39.5.5 0 0 1 .834-.224.5.5 0 0 1-.354.854.75.75 0 1 0 0 1.5.5.5 0 0 1 .5.5.504.504 0 0 1-1 .13.75.75 0 1 0-1.44.41 2 2 0 0 0 3.92-.54 1.94 1.94 0 0 0-.34-1.11.28.28 0 0 1 0-.28 1.94 1.94 0 0 0 .34-1.11 2 2 0 0 0-1.98-2Zm2.04-6.5a2 2 0 0 0-4 0 .76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75.5.5 0 0 1 1 0 1 1 0 0 1-.23.64L.41 14a.76.76 0 0 0-.09.79.76.76 0 0 0 .68.43h2.5a.75.75 0 1 0 0-1.5h-.42a.25.25 0 0 1-.22-.14.24.24 0 0 1 0-.27l.81-1c.36-.442.564-.99.58-1.56ZM4 5.25h-.25A.25.25 0 0 1 3.5 5V1.62A1.38 1.38 0 0 0 2.12.25H1.5a.75.75 0 0 0 0 1.5h.25A.25.25 0 0 1 2 2v3a.25.25 0 0 1-.25.25H1.5a.75.75 0 0 0 0 1.5H4a.75.75 0 0 0 0-1.5Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"DEFS","props":{},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n    ",{"__v_isVNode":true,"__v_skip":true,"type":"CLIPPATH","props":{"id":"a"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n      ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#fff","d":"M0 0h24v24H0z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n    "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'EditorNumberedListIcon',
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
  