<template>
	<input type="text" v-model="message" @keyup.enter="addMessage" placeholder="说句话吧...">
</template>
<script>
    //import store from 'vuexs/store';
	export default{
		//store,
		/*data() {
			return {
				message: ''
			}
		},*/
		props: [],
		computed: {
			message: { 
				get() {
					return this.$store.getters.newComment.content;
				},
				set(value) {
					this.$store.commit('updateMsg', value);
				}
			}
		},
		methods: {
			addMessage: function(){
				console.log(this.message);
				this.$store.commit('add_comment');
				/*console.log(this.$emit('submitCommont'));
				this.$dispatch('submitCommont', this.message);*/
				this.message = '';
			}
		}
	}
</script>