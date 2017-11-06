<template lang="html">
	<div id="root">
		<Head></Head>
		<section>
			<div class="title">
				<span>
					会员注册:
				</span>
			</div>
			<div class="rb">
				<input type="text" @keyup="ver1" placeholder="手机号：" v-model="number"/><img :class="{true:isActive1}" src="../../static/cuo.gif" alt="" />
				<input type="text" @keyup="ver2" placeholder="输入密码：" v-model="password"/><img :class="{true:isActive2}" src="../../static/cuo.gif" alt="" />
				<input type="text" @keyup="ver3" placeholder="确认密码：" v-model="Tpassword"/><img :class="{true:isActive3}" src="../../static/cuo.gif" alt="" /><br />
				<img :class="{true:isActive4}" src="../../static/cuo.gif" alt="" /><input class="identify" @keyup="ver4" type="text" placeholder="验证码：" v-model="iden"/>
			</div>
			<div class="btn">
				<button @click="identify">注&nbsp;&nbsp;&nbsp;册</button>
			</div>
		</section>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from './footer1.0.vue';
import Head from './head.vue';
import Vue from 'vue';
import Mint from 'mint-ui';
import { MessageBox } from 'mint-ui';
Vue.use(Mint);
export default{
	data(){
		return {
			number:'',
			password:'',
			Tpassword:'',
			iden:'',
			isActive1:true,
			isActive2:true,
			isActive3:true,
			isActive4:true
		}
	},
	components:{
		Foot,
		Head
	},
	methods:{
		ver1(){
			var zz1=/^[0-9]{11}$/;
			if(zz1.test(this.number)){
				this.isActive1=true
			}
			else{
				this.isActive1=false
			}
		},
		ver2(){
			var zz2=/^[0-9a-zA-Z]{6,20}$/;
			if(zz2.test(this.password)){
				this.isActive2=true
			}
			else{
				this.isActive2=false
			}
		},
		ver3(){
			if(this.password==this.Tpassword){
				this.isActive3=true
			}
			else{
				this.isActive3=false
			}
		},
		ver4(){
			var zz3=/^[0-9]{4}$/
			if(zz3.test(this.iden)){
				this.isActive4=true
			}
			else{
				this.isActive4=false
			}
		},
		identify(){
			if(this.number==''||this.password==''||this.Tpassword==''||this.iden==''){
				Mint.MessageBox('提示','请检查信息是否填写完整');
			}
			else if(this.isActive1&&this.isActive2&&this.isActive3&&this.isActive4){
				Mint.MessageBox('提示','注册成功');
			}
			else{
				Mint.MessageBox('提示','注册失败有信息不正确');
			}
		}
	}
}
</script>

<style lang="scss">
@import "../styles/register.scss";
	@import '../../node_modules/mint-ui/lib/style.css';
	.true{
		display: none;
	}
</style>