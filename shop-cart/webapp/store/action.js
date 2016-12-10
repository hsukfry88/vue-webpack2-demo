import * as types from './mutation-types';

export const addShopCar = ({
	commit
}, product) => {
	commit(types.ADD_TO_CART, {
		product: product
	});
}