<template>
  <h1><slot /></h1>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const componentName = getCurrentInstance()?.type.__name;
const test = getCurrentInstance()?.type;
console.log('componentName', componentName);
console.log('test', test);
</script>

<style scoped></style>
