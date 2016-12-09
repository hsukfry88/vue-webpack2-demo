<template>
  <div id="app">
				<myheader></myheader>
				<ProductList></ProductList>
				<myfooter></myfooter>
  </div>
</template>

<script>
import ProductList from './list/list.vue'
import myheader from './header/header.vue'
import myfooter from './footer/footer.vue'

export default {
  components: { myheader,myfooter,ProductList}
}
</script>
