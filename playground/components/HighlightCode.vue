<template>
  <pre ref="pre">
    <code ref="code">{{ highlightedCode }}</code>
  </pre>
</template>
<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

export default {
  props: {
    language: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  computed: {
    highlightedCode() {
      // return escapeHtml(hljs.highlight(this.code, { language: this.language }).value);

      console.log(
        '📟 - file: HighlightCode.vue:29 - hljs.highlight(this.code, { language: this.language }).value → ',
        hljs.highlight(this.code, { language: this.language }),
      );
      return hljs.highlight(this.code, { language: this.language }).value;
    },
  },
  setup() {
    // let highlightedCode = '';
    // if (!hljs) {
    //   highlightedCode = '';
    // }
    // if (this.autodetect || this.cannotDetectLanguage) {
    // const result = hljs.highlightAuto(this.code, ['javascript']);
    // console.log('📟 - file: HighlighCode.vue:57 - result → ', result);
    // highlightedCode = result.value;
    // }
    // const result = hljs.highlight(this.code, { language: this.language });
    // console.log('📟 - file: HighlighCode.vue:60 - result → ', result);
    // highlightedCode = result.value;
    // const doc = parse(this.code);
    // const codeContent = doc.querySelector('div') as HTMLElement;
  },
};
</script>
