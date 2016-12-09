<style>
footer{
    bottom: 0;
    height: 56px;
    line-height: 56px;
    text-align: center;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#f9f9f9),to(#e0e0e0));
    color: #00a5e0;
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
        <li v-for="item in footer">
          {{item.name}}
        </li>
      </ul> 
  </footer>
</template>
<script>
export default {
  data () {
    return {
      footer:[{"name":"首页","name":"我的购物车"},{"name":"产品列表页"}]
    }
  }
}
</script>