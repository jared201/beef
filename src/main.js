
import Hero from './components/Hero.vue'
import App from './App.vue'
import { createApp } from 'vue'
import 'bulma/css/bulma.css'
import './assets/sideber.css'
import Cards from './components/Cards.vue'
import { createRouter , createWebHashHistory }from 'vue-router'
import Buttons from "./components/Buttons.vue"

const routes = [
    {
        path: "/",
        name: "Hero",
        component: Hero
    },
    {
        path: "/cards",
        name: "Cards",
        component: Cards
    },
    
    {
        path: "/buttons",
        name: "Buttons",
        component: Buttons
    }
    
  
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');

