import {
    defineComponent
} from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        PatientsTableComponent: require('../../../components/dataTable/patientsTable/PatientsTableComponent.vue').default,
        EmployeesTableComponent: require('../../../components/dataTable/employeesTable/EmployeesTableComponent.vue').default
    },
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