import { Product } from '@interface/Product/Product.interface';
import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';
import 'bootstrap';

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
        }
    },
})