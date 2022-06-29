<template>
    <div>
    <b-navbar fixed-bottom>
        <template #brand>
            <!-- <b-navbar-item tag="router-link" :to="{ path: '/' }"> -->
                <b-navbar-item >
                <img
                    src="../assets/steak-mafia.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

       <!--  <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template> -->
    </b-navbar>
    </div>

</template>
<script>

export default {
    name: 'NavBarFooter',
}
</script>

<style scoped>
 .button.is-primary {
    background-color: #d59a57;
    border-color: transparent;
    color: #fff;
}
</style>