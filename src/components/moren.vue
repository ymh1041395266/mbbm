<template lang="html" id="NewsDetail">
	<div id="root" style="text-align: center;">
			<img src="../assets/images/ajax-loader.gif" alt="" v-if="isl" />
		<ul class="display" v-if="!isl">
			<!--模板引用地方-->
			<router-link v-for="(list,i) in datalist" @click.native="toDetail(list.itemId)" to="" tag="li">
				<div class="things">
					<img :src="list.imageUrl" alt="" />
					<span>{{$route.params.id}}</span>
					<p>
						{{list.title}}
					</p>
					<p>
						￥{{list.price}}
					</p>
				</div>
			</router-link>
		</ul>
		<!--下一页-->
	</div>
</template>

<script>
	import axios from 'axios';
	const NewsDetail = { template: '#NewsDetail' };
	export default{
		props:{
		},
		data(){
			return {
				isl:true,
				datalist:{},
				Is:false
			}
		},
		methods:{
			toDetail(id){
				this.$router.push({name:'detail',query:{id:id}})
			}
		},
		mounted(){
			setTimeout(function(){
				this.isl=false
			}.bind(this),500)
			 axios.get('/api/mc/memberAjax?pageNo=2&focusId=member_34&categoryId=300')
				.then((res)=>{
				this.datalist=res.data;
			})
		}
	}
</script>

<style lang="scss">
@import "../styles/moren.scss";
	#root{
		width: 100%;
		height: auto;
		position: relative
	}
	.pages{
		display: block;
		float: left;
		width: 100%;
		height: .7rem;
		button{
			margin-top: .2rem;
			background: orange;
			font-size: .14rem;
			width: 1rem;
			color: white;
			border-radius: .08rem;
		}
	}
</style>