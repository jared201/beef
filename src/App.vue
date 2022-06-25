<template>
  <div id="app">
    <nav-bar-header/>>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <sidebar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Sidebar from './components/Sidebar.vue';
import NavBarHeader from "./components/NavBarHeader.vue";

@Component({
  components: {
    HelloWorld,
    Sidebar,
    NavBarHeader
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
