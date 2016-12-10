<template>
	<div id="myApp">
		<myheader></myheader>
			<router-view></router-view>
	  <myfooter></myfooter>
  </div> 
</template>

<script>
import myheader from './header/header.vue'
import myfooter from './footer/footer.vue'
export default {
		name:'myApp',
	  components: {myheader,myfooter}
}
</script>
