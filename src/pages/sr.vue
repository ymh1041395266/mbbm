<template lang="html">
	<div id="root">
		<div class="top">
			<router-link to="/">
				<img src="../../static/back.gif" alt="" />
			</router-link>
			{{keyword}}
			<span style="right: .3rem;">筛选</span>
		</div>
		<div class="searching">
			<ul>
				<!--模板-->
				<router-link v-for="list in lists" @click.native="toDetail(list.title,list.price,list.nick,list.img)" to="" tag="li">
					<div class="img" style="background: white;">
						<img :src="list.img" alt="" />
					</div>
					<div class="words" style="background: white;">
						<span style="color: red;">{{list.title}}</span><br />
						<span>价格：</span>￥<span style="color: brown;">{{list.price}}</span><br />
						<span>来自店铺：</span><span style="color: darkblue;">{{list.nick}}</span><br />
						<span>货物地点：</span><span style="color: darkgreen;">{{list.seller_loc}}</span><br />
						<button>加入购物车</button>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				keyword:"",
				lists:[]
			}
		},
		methods:{
				toDetail(title,price,nick,Imgurl){
				this.$router.push({name:'sdetail',query:{title:title,price:price,nick:nick,Imgurl:Imgurl}})
			}
		},
		mounted(){
			this.keyword=this.$route.query.keyword;
			console.log(this.keyword)
				 axios.get('/tm/m/search_items.htm?page_size=20&page_no=1&q='+this.keyword+'&type=p&tmhkh5=&spm=a220m.6910245.a2227oh.d100&from=mallfp..m_1_searchbutton')
				 .then((res)=>{
				 	this.lists=res.data.item
				 });
		}
	}
</script>

<style lang="scss">
	@import '../styles/sr.scss';
	#root{
		width: 100%;
		height: 100%;
		@include flexbox();
		@include flex-direction(column);
	}
</style>