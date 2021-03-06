<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady" ref="prepend"><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon']" v-if="icon" @click="handleIconClick"></i>
            <input
                @change="$emit('change', currentValue)"
                ref="input"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :number="type === 'number'"
                :type="type"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                :value="currentValue"
                @input="handleInput">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady" ref="append"><slot name="append"></slot></div>
        </template>
        <textarea
            v-else
            ref="textarea"
            :class="textareaClasses"
            :style="textareaStyles"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            :readonly="readonly"
            :name="name"
            v-model="currentValue"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur">
        </textarea>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist'
    import calcTextareaHeight from '../../utils/calcTextareaHeight'

    const prefixCls = 'ivu-input'

    export default {
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password']);
                },
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            },
            readonly: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            value: {},
            attr: Object
        },
        data () {
            return {
                prefixCls: prefixCls,
                prepend: true,
                append: true,
                slotReady: false,
                textareaStyles: {},
                //创建 value元素的副本
                currentValue: this.value
            }        
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-type`]: this.type,
                        [`${prefixCls}-group`]: this.prepend || this.append,
                        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size
                    }
                ]
            },
            inputClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ]
            },
            textareaClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ]
            }
        },
        methods: {
            handleInput(evt) {
                console.log('handleInput');
                this.currentValue = evt.target.value;
            },
            handleEnter () {
                this.$emit('on-enter');
            },
            handleIconClick () {
                this.$emit('on-click');
            },
            handleFocus () {
                this.$emit('on-focus');
            },
            handleBlur () {
                this.$emit('on-blur');
            },
            resizeTextarea () {
                const autosize = this.autosize;
                if (!autosize || this.type !== 'textarea') {
                    return false;
                }

                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            }
        },
        watch: {
            attr: {
                immediate: true,
                handler(attrs) {
                    this.$nextTick(() => {
                        const target = [this.$refs.input, this.$refs.textarea];
                        target.forEach(el => {
                            if (!el || !attrs) return;
                            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
                        });
                    });
                }
            },
            
            value(val) {
              this.currentValue = val;
            },

            currentValue(val) {
              this.$emit('input', val);
            }
        },
        mounted () {
            if (this.type === 'text') {
                this.prepend = this.$refs.prepend.innerHTML !== '';
                this.append = this.$refs.append.innerHTML !== '';
            } else {
                this.prepend = false;
                this.append = false;
            }
            this.slotReady = true;
            this.resizeTextarea();
        }
    }
</script>