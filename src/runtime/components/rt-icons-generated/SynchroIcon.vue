
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const vnodeChildren = ["\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M18.71 5C17.495 3.64075 15.8958 2.68256 14.1242 2.25226C12.3526 1.82196 10.4921 1.93985 8.78892 2.59031C7.08578 3.24078 5.62035 4.39315 4.58661 5.89488C3.55288 7.39661 2.99959 9.17687 3 11V11.75","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M5.29004 19C6.50505 20.3592 8.10421 21.3174 9.87583 21.7477C11.6475 22.178 13.508 22.0602 15.2111 21.4097C16.9143 20.7592 18.3797 19.6068 19.4134 18.1051C20.4472 16.6034 21.0004 14.8231 21 13V12.25","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M18.75 14.5L21 12.25L23.25 14.5","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M5.25 9.5L3 11.75L0.75 9.5","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M14.25 10.25H9.75C8.92157 10.25 8.25 10.9216 8.25 11.75V14.75C8.25 15.5784 8.92157 16.25 9.75 16.25H14.25C15.0784 16.25 15.75 15.5784 15.75 14.75V11.75C15.75 10.9216 15.0784 10.25 14.25 10.25Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M9.75 10.25V8.5C9.75 7.90326 9.98705 7.33097 10.409 6.90901C10.831 6.48705 11.4033 6.25 12 6.25C12.5967 6.25 13.169 6.48705 13.591 6.90901C14.0129 7.33097 14.25 7.90326 14.25 8.5V10.25","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'SynchroIcon',
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
  