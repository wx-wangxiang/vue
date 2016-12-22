<template>
	<div>
		<h2>input 组件</h2>
		<div class="input-component">
			<ct-input :value="parentValue" v-on:inputChange="inputChangeHandler" style="width: 300px" placeholder="请输入..."></ct-input>
		</div>
	</div>
</template>
<script>
	import ctInput from './input/input.vue'
	export default {
		data() {
			return {
				parentValue: ''
			}
		},
		methods: {
			inputChangeHandler(val) {
				this.parentValue = val;
				console.log(`parent:${this.parentValue}`);
			}
		},
		components: {ctInput},
		mounted() {
			console.log('mounted');
		}
	}
</script>
<style type="text/css" scoped>
	.input-component{
		padding: 20px;
	}
</style>