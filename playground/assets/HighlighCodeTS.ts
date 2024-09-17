// // import hljs from 'highlight.js/lib/core';
// import hljs from 'highlight.js';
// // import html from 'highlight.js/lib/languages/html';
// import hljsDefineVue from 'highlightjs-vue';
// import { parse } from 'node-html-parser';
// export default defineComponent({
//   props: {
//     code: {
//       type: String,
//       required: true,
//     },
//     language: {
//       type: String,
//       default: 'javascript',
//     },
//     autodetect: {
//       type: Boolean,
//       default: true,
//     },
//     ignoreIllegals: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   setup(props) {
//     // hljs.registerLanguage('javascript', javascript);
//     onMounted(() => {
//       // hljs.registerLanguage('html', html);

//       hljsDefineVue(hljs);
//       // hljs.initHighlightingOnLoad();
//     });
//     // const { $hljs: hljs } = useNuxtApp();
//     // console.log('📟 - file: HighlighCode.vue:23 - useNuxtApp → ', useNuxtApp);
//     // console.log('📟 - file: HighlighCode.vue:23 - hljs → ', hljs);
//     // if (!hljs) {
//     //   console.error('📟 - file: HighlighCode.vue:23 - hljs → ', hljs);
//     // }
//     // const language = ref(props.language);
//     // console.log('hljs.getLanguage(language.value)', hljs.getLanguage(language.value));

//     // const autodetect = computed(() => props.autodetect && !language.value);
//     // const cannotDetectLanguage = computed(
//     //   () => !props.autodetect && hljs && !hljs.getLanguage(language.value),
//     // );

//     // const className = computed((): string => {
//     //   if (cannotDetectLanguage.value) {
//     //     return '';
//     //   } else {
//     //     return `language-${language.value}`;
//     //   }
//     // });

//     // const highlightedCode = computed((): string => {
//     //   // No idea what language to use, return raw code
//     //   if (cannotDetectLanguage.value) {
//     //     console.warn(`The language "${language.value}" you specified could not be found.`);
//     //     return escapeHtml(props.code);
//     //   }

//     // const highlightedCode = computed(() => {
//     //   if (!hljs) {
//     //     return '';
//     //   }
//     //   if (props.autodetect || cannotDetectLanguage.value) {
//     //     const result = hljs.highlightAuto(props.code);
//     //     console.log('📟 - file: HighlighCode.vue:57 - result → ', result);
//     //     return result.value;
//     //   }
//     //   const result = hljs.highlight(props.code, { language: language.value });
//     //   console.log('📟 - file: HighlighCode.vue:60 - result → ', result);
//     //   return result.value;
//     // });

//     //   if (autodetect.value) {
//     //     const result = hljs.highlightAuto(props.code);
//     //     language.value = result.language ?? '';
//     //     return result.value;
//     //   } else {
//     //     const result = hljs.highlight(props.code, {
//     //       language: language.value,
//     //       ignoreIllegals: props.ignoreIllegals,
//     //     });
//     //     return result.value;
//     //   }
//     // });

//     return {
//       // className,
//       // highlightedCode,
//       // cannotDetectLanguage,
//     };
//   },
//   render() {
//     let highlightedCode = '';
//     if (!hljs) {
//       highlightedCode = '';
//     }
//     // if (this.autodetect || this.cannotDetectLanguage) {
//     // const result = hljs.highlightAuto(this.code, ['javascript']);
//     // console.log('📟 - file: HighlighCode.vue:57 - result → ', result);
//     // highlightedCode = result.value;
//     // }
//     // const result = hljs.highlight(this.code, { language: this.language });
//     // console.log('📟 - file: HighlighCode.vue:60 - result → ', result);
//     // highlightedCode = result.value;
//     const doc = parse(this.code);
//     const codeContent = doc.querySelector('div') as HTMLElement;
//     return h('pre', {}, [
//       h('code', {
//         innerHTML: codeContent ? hljs.highlightElement(codeContent) : '',
//         tabindex: '0',
//       }),
//     ]);
//   },
// });
// // <!-- </script>

// // <style scoped lang="scss">
// // @use '../assets/scss/_variables' as *;

// // .prism-code {
// //   position: relative;
// //   background: #0f172a;
// //   border-radius: 0;
// //   box-shadow: none;
// //   border: 2px solid #1e293b;
// //   padding-top: 2rem;
// // }

// // .prism-code[class*='language-'],
// // .prism-code-content[class*='language-'] {
// //   font-size: 12px;
// // }

// // .prism-code[data-file]::before {
// //   content: attr(data-file);
// //   font-size: 0.85rem;
// //   color: $primary;
// //   position: absolute;
// //   top: 4px;
// //   right: 4px;
// // }
// // </style> -->
