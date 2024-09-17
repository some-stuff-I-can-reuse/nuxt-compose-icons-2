<template>
  <div class="wrapper">
    <NuxtPage />
  </div>
</template>

<script setup>
onMounted(() => {
  if (!document) return;
  if (import.meta.client) {
    // document.addEventListener('DOMContentLoaded', (event) => {
    //   document.querySelectorAll('pre code').forEach((el) => {
    //     console.log('📟 - file: app.vue:13 - el → ', el);
    //     hljs.highlightElement(el);
    //   });
    // });
  }
});
</script>
<style scoped lang="scss">
@use 'assets/scss/_variables' as *;

/* https://css-tricks.com/best-way-implement-wrapper-css/ */
.wrapper {
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
