<template>
    <div>{{ msg }}</div>
    <div class="tile sidebar-sensitive is-ancestor">
        <div class="tile is-parent ">
            <div class="tile is-child panel">
                <p class="panel-heading">A Checkbox Example</p>
                   <div class="tile is-child">
                        <label class="checkbox">
                            <input type="checkbox">
                            Remember me
                        </label>
                    </div>                    
                    <div class="tile is-child">
                        <label class="checkbox">
                            <input type="checkbox">
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue'
import NavBarHeader from './NavBarHeader.vue';

export default {
    setup() {
        onMounted(() => {
            var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
            for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
                sidebarSensitiveDivs[i].addEventListener('click', function(event) {
                NavBarHeader.methods.closeNav(event);
                });
            }
        })        
    },
    data (){
        return {
            msg: "Checkboxes are here",
        }
    },
}
</script>
<style>

</style>