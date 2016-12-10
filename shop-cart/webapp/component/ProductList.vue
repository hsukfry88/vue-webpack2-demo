<template>	
	<div id="Product">	
		<banner></banner>
		<productList></productList>
	</div>
</template>
<script>
	import ProductList from './list/list.vue'
	import banner from './banner/banner.vue'
	export default {
		name:'pro',
	  components: {ProductList,banner}
	}
</script>