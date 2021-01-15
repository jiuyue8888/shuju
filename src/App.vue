<template>
	<div id="app"><router-view /></div>
</template>

<script>
export default {
	name: 'App',
	data() {},
	methods: {}
};
</script>

<style>
@import url('animate.css');
* {
	padding: 0;
	margin: 0;
}
img {
	max-width: 100%;

	vertical-align: top;
}
li {
	list-style: none;
}
.el-card__body {
	padding-left: 0;
}
.el-pager li {
	width: 40px;
	height: 40px;
	line-height: 40px;
	background-color: #e6ebf3 !important;
	border-radius: 3px;
	font-size: 19px;
}
.el-pagination button,
.el-pagination span:not([class*='suffix']) {
	height: 40px;
	line-height: 40px;

	border-radius: 3px;
	font-size: 19px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
	
background: #105DAD!important;
}
.el-tag{
	
	height: 37px;
	background: rgba(98, 175, 255, 0.3);
	border-radius: 3px;
	
	border-color:rgba(98, 175, 255, 0.3);
	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #105DAD;
	line-height: 37px;
}
.tag-color{
	border-color: rgba(255, 98, 98, 0.3);
color: #AD1010;
	background: rgba(255, 98, 98, 0.3);
}
.el-pager .more::before {
	line-height: 40px;
}
.el-form-item__label,
.el-input {
	font-size: 19px;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link,
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
	font-size: 19px;

	font-weight: 400;
	color: rgba(0, 0, 0, 0.45);
	line-height: 29px;
}
#app {
	font-size: 21px;
}
svg {
	max-width: 100%;
}
canvas {
	width: 100% !important;
}
</style>
