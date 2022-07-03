<template>
  <div id="app" class="container">
   
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav-bar-header></nav-bar-header>
    <sidebar/>
    <!-- TODO add a MainBody.vue here -->
    
    <router-view></router-view>
    <nav-bar-footer/>
    
   
  </div>
</template>

<script lang="javascript">
import NavBarHeader from './components/NavBarHeader.vue'
import NavBarFooter from './components/NavBarFooter.vue'
import Sidebar from './components/Sidebar.vue'
import { onMounted } from 'vue';


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
  }
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
