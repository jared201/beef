<template>
  <div class="dropdown sidebar-sensitive" @click.stop.prevent="toggleDropdown">
    <div class="dropdown-trigger">
      <button class="button" id="dropdown" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{{ label }}</span>
        <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
          <font-awesome-icon :icon="[ 'fas', 'angle-down' ]" />
      </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a v-for="(item) in list" :key="item.id" class="dropdown-item" @click="selectItem(item)">{{ item }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import NavBarHeader from "@/components/NavBarHeader.vue";
import { useButtonState } from "@/state/ButtonState";

export default {
  name: "BdsDropdown",
  props: {
    list: {
      type: Array,
      default: () => ['is-primary', 'is-link', 'is-info', 'is-success', 'is-warning', 'is-danger'],
    },
  },
  data() {
    return {
      label: 'Select a color',
      showDropdown: false,
      item: '',
    }
  },
  methods: {
    toggleDropdown() {
      console.log('toggleDropdown');
      const dropdown = document.getElementById('dropdown');
      dropdown.classList.toggle("is-active");
    },
    selectItem(item) {
      console.log('selectItem', item);
      this.label = item;
      this.item = item;
      const button = document.getElementById('dropdown');
      console.log('item', this.item);
      const buttonState = useButtonState();
      buttonState.changeColor(item)
      this.list.forEach( (item) => {
        if (item.startsWith('is-')) {
          button.classList.remove(item);
        }
      });

      button.classList.add(item);
    },
  },
  setup(){
    onMounted(() => {
      console.log('onMounted');
      const sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
      for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
        sidebarSensitiveDivs[i].addEventListener('click', function(event) {
          NavBarHeader.methods.closeNav(event);
        });
      }
      console.log('register click event');
      const dropdown = document.querySelector('.dropdown');
      console.log(dropdown)
      dropdown.addEventListener('click', function(event) {
        console.log('click event', event);
        dropdown.classList.toggle("is-active");
      });

    })
  }
}
</script>

<style scoped>

</style>