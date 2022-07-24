<template>
    <div class="container has-background-light sidebar-sensitive">
        <div class="panel-heading has-background-info">Point Of Sale Demo Tap Item to Add </div>
        <div class="tile is-ancestor"> 
            
            <div class="tile is-parent">
                <div class="tile is-parent ">                    
                    <div class="tile is-child is-warning">
                      
                       <div class="image" @click="addBurger">
                            <img :src="burger"/>
                       </div>
                       <div class="image is-square" @click="addChicken">
                            <img :src="chicken"/>
                       </div>
                       <div class="image is-square" @click="addFries">
                            <img :src="fries"/>
                       </div>
                       <div class="image" @click="addPizza">
                            <img :src="pizza"/>
                       </div>
                    </div>
                    <div class="tile is-child ">
                        <div class="message"></div>                    
                        <div class="tile  notification is-warning pt-6 pb-6 ml-4" @click="addBurger">
                            <strong>Burger</strong>
                        </div>
                        <div class="tile notification is-warning pb-6  pt-6 mb-6 mt-6 ml-4" @click="addChicken">
                            <p class="is-centered"><strong>Chicken</strong></p>
                        </div>
                        <div class="tile notification is-warning pb-auto ml-4" @click="addFries">
                            <p class="mt-6 pb-6"><strong>Fries</strong></p>
                        </div>
                        <div class="tile notification is-warning pt-3 mt-6 ml-4" @click="addPizza">
                            <p class="pb-3 pt-6 mt-auto mb-auto"><strong>Pizza</strong></p>
                        </div>
                    </div>
                    <div class="tile is-child">
                        <div class="message"></div>
                        <div class="tile  notification is-danger pt-6 pb-6 pr-3 ml-4" @click="addBurger">
                            <strong>$5.00</strong>
                        </div>
                        <div class="tile notification is-danger pb-6  pt-6 mb-6 mt-6 ml-4" @click="addChicken">
                            <p class="is-centered"><strong>$3.00</strong></p>
                        </div>
                        <div class="tile notification is-danger pb-auto ml-4" @click="addFries">
                            <p class="mt-6 pb-6"><strong>$0.99</strong></p>
                        </div>
                        <div class="tile notification is-danger pt-3 mt-6 ml-4" @click="addPizza">
                            <p class="pb-3 pt-6 mt-auto mb-auto"><strong>$15.99</strong></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="tile is-parent is-vertical mt-6">
                <div class="tile is-child  mt-3 ">
                    <div class="tile is-vertical notification is-primary ">
                        <strong>Tap the white box below to bring up the keypad</strong>
                        <input id="amount" class="input is-large align-right js-kioskboard-input has-background-light " data-kioskboard-type="numpad"
                            data-kioskboard-placement="bottom" data-kioskboard-theme="flat" readonly type="number" placeholder="$0.00"/>                            
                    </div>
                    <div class="tile is-child ">
                    <div class=" tile notification is-primary pb-12">                        
                        <table id="item" class="table is-fullwidth is-bordered">
                            <thead>Items Ordered</thead>
                            <tr>
                                <th>Qty</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </table>
                    </div>
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
        
    },
    methods: {
        addBurger() {
            const table = document.getElementById('item');
            const row = table.insertRow(1);
            row.id = 'burger';
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            cell1.innerHTML = '1';
            cell2.innerHTML = 'Burger';
            cell3.innerHTML = '$5.00'
            cell4.innerHTML = "<button id='burger-button' class='button'>Cancel</button>"
            const button = document.getElementById('burger-button');
            button.addEventListener('click', () => {
                var burgerRow = document.getElementById('burger');
                burgerRow.remove();                          
                var currentValue =  document.getElementById('amount').value;
                var newValue = parseFloat(currentValue) - 5.00;
                document.getElementById('amount').value = newValue;    
            });
            var currentValue = document.getElementById('amount').value
            console.log("Current value: " + currentValue);
            if (currentValue == ''){
                currentValue = 0;
            }
            const amount = parseFloat(currentValue) + 5.00;
            console.log ("Amount: " + amount);
            document.getElementById('amount').value = amount;
        },
        addChicken() {
            const table = document.getElementById('item');
            const row = table.insertRow(1);
            row.id = 'chicken';
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            cell1.innerHTML = '1';
            cell2.innerHTML = 'Chicken';
            cell3.innerHTML = '$3.00'
            cell4.innerHTML = "<button id='chicken-button' class='button'>Cancel</button>"
            const button = document.getElementById('chicken-button');
            button.addEventListener('click', () => {
                var chickenRow = document.getElementById('chicken');
                chickenRow.remove();                         
                var currentValue =  document.getElementById('amount').value;
                var newValue = parseFloat(currentValue) - 3.00;
                document.getElementById('amount').value = newValue;    
            });
            var currentValue = document.getElementById('amount').value
            console.log("Current value: " + currentValue);
            if (currentValue == ''){
                currentValue = 0;
            }
            const amount = parseFloat(currentValue) + 3.00;
            console.log ("Amount: " + amount);
            document.getElementById('amount').value = amount;            
        },
        addFries(){
            const table = document.getElementById('item');
            const row = table.insertRow(1);
            row.id = 'fries';
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            cell1.innerHTML = '1';
            cell2.innerHTML = 'Fries';
            cell3.innerHTML = '$0.99'
            cell4.innerHTML = "<button id='fries-button' class='button'>Cancel</button>"
            const button = document.getElementById('fries-button');
            button.addEventListener('click', () => {
                var friesRow = document.getElementById('fries');
                friesRow.remove();                         
                var currentValue =  document.getElementById('amount').value;
                var newValue = parseFloat(currentValue) - 0.99;
                document.getElementById('amount').value = newValue;    
            });
            var currentValue = document.getElementById('amount').value
            console.log("Current value: " + currentValue);
            if (currentValue == ''){
                currentValue = 0;
            }
            const amount = parseFloat(currentValue) + 0.99;
            console.log ("Amount: " + amount);
            document.getElementById('amount').value = amount;            
        },
        addPizza() {
            const table = document.getElementById('item');
            const row = table.insertRow(1);
            row.id = 'pizza';
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            cell1.innerHTML = '1';
            cell2.innerHTML = 'Pizza';
            cell3.innerHTML = '$15.99'
            cell4.innerHTML = "<button id='pizza-button' class='button'>Cancel</button>"
            const button = document.getElementById('pizza-button');
            button.addEventListener('click', () => {
                var friesRow = document.getElementById('pizza');
                friesRow.remove();                         
                var currentValue =  document.getElementById('amount').value;
                var newValue = parseFloat(currentValue) - 15.99;
                document.getElementById('amount').value = newValue;    
            });
            var currentValue = document.getElementById('amount').value
            console.log("Current value: " + currentValue);
            if (currentValue == ''){
                currentValue = 0;
            }
            const amount = parseFloat(currentValue) + 15.99;
            console.log ("Amount: " + amount);
            document.getElementById('amount').value = amount;   
        }
    }
}

</script>

<style scoped>
input {
    text-align: right;
}
</style>>

