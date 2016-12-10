import shop from '../../MockData/shop';
import * as types from '../mutation-types';

const state = {
	all: []
}

const getters = {
	allProducts: state => state.all
}


const actions = {
	getAllProducts({
		commit
	}) {
		shop.getProducts(product => {
			commit(types.RECEIVE_PRODUCT, {
				product
			});
		})
	}
}
const mutations = {
	[types.RECEIVE_PRODUCT](state, {
		product
	}) {
		state.all = product;
	},
	[types.ADD_CART](state, {
		id
	}) {
		state.all.find(p => p.id === id).inventory--;
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}