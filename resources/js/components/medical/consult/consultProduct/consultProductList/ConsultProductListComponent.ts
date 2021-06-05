import { ProductData } from '@data/Product/Product.data';
import { ProductPaginationData } from '@data/Product/ProductPagination.data';
import { Product } from '@interface/Product/Product.interface';
import { ProductPagination } from '@interface/Product/ProductPagination.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['productSelected'],
    props: {
        id: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        productCategory: {
            type: String,
            default: ''
        },
        productSelectedList: {
            type: Array as PropType<Product[]>,
            default: []
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
            reset: false,
            productCheckList: {} as {
                [key: number]: boolean
            }
        };
    },
    mounted() {
    },
    watch: {
        productCategory()
        {
            this.reset = true;
            this.getProductData(1);
        },
        productCheckList()
        {
            console.log(this.productCheckList)
        }
    },
    methods: {
        checkProductSelected(productList: Product[])
        {
            this.productCheckList = Object.assign({}, ...productList.map(product => {
                return {
                    [product.id]: this.productSelectedList.filter(item => item.id === product.id).length > 0
                }
            }));
        },
        sendProductSelected(product: Product, event: HTMLInputElement)
        {
            this.$emit('productSelected', product, event.checked);
        },
        getProductData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.paginationData.pagination.last_page && page !== this.paginationActive || this.reset)
            {
                this.paginationActive = page;
                axios.get<ProductPagination>(`/productos/${this.productCategory}?page=${this.paginationActive}`)
                .then(response => {
                    this.paginationData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                    this.reset = false;
                    this.checkProductSelected(response.data.data);
                })
                .catch(error => {
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
    },
})