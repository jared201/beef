<template>

    <div class="columns">

        <div class="column">
            <!-- <div class="card">
                <div class="card-header">
                    <p class="card-header-title">
                        Buy Train Ticket
                    </p>
                </div>
                <div class="card-image">
                    <img :src="left_img" alt="Placeholder image"/>
                </div>
            </div> -->
            <div class="panel has-background-success " @click="openPriceModal">
                <p class="panel-heading is-centered has-background-success">
                    Tap here to buy train tickets
                </p>
                <img :src="left_img" alt="Placeholder image"/>
            </div>
        </div>
        <div class="column">
            <div class="panel  " @click="openTopUpModal">
                <p class="panel-heading is-centered has-background-warning" >
                    Tap here to top up your card
                </p>
                <img :src="right_img" alt="Placeholder image" height="500px"/>
            </div>            
        </div>
       
    </div>
    <div id="price" class="modal">
        <div class="modal-background is-light"></div>
        <div class="modal-card">
            <header class="modal-card-head has-background-warning">
                <p class="modal-card-title is-centered"><strong>{{value_title}}</strong> </p>
                <button class="delete" aria-label="close" @click="closePriceModal"></button>
            </header>
            <section class="modal-content">
                <p class="image">
                    <img :src="price_img"/>
                </p>
            </section>
            <section class="modal-card-body">
                <div class="columns">
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-info mb-2 mt-2"><strong>P150</strong></button>
                        </div>                        
                    </div>
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-info mb-2 mt-2"><strong>P200</strong></button>
                        </div>                        
                    </div>
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-info mb-2 mt-2"><strong>P250</strong></button>
                        </div>                        
                    </div>                    
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-warning mb-2 mt-2"><strong>P300</strong></button>
                        </div>                        
                    </div>
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-warning mb-2 mt-2"><strong>P400</strong></button>
                        </div>                        
                    </div>
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-warning mb-2 mt-2"><strong>P500</strong></button>
                        </div>                        
                    </div>                    
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-danger mb-2 mt-2"><strong>P1,000</strong></button>
                        </div>                        
                    </div>
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-danger mb-2 mt-2"><strong>P1,500</strong></button>
                        </div>                        
                    </div>
                    <div class="column">
                        <div class="panel has-background-grey-light">
                            <button class="button is-large is-danger mb-2 mt-2"><strong>P2,000</strong></button>
                        </div>                        
                    </div>                    
                </div>            
            </section>            
        </div>
        
    </div>
</template>
<script>

export default {
  components: { },
    name: "MainOptions",
    setup() {
       
    },
    data () {
        return {
            left_img: require('../assets/train-ticket.jpeg'),
            right_img: require('../assets/top-up-card.jpeg'),
            price_img: require('../assets/manila-map-metro-1.png'),
            value_title: "Choose ticket value",
            top_up_title: "Choose top-up value",
        }
    },
    methods: {
        openPriceModal(event){
            console.log(event.target);
            const price = document.getElementById("price");
            price.classList.toggle('is-active');
        },
        closePriceModal(event) {
            console.log(event.target);
            const price = document.getElementById("price");
            price.classList.toggle('is-active');
        },
        openTopUpModal(event){
            console.log(event.target);
            this.value_title = "Choose top-up value"
            const price = document.getElementById("price");
            price.classList.toggle('is-active');
        }
    }
}
</script>
<style scoped>
img {
    height: 520px;
    max-width: 100%;
}
</style>