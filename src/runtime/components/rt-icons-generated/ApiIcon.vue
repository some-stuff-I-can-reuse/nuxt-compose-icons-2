
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = {"width":"24","height":"26","viewBox":"0 0 24 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const vnodeChildren = ["\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M16.694 14.859C18.0933 14.8845 19.4447 14.3069 20.451 13.2531C21.4573 12.1993 22.036 10.7557 22.06 9.23975C22.0358 7.72398 21.4569 6.28065 20.4507 5.22712C19.4444 4.17358 18.0932 3.59608 16.694 3.62158C16.2399 3.62154 15.7876 3.68157 15.347 3.80033C14.9377 2.89761 14.3015 2.13833 13.5117 1.60979C12.7218 1.08125 11.8103 0.804895 10.882 0.812501C9.67076 0.793007 8.49658 1.26473 7.58998 2.13504C6.68337 3.00535 6.10983 4.21138 5.98196 5.51633C4.89353 5.60768 3.87576 6.13588 3.12795 6.99751C2.38013 7.85914 1.95613 8.99214 1.93896 10.1747C1.95948 11.4376 2.44187 12.6401 3.28017 13.518C4.11848 14.3959 5.24416 14.8774 6.40996 14.8568L16.694 14.859Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M20.2451 25.1875V18.109","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M18.938 18.109H21.551","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M18.938 25.1875H21.551","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M11.0969 25.1875V22.3557","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M11.1001 22.3557H13.0601C13.5799 22.3557 14.0785 22.132 14.446 21.7338C14.8136 21.3356 15.0201 20.7955 15.0201 20.2323C15.0201 19.6692 14.8136 19.1291 14.446 18.7309C14.0785 18.3327 13.5799 18.109 13.0601 18.109H11.1001V22.3557Z","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M1.94897 25.1875L2.68597 19.8586C2.75755 19.3754 2.98569 18.9356 3.32949 18.6182C3.67329 18.3007 4.11024 18.1264 4.56197 18.1264C5.01371 18.1264 5.45066 18.3007 5.79446 18.6182C6.13826 18.9356 6.3664 19.3754 6.43797 19.8586L7.17597 25.1875","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"PATH","props":{"d":"M2.29199 22.7099H6.83299","stroke":"#6D6E8F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"];

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: 'ApiIcon',
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
  