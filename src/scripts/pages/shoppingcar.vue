<template lang="html">
	<div class="car-roots">
		<Header style="overflow: hidden;"></Header>
		<section>
			<div class="logging">
				<div class="logging1">
					<input type="text" placeholder="  账  号  :" />
					<input type="text" placeholder="  密  码  :" style="margin-top: .2rem;"/>
				</div>
				<div class="logging2">
					<button>登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
					<span>忘记密码?</span>
				</div>
				<div class="logging3">
					<p>其他账号登录</p>
					<ul>
						<li style="margin-left: .15rem;">
							<img src="../../media/aliypay.gif" alt="" />
						</li>
						<li>
							<img src="../../media/aliypay.gif" alt="" />
						</li>
						<li>
							<img src="../../media/aliypay.gif" alt="" />
						</li>
					</ul>
				</div>
				<div class="logging4">
					<p>没有账号?</p><p style="text-decoration:underline;color: #C6204D;">立即注册</p>
				</div>
			</div>
		</section>
		<Footer style="overflow: hidden;"></Footer>
	</div>
</template>


<script>
import Header from './head.vue';
import Footer from './footer1.0.vue';
export default{
	data(){
		return {}
	},
	components:{
		Header: Header,
		Footer: Footer
	}
}	
</script>
<style lang="scss">
	@import '../../styles/shopping.scss';
</style>