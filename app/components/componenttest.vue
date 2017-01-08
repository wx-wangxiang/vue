<template>
	<div>
		<h2>input 组件</h2>
		<div class="input-component">
			<ct-input :value="parentValue" v-on:input="inputHandler" style="width: 300px" placeholder="请输入..."></ct-input>
		</div>
		<h2>checkbox 组件</h2>
		<div>
			<ct-checkbox ref="checkbox" :value="复选框" :checked="isToday" :disabled="isDisabled">今天</ct-checkbox>
		</div>
		<h2>list 组件</h2>
		<ct-list 
			:prefix-cls="prefixCls + '-list'"
            :data="listData"
            :render-format="renderFormat"
            :checked-keys="CheckedKeys"
            :valid-keys-count="ValidKeysCount"
            :style="listStyle"
            :title="titles[0]"
            :filterable="filterable"
            :filter-placeholder="filterPlaceholder"
            :filter-method="filterMethod"
            :not-found-text="notFoundText"
            v-on:on-CheckedKeys="getCheckedKeys">
            <slot></slot>
            </ct-list>
	</div>
</template>
<script>
	import ctInput from './input/input.vue'
	import ctCheckbox from './checkbox/checkbox.vue'
	import ctList from './transfer/list.vue'

	const prefixCls = 'ivu-transfer'
	export default {
		data() {
			return {
				parentValue: '',
				isToday: true,
				isDisabled: false,
				prefixCls: prefixCls,
				listData: [
					{ "key": "1", "label": "内容1", "disabled": false },
                    { "key": "2", "label": "内容2", "disabled": false },
                    { "key": "3", "label": "内容3", "disabled": false }
                ],
                renderFormat: function(item) {
                	return item.label;
                },
                listStyle: {},
                titles: ['标题'],
                filterPlaceholder: '...',
                filterMethod: function(data, query){
	                const type = ('label' in data) ? 'label' : 'key';
	                return data[type].indexOf(query) > -1;
	            },
	            ValidKeysCount: 3,
	            CheckedKeys: ['1', '2', '3'],
                notFoundText: '无数据'
			}
		},
		methods: {
			inputHandler(val) {
				this.parentValue = val;
				console.log(`parent:${this.parentValue}`);
			},
			getCheckedKeys(arr) {
				console.log('触发了');
				this.CheckedKeys = arr;
			},
			getValidKeys() {
                return this.listData.filter(data => !data.disabled && this.CheckedKeys.indexOf(data.key) > -1).map(data => data.key);
            }
		},
		computed: {
			ValidKeysCount() {
				return this.getValidKeys().length;
			}
		},
		components: {ctInput, ctCheckbox, ctList},
		mounted() {
			this.$on('test', function(msg){
				console.log(msg);
			});
			this.$refs.checkbox.$on('on-change', function(msg){
				this.isToday = msg;
				console.log(`this.isToday = ${this.isToday}`);
			});
			console.log('mounted');
		}
	}
</script>
<style type="text/css" scoped>
	.input-component{
		padding: 20px;
	}
</style>