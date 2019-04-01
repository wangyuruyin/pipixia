<template>
	<!-- 家居 -->
	<div class="Furniture">
		<div class="swiper-container one" ref="myswiper">
		    <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in datalist">
					<img :src="item.bannerImgSrc" class="lunbo" />
				</div>			
			</div>
		<div class="swiper-pagination"></div>	
		</div>
		<div class="sofa box1">
			<div v-for="item in runlist">
				<p class="content">{{item.moduleName}}</p>
				<p class="days">{{item.moduleDescription}}</p>
				<div class="swiper-container two">
			   	<div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="item in sofalist">
						<img :src="item.productImg" class="chair">
						<p class="sty">{{item.productTitle}}</p>
						<p class="money">${{item.originalPrice}}</p>
					</div>			
				</div>
				</div>
				<p class="all">查看全部</p>
			</div>
		</div>
		<div class="box2">
			<div class="table">
				<div v-for="item in tablelist">
					<p class="content">{{item.moduleName}}</p>
					<p class="days">{{item.moduleDescription}}</p>
					<div v-for="item in tealist" class="bigchair">
						<img :src="item.productImg" class="pic3">
						<p class="coffee">{{item.productName}}</p>
						<p class="moneys">￥{{item.sellPrice}}</p>
					</div>
				</div>
			</div>
			<p class="all">查看全部</p>
		</div>
		<div class="box3">
			<div v-for="item in lastlist" class="list">
				<p class="content">{{item.moduleName}}</p>
				<div v-for="item in lastonelist" class="two">
					<img :src="item.bannerImgSrc" class="picone">
				</div>

			</div>
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
				runlist:[],
				sofalist:[],
				tablelist:[],
				tealist:[],
				lastlist:[],
				lastonelist:[]
			}
		},
		mounted(){
			axios.get('/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1553924498390').then(res=>{
				this.datalist = res.data.data.modules[0].moduleContent.banners
        		this.$nextTick(()=>{
            	var swiper = new Swiper('.one', {
		      		pagination: {
		        	el: '.swiper-pagination',
		      		},
	    			});
        		})
        		this.runlist = res.data.data.modules.slice(1,2);
        		this.sofalist = this.runlist[0].moduleContent.products
        		this.$nextTick(()=>{
				    var swiper = new Swiper('.two', {
				    	slidesPerView: 3,
				    	spaceBetween: 30,
				    	pagination: {
				    	clickable: true,
				      },
				    }); 	
        		})
        		this.tablelist = res.data.data.modules.slice(2,3);
        		this.tealist = this.tablelist[0].moduleContent.products.slice(0,6)
        		this.lastlist = res.data.data.modules.slice(3);
        		this.lastonelist = this.lastlist[0].moduleContent.banners
        		console.log(this.lastonelist)
			})
		}
	}
</script>
<style  lang="scss" scoped>
	.lunbo{
		width: 100%;
	}
	.chair{
		height: 90px;
		width: 90px;
	}
	.sofa p{
	   	text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.content,.days,.all{
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
	.sty,.days{
		color:#808080;
		font-size: 12px;
	}
	.money{
		font-size: 12px;
	}
	.all{
		font-size: 12px;
		height: 50px;
		line-height:50px;
	}
	.content{
		font-size: 16px;
	}
	.down{
		height: 130px;
		line-height:100px;
		text-align:center;
		font-size: 12px;
   		color:#303030;
   		background: white;
	}
	.pic3{
		width: 100%;
	}
	.bigchair:nth-of-type(1){
		border-right: 1px solid #ccc;
	}
	.bigchair:nth-of-type(3){
		border-right: 1px solid #ccc;
	}
	.bigchair:nth-of-type(5){
		border-right: 1px solid #ccc;
		border-bottom:1px solid #ccc;
	}
	.bigchair:nth-of-type(6){
		border-bottom:1px solid #ccc;
	}

	.bigchair{
		float: left;
		width:49.8%;
		border-top: 1px solid #ccc;
	}
	.coffee,.moneys{
		text-align: center;
		font-size: 14px;
	}
	.coffee{
		height: 20px;
		line-height:20px;
		font-size: 12px;
		color:#808080;
	}
	.moneys{
		height: 50px;
	}
	.table{
		overflow:hidden;
	}
	.box3{
		overflow:hidden;
	}
	.picone{
		float: left;
		width: 30%;
		margin:1.6%;
	}
	.box1,.box2{
		margin:10px 0 10px 0;
		background: white;
	}
	.Furniture{
		background: rgb(245, 245, 245);			
	}
	.box3{
		margin-top: 10px;
		background: white;
	}
</style>
