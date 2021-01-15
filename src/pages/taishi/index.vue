<template>
	<div class="page2">
		<el-breadcrumb separator="/" class="mbx">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>典型态势</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card class="box-card">
			<div class="title">
				<i></i>
				典型态势
			</div>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="名称："><el-input v-model="formInline.user" placeholder="输入要查询的名称"></el-input></el-form-item>
				<el-form-item label="交战方：">
					<el-select v-model="formInline.region" placeholder="请选择要查询的交战方">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item><el-button type="primary" @click="onSubmit">查询</el-button></el-form-item>
			</el-form>
		</el-card>
		<div class="cards">
			<div class="card-list" v-for="(item, id) in 6" :key="id">
				<img src="../../assets/hh.png" />
				<div class="right">
					<h3>日俄反潜作战</h3>
					<el-tag :class="id==2?'tag-color':''">作战规模：中</el-tag>
					<p class="desc">
						<span>发生时间：2014年</span>
						<span>交战双方：日本-俄罗斯</span>
					</p>
					<h4>作战目标数量</h4>
					<div class="card-footer">
						<p>
							<em>4</em>
							护卫队驱逐舰
						</p>
						<p>
							<em>5</em>
							反潜直升机
						</p>
						<p>
							<em>6</em>
							反潜直升机
						</p>
					</div>
				</div>
			</div>
		</div>
		<el-pagination class="pageSize" background layout="prev, pager, next" :total="1000"></el-pagination>
	</div>
</template>
<script>
export default {
	name: 'home',

	data() {
		return {
			formInline: {
				user: '',
				region: ''
			}
		};
	},
	created() {},
	methods: {},
	watch: {},

	mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.cards{
		position: relative;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
		align-items: center;
		flex-wrap: wrap;
		.right{
			width: calc(100% - 322px);
			height: 264px;
		}
		h3{
			
			margin-top: 10px;
			font-size: 24px;
			margin-bottom: 11px;
			font-weight: 600;
			color: rgba(0, 0, 0, 0.85);
			line-height: 32px;
		}
		h4{
			
			margin: 30px 0 10px;
			font-size: 16px;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.6);
			line-height: 29px;
		}
		.desc{
			position: relative;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 11px 0;
			font-size: 16px;
			
			font-weight: 400;
			color: rgba(0, 0, 0, 0.45);
			line-height: 29px;
			span{
				display: block;
			}
		}
		.card-footer{
			position: relative;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			font-size: 16px;
			
			font-weight: 400;
			color: rgba(0, 0, 0, 0.45);
			line-height: 29px;
			p{
				
			}
			em{
				display: block;
				font-style: normal;
				font-size: 29px;
				font-family: DINCond-Medium, DINCond;
				font-weight: 500;
				color: #105DAD;
				line-height: 29px;
			}
		}
		img{
			width: 284px;
			height: 264px;
			margin-right: 28px;
			object-fit: cover;
		}
		.card-list{
			width: 753px;
			box-sizing: border-box;
			padding: 20px;
			display: flex;
			margin-bottom: 13px;
			align-items: center;
			background: #FFFFFF;
			border-radius: 3px;
			border: 1px solid #E9E9E9;
		}
	}
.demo-form-inline {
	padding-left: 30px;
	font-size: 19px;
}
.pageSize {
	text-align: center;
	margin: 0 auto;
}
.title {
	position: relative;
	font-size: 27px;
	font-weight: 500;
	color: #3b3c3d;
	padding-left: 30px;
	line-height: 37px;
	margin-bottom: 30px;
	i {
		position: absolute;
		left: 0;
		width: 8px;
		height: 32px;
		background: #105dad;
		border-radius: 4px;
	}
}
.mbx {
	font-size: 19px;

	font-weight: 400;
	color: rgba(0, 0, 0, 0.45) !important;
	line-height: 29px;
}
.box-card {
	margin: 21px auto 27px;
}
</style>
