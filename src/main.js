
import Hero from './components/Hero.vue'
import App from './App.vue'
import { createApp } from 'vue'
import 'bulma/css/bulma.css'
import './assets/sideber.css'
import 'svgmap/dist/svgMap.min.css'
import 'kioskboard/dist/kioskboard-2.2.0.min.css'
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
import {faLock, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Charts from './components/Charts.vue'
import TrainKiosk from './components/TrainKiosk.vue'
import PointOfSale from './components/PointOfSale.vue'
import Dashboard from './components/Dashboard';
import Pricing  from "@/components/Pricing.vue";
import { createMetaManager, defaultConfig, resolveOption} from "vue-meta";
import { createPinia } from "pinia";
import TouchPanel from "@/components/touchscreen/TouchPanel.vue";

const decisionMaker5000000 = resolveOption((prevValue, context) => {
    const { uid = 0 } = context.vm || {}
    if (!prevValue || prevValue < uid) {
        return uid
    }
})

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
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/dms",

    },
    {
        path: "/pricing",
        name: "Pricing",
        component: Pricing
    },
    {
        path: "/touch_panel",
        name: TouchPanel,
        component: TouchPanel,

    },
    {
        path: "/garage_panel",
        name: "GaragePanel",
        component: () => import("@/components/touchscreen/GaragePanel.vue")
    }
    
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

library.add(faEnvelope);
library.add(faTwitter, faLock, faUser, faHouse, faPhone, faCalendar, faPaperPlane, 
    faUpload, faGlobeAmericas, faGithub, faPerson, faUser, faNewspaper, faAngleDown);

const app = createApp(App);
const metaManager = createMetaManager({defaultConfig, esi: {
    group: true, namespaced: true, attributes: ['src', 'test', 'text']
    },}, decisionMaker5000000);
const pinia = createPinia();
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(metaManager);
app.use(pinia);

app.mount('#app');

