<template>
	<h1 class="title">This is my to-do list</h1>
	<input type="text" v-model="newItem" @keyup.enter="addItem">
	<ul class="to-do-list">
		<li v-for="item in items" v-text="item.label" @click="clickHandler(item)" :class="{hasFinished: item.finished}"></li>
	</ul>
</template>
<script>
	export default{
		data() {
			return {
				items: [{
					label: 'eat dinner',
					finished: false
				},{
					label: 'brush teeth',
					finished: false
				},{
					label: 'go to bed',
					finished: false
				}],
				newItem: ''
			}
		},
		methods: {
			clickHandler: function (item) {
				item.finished = !item.finished;
				console.log('ok');
			},
			addItem: function(){
				console.log(this.newItem);
				var item = this.newItem;
				var obj = {
					label: item,
					finished: false
				}
				this.items.push(obj);
				this.newItem = ''
			}
		}
	}
</script>
<style type="text/css">
	.title{
		text-align: left;
	}
	.to-do-list li{
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
	}
	.message{
		color: lightblue;
		font-size: 36px;
		font-weight: bold;
	}
	.red{
		color: red;
	}
	.green{
		color: green;
	}
	.hasFinished{
		text-decoration: line-through;
	}
</style>