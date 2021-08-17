<template><Component2 /></template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component2 from './Component2.vue';

export default defineComponent({
	name: 'Component1',
	components: { Component2 },
});
</script>

<style></style>
