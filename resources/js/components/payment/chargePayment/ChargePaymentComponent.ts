import { Product } from '@interface/Product/Product.interface';
import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';
import 'bootstrap';
import { ProductData } from '@data/Product/Product.data';
import { defineAsyncComponent } from 'vue';

export default defineComponent({
    components: {
        EmptyErrorComponent: defineAsyncComponent(() => import('@component/general/error/EmptyErrorComponent.vue')),
        ConsultProductListComponent: defineAsyncComponent(() => import('@component/payment/chargePayment/productModalList/ProductModalListComponent.vue')),
        PaymentInfoComponent: defineAsyncComponent(() => import('@component/payment/paymentInfo/PaymentInfoComponent.vue')),
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
            titleSelected: '',
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
            const price: number = this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
            const discount: number = this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
            return (price - discount).toFixed(2);
        },
        deleteProduct(product: Product)
        {
           this.productSelectedList = this.productSelectedList.filter(item => item.id !== product.id);
        }
    },
})