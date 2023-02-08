<template>
  <div class="box has-background-info-dark is-fullwidth is-hidden" id="garage-panel">
    <div class="columns">
      <div class="column">
        <div class="columns is-fullwidth ">
          <div class="column">
            <button class="button is-fullwidth  button-height-tall" @click="toggleLights"><span class="text-font">Lights</span></button>

          </div>
          <div class="column">
            <button class="button is-success is-fullwidth button-height-tall" @click.prevent="openGate"><span class="text-font">Open Gate</span></button>
          </div>
        </div>
        <div class="columns is-fullwidth">
          <div class="column">
            <button class="button is-warning is-fullwidth button-height-tall" @click.prevent="toggleExhaust"><span class="text-font">Exhaust</span></button>
          </div>
          <div class="column">
            <button class="button is-danger is-fullwidth button-height-tall" @click.prevent="closeGate"><span class="text-font">Close Gate</span></button>
          </div>
        </div>
        <div class="columns is-fullwidth">
          <div class="column">
            <button  class="button is-gradient is-fullwidth button-height-tall" id="fullscreen" @click="returnToTouchPanel"><span class="text-font">Return to Main</span></button>
          </div>

        </div>
      </div>
      <div class="column">
        <p class="text-font has-text-white">Garage Cam</p>
        <div class="full-top">
          <img :src="this.imgData" alt="Garage Cam"/>
        </div>
        <div class="column">
          <div class="panel">
            <div class="panel-heading has-background-grey-light">
              <p class="text-font ">Garage Status</p>
            </div>
            <div class="panel-block tabular">
              <p class="row text-font left-text">Garage Door: <span class="has-text-success">{{  gateStatus }}</span></p>
              <div class="is-fullwidth">
                <progress class="progress is-large is-danger" :value="this.progress" max="100">{{progress}}%</progress>
              </div>

              <p class="new-line"/>
              <p class="row text-font left-text">Exhaust: <span class="has-text-warning">{{ exhaustStatus }}</span></p>

              <p class="new-line"/>
              <p class="text-font left-text">Lights: <span class="has-text-success">{{ lightStatus }}</span></p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GaragePanel",
  methods: {
    returnToTouchPanel(event) {
      console.log("returnToTouchPanel", event);
      const el = document.getElementById("garage-panel");
      el.classList.add("is-hidden");
      const touchPanel = document.getElementById("touch-panel");
      touchPanel.classList.remove("is-hidden");
    },
    toggleLights(event) {
      console.log("toggleLights", event);
      if (this.lightStatus === "On") {
        this.lightStatus = "Off";
      } else {
        this.lightStatus = "On";
      }
    },
    openGate(event) {
      console.log("toggleGate", event);
      this.gateStatus = "Opening...";
      let progress = 5;
      const interval = setInterval(() => {
        progress += 5;
        this.progress = progress;
        if (progress >= 100) {
          clearInterval(interval);
          this.gateStatus = "Closed";
        }
      }, 1000);
    },
    closeGate() {
      console.log("toggleGate", event);
      this.gateStatus = "Closing...";
      let progress = 5;
      const interval = setInterval(() => {
        progress += 5;
        this.progress = progress;
        if (progress >= 100) {
          clearInterval(interval);
          this.gateStatus = "Closed";
        }
      }, 1000);

    },
    toggleExhaust(){
      console.log("toggleExhaust", event);
      if (this.exhaustStatus === "On") {
        this.exhaustStatus = "Off";
      } else {
        this.exhaustStatus = "On";
      }
    }
  },
  data(){
    return {
      garageCam: null,
      gateStatus: "Closed",
      lightStatus: "Off",
      exhaustStatus: "Off",
      progress: 0,
      imgData: require('../../assets/cctv-footage.webp')
    }
  },
}
</script>

<style scoped>
.is-hidden {
  display: none;
}
.text-font {
  font-size: 1.5rem;
}
.is-fullwidth {
  width: 100%;
}
.button-height-tall {
  height: 15rem;
}
.is-gradient {
  background: linear-gradient(30deg, gray 0%, lightgray 30%);
}
.new-line {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}
.tabular {
  display: table;
}
.table_cell {
  display: table-cell;
}
.left-text {
  text-align: left;
}
.full-top {
  margin-top: 0;
}
</style>