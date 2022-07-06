<template>
    <div class="panel sidebar-sensitive">
        <div class="panel-heading">
            <p>{{ msg }}</p>
        </div>
        
    </div>    
    <div class="tile is-ancestor notification sidebar-sensitive">
        <div class="tile is-parent notification">
            <button class="button is-info" @click="openModal">Launch notification
            </button>
        </div>
    </div>
    <div class="modal" id="modal">
                <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{ card_title }}</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
            <!-- Content ... -->
                <article>
                    Here's what Notfication is going to look like, you can define your own!
                </article>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="closeModal">Save changes</button>
                <button class="button" @click="closeModal">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue'
import NavBarHeaderVue from './NavBarHeader.vue'

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
            msg: "Notifications are modals",
            card_title: "Notifciation Demo"
        }
    },
    methods: {
        openModal(event){
            const modal = document.getElementById("modal");
            console.log(event.target);
            modal.classList.toggle('is-active');
        },
        closeModal(event) {
            console.log(event.target);
            const modal = document.getElementById("modal");
            modal.classList.remove('is-active');
        },
    }
}
</script>
<style>
</style>