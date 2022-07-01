import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret , faAngleDoubleRight, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router"


library.add(faUserSecret, faAngleDoubleRight, faCloudUploadAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content'
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
