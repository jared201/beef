<template>
  <div class="box has-background-info-dark is-fullwidth " id="touch-panel">
    <div class="columns is-fullwidth ">
      <div class="column">
        <bds-touch-button ><span class="text-font">Living Room</span></bds-touch-button>
      </div>
      <div class="column">
        <bds-touch-button><span class="text-font">Garage</span></bds-touch-button>
      </div>
    </div>
    <div class="columns is-fullwidth">
      <div class="column">
        <bds-touch-button><span class="text-font">Kitchen</span></bds-touch-button>
      </div>
      <div class="column">
        <bds-touch-button><span class="text-font">Laundry</span></bds-touch-button>
      </div>
    </div>
    <div class="columns is-fullwidth">
      <div class="column">
        <bds-touch-button @click="toggleFullscreen" id="fullscreen"><span class="text-font">Enter Full Screen</span></bds-touch-button>
      </div>
    </div>
  </div>

</template>

<script>
import BdsTouchButton from "@/components/touchscreen/BdsTouchButton.vue";
import {onMounted} from "vue";

export default {
  name: "TouchPanel",
  components: {BdsTouchButton},
  setup(){
    onMounted(() => {
      console.log("TouchPanel mounted");
      const elem = document.getElementById("touch-panel");
      console.log("elem", elem);

    });

  },
  created() {
    console.log("TouchPanel created");
  },

  methods: {
    toggleFullscreen(event) {
      console.log("toggleFullscreen", event);

      const el = document.getElementById("touch-panel");
      if (el.requestFullscreen()){
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen()){
        el.webkitRequestFullscreen();
      } else if (el.mozRequestFullScreen()){
        el.mozRequestFullScreen();
      } else if (el.msRequestFullscreen()){
        el.msRequestFullscreen();
      }
    },
    exitFullScreen() {
      console.log("exitFullScreen");
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
.text-font {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
}
.is-fullwidth {
  width: 100%;
}
.is-fullheight {
  height: 20rem;
}
</style>