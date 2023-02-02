<template>
  <button class="button" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BdsButton",
  props: {
    type: {
      type: String,
      default: "is-primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Button",
    },
    size: {
      type: String,
      default: "is-large",
    },
    buttonClass: {
      type: String,
      default: "is-info is-large",
    },
  },

}
</script>

<style scoped>

</style>