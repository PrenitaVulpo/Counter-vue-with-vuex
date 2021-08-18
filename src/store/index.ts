import { createStore } from 'vuex';

export default createStore({
	state: {
		counter: 0,
		counterX: 0,
	},
	mutations: {
		addValueToCounter(state, value: number) {
			state.counter += value;
		},
		removeValueFromCounter(state, value: number) {
			state.counter -= value;
		},
	},
	actions: {},
	modules: {},
});
