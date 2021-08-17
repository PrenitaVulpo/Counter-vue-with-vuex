<template>
	<h1>Vuex Counter</h1>
	<h1 class="counter">0</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Counter',
	components: {},
});
</script>

<style>
.counter {
	font-size: 5rem;
}
</style>
