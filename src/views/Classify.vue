<template>
	<div>
		<div class="header">
			<div class="ipt">
				<i class="iconfont icon-search"></i>
				<router-link to="/Search" tag="input" placeHolder="搜索我的尖叫好物">
	     		</router-link>
	      	</div>
		</div>
		<div class="accordion">
			<div class="tab-1">
				<a class="tab">
					<img src=https://m.wowdsgn.com/static/img/furniture.png>
				</a>
				<!-- <ul>
					<router-link to="/FurnitureList" tag="li" activeClass="active" @click="handleClick(FurnitureList.categoryid,FurnitureList.name)"><span>沙发</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>椅凳</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>桌几</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>床</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>柜架</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>餐桌</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>茶几和边桌</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>书桌</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/FurnitureList" tag="li" activeClass="active"><span>隔断</span><i class="iconfont icon-more"></i></router-link>
				</ul> -->
				<ul>
           			<li v-for="item in datalist" :key="item.categoryid" @click='handleClick(item.categoryid,item.name)'>
              		 <span>{{item.name}}</span>
              		 <i class="iconfont icon-more"></i>
           			</li>
      			</ul>
			</div>
			<div class="tab-2">
				<a class="tab">
					<img src=https://m.wowdsgn.com/static/img/household.png>
				</a>
				<ul>
					<li v-for="item in list" :key="item.categoryid" @click='jump(item.categoryid,item.name)'>
               		<span>{{item.name}}</span>
              		 <i class="iconfont icon-more"></i>
           			</li>
					<!-- <router-link to="/LivingGoods" tag="li" activeClass="active"><span>灯具</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/LivingGoods" tag="li" activeClass="active"><span>用餐</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/LivingGoods" tag="li" activeClass="active"><span>时尚生活</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/LivingGoods" tag="li" activeClass="active"><span>烹饪</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/LivingGoods" tag="li" activeClass="active"><span>纺织品</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/LivingGoods" tag="li" activeClass="active"><span>家饰</span><i class="iconfont icon-more"></i></router-link>
					<router-link to="/LivingGoods" tag="li" activeClass="active"><span>卫浴</span><i class="iconfont icon-more"></i></router-link> -->
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data () {
	    return {
	      value: '',
	      datalist: [
	        { name: '沙发', categoryid: 20 },
	        { name: '椅凳', categoryid: 21 },
	        { name: '桌几', categoryid: 22 },
	        { name: '床', categoryid: 2310 },
	        { name: '柜架', categoryid: 24 },
	        { name: '餐桌', categoryid: 2210 },
	        { name: '茶几和边桌', categoryid: 2211 },
	        { name: '书桌', categoryid: 2212 },
	        { name: '隔断', categoryid: 2414 }
	      ],
	      list: [
	        { name: '灯具', categoryid: 25 },
	        { name: '用餐', categoryid: 26 },
	        { name: '时尚生活', categoryid: 32 },
	        { name: '烹饪', categoryid: 27 },
	        { name: '纺织品', categoryid: 28 },
	        { name: '家饰', categoryid: 29 },
	        { name: '卫浴', categoryid: 31 }
	      ]
	  	}
	 },
  methods: {
    handleClick (id, name) {
      this.$router.push(`/FurnitureList/${id}?name=${name}`)
    },
    jump (id, name) {
      this.$router.push(`/FurnitureList/${id}?name=${name}`)
    }
},
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
	.accordion{
		.tab-1{
			margin:0 15px;
			.tab{
				height: 100%;
				margin-top: 10px;
				display: inline-block;
				img{
					width:100%;
				}
			}
			ul{
				margin-bottom: 50px;
				li{
					width:100%;
					height: 49px;
					line-height: 49px;
					border-bottom: 1px solid #eaeaea;
					span{
						float:left;
					}
					i{
						float:right;
					}
				}
			}
		}
		.tab-2{
			margin:0 15px;
			.tab{
				height: 100%;
				margin-top: 10px;
				display: inline-block;
				img{
					width:100%;
				}
			}
			ul{
				margin-bottom: 50px;
				li{
					width:100%;
					height: 49px;
					line-height: 49px;
					border-bottom: 1px solid #eaeaea;
					span{
						float:left;
					}
					i{
						float:right;
					}
				}
			}
		}
	}
</style>