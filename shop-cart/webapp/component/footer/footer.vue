<style>
footer{
    bottom: 0;
    height: 56px;
    line-height: 56px;
    text-align: center;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#f9f9f9),to(#e0e0e0));
    
}
footer a{color: #00a5e0;}
footer .corner-wp{
  position: relative;
  display: inline-block;
}
footer .corner{
    position: absolute;
    height: 20px;
    line-height: -20px;
    top:10px;
    right:-20px;
    display: inline-block;
    text-align: center;
    background: #f74c31;
    color: #fff;
    font-size: 11px;
    height: 16px;
    line-height: 16px;
    -webkit-border-radius: 8px;
    padding: 0 6px;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
}
footer ul{
  list-style-type: none;
  overflow: hidden;
}
footer li{
  width: 50%;
  float: left;
}
</style>
<template>
	<footer>
      <ul>
        <li><router-link to="/foo" class="router-link-active"><div  class="corner-wp"><span>商品列表</span></div></router-link></li>
        <li><router-link to="/bar" class="router-link-active"><div class="corner-wp"><span>我的购物车</span> <span class="corner">{{cartProLength}}</span></div></router-link></li>
      </ul> 
  </footer>
</template>
<script>
import {mapGetters} from 'vuex';
import shopCar from '../cart/cart.vue';
export default {
  name:'footer',
  computed:mapGetters(['cartProLength']),
  data () {
    return {
      footer:[{"name":"我的购物车",
               "icon":"true"},
               {"name":"产品列表页"}
             ]
    }
  }
}
</script>