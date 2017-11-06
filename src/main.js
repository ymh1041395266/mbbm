Vue.config.productionTip = false
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store/index.js'
import "./styles/app.scss"
//import Index from './pages/index.up.vue'

new Vue({
	router,
	store
}).$mount('#app')

