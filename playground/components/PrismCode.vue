<template>
  <pre v-if="!src" :data-file="fileName">
    <code :class="getClasses" v-html="renderChildren" />
  </pre>
  <pre v-else class="prism-code" :data-file="fileName" :data-src="src"></pre>
  <!-- <p>{{ html }}</p> -->
</template>

<script setup lang="ts">
// import Prism from '~/plugins/prism';
import Prism from 'prismjs';
// The code snippet you want to highlight, as a string
// const code = `var data = 1;`;
// console.log('lang', Prism.languages);
// Returns a highlighted HTML string
// const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

const { $prism } = useNuxtApp();
// import 'prismjs/themes/prism.min.css';
const slots = useSlots();

onMounted(() => {
  console.log('nuxtApp', $prism);
  console.log('test ?', window?.Prism);

  console.log(
    'nuxtApp',
    slots?.default
      ? slots
          .default()
          .map((i) => i.children)
          .join('')
      : '',
  );
  // window.Prism = window.Prism || {};
  // window.Prism.manual = true;
  // $Prism.highlightAll(); // highlight your code on mount
});
interface PrismjsProps {
  language?: string;
  fileName?: string;
  src?: string;
}

const props: PrismjsProps = defineProps<PrismjsProps>();

const getClasses = computed(() => {
  return ['prism-code-content', `language-${props.language}`];
});

const renderChildren = computed(() => {
  if (slots.default) {
    return slots
      .default()
      .map((i) => i.children)
      .join('');
  }
  return '';
});
// return () => h('svg', iconAttributes.value, recreateVNodes(vnodeChildren));
</script>

<style scoped lang="scss">
@use '../assets/scss/_variables' as *;

.prism-code {
  position: relative;
  background: #0f172a;
  border-radius: 0;
  box-shadow: none;
  border: 2px solid #1e293b;
  padding-top: 2rem;
}

.prism-code[class*='language-'],
.prism-code-content[class*='language-'] {
  font-size: 12px;
}

.prism-code[data-file]::before {
  content: attr(data-file);
  font-size: 0.85rem;
  color: $primary;
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
