export { svgLoader };

function svgLoader(source: SVGAElement) {
  source = source.replace('<svg', '<svg class="lol" v-on="$listeners"');
  return `<template>\n${source}\n</template>`;
}
