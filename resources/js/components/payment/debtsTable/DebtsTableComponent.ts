import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Payment } from '@interface/Payment/Payment.interface';
import { DebtData } from '@data/Payment/Debt.data';
import { Debt } from '@interface/Payment/Debt.interface';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
    },
    data() {
        return {
            debtData: [] as Debt[],
            loading: true
        };
    },
    mounted() {
        this.getDebtData();
    },
    watch: {

    },
    methods: {
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        getDebtData()
        {
            this.loading = true;
            axios.get<Debt[]>(`/pagos/1/deudas`)
            .then(response => {
                this.debtData = response.data;
                this.loading = false;
            })
            .catch(error => {
                console.log(error);
                this.loading = false;
            })
        }
    },
})