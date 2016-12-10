<style>
	.cart .total{
		margin:0 15px;
		line-height: 58px;
		height: 58px;
		text-align: right;
	}
	.cart .price{
		color: #f74c31;
	}
	.no-product{
		min-height: 580px;
		line-height: 580px;
		text-align: center;
		color: #999;
	}
</style>
<template>
	<div class="cart">
		<ul class="product-list">
				<li  v-for="p in cartList">
					<p class="title">{{p.title}}</p>
					<p class="intro">{{p.intro}}</p>
					<p class="price">{{p.price}}</p>
					<p class="number">选购数量:{{p.inventory}}</p>
<!-- 					<div v-if="p.inventory > 0">
					  <button @click="addShopCar(p)">加入购物车</button>
					</div>
					<div v-else>
					  <button  class="disable">商品售罄</button>
					</div> -->
				
				</li>
		</ul>
		<p v-if="total>0" class="total"><span>总计:</span><span class="price">{{total}}</span></p>
		<div v-else class="no-product">
				<p>您还没有添加购物车，快去选购吧</p>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex';
	export default{
		data(){
			return {
				"title":'购物车列表'
			}
		},
		computed:mapGetters({cartList:'getCarList',total:'TotalPrice'})
	}
</script>