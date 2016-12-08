import Vue from 'vue';
import App from './component/App.vue';

const app = new Vue({
	name: "myapp",
	el: '#app',
	render: h => h(App)
});