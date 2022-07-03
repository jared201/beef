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
    <div class="navbar-item">
       
    </div>
    <a class="navbar-item" href="/">
      <img src="/steak-mafia.png" >
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
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
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>

</template>
<script>



export default {
    name: 'NavBarHeader',
    data() {
        return {
          clicked: false
        }
       
    },
    components : {
        
    },
    methods: {
        openNav(event){
            if (!this.clicked){
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