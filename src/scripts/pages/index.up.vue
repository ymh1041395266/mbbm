<template lang="html">
		<div class="touch">
			<div class="move">
				<header>
					<a class="logo" href="#">
						<img src="../../../dev/media/images/index-mdd-logo.gif" alt="" />
					</a>
					<a class="shoppingcars" href="#">
						<img src="../../../dev/media/images/index-shoppingcar.gif" alt="" />
					</a>
					<a class="log" href="#">
						<img src="../../../dev/media/images/index-log.gif" alt="" />
					</a>
				</header>
				<section>
					<div class="search">
						<input type="text" placeholder="输入关键词或商品编号" />
					</div>
					<div class="banner" style="position: relative;overflow: hidden;">
							<mt-swipe :auto="4000">
								  <mt-swipe-item>
								  	<img style="position: absolute;width:100%;height: 100%;" src="../../media/b1.jpg" />
								  </mt-swipe-item>
								  <mt-swipe-item>
								  	<img style="position: absolute;width:100%;height: 100%;" src="../../media/b2.jpg" />
								  </mt-swipe-item>
								  <mt-swipe-item>
								  	<img style="position: absolute;width:100%;height: 100%;" src="../../media/b3.jpg" />
								  </mt-swipe-item>
								  <mt-swipe-item>
								  	<img style="position: absolute;width:100%;height: 100%;" src="../../media/b4.jpg" />
								  </mt-swipe-item>
							</mt-swipe>
					</div>
					<div class="nav">
						<ul>
							<router-link to='/news'>
								<li><a href="#" class="new">
									<img src="../../../dev/media/images/index-nav1.gif" alt="" />
								</a></li>
							</router-link>
							<router-link to='/female'>
								<li><a href="#" class="female">
									<img src="../../../dev/media/images/index-nav2.gif" alt="" />
								</a></li>
							</router-link>
							<router-link to='/hot'>
								<li><a href="#" class="hot">
									<img src="../../../dev/media/images/index-nav3.gif" alt="" />
								</a></li>
							</router-link>
							<router-link to='/choice'>
								<li><a href="#" class="select">
									<img src="../../../dev/media/images/index-nav4.gif" alt="" />
								</a></li>
							</router-link>	
						</ul>
					</div>
					<div class="templates">
						<!--模板引用地方-->
							<ul>
								<li v-for="(list,i) in datalist":key="i">
									<div id="showfloor">
										<div class="img">
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
					<Footer style="overflow: hidden;"></Footer>
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
import { Swipe,SwipeItem } from 'mint-ui';
export default{
	data(){
		return {
			datalist:{}
		}
	},
	components:{
		Footer
	},
	mounted(){
	 axios.get('/vip/repData')
	 .then((res)=>{
	    this.datalist=res.data.data;
	    const a=res.data.data;
	    console.log(a[2].FloorCFRelations[0].CarouselFigure.url);
//	    a[I]
	 });
	}
}
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

</script>



<style lang="scss">
	@import '../../styles/app.scss';
</style>

