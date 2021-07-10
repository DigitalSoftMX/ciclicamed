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
            formaPago: 1,
            tarjeta: null,
            descripcion: null,
            errors: []
        };
    },
    computed: {
        showCredit(): boolean
        {
            console.log(this.formaPago)
            return Number(this.formaPago) !== 1 ? true : false;
        }
    },
    watch: {
        paymentID()
        {
            console.log(this.paymentID)
        }
    },
    methods: {
        createDebtPayment()
        {
            axios.post(`/pagos/${this.paymentID}/deudas`, {
                cantidad: this.cantidad,
                formaPago: this.formaPago,
                tarjeta: this.tarjeta,
                descripcion: this.descripcion
            })
            .then(response => {
                this.cantidad = 0,
                this.formaPago = 1,
                this.tarjeta = null,
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