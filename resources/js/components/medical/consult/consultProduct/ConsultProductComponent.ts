import { Product } from '@interface/Product/Product.interface';
import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';
import 'bootstrap';
import { ProductData } from '@data/Product/Product.data';

export default defineComponent({
    components: {
        EmptyErrorComponent: require('@component/general/error/EmptyErrorComponent.vue').default,
        ConsultProductListComponent: require('@component/medical/consult/consultProduct/consultProductList/ConsultProductListComponent.vue').default
    },
    emits: [],
    props: {
    },
    data() {
        return {
            productSelectedList: [] as Product[],
            productList: [] as Product[],
            productCategoryLoaded: [] as String[],
            categorySelected: '',
            titleSelected: ''
        };
    },
    mounted() {
    },
    watch: {

    },
    methods: {
        openProductListModal(category: string, title: string)
        {
            this.categorySelected = category;
            this.titleSelected = title;
            $('#cpcProductList').modal('show');
        },
        editProducSelectedList(product: Product, checked: boolean)
        {
            checked ? this.productSelectedList.push(product) : this.productSelectedList = this.productSelectedList.filter(item => item.id !== product.id);
            console.log(this.productSelectedList)
        },
        getTotalPrice()
        {
            return this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price.toFixed(2);
        }
    },
})