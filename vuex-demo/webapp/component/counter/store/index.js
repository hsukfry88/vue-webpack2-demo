import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	count: 0
}

const mutations = {
	addevent(state) {
		state.count++;
	},
	reducevent(state) {
		state.count--;
	}
}

const actions = {
	addevent: ({
		commit
	}) => commit('addevent'),
	reducevent: ({
		commit
	}) => commit('reducevent'),
	incrementIfod: ({
		commit,
		state
	}) => {
		if ((state.count + 1) % 2 == 0) {
			commit('addevent');
		}
	},
	incrementAsync: ({
		commit,
		state
	}) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('addevent');
				resolve();
			}, 3000)
		})

	}
}

const getters = {
	evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})