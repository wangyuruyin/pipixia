<template>
	<div>
		<div class="header">
			<span class="logo">尖叫设计</span>
			<div class="ipt">
				<i class="iconfont icon-search"></i>
				<router-link to="/Search" tag="input" placeHolder="搜索我的尖叫好物">
	     		</router-link>
	      	</div>
		</div>
		<ul class="menu">
			<router-link to="/Home/Recommend" tag="li" activeClass="active"><span>推荐</span></router-link>
			<router-link to="/Home/Furniture" tag="li" activeClass="active"><span>家具</span></router-link>
			<router-link to="/Home/Furnishing" tag="li" activeClass="active"><span>家居</span></router-link>
			<router-link to="/Home/Activity" tag="li" activeClass="active"><span>活动</span></router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import axios from 'axios'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	export default {

	}


</script>
<style lang="scss" scoped>
	*{
		margin:0;
		padding:0;
	}
	ul{
		list-style: none;
	}
	.header{
		padding: 10px;
		display: flex;
		height: 30px;
		line-height: 30px;
		font-weight: bold;
		background: white;
		span{
			width: 20%;
			padding-right: 10px;
			text-align: center;
		};
		.ipt{
			width:70%;
			border:1px solid #808080;
			border-radius: 20px;
			height: 100%;
			i{
				padding:0 10px 0 10px;
			}
			input{
				width: 80%;
				border:none;
				height: 80%;
			}
		}
	}
	.menu{
		display: flex;
		height: 40px;
		line-height:40px;
		li{
			flex:1;
			text-align: center;
			margin:0 20px 0 20px;
		}
		.active{
			border-bottom: 3px solid black;
		}		
	}
	body{

	}
</style>