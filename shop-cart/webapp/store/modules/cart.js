import * as types from '../mutation-types';
const state = {
	cart: [],
	totalPrice: 0,
}



const actions = {

}

const mutations = {
	[types.ADD_TO_CART](state, {
		product
	}) {
		//console.log(product);
		if (product.inventory >= 1) {
			product.inventory--;
			let p = state.cart.find(p => p.id === product.id)
			if (p) {
				p.inventory++
					state.totalPrice += parseFloat(product.price.toFixed(2));
			} else {
				let _p = {
					id: product.id,
					inventory: 1
						// intro: product.intro,
						// price: product.price,
						// title: product.title
				}
				state.cart.push(_p);
				state.totalPrice += parseFloat(product.price.toFixed(2));
			}
		}
	}
}

export default {
	state,
	mutations
}