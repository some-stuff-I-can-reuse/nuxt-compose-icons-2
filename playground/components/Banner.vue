<template>
  <div class="banner">
    <h1 class="app-title">Nuxt <span class="primary">Compose</span> Icons</h1>
    <div class="description">
      <h3>Automatically generate customizable Vue components based on SVG files</h3>
      <p>
        No extra wrapper needed <br />
        <span class="primary">Generated</span> at build time,
        <span class="primary">customizable</span> at runtime using CSS custom properties
      </p>
    </div>
    <LogoExample class="module-example" />
    <div class="vue-template-example">
      <PrismCode language="markup" file-name="MyComponent.vue" :code="vueTemplateExample" />
    </div>
  </div>
</template>

<script setup lang="ts">
const vueTemplateExample = ref(`
<template>
  <section>
    <!-- add-note.svg -->
    <AddNoteIcon size="2rem" color="var(--primary)" />

    <!-- time.svg -->
    <TimeIcon size="xl" color="#36365F" />

    <!-- slide-right.svg -->
    <SlideRightIcon size="2rem" color="var(--primary)" />
  </section>
</template>
`);
const cssCode = ref(`
section h1,
#features li strong,
header h2,
footer p {
	font: 100% Rockwell, Arvo, serif;
}

`);
</script>

<style scoped lang="scss">
@use '../assets/scss/_variables' as *;

// .banner {
//   padding-top: 2rem;
//   margin-bottom: 1rem;

//   @include media('desktop') {
//     padding-top: 4rem;
//     margin-bottom: 4rem;
//   }

.banner {
  padding-top: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  // justify-items: center;
  // align-items: center;
  row-gap: 1rem;
  display: grid;
  grid-template-areas:
    'title title'
    'description description'
    'module-example module-example'
    'vue-template-example vue-template-example';
  grid-template-columns: auto 1fr;

  .app-title {
    grid-area: title;
    margin: 0;
    font-size: $text-5-5;
  }

  .description {
    grid-area: description;
    // height: 100%;
    // text-align: center;
  }

  .module-example {
    grid-area: module-example;
  }

  .vue-template-example {
    grid-area: vue-template-example;
    font-size: 14px;
    // height: 100%;

    :deep .prism-code {
      // height: 100%;
    }
  }

  .size-input,
  .color-input {
    display: flex;
    flex-direction: column;
  }

  @include media('desktop') {
    grid-template-areas:
      'title title vue-template-example'
      'description description vue-template-example'
      'module-example module-example vue-template-example';
    grid-template-columns: 1.5fr 1fr;
    row-gap: unset;
    column-gap: 2rem;
    // justify-content: flex-start;
    // flex-direction: row;
  }
}

// }
</style>
