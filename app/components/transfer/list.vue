<template>
    <div :class="classes" :style="style">
        <div :class="prefixCls + '-header'">
            <!-- 是否全选按钮 -->
            <Checkbox :checked="checkedAll" :disabled="checkedAllDisabled" @on-change="toggleSelectAll"></Checkbox>
            <span>{{ title }}</span>
            <span :class="prefixCls + '-header-count'">{{ count }}</span>
        </div>
        <div :class="bodyClasses">
            <div :class="prefixCls + '-body-search-wrapper'" v-if="filterable">
                <Search
                    :prefix-cls="prefixCls + '-search'"
                    :query.sync="query"
                    :placeholder="filterPlaceholder"></Search>
            </div>
            <ul :class="prefixCls + '-content'">
                <li
                    v-for="item in filterData"
                    :class="itemClasses(item)"
                    @click.prevent="select(item)">
                    <Checkbox :checked="isCheck(item)" :disabled="item.disabled"></Checkbox>
                    <span>{{ showLabel(item) }}</span>
                </li>
                <li :class="prefixCls + '-content-not-found'">{{ notFoundText }}</li>
            </ul>
        </div>
        <div :class="prefixCls + '-footer'" v-if="showFooter" ref="footer"><slot></slot></div>
    </div>
</template>
<script>
    import Search from './search.vue';
    import Checkbox from '../checkbox/checkbox.vue';

    export default {
        components: { Search, Checkbox },
        props: {
            prefixCls: String,
            data: Array,
            renderFormat: Function,
            checkedKeys: Array, //用来存放该列表中所有选中的项
            style: Object,
            title: [String, Number],
            filterable: Boolean,
            filterPlaceholder: String,
            filterMethod: Function,
            notFoundText: String,
            validKeysCount: Number
        },
        data () {
            return {
                showItems: [],
                query: '',
                showFooter: true,
                myCheckedKeys: this.checkedKeys
            }
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}`,
                    {
                        [`${this.prefixCls}-with-footer`]: this.showFooter
                    }
                ]
            },
            bodyClasses () {
                return [
                    `${this.prefixCls}-body`,
                    {
                        [`${this.prefixCls}-body-with-search`]: this.filterable,
                        [`${this.prefixCls}-body-with-footer`]: this.showFooter
                    }
                ]
            },
            count () {
                const validKeysCount = this.validKeysCount;
                return (validKeysCount > 0 ? `${validKeysCount}/` : '') + `${this.data.length}`;
            },
            checkedAll: {
                get() {
                    return this.data.filter(data => !data.disabled).length === this.validKeysCount && this.validKeysCount !== 0;
                },
                set() {}
            },
            checkedAllDisabled () {
                return this.data.filter(data => !data.disabled).length <= 0;
            },
            filterData (value) {
                const _this = this;
                return this.showItems.filter(function(value) {
                    return _this.filterMethod(value, _this.query);
                });
            },
            checkedKeys: {
                get() {
                    return this.myCheckedKeys;
                },
                set(keyArr) {
                    this.$emit('on-CheckedKeys', keyArr);
                }
            }
        },
        methods: {
            itemClasses (item) {
                return [
                    `${this.prefixCls}-content-item`,
                    {
                        [`${this.prefixCls}-content-item-disabled`]: item.disabled
                    }
                ]
            },
            showLabel (item) {
                return this.renderFormat(item);
            },
            isCheck (item) {
                return this.myCheckedKeys.some(key => key === item.key);
            },
            select (item) {
                if (item.disabled) return;
                const index = this.myCheckedKeys.indexOf(item.key);
                //判断该点击的项在选中的项中是否存在，如果存在，表示此次点击是取消行为；
                //如果不存在表示此次点击是选择行为
                index > -1 ? this.myCheckedKeys.splice(index, 1) : this.myCheckedKeys.push(item.key);
                console.log('hello');
                this.checkedKeys = this.myCheckedKeys;
            },
            updateFilteredData () {
                this.showItems = this.data;
            },
            toggleSelectAll (status) {
                console.log("ddd--------------------" + status);
                this.myCheckedKeys = status ?
                        this.data.filter(data => !data.disabled || this.myCheckedKeys.indexOf(data.key) > -1).map(data => data.key)
                        /*选出没被禁用或者明确被选中的项，加上选中状态*/ :
                        this.data.filter(data => data.disabled && this.myCheckedKeys.indexOf(data.key) > -1).map(data => data.key);
                console.log(this.myCheckedKeys);
                this.checkedKeys = this.myCheckedKeys;
            }
        },
        created () {
            this.updateFilteredData();
        },
        compiled () {
            this.showFooter = this.$refs.footer.innerHTML !== '';
        },
        watch: {
            data () {
                this.updateFilteredData();
            }
        }
    }
</script>
