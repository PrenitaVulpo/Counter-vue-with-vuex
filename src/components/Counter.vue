<template>
	<h1>Vuex Counter</h1>
	<h1 class="counter">{{ $store.state.counter }}</h1>
	<button>-</button><input type="number" v-model="value" /><button>+</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Counter',
	components: {},
	data() {
		return {
			value: 1,
			counter: 0,
		};
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
</style>
