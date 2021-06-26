import { SelectData } from '@data/General/SelectSelected.data';
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
            type: Object as PropType<Select>,
            default: SelectData
        },
        isGroup: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        data() {
            $(`#${this.id}`).empty();
            $(`#${this.id}`).select2({
                data: [
                    {
                        id: -1,
                        text: this.firstText,
                        disabled: true
                    },
                    ...this.data
                ]
            });
            $(`#${this.id}`).val('-1').trigger('change');
        },
        localValue() {
            this.$emit('update:modelValue', this.localValue);
        },
        modelValue: {
            handler()
            {
                this.localValue = this.modelValue;
                $(`#${this.id}`).val(this.localValue.id).trigger('change');
            },
            deep: true,
        }
    },
    data() {
        return {
            localValue: this.modelValue,
        };
    },
    mounted() {
        const self = this;
        $(`#${this.id}`).select2({
            data: [
                {
                    id: -1,
                    text: this.firstText,
                    disabled: true
                },
                ...this.data
            ]
        });
        $(`#${this.id}`).val('-1').trigger('change');
        $(`#${this.id}`).on('select2:select', function (event: any) {
            self.localValue = {
                id: Number(event.params.data.id),
                text: event.params.data.text,
                childID: Number(event.params.data.childID),
                parentID: Number(event.params.data.parentID)
            }
            self.$emit('onChange');
        });
    },
    methods: {
    },
})
