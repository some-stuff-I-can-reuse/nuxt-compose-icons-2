<template>
  <div class="wrapper">
    <NuxtPage />
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
@use 'assets/scss/_variables' as *;

/* https://css-tricks.com/best-way-implement-wrapper-css/ */
.wrapper {
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
