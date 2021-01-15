<template>
	<el-container class="container">
		<el-aside class="nav">
			<div class="top">
				<b><img src="../../assets/hh.png" /></b>
				<h3>小飞象</h3>
			</div>
			<div class="down">
				<ul>
					<li v-for="(item, id) in nav" :key="id">
						<p @click="changePage(id)" :class="active==id?'curr':''"><i :class="'icon'+id"></i>{{ item.name }}
						<strong v-show="item.list.length>0" :class="(active==id||item.show)&&item.show?'route':''">></strong></p>
						<div style="background-color: rgba(12, 67, 124, 0.4);" v-show="item.show">
							<span v-for="(obj, oid) in item.list" :id='oid' @click="changePage(oid+20)" :class="active==oid+20?'curr':''">{{obj}}</span>
						</div>
					</li>
				</ul>
			</div>
			
		</el-aside>

		<el-container>
			<el-header class="header">数据库管理平台</el-header>
			<el-main class="main">
				<index v-if="active == 0"></index>
				<taishi v-if="active == 2"></taishi>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
import index from '../main/index.vue';
import taishi from '../taishi/index.vue';
export default {
	name: 'home',
	components: { index, taishi },
	data() {
		return {
			active: this.$route.query.page||0,
			nav: [
				{ name: '首页', list: [],show:false }, 
				
				{ name: '基础数据', list: ['作战目标', '作战能力', '历史轨迹'],show:false },
				{ name: '典型态势', list: [] ,show:false}, 
				{ name: '作战规则', list: [] ,show:false}, 
				{ name: '模拟数据', list: [] ,show:false}, 
				{ name: '系统功能', list: [] ,show:false}, 
				{ name: '退出', list: [] ,show:false}
				]
		};
	},
	created() {
		const that = this;
	},
	methods: {
		changePage(id) {
			const that = this
			
			if(id==1){
				that.nav[id].show=!that.nav[id].show	
			}
			that.active = id;
		}
	},
	watch: {},

	mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-menu {
	background-color: transparent;
}
.nav {
	width: 340px !important;
	height: 100vh;
	background-color: #105dad;
	
}
.main{
	position: relative;
	height: calc(100vh - 107px);
	overflow: auto;
background: #F2F5F8;
}
.header{
	width: 100%;
	height: 107px!important;
	display:flex;
	align-items: center;
	box-sizing: border-box;
	padding-left: 30px;
	background: #FFFFFF;
	box-shadow: 0px 5px 5px 0px rgba(203,203,203,0.19);
	
	font-size: 29px;
	
	font-weight: bold;
	color: #105DAD;
	line-height: 44px;
	letter-spacing: 1px;
}

.top{
	position: relative;
	padding-top: 88px;
	padding-bottom: 47px;
	border-bottom:1px solid rgba(255,255,255,0.1);
	text-align: center;
	color: #fff;
	
	
	
	h3{
		margin-top: 12px;
		font-weight: normal;
		font-size: 27px;
		
		
		color: #FFFFFF;
		line-height: 40px;
		letter-spacing: 1px;
	}
	b{
		position: relative;
		display: block;
		width: 144px;
		height: 144px;
		box-sizing: border-box;
		padding: 12px;
		margin: 0 auto;
		&::before{
			position: absolute;
			left: 0;
			top:0;
			z-index: 1;
			content: '';
			width: 144px;
			height: 144px;
			background: #FFFFFF;
			opacity: 0.1;
			border-radius: 50%;
		}
		&::after{
			position: absolute;
			left: 6px;
			top:6px;
			z-index: 2;
			content: '';
			width: 131px;
			height: 131px;
			background: #FFFFFF;
			opacity: 0.1;
			border-radius: 50%;
		}
	}
	img{
		position: relative;
		z-index: 3;
		width: 120px;
		height: 120px;
		object-fit: cover;
		border-radius: 50%;
	}
}
.down{
	position: relative;
	width: 100%;
	ul{
		display: block;
		width: 100%;
		margin: 0 auto;
	}
	li{
		position: relative;
		width: 100%;
		box-sizing: border-box;
		
		
		cursor: pointer;
		font-size: 21px;
		
		color: #FFFFFF;
		line-height: 32px;
		
		&::after{
			position: absolute;
			left: 30px;
			bottom: 0;
			content: '';
			width: calc(100% - 60px);
			height: 1px;
			background-color: rgba(255,255,255,0.1);
		}
	}
	i{
		margin-left: 30px;
	}
	p{
		display: flex;
		align-items: center;
		line-height: 90px;
		opacity: 0.7;
	}
	strong{
		position: absolute;
		right: 30px;
		opacity: 0.7;
	}
	strong.route{
		transform: rotate(90deg);
	}
	span{
		display: block;
		line-height: 90px;
		text-align: center;
		padding-right: 60px;
		opacity: 0.7;
	}
	.curr{
		opacity: 1;
	}
	.icon0{
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 24px;
		background: url(../../assets/icon0.png) no-repeat 50% 50%;
		background-size: 100%;
	}
	.icon1{
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 24px;
		background: url(../../assets/icon1.png) no-repeat 50% 50%;
		background-size: 100%;
	}
	.icon2{
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 24px;
		background: url(../../assets/icon2.png) no-repeat 50% 50%;
		background-size: 100%;
	}
	.icon3{
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 24px;
		background: url(../../assets/icon3.png) no-repeat 50% 50%;
		background-size: 100%;
	}
	.icon4{
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 24px;
		background: url(../../assets/icon4.png) no-repeat 50% 50%;
		background-size: 100%;
	}
	.icon5{
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 24px;
		background: url(../../assets/icon1.png) no-repeat 50% 50%;
		background-size: 100%;
	}
	.icon6{
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 24px;
		background: url(../../assets/icon2.png) no-repeat 50% 50%;
		background-size: 100%;
	}
}
</style>
