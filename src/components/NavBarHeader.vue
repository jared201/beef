<template>
    <div>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary" @click="openNav" :aria-pressed="clicked ? 'true' : closeNav">
                <strong>Menu</strong>
            </a>
            
            </div>
        </div>
        <div class="navbar-item sidebar-sensitive">
        
        </div>
        <!-- <div class="sidebar-sensitive level"> -->
            <a class="navbar-item" href="/">
                <img src="/steak-mafia.png" >
            </a>

            <a role="button" class="navbar-burger navbar-end sidebar-sensitive" aria-label="menu" aria-expanded="false"  data-target="navbarBasicExample" @click="openMenu" >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        <!-- </div> -->
    </div>
    
    <div id="navbar_menu" class="navbar-menu sidebar-sensitive" >
        <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>                
        <a class="navbar-item">
            Pricing
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            More
            </a>

            <div class="navbar-dropdown">
            <a class="navbar-item">
                About
            </a>
            <a class="navbar-item">
                Jobs
            </a>
            <a class="navbar-item">
                Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-info" target="_blank" href="https://github.com/jared201/beef">
                <span class="icon is-medium is-left">
                     <i class="fab fa-github"></i><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                </span>
                <strong>Follow us on Github</strong>            
            </a>
            <a class="button is-success gumroad-button" target="_blank" href="https://jared201.gumroad.com/l/beef">
                Get Latest Release from Gumroad
            </a>
            </div>
        </div>
        </div>
    </div>
        </nav>
    </div>

</template>
<script>
import { onMounted } from '@vue/runtime-core';



export default {
    name: 'NavBarHeader',
    setup () {
        onMounted(() => {
            let gumroad = document.createElement('script');
            gumroad.setAttribute('src', 'https://jared201.gumroad.com/l/beef');
            document.head.appendChild(gumroad);
        })
    },
    data() {
        return {
          clicked: false,
          is_active: "",
        }
       
    },
    components : {
        
    },
    methods: {
        openNav(event){
            if (!this.clicked || document.getElementById("sidebar").style.width=='0px'){
                document.getElementById("sidebar").style.width='250px';
                //document.getElementById("app").style.marginLeft = "250px";
                console.log(event.target);
                this.clicked = true;   
            } else {
                this.closeNav(event);
            }
            
        },
        closeNav(event){
            document.getElementById("sidebar").style.width = "0px";
            //document.getElementById("app").style.marginLeft = "0px";
            console.log("closeNav " + event.target);
            this.clicked = false;
            console.log(this.clicked);
        },
        openMenu(event){
            console.log(event.target);
            this.is_active = "is-active";
            console.log(this.is_active)
            const element = document.getElementById("navbar_menu")
            element.classList.toggle("is-active") //<--- use something that fucking works!
        }
    }
}
</script>

<style scoped>
 .button.is-primary {
    background-color: #d59a57;
    border-color: transparent;
    color: #fff;
}

.button.button.is-primary:hover {
    background-color: #d59a57;
}
</style>