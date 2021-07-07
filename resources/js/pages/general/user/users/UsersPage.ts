import {
    defineComponent
} from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        PatientsTableComponent: require('@component/patient/patientsTable/PatientsTableComponent.vue').default,
        EmployeesTableComponent: require('@component/employee/employeesTable/EmployeesTableComponent.vue').default    },
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