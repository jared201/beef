<template>
  <section class="sidebar" id="sidebar">
    <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <!-- <li><a>Customers</a></li> -->
  </ul>
  <p class="menu-label">
    Overview
  </p>
  <ul class="menu-list">
    <li>
      <a>Elements</a>
      <ul>
        <li><router-link to="/buttons">Buttons</router-link></li>
        <li><router-link to="/progress">Progress Bars</router-link></li>
        <li><a>Checkboxes</a></li>
        <li><a>Radio buttons</a></li>
      </ul>
    </li>
    <li>
      <a class="is-active ">Page Samples</a>
      <ul>
        <li><router-link to="/cards">Cards</router-link></li>
        <li><a>Messages</a></li>
        <li><a>Notifications</a></li>
      </ul>
    </li>
    <li><a>Forms</a></li>
    <li><a>Charts and Graphs</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Integrations and Custom Development
  </p>
  <ul class="menu-list">
    <li><a>NodeJS</a></li>
    <li><a>Spring Boot</a></li>
    <li><a>Kafka</a></li>
    <li><a>Mulesoft</a></li>
    <li><a>SMS Alerts</a></li>
  </ul>
</aside>
    <!-- <div class="block">
      <b-field grouped group-multiline>
        <div class="control">
          <b-switch v-model="overlay">Overlay</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="fullheight">Fullheight</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="fullwidth">Fullwidth</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="right">Right</b-switch>
        </div>
      </b-field>
    </div> -->
    
  </section>
</template>
<script>

export default {
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};
</script>


<style scoped>


</style>