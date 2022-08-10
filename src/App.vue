<template>
  <div id="app" class="container">
    <metainfo>
      <template v-slot:meta="{ content }">{{ content }}</template>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav-bar-header></nav-bar-header>
    <sidebar/>

    
    <router-view :key="$route.fullPath"></router-view>
    <nav-bar-footer/>
    
   
  </div>
</template>

<script lang="javascript">
import NavBarHeader from './components/NavBarHeader.vue'
import NavBarFooter from './components/NavBarFooter.vue'
import Sidebar from './components/Sidebar.vue'
import {onMounted, } from 'vue';
import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  components: {
    NavBarHeader,
    NavBarFooter,
    Sidebar,
  }, 
  setup() {
    onMounted(() => {
      var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
      for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
        sidebarSensitiveDivs[i].addEventListener('click', function(event) {
          NavBarHeader.methods.closeNav(event);
        });
      }
    })
    useMeta({
      title: 'The Beef Dashboard Template',
      meta: [
        {
          name: 'description',
          content: 'The Beef Dashboard Template is based on Bulma and Vue'
        }
      ]
    })

  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
