<template>
<button class="button is-fullwidth is-fullheight black_border is-warning">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "BdsTouchButton"
}
</script>

<style scoped>
.is-fullwidth {
  width: 100%;
}
.is-fullheight {
  height: 10rem;
}
.white_border {
  border: 1px solid white;
}
.black_border {
  border: 1px solid black;
}
.is-gradient {
  background: linear-gradient(30deg, gray 0%, lightgray 30%);
}
</style>