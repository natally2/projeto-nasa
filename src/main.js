import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar,faSearch,faPhone,faVideo,faBan,faPaperPlane,faCircle,faHome,faUser,faPen} from '@fortawesome/free-solid-svg-icons'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
library.add(faStar,faSearch,faPhone,faVideo,faBan,faPaperPlane,faCircle,faHome,faUser,faPen)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
