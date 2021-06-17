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
        patientID: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            paymentData: PaymentPaginationData,
            patientData: PatientData,
            paginationPages: 0,
            paginationActive: 0,
            loading: true
        };
    },
    mounted() {
        this.getPaymentData(1);
        this.getPatientData();
    },
    computed: {
        fullName(): string
        {
            return `${this.patientData.first_name} ${this.patientData.last_name}`;
        },
        birthday(): string
        {
            return moment(this.patientData.birthday).format('DD-MM-YYYY');
        }
    },
    methods: {
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        getPaymentData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.paymentData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<PaymentPagination>(`/pacientes/${this.patientID}/deudas?page=${this.paginationActive}`)
                .then(response => {
                    this.paymentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
            }
        },
        getPatientData()
        {
            axios.get<Patient>(`/pacientes/${this.patientID}`)
            .then(response => {
                this.patientData = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        redirectToDebtInfo(payment: Payment)
        {
            window.location.href = '/test3'
        },
        safeNullProduct(payment: Payment): Product[]
        {
            return payment.products!;
        }
    },
})