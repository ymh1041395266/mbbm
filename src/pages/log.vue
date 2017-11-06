<template lang="html">
	<div class="car-roots">
		<Header style="overflow: hidden;"></Header>
		<section>
			<div class="logging">
				<div class="logging1">
					<input v-model="Id" style="padding-left: .1rem;" type="text" placeholder="  账  号  :" />
					<input v-model="pwd" type="text" placeholder="  密  码  :" style="margin-top: .2rem;padding-left: .1rem;"/>
				</div>
				<div class="logging2">
					<button @click="log">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
					<span>忘记密码?</span>
				</div>
				<div class="logging3">
					<p>其他账号登录</p>
					<ul>
						<li style="margin-left: .15rem;">
							<img src="../assets/media/aliypay.gif" alt="" />
						</li>
						<li>
							<img src="../assets/media/aliypay.gif" alt="" />
						</li>
						<li>
							<img src="../assets/media/aliypay.gif" alt="" />
						</li>
					</ul>
				</div>
				<div class="logging4">
					<p>没有账号?</p>
					<router-link to="/register" tag="p" style="text-decoration:underline;color: #C6204D;">
						立即注册
					</router-link>
				</div>
			</div>
		</section>
		<Footer style="overflow: hidden;"></Footer>
	</div>
</template>


<script>
import Header from './head.vue';
import Footer from './footer1.0.vue';
import Vue from 'vue';
import Mint from 'mint-ui';
import { MessageBox } from 'mint-ui';
Vue.use(Mint);
export default{
	data(){
		return {
			Id:'',
			pwd:''
		}
	},
	components:{
		Header: Header,
		Footer: Footer
	},
	methods:{
		log(){
			if(this.Id&&this.pwd){
				Mint.MessageBox('提示','登录成功');
			}
			else{
				Mint.MessageBox('提示','用户名密码不能为空');
			}
		}
	}
}	
</script>
<style lang="scss">
	@import '../styles/shopping.scss';
</style>