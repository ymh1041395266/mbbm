<template lang="html">
	<div id="root">
		<div class="up">
			<img :src="Imgurl" alt="" />
		</div>
		<div class="middle">
			<div class="title">
				{{title}}
			</div>
			<div class="price">
				￥{{price}}
			</div>
		</div>
		<div class="foot">
			<img src="../../static/tm.gif" alt="" />
			<div class="name">
				<span>来自：{{nick}}</span>
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
				msg:'',
				title:'',
				price:'',
				nick:'',
				Imgurl:''
			}
		},
		methods:{
			addstore(){
				var datalist={
					title:this.title,
					price:this.price,
					Imageurl:this.Imgurl,
					count:'1'
				};
				shop.returnData(datalist);
			}
		},
		mounted(){
			this.title = this.$route.query.title;
			this.price = this.$route.query.price;
			this.nick = this.$route.query.nick;
			this.Imgurl = this.$route.query.Imgurl;
		}
	}
</script>

<style lang="scss">
@import "../styles/detail.scss";
</style>