<template>
    <div><p>{{msg}}</p> </div>
    <div class="tile is-ancestor sidebar-sensitive">
        <div class="tile is-parent is-vertical">
            <article class="is-warning tile notification">
                <div class="tile is-parent">15%
                    <progress class="progress" value="15" max="100">15%</progress>
                </div>
                <div class="tile is-parent">15%
                    <progress class="progress is-primary" value="15" max="100">15%</progress>
                </div>
            </article>            
            
            <article class="tile is-success notification">
                <div class="tile is-parent ">
                    <div class="tile is-child is-4">30% Normal 1/3 of the column
                        <progress class="progress is-link" value="30" max="100">30%</progress>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child">45% Large
                        <progress class="progress is-info is-medium" value="45" max="100">45%</progress>
                    </div>
                   
                </div>
                <div class="tile is-parent">90% Normal
                        <progress class="progress is-danger" value="90" max="100">90%</progress>
                </div>
            </article>
            <article class="tile is-gray notification">Indeterminate
                <div class="tile is-parent is-vertical">
                    <progress class="progress is-small is-primary" max="100">15%</progress>
                    <progress class="progress is-danger" max="100">30%</progress>
                    <progress class="progress is-medium is-dark" max="100">45%</progress>
                    <progress class="progress is-large is-info" max="100">60%</progress>
                </div>
            </article>
        </div>        
    </div>
</template>
<script>
import NavBarHeaderVue from './NavBarHeader.vue';
import { onMounted } from 'vue';
import {useMeta} from "vue-meta";
export default {
    setup() {
        const title = 'Progress Bar Component Page';
        const desc = 'This is the Progress Bar Component Page';
        onMounted(() => {
        var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
        for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
                sidebarSensitiveDivs[i].addEventListener('click', function(event) {
                NavBarHeaderVue.methods.closeNav(event);
                });
            }
        })
        useMeta({
          meta: [
              {
                name: 'twitter:title',
                content: `${title}`
              },
            {
              name: 'twitter:description',
              content: `${desc}`
            }
          ]
        })
    },
    data() {
        return {
            msg: "Progress Bar here",
        }
    }
}
</script>
<style>
</style>