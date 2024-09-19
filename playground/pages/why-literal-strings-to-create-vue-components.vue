<template>
  <div class="wlstcvc">
    <div class="why_are_you_looking_at_the_code_of_this_stupid_page">
      <img
        class="wlstcvc-img"
        src="/use_of_literal_string_to_create_vue_component_1.png"
        alt="use_of_literal_string_to_create_vue_component_1"
      />
    </div>
    <div class="why_are_you_looking_at_the_code_of_this_stupid_page">
      <img
        class="wlstcvc-img"
        src="/use_of_literal_string_to_create_vue_component_2.png"
        alt="use_of_literal_string_to_create_vue_component_2"
      />
    </div>
  </div>
</template>

<style>
.wrapper {
  max-width: 1600px;
}
</style>

<style lang="scss" scoped>
@use '../assets/scss/_variables' as *;

.wlstcvc {
  display: flex;
  // align-items: center;
  justify-content: center;
  min-height: 100svh;
  padding: 2rem;

  .why_are_you_looking_at_the_code_of_this_stupid_page {
    max-height: 100%;
    flex: 1;
    margin: 0 1rem;

    .wlstcvc-img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
