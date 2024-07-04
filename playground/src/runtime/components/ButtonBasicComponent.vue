<template>
  <button>Hello</button>
</template>

<script setup lang="ts">
const meta = computed(() => ({
  title: 'ButtonBasicComponent32',
  description: 'ButtonBasicComponent description',
  keywords: 'ButtonBasicComponent, keywords',
}));

console.log('meta', meta.value);
console.log(import.meta);
</script>
