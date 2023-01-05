<template>
    <div>{{msg}}</div>
    <div class="tile sidebar-sensitive">
   <!-- The magical tile element! -->
   <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
         <div class="tile">
            <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
             <div class="card">
               <div class="card-image">
                  <figure class="image is-4by3">
                     <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
               </div>
               <div class="card-content">
                  <div class="media">
                     <div class="media-left">
                     <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                     </figure>
                     </div>
                     <div class="media-content">
                     <p class="title is-4">{{author}}</p>
                     <p class="subtitle is-6">@jaredpogi</p>
                     </div>
                  </div>

                  <div class="content">
                    {{card_content}}  <a>@jaredpogi</a>.
                     <a href="#">#css</a> <a href="#">#responsive</a>
                     <br>
                     <time datetime="2016-1-1">{{timestamp}}</time>
                  </div>
      </div>
   </div>
            </article>
            <article class="tile is-child notification is-warning">
               <div class="card">
               <header class="card-header">
                  <p class="card-header-title">
                     Component
                  </p>
                  <button class="card-header-icon" aria-label="more options">
                     <span class="icon">
                     <i class="fas fa-angle-down" aria-hidden="true"></i>
                     </span>
                  </button>
               </header>
               <div class="card-content">
                  <div class="content">
                     This card is for interacting with users on their day-to-day activities
                     <a href="#">@jaredpogi</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                     <br>
                     <time datetime="2016-1-1">{{timestamp}}</time>
                  </div>
               </div>
               <footer class="card-footer">
                  <a href="#" class="card-footer-item">Save</a>
                  <a href="#" class="card-footer-item">Edit</a>
                  <a href="#" class="card-footer-item">Delete</a>
               </footer>
               </div>
            </article>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification is-info">
               <p class="title">Middle tile</p>
               <p class="subtitle">With an image</p>
               <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
               </figure>
              <br>
              <br>
              <Popper class="popper-demo" arrow hover openDelay="200" closeDelay="100"  placement="top" >
                <template #content>
                  <PopoverBase/>
                </template>
                <div id="popover" class="card" >
                  <div class="card-header">
                    <p class="card-header-title">
                      Popover Demo
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true"></i><font-awesome-icon :icon="['fas', 'angle-down']" />
                    </span>
                    </button>
                  </div>
                  <div class="card-content">

                    <div class="content">
                      Hover on this card to show popover
                      <a href="#">@jaredpogi</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                      <br>
                      <time datetime="2016-1-1">{{timestamp}}</time>
                    </div>
                  </div>
                </div>
              </Popper>

            </article>

            </div>
         </div>
         <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
               <!-- Content -->
            </div>
            </article>
         </div>
      </div>
      <div class="tile is-parent">
         <article class="tile is-child notification is-success">
            <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
               <!-- Content -->
            </div>
            </div>
         </article>
      </div>
   </div>
      </div>
</template>
<script>
import {onMounted} from "vue";
import NavBarHeaderVue from "./NavBarHeader.vue";
import Popper from 'vue3-popper';
import PopoverBase from "@/components/PopoverBase.vue";
export default ({
  components: {
    Popper,
  PopoverBase
  },
   data () {
      return {
        msg: "Cards Showcase here",
        card_content: "This is card with placeholder image and a media sub-content " +
                     "great for building journalistic content for bloggers and journalists.",
        author: "Jared Odulio",             
        timestamp: this.getNow(),
        element: document.getElementById("popover"),
        isToolTipVisible: false,
        tooltip: `This is a tooltip with <strong>HTML</strong>!`,
      }
   },
   name: "Cards",
   methods: {
      getNow() {
         const today = new Date();
         const date = today.getFullYear()+ '-' + (today.getMonth()+1)+'-'+today.getDate();
         const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
         const dateTime = date + ' '+ time;
         console.log(dateTime);
         return dateTime;
      },
      openTooltip() {
        this.isTooltipVisible = true;
      },
     closeTooltip() {
          this.isTooltipVisible = false;
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
      //Popper.arrow = true;
    });

  }
})
</script>
<style scoped>
.tooltip {
  display: inline-block;
  background: #ffffff;
  color: #643045;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 4px;
}
.popper-container {
  padding: 50px;
  margin: 0 20px 20px;
  border: 2px dashed #dadada;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.popper-demo {
  --popper-theme-background-color: #ffffff;
  --popper-theme-background-color-hover: #ffffff;
  --popper-theme-text-color: #333333;
  --popper-theme-border-width: 1px;
  --popper-theme-border-style: solid;
  --popper-theme-border-color: #dadada;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>