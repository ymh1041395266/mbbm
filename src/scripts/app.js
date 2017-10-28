import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

import Index from './pages/index.up.vue'
import Car from './pages/shoppingcar.vue'

Vue.use(VueRouter)

const router=new VueRouter({
	routes,
	mode:'history'
})

new Vue({
el: '#root',
	router
})

