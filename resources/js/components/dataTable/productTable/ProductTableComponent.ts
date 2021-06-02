import{ defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { ProductPaginationData } from '../../../defaultData/Product/ProductPagination.data';
import { ProductData } from '../../../defaultData/Product/Product.data';
import { ProductPagination } from '@/resources/js/interfaces/Product/ProductPagination.interface';
import { Product } from '@/resources/js/interfaces/Product/Product.interface';
import $ from 'jquery';

export default defineComponent({
    components: {
        PreregistrationComponent: require('../../patient/preregistration/PreregistrationComponent.vue').default,
        ProductComponent: require('../../product/ProductComponent.vue').default,
        SuccessAlertComponent: require('../../alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('../../alert/ErrorAlertComponent.vue').default,
        ConfirmationAlertComponent: require('../../alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default
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
        },
        id: {
            type: String,
            default: ''
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
            loading: true,
            isNewProduct: true,
            errors: []
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
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
        createProduct()
        {
            this.productData = ProductData;
            this.isNewProduct = true;
            $(`#productModal${this.id}`).modal('show');
        },
        editProduct(productData: Product)
        {
            this.productData = productData;
            this.isNewProduct = false;
            $(`#productModal${this.id}`).modal('show');
        },
        deleteProduct()
        {
            console.log('asasd')
            axios.delete<Product>(`/productos/${this.productData.id}`)
            .then(response => {
                $(`#productTableAlertSuccess${this.id}`).modal('show');
                this.paginationData.data = this.paginationData.data.filter(product => product.id !== this.productData.id);
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $(`#productTableAlertError${this.id}`).modal('show');
            })
        },
        openDeleteConfirmation(productData: Product)
        {
            this.productData = productData;
            $(`#productTableAlertConfirmation${this.id}`).modal('show');
        }
    },
})