<template>
    <div class="panel sidebar-sensitive">
        <div class="panel-heading">
            {{ msg }}
        </div>
                
    </div>
    <div class="tile is-ancestor sidebar-sensitive">
        <article class="tile is-parent is-6">
            
            <div class="message is-dark">
                <div class="message-header">
                    <p>Dark</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    This is a dark message panel. <strong>Formatting is possible</strong> with so much potential.  
                </div>
            </div>            
        </article>
        <article class="tile is-parent is-6">
            <div class="message is-primary">
                <div class="message-header">
                    <p>Primary</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    This message uses primary theme. <strong>Another option to the Dark theme</strong>
                </div>
            </div>            
        </article>
    </div>
    <div class="tile is-ancestor sidebar-sensitive">
        <article class="tile is-parent is-6">
            
            <div class="message is-warning">
                <div class="message-header">
                    <p>Warning</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    This is a warning message panel. <strong>Formatting is possible</strong> with so much potential.  
                </div>
            </div>            
        </article>
        <article class="tile is-parent is-6">
            <div class="message is-success">
                <div class="message-header">
                    <p>Success</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    This is a success theme. <strong>Another option to the Dark theme</strong>
                </div>
            </div>            
        </article>
    </div>
</template>
<script>
import { onMounted } from 'vue'
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
    data () {
        return {
            msg: "Message samples here "
        }
    },
}
</script>
<style>
</style>