<template>
    <div class="container has-background-light sidebar-sensitive">
        <div class="panel-heading has-background-info">Point Of Sale Demo </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-parent ">                    
                    <div class="tile is-child is-warning">
                       Left Column
                       <div class="image">
                            <img :src="burger"/>
                       </div>
                       <div class="image is-square">
                            <img :src="chicken"/>
                       </div>
                       <div class="image is-square">
                            <img :src="fries"/>
                       </div>
                       <div class="image">
                            <img :src="pizza"/>
                       </div>
                    </div>
                    <div class="tile is-child ">
                        <div class="message">Second column</div>                    
                        <div class="tile  notification is-warning pb-6">
                            <strong>Burger</strong>
                        </div>
                        <div class="tile notification is-warning pb-6  pt-6">
                            <p class="is-centered"><strong>Chicken</strong></p>
                        </div>
                        <div class="tile notification is-warning">
                            <p class="pt-6"><strong>Fries</strong></p>
                        </div>
                        <div class="tile notification is-warning ">
                            <p class="pt-6"><strong>Pizza</strong></p>
                        </div>
                    </div>
                    <div class="tile is-child">
                        <div class="message">Third Column</div>
                    </div>
                </div>
                
            </div>
            <div class="column">
                <div class="panel">
                    <div class="notification is-primary">
                        <strong>Tap the white box below to bring up the keypad</strong>
                        <input class="input is-large align-right js-kioskboard-input" data-kioskboard-type="numpad"
                            data-kioskboard-placement="bottom" data-kioskboard-theme="flat" readonly type="text" placeholder="$0.00"/>                            
                    </div>
                    
                </div>
                <div class="panel">
                    <div class="notification is-primary ">
                        Right column Second Row
                    </div>
                </div>
            </div>
        </div>                        
    </div>
</template>

<script>
import Kioskboard from 'kioskboard'
import { onMounted } from '@vue/runtime-core'
import NavBarHeaderVue from './NavBarHeader.vue';

export default {
    name : "PointOfSale",
    setup() {
      onMounted(()=> {        
        console.log("setting up kioskboard...")
         Kioskboard.init({
            theme: 'flat',
            type: 'numpad',
            //cssAnimations: true,
           keysJsonUrl: 'kioskboard/dist/kioskboard-keys-english.json',
           keysArrayOfObjects:[{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}],
            language: 'en',
            
         })
         console.log("running kioskboard")
         Kioskboard.run('.js-kioskboard-input')
         var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
        for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
             sidebarSensitiveDivs[i].addEventListener('click', function(event) {
             NavBarHeaderVue.methods.closeNav(event);
            });
      }
      });
    },
    data(){
        return {
            msg: "Point of sale demo",
            pizza: require('../assets/classic-pizza.jpeg'),
            burger: require('../assets/burger.png'),
            chicken: require('../assets/fried-chicken.jpeg'),
            fries: require('../assets/Crispy-French-fries-9.jpeg'),
        }
    },
    components: { 
        
    }
}
</script>
<style scoped>
input {
    text-align: right;
}
</style>>

