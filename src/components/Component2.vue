<template>
	<div><Component3 /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component3 from './Component3.vue';

export default defineComponent({
	name: 'Component2',
	components: { Component3 },
});
</script>

<style></style>
