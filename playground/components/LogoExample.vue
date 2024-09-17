<template>
  <div class="logo-example">
    <div class="size-input">
      <label for="size"> Size: {{ logoSize }}</label>
      <input type="range" id="size" name="size" min="1" max="4" v-model="size" />
    </div>

    <div class="color-input">
      <label for="color"> Main color</label>
      <input type="color" id="color" name="color" v-model="logoColor" />
    </div>
    <LogoIcon class="logo-icon" :size="logoSize" :color="logoColor" />
    <!-- <img class="logo" src="/logo.png" alt="nuxt-compose-icons-logo" /> -->
  </div>
</template>

<script setup lang="ts">
const size = ref(3);

const logoColor = ref('#334155');

const logoSize = computed(() => {
  switch (size.value) {
    case '1':
      return 's';
    case '2':
      return 'm';
    case '3':
      return 'l';
    case '4':
      return 'xl';
    default:
      return 'm';
  }
});
</script>

<style lang="scss" scoped>
@use '../assets/scss/_variables' as *;

.logo-example {
  min-height: var(--icon-size-xl);
  // background-color: $slate-600;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  // justify-items: start;
  padding: 0.5rem;
  border: 2px solid $slate-600;
  // margin: auto;
  gap: 2rem;

  .size-input,
  .color-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    // gap: 1rem;
  }

  .size-input {
    grid-column: 1;
    grid-row: 1;
  }

  .color-input {
    grid-column: 1;
    grid-row: 2;
  }

  .logo {
    max-width: 100%;
    height: auto;
  }
  .logo-icon {
    grid-column: 2; /* Second column */
    grid-row: 1 / span 2; /* Span both rows, occupying full height */
  }
}
</style>
