<template>
	<div>
		<label>{{person}}</label><input type="text" v-model="message" @keyup.enter="addMessage" placeholder="说句话吧...">
	</div>
</template>
<script>
	export default{
		data() {
			return {
				message: ''
			}
		},
		props: ['person'],
		methods: {
			addMessage (){
				console.log(this.person);
				this.$emit('submit', this.message);
				//this.$dispatch('submitCommont', this.message);
				this.message = '';
			}
		}
	}
</script>