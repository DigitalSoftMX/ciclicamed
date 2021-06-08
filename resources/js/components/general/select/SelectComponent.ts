import { Select } from '@interface/General/Select.interface';
import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';
import 'select2';
import { PropType } from 'vue';

export default defineComponent({
    emits: ['update:modelValue', 'onChange'],
    props: {
        id: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array as PropType<Select[]>,
            default: []
        },
        firstText:
        {
            type: String,
            default: ''
        },
        modelValue: {
            type: Number,
            default: 1
        },
        isGroup: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        localValue() {
            this.$emit('update:modelValue', this.localValue);
        },
        modelValue() {
            this.localValue = this.modelValue; 
            $(`#${this.id}`).val(this.modelValue).trigger('change');
        }
    },
    data() {
        return {
            localValue: this.modelValue
        };
    },
    mounted() {
        const self = this;
        $(`#${this.id}`).select2();
        $(`#${this.id}`).on('select2:select', function () {
            self.localValue = Number($(`#${self.id}`).select2('data')[0].id);
            self.$emit('onChange');
        });
    },
    methods: {
    },
})
