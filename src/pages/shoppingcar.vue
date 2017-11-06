<template lang="html">
	<div class="roots">
		<Header></Header>
		<section>
			<Car></Car>
			<div class="bottom">
				<img src="../assets/media/bottom.gif" alt="" />
			</div>
		</section>
	</div>
</template>

<script>
import Header from './head.vue';
import Footer from './footer1.0.vue';
import Car from '../components/car.vue';

export default{
	data(){
		return {}
	},
	components:{
		Header: Header,
		Car:Car
	}
}	
</script>

<style lang="scss">
	@import '../styles/shoppingcar.scss';
	@import '../styles/head.scss';
	.roots{
		width: 100%;
		height: 442px;
		@include flexbox();
		@include flex-direction(column);
	}
</style>