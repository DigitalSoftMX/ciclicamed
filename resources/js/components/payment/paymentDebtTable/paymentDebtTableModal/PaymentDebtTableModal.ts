import { ProductData } from '@data/Product/Product.data';
import { ProductPaginationData } from '@data/Product/ProductPagination.data';
import { Payment } from '@interface/Payment/Payment.interface';
import { Product } from '@interface/Product/Product.interface';
import { ProductPagination } from '@interface/Product/ProductPagination.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { Prop, PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['productSelected'],
    props: {
        paymentID: {
            type: Number as PropType<Number>,
            default: 0
        },
    },
    data() {
        return {
            cantidad: 0,
            paymentMethod: {
                check: 1,
                description: ''
            },
            descripcion: null,
            errors: []
        };
    },
    computed: {
        showCredit(): boolean
        {
            return Number(this.paymentMethod.check) !== 1 ? true : false;
        }
    },
    watch: {
    },
    methods: {
        createDebtPayment()
        {
            axios.post(`/pagos/${this.paymentID}/deudas`, {
                cantidad: this.cantidad,
                paymentMethod: this.paymentMethod,
                descripcion: this.descripcion
            })
            .then(response => {
                this.cantidad = 0,
                this.paymentMethod.check = 1;
                this.paymentMethod.description = '';
                this.descripcion = null,
                $('#pdtmPaymentModal').modal('hide');
                $('#pdtmSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#pdtmPaymentModal').modal('hide');
                $('#pdtmError').modal('show');
            })
        }
    },
})