import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Sidebar } from '@interface/General/Sidebar.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, Prop, PropType } from 'vue';
import {asset} from '@codinglabs/laravel-asset'

export default defineComponent({
    emits: ['menuSelect'],
    mixins: [asset],
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
            token: document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
        };
    },
    mounted() {
        console.log((window as any).path)
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
       logout(event: Event)
       {
           event.preventDefault();
           (document.getElementById('ncLogout') as HTMLFormElement).submit();
       }
    },
})

export function instaceOf(object: any): object is Employee
{
    return 'employeecategory_id' in object;
}