<template lang="html" id="news">
	<div id="searchlistContainer">
		<div class="head">
				<router-link to='/' class="back" tag="div">
					<i class="yo-ico">
						&#xf07d;
					</i>
					<b>返回</b>
				</router-link>
			<span>选包中心</span>
			<div class="topsign">
			<router-link to='/shoppingcar' tag="a" class="log">
				<img src="../assets/media/index-shoppingcar.gif" alt="" />
			</router-link>
				<img @click="showTab" src="../assets/media/etc.gif" alt="" />
			</div>
		</div>
		<section style="width: 100%;height: auto;">
			<div class="chooselist" :class={show:active}>
					<ul>
						<router-link to='/' tag="li">
							<i class="yo-ico">&#xf07b;</i><b>首页</b>
						</router-link>
						<li><i class="yo-ico">&#xf078;</i><b>类目</b></li>
						<li><i class="yo-ico">&#xf077;</i><b>我的</b></li>
						<li><i class="yo-ico">&#xf04b;</i><b>搜索</b></li>
					</ul>
			</div>
			<div class="nav">
				<ul>
					<li>
						<router-link  active-class="active" to='/moren' tag="b">
								默认
						</router-link>
					</li>
					<li>
						<router-link active-class="active" to='/xinpin' tag="b">
							新品
						</router-link>
					</li>
					<li>
						<router-link active-class="active" to='/rexiao' tag="b">
							热销
						</router-link>
					</li>
					<li>
						<router-link active-class="active" to='/jiage' tag="b">
							价格
						</router-link>
					</li>
					<li>
						<router-link active-class="active" to='/shaixuan' tag="b">
							筛选
						</router-link>
					</li>
				</ul>
			</div>
			<router-view></router-view>
		</section>
		<Footer style="overflow: hidden;"></Footer>
	</div>
</template>

<script>
import axios from 'axios';
import Footer from './footer1.0.vue';
export default{
	data(){
		return {
			active:true,
			count:0,
			sec:'',
			coming:true
		}
	},
	components:{
		Footer: Footer
	},
	methods:{
		select(){
			this.sec='selected'
		},
		showTab(){
			if(this.count%2==0){
				this.active=true
				this.count++
			}
			else{
				this.active=false
				this.count++
			}
		}
	},
	mounted(){
		this.coming=false
		axios.get('/api/mc/memberAjax?pageNo=2&focusId=member_34&categoryId=300')
		.then((res)=>{
		this.datalist=res.data;
		})
	}
}	
</script>
<style lang="scss">
@import '../styles/footer.scss';
@import '../styles/searchlist.scss';
</style>