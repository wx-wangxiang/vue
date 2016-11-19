<template>
	<h1 class="title">chat room</h1>
	<ul class="to-do-list">
		<li v-for="item in items" @click="clickHandler(item)">
			<span class="name">{{item.author}}</span><strong>:</strong>
			<span class="text">{{item.content}}</span>
		</li>
	</ul>
	<commont></commont>
</template>
<script>
	import store from 'vuexs/store';
	import Commont from 'components/commont';
	import { mapState } from 'vuex';
	export default{
		store,
		/*data() {
			return {
				items: [{
					name: 'Tom',
					text: 'hello'
				},{
					name: 'Tommy',
					text: 'hello'
				},{
					name: 'Jim',
					text: 'hello'
				}],
				newItem: ''
			}
		},*/
		computed: mapState({
			items:  'msgList'
		}),
		components: {Commont},
		events: {
		    'submitCommont': function (msg) {
		      // 事件回调内的 `this` 自动绑定到注册它的实例上
		     console.log('hello');
			var obj = {
				name: 'wang xiang',
				text: msg
			}
			console.log('ok');
			this.items.push(obj);
		    }
		},
		methods: {
			clickHandler: function (item) {
				item.finished = !item.finished;
				console.log('ok');
			},
			submitHandler: function(message){
				console.log('hello');
				var obj = {
					name: 'wang xiang',
					text: message
				}
				console.log('ok');
				this.items.push(obj);
			},
			addItem: function(){
				console.log(this.newItem);
				var item = this.newItem;
				var obj = {
					name: 'wang xiang',
					text: item
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
	.to-do-list{
		list-style: none;
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