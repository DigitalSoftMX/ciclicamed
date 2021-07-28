import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';
import $ from 'jquery';
import moment from 'moment';
import { UserPaginationData } from '@data/User/UserPagination.data';
import { PatientData } from '@data/Patient/Patient.data';
import { UserPagination } from '@interface/User/UserPagination.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { PaymentPagination } from '@interface/Payment/PaymentPagination.interface';
import { PaymentPaginationData } from '@data/Payment/PaymentPagination.data';
import { Payment } from '@interface/Payment/Payment.interface';
import { PaymentData } from '@data/Payment/Payment.data';

export default defineComponent({
    components: {
    },
    emits: ['onPaymentSelect', 'onNewPayment'],
    props: {
    },
    data() {
        return {
            paymentData: PaymentPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            patientData: PatientData,
            loading: true,
            errors: [],
            paymentSelected: PaymentData
        };
    },
    mounted() {
        this.getpaymentData(1);
    },
    watch: {
    },
    methods: {
        showModalConfirmation(payment: Payment)
        {
            this.paymentSelected = payment;
            $('#paytcConfirmation').modal('show');
        },
        deletePayment()
        {
            axios.delete(`/pagos/${this.paymentSelected.id}`)
            .then(response => {
                $('#paytcSuccess').modal('show');
            })
            .catch(error => {
                $('#paytcError').modal('show');
            })
        },
        formatBirthday(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        getpaymentData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.paymentData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<PaymentPagination>(`/pagos/faltantes?page=${this.paginationActive}`)
                .then(response => {
                    this.paymentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    ;
                    this.loading = false;
                })
            }
        },
        getpaymentDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query === '')
            {
                axios.get<PaymentPagination>(`/pagos/faltantes`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.paymentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    ;
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
        redirectToChargeComponent(payment: Payment)
        {
            this.$emit('onPaymentSelect', payment);
        },
        fullName(payment: Payment)
        {
            return `${payment.patient?.first_name} ${payment.patient?.last_name}`;
        },
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        createNewPayment()
        {
            this.$emit('onNewPayment');
        }
    },
})