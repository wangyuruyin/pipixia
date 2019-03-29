<template>
	<!-- 家具 -->
	<div>
		<div class="swiper-container" ref="myswiper">
		    <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in datalist">
					<img :src="item.bannerImgSrc" class="lunbo" />
				</div>			
			</div>
		<div class="swiper-pagination"></div>	
		</div>
		<div class="sofa">
			<div v-for="item in runlist">
				<h3>{{item.moduleName}}</h3>
				<p>{{item.moduleDescription}}</p>
				<div v-for="item in sofalist">
					<img :src="item">
				</div>
			</div>
		</div>
		<router-view></router-view>
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
				chairlist:[],
				sofalist:[]
			}
		},
		mounted(){
			axios.get('/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1553775328800').then(res=>{
				this.datalist = res.data.data.modules[0].moduleContent.banners
        		this.$nextTick(()=>{
            	var swiper = new Swiper('.swiper-container', {
		      		pagination: {
		        	el: '.swiper-pagination',
		      		},
	    			});
        		})
        		this.runlist = res.data.data.modules.splice(1,1);
        		console.log(this.runlist)
        		this.sofalist = this.runlist[0].moduleContent[0].products

			})
		}
	}
</script>
<style type="text/css" media="screen">
	.lunbo{
		width: 100%;
	}
	.chair{
		height: 90px;
		width: 90px;
	}
</style>