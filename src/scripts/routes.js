import index from './pages/index.up.vue'
import news from './pages/news.vue';
import female from './pages/female.vue';
import choice from './pages/choice.vue';
import hot from './pages/hot.vue';
export default[
	{
		path:'/',
		component:index
	}
	,
	{
		path:'/news',
		component:news
	}
	,
	{
		path:'/female',
		component:female
	}
	,
	{
		path:'/choice',
		component:choice
	}
	,
	{
		path:'/hot',
		component:hot
	}
]
