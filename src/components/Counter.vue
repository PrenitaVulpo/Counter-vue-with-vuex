<template>
	<h1>Vuex Counter</h1>
	<h1 v-show="!isLoading" class="counter">{{ counter }}</h1>
	<Spinner v-if="isLoading" />
	<button @click="removeValueFromCounter(value)">-</button>
	<input type="number" v-model="value" />
	<button @click="addValueToCounter(value)">+</button>
	<div><button @click="addRandomNumber" class="btn">Add Random</button></div>
</template>

<script lang="ts">
//functions that returns the desired states
import { mapState } from 'vuex';
//functions that returns the desired mutations
import { mapMutations } from 'vuex';
//functions that returns the desired Actions
import { mapActions } from 'vuex';
import { defineComponent } from 'vue';
import Spinner from './Spinner.vue';

export default defineComponent({
	name: 'Counter',
	components: { Spinner },
	data() {
		return {
			value: 1,
		};
	},
	computed: {
		//to get the states, you simply have to put the states on an array
		//and then they will be avaliabe for direct usage
		...mapState(['isLoading', 'counter', 'counterX']),
	},
	methods: {
		...mapMutations(['addValueToCounter', 'removeValueFromCounter']),
		...mapActions(['addRandomNumber']),
	},
});
</script>

<style>
.counter {
	font-size: 5rem;
}
button {
	border-radius: 100%;
	border: none;
	width: 2rem;
	height: 2rem;
	font-weight: 700;
	cursor: pointer;
}
input {
	padding: 0.4rem;
	margin: 0 0.5rem;
	text-align: center;
}
.btn {
	border-radius: 0.5rem;
	width: auto;
	background-color: #41b983;
	margin-top: 1rem;
	cursor: pointer;
}
</style>
