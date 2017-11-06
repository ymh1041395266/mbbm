<template lang="html">
		<div class="touch">
			<div class="move">
				<header>
					<a class="logo" href="#">
						<img src="../assets/media/index-mdd-logo.gif" alt="" />
					</a>
					<router-link to='/shoppingcar' tag="a" class="shoppingcars">
						<img src="../assets/media/index-shoppingcar.gif" alt="" />
					</router-link>
					<router-link to='/log' tag="a" class="log">
						<img src="../assets/media/index-log.gif" alt="" />
					</router-link>
				</header>
				<div :class="{showlist:TorF}">
				</div>
				<section>
					<div class="search">
						<input to='' @keyup.enter="goSearch()" v-model="message"  type="text" placeholder="输入关键词或商品编号"/>
					</div>
					<div class="banner">
						<!--mint-ui组件调用-->
							<mt-swipe :auto="4000">
								  <mt-swipe-item>
								  	<a href="#">
									  	<img src="../assets/media/b1.jpg" />
								  	</a>
								  </mt-swipe-item>
								  <mt-swipe-item>
								  	<a href="#">
									  	<img src="../assets/media/b2.jpg" />
								  	</a>
								  </mt-swipe-item>
								  <mt-swipe-item>
								  	<a href="#">
									  	<img src="../assets/media/b3.jpg" />
								  	</a>
								  </mt-swipe-item>
								  <mt-swipe-item>
								  	<a href="#">
									  	<img src="../assets/media/b4.jpg" />
								  	</a>
								  </mt-swipe-item>
							</mt-swipe>
					</div>
					<div class="nav">
						<ul>
							<router-link to='/moren'>
								<li><a href="#" class="new">
									<img src="../assets/media/index-nav1.gif" alt="" />
								</a></li>
							</router-link>
							<router-link to='/shaixuan'>
								<li><a href="#" class="female">
									<img src="../assets/media/index-nav2.gif" alt="" />
								</a></li>
							</router-link>
							<router-link to='/rexiao'>
								<li><a href="#" class="hot">
									<img src="../assets/media/index-nav3.gif" alt="" />
								</a></li>
							</router-link>
							<router-link to='/xinpin'>
								<li><a href="#" class="select">
									<img src="../assets/media/index-nav4.gif" alt="" />
								</a></li>
							</router-link>	
						</ul>
					</div>
					<div class="templates">
						<!--模板引用地方-->
							<ul>
								<li v-for="(list,i) in datalist":key="i">
									<div id="showfloor">
										<div class='img'>
											<img src="http://mbbimg.mbaobao.com/bd/web/10000/1/0630/360-300.jpg" alt="" />
										</div>
										<div class="right">
											<div class="rightup">
												<p class="a1">mbaobao</p>
												<p class="a2"><img :src="list.FloorCFRelations[0].CarouselFigure.url" alt=""></p>
											</div>
											<div class="rightdown">
												<p class="a1">mbaobao</p>
												<p class="a2"><img :src="list.FloorCFRelations[0].CarouselFigure.url" alt=""></p>
											</div>
										</div>
									</div>
								</li>
							</ul>
					</div>
					<Footer style="overflow: hidden;">
					</Footer>
					<!--往这里插-->
					<div id="rendertext"></div>
				</section>
				<router-view></router-view>
			</div>
		</div>
</template>

<script>
import Footer from './common-footer.vue';
import axios from 'axios';
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);
import { Swipe,SwipeItem } from 'mint-ui';
export default{
	data(){
		return {
			datalist:{},
			message:"",
			TorF:false,
			count:0
		}
	},
	components:{
		Footer
	},
	methods:{
		goSearch(){
				this.$router.push({name:'sr',query:{keyword:this.message}})
		}
	},
	mounted(){
	 axios.get('/vip/repData')
	 .then((res)=>{
	    this.datalist=res.data.data;
	    const a=res.data.data;
	 });
	}
}
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
</script>



<style lang="scss">
	@import '../../node_modules/mint-ui/lib/style.css';
	@import '../styles/app.scss';
	.test{
		background: lightgoldenrodyellow;
	}
	.showlist{
		width: 100%;
		background: yellow;
		height: auto;
		position: absolute;
		z-index: 10000;
		top: .8rem;
		border-radius: .1rem;
	}
</style>

