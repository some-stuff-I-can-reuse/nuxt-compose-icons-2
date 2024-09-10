import type { HTMLElement, Node as HtmlNode } from 'node-html-parser';
import { parse } from 'node-html-parser';

export function parseSvg(svgContent: string): {
  attributes: { [key: string]: string };
  children: HtmlNode[];
} {
  const doc = parse(svgContent);
  const svgElement = doc.querySelector('svg') as HTMLElement;
  return {
    attributes: svgElement.attributes,
    children: svgElement.childNodes as HtmlNode[],
  };
}
