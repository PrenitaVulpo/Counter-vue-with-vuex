import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		isLoading: false,
		counter: 0,
		counterX: 0,
	},
	mutations: {
		toggleLoading(state) {
			state.isLoading = !state.isLoading;
		},
		//first argument is the state, the other is the payload
		addValueToCounter(state, value: number) {
			state.counter += value;
		},
		removeValueFromCounter(state, value: number) {
			state.counter -= value;
		},
	},
	//actions are use to perform assincronous calls to modify the state
	actions: {
		//the context contains the whole state object
		async addRandomNumber(context) {
			context.commit('toggleLoading');
			const randomNumber = (
				await axios.get(
					'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new',
				)
			).data;
			context.commit('addValueToCounter', randomNumber);
			context.commit('toggleLoading');
		},
	},
	modules: {},
});
