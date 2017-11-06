import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index.up.vue';
import searchlist from '../pages/searchlist.vue';
import cantfind from '../pages/404.vue';
import log from '../pages/log.vue';
import shoppingcar from '../pages/shoppingcar.vue';
import detail from '@/pages/detail.vue';
import jiage from '../components/jiage.vue';
import moren from '../components/moren.vue';
import rexiao from '../components/rexiao.vue';
import shaixuan from '../components/shaixuan.vue';
import xinpin from '../components/xinpin.vue';
import sr from '../pages/sr.vue';
import sdetail from '../pages/sdetail.vue';
import register from '../pages/register.vue'
Vue.use(Router)
export default new Router({
  routes: [
  	{
  		path:'/register',
  		component:register
  	}
  	,
  	{
  		path:'/sdetail',
  		component:sdetail,
  		name:'sdetail'
  	}
  	,
  	{
  		path:'/sr',
  		component:sr,
  		name:'sr'
  	}
  	,
  	{
  		path:'/detail',
  		component:detail,
  		name:'detail'
  	},
	  {
	  	path:'/shoppingcar',
	  	component:shoppingcar,
	  	name:'SC'
	  }
	  ,
	  {
	  	path:'/log',
	  	component:log
	  }
	  ,
	  {
			path:'/',
			component:index
		}
		,
		{
			path:'/searchlist',
			component:searchlist,
			children:[
				{
					path:'/jiage',
					component:jiage
				},
				{
					path:'/moren',
					component:moren
				}
				,
				{
					path:'/rexiao',
					component:rexiao
				}
				,
				{
					path:'/shaixuan',
					component:shaixuan
				}
				,
				{
					path:'/xinpin',
					component:xinpin
				}
			]
		}
		,
		{
			path:'/*',
			component:cantfind
		}
  ]
})
