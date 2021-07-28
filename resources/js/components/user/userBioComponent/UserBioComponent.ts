import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        userID: {
            type: Number,
            default: 1
        },
        userCategory: {
            type: String,
            default: 'pacientes'
        }
    },
    data() {
        return {
            userData: PatientData,
        };
    },
    mounted() {
        this.getPatientData();
    },
    computed: {
        fullName(): string
        {
            return `${this.userData.first_name} ${this.userData.last_name}`;
        },
        birthday(): string
        {
            return moment(this.userData.birthday).format('DD-MM-YYYY');
        }
    },
    methods: {
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        getPatientData()
        {
            axios.get<Patient>(`/${this.userCategory}/${this.userID}`)
            .then(response => {
                this.userData = response.data;
            })
            .catch(error => {
                ;
            })
        },
    },
})