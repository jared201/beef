<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BdsGarageButton"
}
</script>

<style scoped>
.button {
  width: 100%; !important
  height: 10rem; !important;
  border: 1px solid black;
}
</style>