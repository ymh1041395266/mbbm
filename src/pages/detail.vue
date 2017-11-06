<template lang="html">
	<div id="root">
		<div class="up">
			<img :src="msg.item_imgs.item_img[0].url" alt="" />
		</div>
		<div class="middle">
			<div class="title">
				{{msg.title}}
			</div>
			<div class="price">
				￥{{msg.price}}
			</div>
		</div>
		<div class="foot">
			<img src="../../static/tm.gif" alt="" />
			<div class="name">
				<span>来自：{{msg.nick}}</span>
			</div>
		</div>
		<div class="bottom">
			<router-link class="btn" tag="button" @click.native="addstore" to="/shoppingcar">
				点击加入购物车
			</router-link>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Vuex from 'vuex';
	import { mapGetters } from 'vuex'
	import axios from 'axios';
	import shop from '../api/shop'
	export default{
		data(){
			return {
				id:'',
				msg:''
			}
		},
		methods:{
			addstore(){
				var datalist={
					title:this.msg.title,
					price:this.msg.price,
					Imageurl:this.msg.item_imgs.item_img[0].url,
					count:'1'
				};
				shop.returnData(datalist);
			}
		},
		mounted(){
			this.id = this.$route.query.id
			 axios.get('/api/mc/webItemDetail?itemId='+this.id+'&r=iDetail')
				.then((res)=>{
					this.msg=JSON.parse(res.data.tf8_item).item_get_response.item;
					console.log(this.msg)
			})
		}
	}
</script>

<style lang="scss">
@import "../styles/detail.scss";
</style>