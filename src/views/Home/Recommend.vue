<template>
	<div class="pic">
		<div class="swiper-container" ref="myswiper">
		    <div class="swiper-wrapper">
			    <div class="swiper-slide"v-for="item,index in datalist">
					<img :src="item.bannerImgSrc"/>
				</div>
			</div>
		<div class="swiper-pagination"></div>
		</div>
		<div class="black" v-for="item,index in runlist">
		<h3>{{item.moduleDescription}}</h3>
		<p>{{item.moduleName}}</p>
		<img :src="item.moduleContent.banners[0].bannerImgSrc" alt="">
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
			}
		},
		mounted(){
			axios.get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1553737568774').then(res=>{
				this.datalist = res.data.data.modules[0].moduleContent.banners
        		this.$nextTick(()=>{
            	var swiper = new Swiper('.swiper-container', {
		      		pagination: {
		        	el: '.swiper-pagination',
		      		},
	    			});
        		})
        		this.runlist = res.data.data.modules.slice(1,7);
   				console.log(this.runlist);
			})
		}
	}	
</script>

<style lang="scss" scoped>
	img{
		width: 100%;
	}
	.black{
		background: white;
		margin:20px 0 20px 0;
		line-height: 50px;
		text-align: center;
	}
	.pic{
		background: rgb(245, 245, 245);	
	}
	.down{
		height: 130px;
		line-height:50px;
		text-align:center;
		font-size: 12px;
   		color:#303030;
	}
</style>