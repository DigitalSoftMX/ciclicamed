import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { Employee } from '@interface/Employee/Employee.interface';
import { PropType } from 'vue';
moment.locale('es');

export default defineComponent({
    components: {
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    emits: ['updateUser'],
    props: {
        userCategory: {
            type: String,
            default: 'pacientes'
        },
        userData: {
            type: Object as PropType<Patient | Employee>,
            default: {}
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    computed: {
        fullName(): string
        {
            return `${this.userData.first_name} ${this.userData.last_name}`;
        },
        birthday(): string
        {
            return moment(this.userData.birthday).format('DD-MM-YYYY');
        },
        gender(): string
        {
            return this.userData.gender === 0 ? 'Hombre' : 'Mujer';
        }
    },
    methods: {
    },
})