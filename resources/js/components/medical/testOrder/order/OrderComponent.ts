import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import { DefineComponent, PropType } from 'vue';
import axios from 'axios';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        testList: {
            type: Array as PropType<any[]>,
            default: []
        },
    },
    data() {
        return {
            testSelected: 0,
            id: Math.floor(Math.random() * (50 - 1 + 1)) + 1
        };
    },
    mounted() {
        const self = this;
        $(`#test${self.id}`).select2()
        $(`#test${self.id}`).on('select2:select', function (e) {
            self.testSelected = self.testList.findIndex(test => test.id === Number(e.params.data.id));
          });
    },
    watch: {
    },
    methods: {
    },
})
