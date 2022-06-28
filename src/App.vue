<template>
  <div id="app" class="container">
    <nav-bar-header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <Hero/>
    <sidebar/>
    <nav-bar-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from './components/Sidebar.vue';
import NavBarHeader from "./components/NavBarHeader.vue";
import Hero from './components/Hero.vue';
import NavBarFooter from './components/NavBarFooter.vue';

@Component({
  components: {
    Hero,
    Sidebar,
    NavBarHeader,
    NavBarFooter,
  },
})
export default class App extends Vue {
  
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
