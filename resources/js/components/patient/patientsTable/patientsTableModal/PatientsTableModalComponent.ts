import UserProfileComponent from '@component/user/userProfile/UserProfileComponent';
import { EmployeeData } from '@data/Employee/Employee.data';
import { PatientData } from '@data/Patient/Patient.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { Role } from '@interface/User/Role.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        UserProfileComponent
    },
    emits: ['onRoleSelected'],
    props: {
        patient: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    watch: {
        patient:
        {
            handler()
            {
                console.log(this.patient)
                console.log(this.patient)
            },
            deep:true
        },
    },
    data() {
        return {
            errors: [],
            preregistrationData: PreregistrationData
        };
    },
    mounted() {
    },
    methods: {
    }
})