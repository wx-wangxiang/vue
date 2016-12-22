<template>
	<div>
		<h1 class="title">chat room</h1>
		<select v-model="selectPerson">
			<option value="">请选择</option>
			<option value="wang xiang">王先生</option>
			<option value="ming">小明</option>
			<option value="ding">丁丁</option>
		</select>
		<span>总共说了：</span>{{msgCount}}<span>句话</span>
		<ul class="to-do-list">
			<li v-for="item in items" @click="clickHandler(item)">
				<span class="name">{{item.author}}</span><strong>:</strong>
				<span class="text">{{item.content}}</span>
			</li>
		</ul>
		<commont :person="selectPerson" v-on:submit="submitCommont"></commont>
	</div>
</template>
<script>
	import Commont from 'components/commont'
	export default{
		data() {
			return {
				items: [{
					author: 'ming',
					content: 'hello'
				},{
					author: 'wang xiang',
					content: 'hello'
				},{
					author: 'ding',
					content: 'hello'
				}],
				msgCount: 0,
				selectPerson: ''
			}
		},
		components: {Commont},
		methods: {
			submitCommont(msg) {
				const name = ['wang xiang', 'ming', 'ding'][Math.floor(Math.random() * 3)],
					obj = {
						author: name,
						content: msg
					};
				this.items.push(obj);
			},
			clickHandler: function (item) {
				item.finished = !item.finished;
				console.log('ok');
			}
		},
		watch: {
			selectPerson(n, o) {
				let tempArr = [];
				tempArr = this.items.filter(function(item){
					return item.author === n;
				})
				this.msgCount = tempArr.length;
			}
		}
	}
</script>
<style lang="less">
    @import "../styles/index.less";
</style>
<style type="text/css" scoped>
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