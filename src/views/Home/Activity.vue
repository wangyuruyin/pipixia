<template>
	<!-- 活动 -->
	<div class="Activity">
		<div class="swiper-container one" ref="myswiper">
		    <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in datalist">
					<img :src="item.bannerImgSrc" class="lunbo" >
				</div>			
			</div>
			<div class="swiper-pagination"></div>	
		</div>
		<p class="now">限时抢购</p>
		<div v-for="item in piclist">
			<img :src="item.moduleContent.bannerImgSrc" class="pic2">
		</div>
		<div class="five">
			<p class="p">人气单品</p>
			<div v-for="data in onlylist" class="four">
				<img :src="data.productImg" class="pic3">
				<p>{{data.productName}}</p>
				<span>￥{{data.originalPrice}}</span>
			</div>
			<p class="allv">查看全部</p>
		</div>
		<div class="down">已经到底了</div>		
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		data(){
			return{
				datalist:[],
				piclist:[],
				onlylist:[]
			}
		},
		mounted(){
			axios.get('/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=8&_=1553925598068').then(res=>{
				this.datalist = res.data.data.modules[0].moduleContent.banners
        		this.$nextTick(()=>{
            	var swiper = new Swiper('.one', {
		      		pagination: {
		        	el: '.swiper-pagination',
		      		},
	    			});
        		})
        		this.piclist = res.data.data.modules.slice(2,6)
        		this.onlylist = res.data.data.modules.slice(6)[0].moduleContent.products.slice(0,6)
        		console.log(this.onlylist)
			})			
		}
	}
</script>

<style lang="scss" scoped>
	*{
		margin:0;
		padding:0;
	}
	.lunbo{
		width: 100%;
	}
	.Activity .now{
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
	.pic2{
		width:100%;
	}
	.pic3{
		width: 100%;
	}
	.four{
		width: 49.8%;
		float: left;
		border-top: 1px solid #ccc;
		height: 273px;
	}
	.five{
		overflow: hidden;
	}
	.four:nth-of-type(1){
		border-right:1px solid #ccc;
	}
	.four:nth-of-type(3){
		border-right:1px solid #ccc;
	}
	.four:nth-of-type(5){
		border-right:1px solid #ccc;
		border-bottom:1px solid #ccc;
	}
	.four:nth-of-type(6){
		border-bottom:1px solid #ccc;
	}
	.five p {
	   	text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    padding-left: 10px;
	    padding-right: 10px;
	    height: 30px;
	    line-height:30px;
	    color: #808080
	}
	.five span{
	    padding-left: 10px;
	    padding-right: 10px;
	    display: block;
	    height: 50px;
	    line-height:30px;	
	}
	.five .p{
		text-align: center;
		height: 50px;
		line-height:50px;
	}
	.down{
		height: 130px;
		line-height:100px;
		text-align:center;
		font-size: 12px;
   		color:#303030;
   		background: white;
	}
	.five .allv{
		text-align: center;
		height: 80px;
		line-height:80px;
		font-size: 12px;
		color: black;
	}
</style>