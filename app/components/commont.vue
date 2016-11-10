<template>
	<input type="text" v-model="message" @keyup.enter="addMessage" placeholder="说句话吧...">
</template>
<script>
	export default{
		data() {
			return {
				message: ''
			}
		},
		props: [],
		methods: {
			addMessage: function(){
				console.log(this.message);
				//console.log(this.$emit('submitCommont'));
				this.$dispatch('submitCommont', this.message);
				this.message = '';
			}
		}
	}
</script>