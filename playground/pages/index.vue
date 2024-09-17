<template>
  <div>
    <header class="app-header">
      <div class="logo-container">
        <img class="logo" src="/logo.png" alt="nuxt-compose-icons-logo" />
      </div>
    </header>
    <Banner />

    <!-- <pre data-src="/prismjs-files/load-module.js"></pre> -->
    <!-- <HighlighCode :code="`<h1>Hello World!</h1>`" /> -->

    <ModuleUsage />

    <hr style="margin: 3rem 0" />
    <DemoIcons />
  </div>
</template>

<script setup lang="ts">
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.min.css';

const { $prism } = useNuxtApp();

onMounted(() => {
  console.log('prism', $prism);
});

// onMounted(() => {
//   Prism.highlightAll();
// });
</script>

<style scoped lang="scss">
@use '../assets/scss/_variables' as *;

.app-header {
  // display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  padding: 1.5rem 0;
  border-bottom: 2px solid $slate-600;
}

.logo-container {
  display: flex;
  // width: clamp(7.5rem, 15vw + 0.1rem, 16.25rem);
  // max-width: 260px;
  height: 100%;
  // flex-basis: 10%;

  .logo {
    max-width: 100%;
    height: auto;
  }
}
</style>
