import { EmployeeData } from '@data/Employee/Employee.data';
import { Employee } from '@interface/Employee/Employee.interface';
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
        },
        doctorData: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
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
