import {
	mapGetters,
	mapActions
} from 'vuex';

export default {
	name: 'product-list',
	computed: mapGetters({
		product: 'allProducts'
	}),
	created() {
		this.$store.dispatch('getAllProducts')
	}
}