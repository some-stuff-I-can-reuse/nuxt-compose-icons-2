import type { Node as HtmlNode } from 'node-html-parser';
import type { VNode } from 'vue';
import { h } from 'vue';
import { parseSvg } from './parse-svg';

// Helper function to recursively convert nodes to VNodes
function convertNodeToVNode(node: HtmlNode): VNode | string {
  if (node.nodeType === 3) {
    // Text node
    return node.rawText;
  }

  const element = node as HTMLElement;
  const children = element.childNodes.map(convertNodeToVNode);
  return h(element.tagName, { ...element.attributes }, children);
}

export function createSvgComponentCode(
  name: string,
  svgContent: string,
  filePath?: string,
): string {
  const { attributes, children: svgNodeChildren } = parseSvg(svgContent);
  const vnodeChildren = svgNodeChildren.map(convertNodeToVNode);

  return `
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    import type { ComposeIconProps } from '../types/compose-icons';
    import type { VNode } from 'vue';
    import { getIconSize } from '../../utils/get-icon-size';


    const svgAttributes = ${JSON.stringify(attributes)};
    const vnodeChildren = ${JSON.stringify(vnodeChildren)};

    function recreateVNodes(vnodeData: any[]): VNode[] {
      return vnodeData.map(node => {
        if (typeof node === 'string') {
          return node;
        }
        return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
      });
    }

    export default defineComponent({
      name: '${name}',
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
            \`size-\${iconSize.value}\`,
          ];
        });

      const iconAttributes = computed(() => ({
        ...svgAttributes,
        style: styles.value,
        class: iconClasses.value,
      }));

        return () => h('svg', iconAttributes.value, recreateVNodes(vnodeChildren));
      },
    });
    </script>
  `;
}
