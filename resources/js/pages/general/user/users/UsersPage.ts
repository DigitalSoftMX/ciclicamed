import {
    defineComponent
} from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        PatientsTableComponent: defineAsyncComponent(() => import('@component/patient/patientsTable/PatientsTableComponent.vue')),
        EmployeesTableComponent: defineAsyncComponent(() => import('@component/employee/employeesTable/EmployeesTableComponent.vue'))    },
    emits: [],
    props: {
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
       
    },
})