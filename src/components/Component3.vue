<template>
	<div>
		<Component4 />
		<History />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component4 from './Component4.vue';
import History from './History.vue';

export default defineComponent({
	name: 'Component3',
	components: { Component4, History },
});
</script>

<style></style>
