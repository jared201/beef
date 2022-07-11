<template>
    <div>{{ msg }}</div>
    <div class="tile sidebar-sensitive is-ancestor">
         <div class="tile is-parent ">
            <div class="panel tile is-child notification">
               <div class="panel-heading">Radio buttons</div>
            
                <div class="control tile is-child">
                    <label class="radio">
                        <input type="radio" name="answer">
                        Yes
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer">
                        No
                    </label>
                </div>
            </div>
            <div class="panel tile is-child notification">
               <div class="panel-heading">Radio buttons with pre-selected value</div>
            
                <div class="control tile is-child">
                    <label class="radio">
                        <input type="radio" name="foobar">
                            Foo
                    </label>
                    <label class="radio">
                        <input type="radio" name="foobar" checked>
                            Bar
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
            msg: "Radio buttons are here",
        }
    }
}
</script>
<style>

</style>