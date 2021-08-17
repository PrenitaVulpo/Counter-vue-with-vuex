<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<Component1 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component1 from './components/Component1.vue';

export default defineComponent({
	name: 'App',
	components: { Component1 },
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
