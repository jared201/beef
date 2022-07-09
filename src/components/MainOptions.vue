<template>
    <div class="columns tile mt-6">
        
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
            <div class="panel has-background-success ">
                <p class="panel-heading is-centered has-background-success">
                    Press here to buy train tickets
                </p>
                <img :src="left_img" alt="Placeholder image"/>
            </div>
        </div>
        <div class="column">
            <div class="panel  ">
                <p class="panel-heading is-centered has-background-light">
                    Press here to top up your card
                </p>
                <img :src="right_img" alt="Placeholder image" height="500px"/>
            </div>
            
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