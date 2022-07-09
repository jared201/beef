<template>
    <div class="columns">
        <div class="column level">
            <div class="panel has-background-info mr-3 ml-3 level-right">
                <strong class="has-text-light is-centered">Pay with GCash</strong>
                <div class="panel-block">                    
                    <span class="icon is-large level-right level-item"><img :src="gcash"/></span>
                    
                </div>
                
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column level">
            <div class="panel has-background-light mr-3 ml-3 level-right">
                <strong>Pay with credit/debit card</strong>
                <div class="panel-block">
                    <span class="icon is-large level-right level-item"><img :src="credit_card"/></span>
                </div>
            </div>
            
        </div>
    </div>
    <div class="columns">
        <div class="column level">
            <div class="panel has-background-grey-light mr-3 ml-3 mb-3 level-right">
                <strong>Pay with Bitcoin(Lightning Network)</strong>
                <div class="panel-block">
                    <span class="icon is-large level-item"><img :src="bitcoin"/></span>
                </div>
            </div>            
        </div>
    </div>
</template>
<script>
export default {
    name: "Payments",
    setup() {
        
    },
    data(){
        return {
            msg: "Payments Available",
            gcash: require('../assets/gcash-logo.png'),
            credit_card: require('../assets/credit-card.png'),
            bitcoin: require('../assets/bitcoin-logo.png'),
        }
    },
    
}
</script>
<style>

</style>