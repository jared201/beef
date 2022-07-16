
import Hero from './components/Hero.vue'
import App from './App.vue'
import { createApp } from 'vue'
import 'bulma/css/bulma.css'
import './assets/sideber.css'
import 'svgmap/dist/svgMap.min.css'
import ''
import Cards from './components/Cards.vue'
import { createRouter , createWebHashHistory }from 'vue-router'
import Buttons from "./components/Buttons.vue"
import ProgressBar from "./components/ProgressBar.vue"
import Checkbox from './components/Checkbox.vue'
import Radio from './components/Radio.vue'
import Message from "./components/Message.vue"
import Notifications from "./components/Notifications.vue"
import Forms from "./components/Forms.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import Charts from './components/Charts.vue'
import TrainKiosk from './components/TrainKiosk.vue'
import PointOfSale from './components/PointOfSale.vue'


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
    },
    {
        path: "/progress",
        name: "Progress",
        component: ProgressBar,   
    },
    {
        path: "/checkbox",
        name: "Checkbox",
        component: Checkbox
    },
    {
        path: "/radio",
        name: "Radio",
        component: Radio,
    },
    {
        path: "/message",
        name: "Message",
        component: Message
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
    },
    {
        path: "/forms",
        name: "Forms",
        component: Forms,
    },
    {
        path: "/charts/:location",
        name: "Charts",
        component: Charts
    },
    {
        path: "/charts",
        name: "NoLocation", //name should always be unique
        component: Charts,
    },
    {
        path: "/train",
        name: "TrainKiosk",
        component: TrainKiosk
    },
    {
        path: "/pos",
        name: "PointOfSale",
        component: PointOfSale,
    }
    
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

library.add(faEnvelope);
library.add(faTwitter, faLock, faUser, faHouse, faPhone, faCalendar, faPaperPlane, faUpload, faGlobeAmericas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');

