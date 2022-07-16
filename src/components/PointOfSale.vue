<template>
    <div class="container has-background-light">
        <div class="panel-heading has-background-info">Point Of Sale Demo </div>
        <div class="columns">
            <div class="column">
                <div class="panel">                    
                    <div class="notification is-warning">
                       Left Column
                       <div class="container ">
                            Expanded

                       </div>
                       <div class="container ">
                            Expanded
                            
                       </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="panel">
                    <div class="notification is-primary">
                        Right column First Row
                        <input class="input is-large align-right" readonly type="text" placeholder="$0.00"/>
                    </div>
                    
                </div>
                <div class="panel">
                    <div class="notification is-primary">
                        Right column Second Row
                    </div>
                </div>
            </div>
        </div>                        
    </div>
</template>
<script>
export default {
    name : "PointOfSale",
    setup() {

    },
    data(){
        return {
            msg: "Point of sale demo"
        }
    }
}
</script>
<style scoped>
input {
    text-align: right;
}
</style>>

