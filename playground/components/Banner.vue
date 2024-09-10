<template>
  <div class="">
    <div class="banner">
      <div class="title-description">
        <h1 class="app-title">Nuxt <span class="compose">Compose</span> Icons</h1>
        <div class="description">
          <h3>Automatically generate customizable Vue components based on SVG files</h3>
        </div>
      </div>

      <PrismCode class="vue-template-example" src="/prismjs-files/template-icons.markup" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  padding-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  // justify-items: center;
  align-items: center;
  gap: 0.5rem;
  display: grid;
  grid-template-areas:
    'title-description title-description'
    'title-description title-description'
    'vue-template-example vue-template-example';
  grid-template-columns: auto 1fr;

  .title-description {
    grid-area: title-description;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

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

  .logo-container {
    display: flex;
    // width: clamp(7.5rem, 15vw + 0.1rem, 16.25rem);
    // max-width: 260px;
    max-width: 140px;
    margin: auto;
    // flex-basis: 10%;

    .logo {
      max-width: 100%;
      height: auto;
    }
  }

  .compose {
    color: $primary;
  }

  .vue-template-example {
    grid-area: vue-template-example;
    font-size: 14px;
  }

  .usage-config-nuxt {
    grid-area: module-usage;
  }

  @include media('desktop') {
    grid-template-areas:
      'title-description title-description  vue-template-example'
      'title-description title-description  vue-template-example';
    grid-template-columns: auto 1fr;
    justify-content: flex-start;
    flex-direction: row;

    .logo-title {
      gap: 2rem;
    }

    .usage-config-nuxt {
      // flex-direction: column;
    }
  }
}
// }
</style>
