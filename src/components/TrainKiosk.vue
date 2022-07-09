<template>
  <section class="hero is-danger">
    <div class="hero-body sidebar-sensitive">
        <div class="container">
        <h1 class="title">
           Starmall Alabang Station - Buy your train tickets here 
        </h1>
        <h2 class="subtitle">
            This station is operated by Metro Rail Transit and Philippine National Railways
        </h2>
        </div>
    </div>    
  </section>
  <Weather/>
  <MainOptionsVue />
</template>
<script>
import NavBarHeaderVue from './NavBarHeader.vue';
import { onMounted } from 'vue';
import MainOptionsVue from './MainOptions.vue';
import Weather from './Weather.vue';

export default {
  name: 'TrainKiosks',
  components: { MainOptionsVue, Weather },
  props:
    {
    msg: String
  }
  , title: 'Beef', 
  setup() {
    onMounted(() => {
      var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
      for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
        sidebarSensitiveDivs[i].addEventListener('click', function(event) {
          NavBarHeaderVue.methods.closeNav(event);
        });
      }
    })
  }
}
</script>