import { Role } from '@interface/User/Role.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        ConsultComponent: require('@component/medical/consult/ConsultComponent.vue').default,
        ScheduleComponent: require('@component/schedule/ScheduleComponent.vue').default,
    },
    emits: [],
    props: {
        consultID:
        {
            type: Number,
            default: -1
        },
        role: {
            type: String,
            default: ''
        },
        employeeID: {
            type: Number,
            default: -1
        },
        patientID: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    computed: {
    },
    methods: {
    },
})
