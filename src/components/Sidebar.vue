<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay=false
      :right="right"
      v-model="open"
    >
      <div class="p-1">
        <img
          src="../assets/orange_burst.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list label="Menu">
            <!-- <b-menu-item icon="information-outline" label="Info"></b-menu-item> -->
            <b-menu-item icon="settings">
              <template #label="props"><router-link to="/">
                Home</router-link>
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" label="History"></b-menu-item>
              <b-menu-item icon="cellphone-link">
                <template #label>
                  <router-link to="/upload">My Channel</router-link>
                  <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                        <template #trigger>
                            <b-icon icon="dots-vertical"></b-icon>
                        </template>
                        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-menu-item>
              <b-menu-item icon="cash-multiple" label="Donate" disabled></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" label="My Account">
              <b-menu-item label="Account data"></b-menu-item>
              <b-menu-item label="Addresses"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list>
<!--             <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item> -->
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
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
    <b-button class="button_float is-black" @click="open = true"><font-awesome-icon icon="angle-double-right" /></b-button>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret , faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faAngleDoubleRight)

export default {
  components: {
    FontAwesomeIcon
  },
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

<style>
.button_float {
  float: left;
  bottom: -5%;
}
.p-1 {
  padding: 1em;
}
</style>