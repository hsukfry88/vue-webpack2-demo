import store from './store/index';
import {
	mapGetters,
	mapActions
} from 'vuex';
export default {
	name: 'counter',
	data() {
		return {
			msg: 'vuex组件实例',
			add: '增加',
			reduce: '减少'
		}
	},
	store,
	methods: mapActions(['addevent', 'reducevent', 'incrementIfod', 'incrementAsync']),
	computed: mapGetters(['evenOrOdd'])
}