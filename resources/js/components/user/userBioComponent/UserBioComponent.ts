import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PaymentPaginationData } from '@data/Payment/PaymentPagination.data';
import { PaymentPagination } from '@interface/Payment/PaymentPagination.interface';
import { Payment } from '@interface/Payment/Payment.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Product } from '@interface/Product/Product.interface';

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
                console.log(error);
            })
        },
    },
})