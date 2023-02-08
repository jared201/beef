<template>
<div class="modal">
  <div class="modal-background full_screen_modal" @click="closeModal"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "FullScreenModal",
  methods: {
    closeModal() {
      this.$emit("close");
      const elem = document.getElementById("modal-screen");
      elem.classList.remove("is-active");
      if (document.exitFullscreen()){
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen()){
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen()){
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen()){
        document.msExitFullscreen();
      }
    }
  }
}
</script>

<style scoped>
.is-fullwidth {
  width: 100%;
}
.full_screen_modal {
  width: 100%;
  height: 100%;
}

</style>