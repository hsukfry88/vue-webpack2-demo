import Vue from 'vue';
import store from './store';
import App from './component/App.vue';


const app = new Vue({
	el: '#app',
	store,
	render: h => h(App)
})