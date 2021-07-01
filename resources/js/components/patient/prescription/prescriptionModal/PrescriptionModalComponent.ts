import { Prescription } from '@interface/Medical/Prescription.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    props: {
        id: {
            type: String,
            default: ''
        },
        prescriptions: {
            type: Array as PropType<Prescription[]>,
            default: []
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    }
})