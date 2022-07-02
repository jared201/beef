<template>
  <section class="sidebar" id="sidebar">
    <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
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