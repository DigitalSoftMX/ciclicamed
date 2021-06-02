import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';

export default defineComponent({
    emits: [`confirmAction`],
    props: {
        id: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
        closeAlert()
        {
            $(`#${this.id}`).modal('hide');
        },
        confirmAction()
        {
            this.$emit('confirmAction', this.id);
            this.closeAlert();
        }
    },
})
