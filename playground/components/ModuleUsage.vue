<template>
  <details>
    <summary class="config-usage">Config</summary>
    <div class="module-usage">
      <!-- <PrismCode file-name="MyComponent.vue" language="treeview" :src="iconDirectory" />
    <PrismCode file-name="MyComponent.vue" language="markup" :src="content" />
    <PrismCode language="markup"> @use 'assets/scss/_variables' as *; </PrismCode> -->
      <!-- <pre data-src="/prismjs-files/example.markup"></pre> -->
      <PrismCode file-name="nuxt.config.ts" src="/prismjs-files/load-module.js" />

      <PrismCode file-name=".nuxt.component.d.ts" src="/prismjs-files/nuxt.component.js" />
    </div>
  </details>
</template>

<script setup lang="ts">
import ExampleMarkup from '/prismjs-files/example.markup';
import IconDirectory from '/prismjs-files/icon-directory-treeview';

const content = computed(() => {
  return ExampleMarkup;
});
const iconDirectory = computed(() => {
  return IconDirectory;
});
</script>

<style lang="scss" scoped>
.module-usage {
  display: flex;
  gap: 1rem;

  :deep .prism-code:last-child {
    flex: 1;
  }
}
.config-usage {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
