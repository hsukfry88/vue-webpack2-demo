import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		products
	}
})