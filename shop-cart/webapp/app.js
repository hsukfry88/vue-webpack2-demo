import Vue from 'vue';
import store from './store';
import productList from './component/ProductList.vue'
import cartList from './component/cart/cart.vue'
import App from './component/App.vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Bar = {
	template: '<div>aa</div>'
}
const routes = [{
	"path": '/bar',
	component: cartList,
}, {
	"path": '/foo',
	component: productList
}]
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')