<template>
    <div class="sidebar-sensitive">
        
        <div class="columns is-multiline">
            <div class="column tile is-ancestor">
                <div class="tile is-parent is-horizontal" data-route="/buttons" @click="gotoPath" >
                   <div class="tile is-child notification is-warning">                        
                        <p data-route="/buttons"><strong data-route="/buttons">Buttons</strong></p>
                    </div>
                </div>
                <div class="tile is-parent is-horizontal" data-route="/progress" @click="gotoPath">
                    <div class="tile is-child notification is-warning">                       
                        <p data-route="/progress"><strong data-route="/progress">Progress Bars</strong></p>
                    </div>                    
                </div>
                <div class="tile is-parent is-horizontal" data-route="/checkbox" @click="gotoPath">
                    <div class="tile is-child notification is-warning">
                        <p data-route="/checkbox"><strong data-route="/checkbox">Checkbox</strong></p>
                    </div>                    
                </div>                   
               <div class="tile is-parent is-horizontal" data-route="/radio" @click="gotoPath">
                    <div class="tile is-child notification is-warning">                        
                        <p data-route="/radio"><strong data-route="/radio">Radio Buttons</strong></p>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column tile is-ancestor">
                <div class="tile is-parent is-horizontal" data-route="/cards" @click="gotoPath">
                    <div class="tile is-child notification is-warning">                        
                        <p data-route="/cards"><strong data-route="/cards">Cards</strong></p>
                    </div>                    
                </div>
                <div class="tile is-parent is-horizontal" data-route="/message" @click="gotoPath">
                    <div class="tile is-child notification is-warning">                        
                        <p data-route="/message"><strong data-route="/message">Messages</strong></p>
                    </div>                    
                </div>
                <div class="tile is-parent is-horizontal" data-route="/notifications" @click="gotoPath">
                    <div class="tile is-child notification is-warning">                        
                        <p data-route="/notifications"><strong data-route="/notifications">Notifications</strong></p>
                    </div>                    
                </div>                    
                <div class="tile is-parent is-horizontal" data-route="/forms" @click="gotoPath">
                    <div class="tile is-child notification is-warning">                        
                        <p data-route="/forms"><strong data-route="/forms">Forms</strong></p>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column tile is-ancestor">
                <div class="tile is-parent is-horizontal" data-route="/charts" @click="gotoPath">
                    <div class="tile is-child notification is-warning">
                        <p data-route="/charts"><strong data-route="/charts">Charts and Graphs</strong></p>
                    </div>                    
                </div>
                <div class="tile is-parent is-horizontal" data-route="/train" @click="gotoPath">
                    <div class="tile is-child notification is-warning">
                       <p data-route="/train"><strong data-route="/train">Kiosk Demo</strong></p>
                    </div>                    
                </div>
                <div class="tile is-parent is-horizontal" data-route="/pos" @click="gotoPath">
                    <div class="tile is-child notification is-warning">
                        
                        <p data-route="/pos"><strong data-route="/pos">Point of Sale Demo</strong></p>
                    </div>                    
                </div>                    
                <div class="tile is-parent is-horizontal">
                    <div class="tile is-child notification is-warning">                        
                        <p><strong>Backend Extras</strong></p>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column tile">

            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import NavBarHeaderVue from './NavBarHeader.vue';

export default {

    setup() {
        onMounted(() => {
            var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
            for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
                sidebarSensitiveDivs[i].addEventListener('click', function(event) {
                NavBarHeaderVue.methods.closeNav(event);
                });
            }
           
        })
    },
    data() {
        return {
            msg: "Palette here"
        }
    },
    methods: {
        gotoPath(event) {
            console.log ("Target " + event.target.nodeName)
            const path = event.target.dataset.route;
            this.$router.push(path);    
        },
    },
}
</script>