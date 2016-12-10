import {
	mapGetters,
	mapActions
} from 'vuex';

export default {
	name: 'product-list',
	computed: mapGetters({
		product: 'allProducts',

	}),
	methods: mapActions([
		'addShopCar', // 映射 this.increment() 为 this.$store.dispatch('increment')
		'cartProducts'
	]),
	created() {
		this.$store.dispatch('getAllProducts')
	}
}