<template lang="html">
	<div class="car-body">
		<div class="title">
			购物车
		</div>
		<div class="body">
			<div v-for="list in products" class="goodshow">
				<img :src="list.Imageurl" alt="" />
				<div class="name">
					{{list.title}}	
				</div>
				<div class="price">
					<span>单价：</span>￥{{list.price}}<br>
					<span>数量：</span>{{count}}<br>
					<span>总价：</span>{{count*list.price}}
				</div>
				<div class="opr">
					<button @click="add(list.count)">增加</button><br />
					<button @click="reduce(list.count)">减少</button><br />
					<button @click="del(list.Imageurl,list.price)">删除</button><br />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import shop from '../api/shop'
import { mapGetters } from 'vuex'
import Vue from 'vue';
import Mint from 'mint-ui';
import { MessageBox } from 'mint-ui';
Vue.use(Mint);
	export default{
		data(){
			return{
				datalist:[],
				count:1
			}
		},
		methods:{
			add(){
				this.count+=1;
			},
			reduce(){
				if(this.count>1){
					this.count-=1
				}
				else{
					Mint.MessageBox('提示','亲！可不能再少了！');
				}
			},
			del(){
				this.count=0;
			}
		},
		mounted(){
   		 this.$store.dispatch('getAllProducts');
		},
	  computed: {
	    ...mapGetters({
	      products: 'allProducts'
	    })
	  }
	}
</script>

<style lang="scss">
	@import '../styles/car.scss';
	.car-body{
		@include flex();
		width: 100%;
		height:2.56rem;
		overflow-y:scroll;
		.body{
			@include flexbox();
			@include flex-direction(column)
			.goodshow{
				@include flex();
				@include flexbox();
				@include flex-direction(row)
				width:100%;
				img{
					width:1rem;
					height:1rem;
				}
				.opr{
					button{
						border-radius: 0.04rem;
						background: darkred;
						color: white;
					}
				}
			}
		}
	}
</style>