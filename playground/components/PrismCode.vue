<template>
  <div class="prism-code">
    <pre v-if="!src" :class="getClasses" :data-file="fileName">
      <code  v-html="highlightedCode" />
    </pre>
    <pre v-else :class="getClasses" :data-file="fileName" :data-src="src" />
  </div>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; // Import additional languages as needed

// Define component props
interface PrismjsProps {
  language?: string; // Programming language for syntax highlighting
  code?: string; // Code to highlight
  fileName?: string; // File name to display as metadata
  src?: string; // Path to the file containing code to highlight
}
const props: PrismjsProps = defineProps<PrismjsProps>();

// Ref to hold the highlighted code
const highlightedCode = ref('');

// Compute CSS classes for the code block
const getClasses = computed(() => {
  return [`language-${props.language || 'javascript'}, prism-code-pre`];
});

// Function to highlight code using PrismJS
const highlightCode = () => {
  if (props.code) {
    highlightedCode.value = Prism.highlight(
      props.code,
      Prism.languages[props.language || 'javascript'],
      props.language || 'javascript',
    );
    return true;
  }
};

onMounted(() => {
  highlightCode();
});

// Static templates handling: Load and highlight code from the src file during SSR
// if (props.src) {
//   const templatePath = path.join(process.cwd(), props.src); // Use the `src` prop for the file path
//   if (fs.existsSync(templatePath)) {
//     const code = fs.readFileSync(templatePath, 'utf-8'); // Load the code from the file
//     highlightedCode.value = highlightCode(code); // Highlight the loaded code with PrismJS
//   } else {
//     console.error(`File not found: ${templatePath}`);
//   }
// }
</script>
