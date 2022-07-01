import VueRouter from "vue-router";
import Vue from 'vue' 
import Cards from "./components/Cards.vue"

const routes = [
    {
        path: "/cards",
        name: "cards",
        component: Cards,
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router
