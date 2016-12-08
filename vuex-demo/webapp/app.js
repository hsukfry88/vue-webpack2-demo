import Vue from 'vue';
import counter from './component/counter/counter.vue';


const app = new Vue({
	el: '#app',
	render: h => h(counter)
})