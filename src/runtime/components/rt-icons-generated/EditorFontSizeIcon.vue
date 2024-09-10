
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"xmlns":"http://www.w3.org/2000/svg","width":"25","height":"25","fill":"none","viewBox":"0 0 25 25"};
    const vnodeChildren = ["\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"G","props":{"clip-path":"url(#a)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n    ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#6D6E8F","d":"M18.407 20.602h-.57a.24.24 0 0 1-.23-.17l-6.13-17.82a1.46 1.46 0 0 0-1.38-1 1.49 1.49 0 0 0-1.39 1l-6.07 17.82a.25.25 0 0 1-.23.17h-.57a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1 .94.94 0 0 0-.81-.95.3.3 0 0 1-.17-.12.28.28 0 0 1 0-.2l1.5-4.42a.25.25 0 0 1 .24-.16h7.23a.25.25 0 0 1 .23.16l1.5 4.42a.229.229 0 0 1 0 .2.3.3 0 0 1-.17.12 1 1 0 0 0-.79.95 1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-.19Zm-11.09-6.83a.26.26 0 0 1-.2-.1.24.24 0 0 1 0-.23l2.72-8.15a.26.26 0 0 1 .26-.2.26.26 0 0 1 .23.17l2.78 8.15a.27.27 0 0 1 0 .23.261.261 0 0 1-.2.1l-5.59.03Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n    ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#6D6E8F","d":"M23.837 20.602h-.2a.24.24 0 0 1-.23-.17l-4.26-12.45a1.53 1.53 0 0 0-2.89 0l-1.16 3.39a1 1 0 0 0 1.86.63l.51-1.51a.26.26 0 0 1 .23-.17.26.26 0 0 1 .24.17l1.46 4.29a.22.22 0 0 1 0 .22.24.24 0 0 1-.2.11h-1.36a1 1 0 1 0 0 2h2.2a.25.25 0 0 1 .23.16l1.1 3.21a.27.27 0 0 1-.12.3.999.999 0 0 0-.52.85 1 1 0 0 0 1 1h2.11a1 1 0 0 0 0-2v-.03Z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  ",{"__v_isVNode":true,"__v_skip":true,"type":"DEFS","props":{},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n    ",{"__v_isVNode":true,"__v_skip":true,"type":"CLIPPATH","props":{"id":"a"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n      ",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"fill":"#fff","d":"M.837.092h24v24h-24z"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n    "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n  "],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'EditorFontSizeIcon',
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
  