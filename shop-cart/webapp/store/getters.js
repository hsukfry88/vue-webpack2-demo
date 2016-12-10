/*通过对原有的state，派生出的新状态*/
export const cartProLength = state => {
	return state.shopCar.cart.length;
}

export const getCarList = state => {
	let products = [];
	state.shopCar.cart.forEach((cart) => {
		state.products.all.find((el) => {
			if (el.id === cart.id) {
				let price = el.price * cart.inventory
				let o = {
					id: el.id,
					title: el.title,
					intro: el.intro,
					price: price,
					inventory: cart.inventory
				}
				products.push(o);
			}
		});


	})
	return products;
}
export const TotalPrice = state => {
	return state.shopCar.totalPrice
}