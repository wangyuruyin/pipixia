<template>
  <div>
   	<div class="header">
   		<router-link to="/Home"><i class="iconfont icon-all"></i></router-link>
   		<h3>{{title}}</h3>
   		<router-link to="/Classify"><i class="iconfont icon-viewlist"></i></router-link>
   </div>
   <div class="swiper-container" ref="myswiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<!-- <img src="https://img.wowdsgn.com/category/small_icon/10_%E5%AE%A2%E5%8E%85%E4%B8%8E%E5%8D%A7%E5%AE%A4.png?imageslim" class="icon-image"> --><span>所有</span></div>
			<div class="swiper-slide">沙发</div>
			<div class="swiper-slide">椅凳</div>
			<div class="swiper-slide">柜架</div>
			<div class="swiper-slide">休闲椅</div>
			<div class="swiper-slide">餐桌</div>
			<div class="swiper-slide">茶几和边桌</div>
			<div class="swiper-slide">书桌</div>
			<div class="swiper-slide last">床</div>
		</div>
	</div>
	<div class="hdone">
		<ul>
			<router-link to="/FurnitureList" tag="li" activeClass="active"><span>上新</span></router-link>
			<router-link to="/Home" tag="li" activeClass="active"><span>销量</span></router-link>
			<router-link to="/Home" tag="li" activeClass="active"><span>价格</span></router-link>
		</ul>
	</div>
	<div class="hdtwo">
		<div v-for="item in datalist" class="items" @click="handleClickDetail(item.productId)">
			<img :src="item.productImg">
			<p class="itemname">{{item.productTitle}}</p>
			<p class="itemprice">￥{{item.sellPrice}}</p>
		</div>
	</div>
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
				title:''
			}
		},
		mounted(){
			this.title = this.$route.query.name
			axios.get(`/pages/category/${this.$route.params.myid}?name=${this.$route.query.name}?currentPage=1&sort=onShelfTime&order=desc&_=1553860239416`).then(res=>{
				console.log(res.data.data)
				this.datalist = res.data.data
				this.$nextTick(()=>{
					var swiper = new Swiper('.swiper-container', {
      					slidesPerView: 5,
    				});
				})
			})
			this.$store.commit("hideTabbar");
		},
		destroyed(){
			this.$store.commit("showTabbar");
		},
		methods:{
		 	handleClickDetail (id) {
       			 this.$router.push(`/Detail/${id}`)
     		},
		 }
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
		height: 43px;
		line-height: 43px;
		display:flex;
		text-align:center; 
		padding:0 10px;
		border-bottom: 1px solid #f5f5f5;
		i{
			float:left;
			font-weight: bold;
			font-size: 20px;
			color:#999;
		}
		h3{
			flex:1;
			float:left;
		}
	}
	.swiper-container{
		height:80px;
		padding:15px 0;
		background: url(https://img.wowdsgn.com/category/background/10.jpg?imageslim) no-repeat left center;
		.swiper-slide{
			width: 78px;
			height: 78px;
			line-height:78px;
			border: 1px solid rgba(255, 255, 255,1);
			margin-left:15px;
			text-align:center;
			color:white;
			font-size: 13px;
			font-weight: bold;
			.icon-image{
				width: 40px;
				height: 40px;
			}
		}
	}
	.hdone{
		ul{
			height: 40px;
			display:flex;
			text-align:center;
			line-height:40px;
			li{
				float:left;
				flex:1;
				margin: 0 37px;
				font-size: 13px;
				color:#999;
			}
			.active{
				border-bottom: 2px solid black;
				color:black;
			}
		}
	}
	.hdtwo{
		.items{
			float:left;
			width: 49.8%;
			border-top:1px solid #ccc;
		}
		.itemname,.itemprice{
			font-size: 14px;
			text-overflow:ellipsis;
			white-space: nowrap;
			overflow: hidden;
			padding-left: 10px;
		}
		.itemname{
			height: 20px;
			line-height:20px;
			font-size: 12px;
			color:#808080;
		}
		.itemprice{
			height:50px;
		}
		img{
			width: 100%;
		}
	}
</style>
