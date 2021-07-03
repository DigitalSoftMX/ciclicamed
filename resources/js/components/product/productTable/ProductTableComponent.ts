import { ProductData } from '@data/Product/Product.data';
import { ProductPaginationData } from '@data/Product/ProductPagination.data';
import { Product } from '@interface/Product/Product.interface';
import { ProductPagination } from '@interface/Product/ProductPagination.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import $ from 'jquery';
require('bootstrap');

export default defineComponent({
    components: {
        PreregistrationComponent: require('@component/patient/preregistration/PreregistrationComponent.vue').default,
        ProductComponent: require('@component/product/ProductComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        ConfirmationAlertComponent: require('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default
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
        },
        enableActions: {
            type: Boolean,
            default: true
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
        this.getProductData(1);
    },
    computed: {
        showProductCode(): boolean
        {
            return this.paginationData.data.filter(item => item.supplier_code !== null).length > 0 ? true: false;
        },
        showQuantityAvailable(): boolean
        {
            return this.paginationData.data.filter(item => item.quantity_available !== null).length > 0 ? true: false;
        },
       showDiscount(): boolean
        {
            return this.paginationData.data.filter(item => item.discount !== null).length > 0 ? true: false;
        }
    },
    methods: {
        getProductData(page: number)
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
        getProductDataQuery()
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