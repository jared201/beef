<template>
  <section class="hero">
    <div class="hero-body sidebar-sensitive">
        <div class="container">
        <h1 class="title">
            Beef Dashboard Template
        </h1>
        <h2 class="subtitle">
            A Template for all
        </h2>
        </div>
    </div>
  </section>
  <Palette/>
</template>
<script>
import NavBarHeaderVue from './NavBarHeader.vue';
import { onMounted } from 'vue';
import Palette from './Palette.vue';

export default {
  name: 'Hero',
  components: { Palette },
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