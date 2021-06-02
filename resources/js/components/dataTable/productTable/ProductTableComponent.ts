import { UserPaginationData } from '../../../defaultData/User/UserPagination.data';
import { UserPagination } from '@/resources/js/interfaces/User/UserPagination.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { DefineComponent, PropType } from 'vue';
import $ from 'jquery';
import { ProductPaginationData } from '../../../defaultData/Product/ProductPagination.data';
import { ProductData } from '../../../defaultData/Product/Product.data';
import { ProductPagination } from '@/resources/js/interfaces/Product/ProductPagination.interface';
import { Product } from '@/resources/js/interfaces/Product/Product.interface';

export default defineComponent({
    components: {
        PreregistrationComponent: require('../../patient/preregistration/PreregistrationComponent.vue').default
    },
    emits: [],
    props: {
        title: {
            type: String,
            default: 'Producto'
        },
        productCategory: {
            type: String,
            default: 'ciclica'
        }
    },
    data() {
        return {
            paginationData: ProductPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            productData: ProductData,
            loading: true
        };
    },
    mounted() {
        this.getUserData(1);
    },
    watch: {

    },
    methods: {
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.paginationData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<ProductPagination>(`/productos/${this.productCategory}?page=${this.paginationActive}`)
                .then(response => {
                    this.paginationData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
            }
        },
        getUserDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<ProductPagination>(`/productos/${this.productCategory}`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.paginationData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
        openPreregistration(productData: Product)
        {
            this.productData = productData;
            // $('#preregistration-modal').modal('show');
        }
    },
})