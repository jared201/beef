<template>
<footer class="footer is-fixed-bottom sidebar-sensitive" >
  <div class="content has-text-centered">
    <div>
      <p>
        <strong>Beef Design System</strong> by <a href="https://main.hueburg.com">Hueburg Solutions Consultancy, Inc.</a> Copyright {{ year }}
      </p>
    </div>
  </div>
</footer>

</template>
<script>
import { onMounted } from 'vue';
import NavBarHeaderVue from './NavBarHeader.vue';

export default {
    name: 'NavBarFooter',
    data () {
      return {
        year: this.getYear(),
      }
    },
    methods: {
      getYear() {
        const date = new Date();
        const year = date.getFullYear();
        return year;
      }
    }, 
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

<style scoped>

</style>