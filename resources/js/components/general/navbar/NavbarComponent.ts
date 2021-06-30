import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Sidebar } from '@interface/General/Sidebar.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, Prop, PropType } from 'vue';

export default defineComponent({
    emits: ['menuSelect'],
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array as PropType<Sidebar[]>,
            default: []
        },
        photo: {
            type: String,
            default: ''
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
        profilePhoto(): string
        {
            return this.photo === '' ? '/svg/account.svg' : `/images/users/${this.photo}`;
        },
        userCategory(): string
        {
            return instaceOf(this.userData) ? 'Empleado' : 'Paciente';
        },
        fullName(): string
        {
            return `${this.userData.first_name} ${this.userData.last_name}`;
        }
    },
    methods: {
       menuSelected()
       {
           this.$emit('menuSelect');
       },
    },
})

export function instaceOf(object: any): object is Employee
{
    return 'employeecategory_id' in object;
}