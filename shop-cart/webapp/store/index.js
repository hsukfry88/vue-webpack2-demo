import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action';
import * as getters from './getters';
import products from './modules/product';
import shopCar from './modules/cart';

Vue.use(Vuex);
export default new Vuex.Store({
	actions,
	getters,
	modules: {
		products,
		shopCar
	}
})