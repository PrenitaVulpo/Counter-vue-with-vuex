<template>
	<div class="container">
		<h4>History</h4>
		<div class="flex">
			<p
				v-for="(entry, index) in history"
				:key="index"
				:class="activeIndexes(parseInt(searchValue)).includes(index) && 'bold'"
			>
				{{ entry }}
			</p>
		</div>
		<input type="number" placeholder="search by value" v-model="searchValue" />
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapGetters } from 'vuex';

export default defineComponent({
	name: 'History',
	data() {
		return {
			searchValue: 0,
		};
	},
	computed: {
		...mapState(['history']),
		...mapGetters(['activeIndexes']),
	},
});
</script>
<style>
.container {
	margin-top: 7rem;
}
.flex {
	display: flex;
	width: 25rem;
	margin: 0 auto;
	justify-content: center;
	flex-wrap: wrap;
}
.flex p {
	margin: 0.5rem;
	background-color: #79797e4f;
	padding: 0.25rem 0.5rem;
	border-radius: 25%;
}
.bold {
	font-weight: 900;
}
</style>
