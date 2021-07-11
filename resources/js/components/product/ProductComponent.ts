import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';
import $ from 'jquery';
import { Product } from '@interface/Product/Product.interface';
import { ProductData } from '@data/Product/Product.data';
import cloneDeep from 'lodash/cloneDeep';
import { TestOrder } from '@interface/Medical/TestOrder.interface';

export default defineComponent({
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
    },
    emits: [],
    props: {
        disabled: {
            type: Boolean,
            default: true
        },
        productData: {
            type: Object as PropType<Product>,
            default: ProductData
        },
        id: {
            type: String,
            default: ''
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        productCategory: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            productDataCopy: Object.assign({}, this.productData),
            errors: [],
            succesMessage: '',
            buttonTitle: 'Crear producto',
            orderAnnotationsCopy: [] as String[]
        };
    },
    mounted() {
    },
    watch: {
        productData:
        {
            handler()
            {
                console.log(this.productDataCopy.order_annotations)
                this.productDataCopy = Object.assign({}, this.productData);
                this.orderAnnotationsCopy = this.productDataCopy.order_annotations!.map(item => item.annotation) ?? [];
            },
            deep: true
        },
        isNew()
        {
            this.buttonTitle = this.isNew ? 'Crear producto' : 'Actualizar producto';
        }
    },
    methods: {
        addTestOrder()
        {
            this.orderAnnotationsCopy.unshift('');
        },
        deleteTestOrder(index: number)
        {
            console.log(index)
            this.orderAnnotationsCopy.splice(index, 1);
        },
        modifyProduct()
        {
            this.isNew ? this.createProduct() : this.updateProduct();
        },
        createProduct()
        {
            axios.post<Product>(`/productos`, {
                category: this.productCategory,
                data: this.productDataCopy,
                orders: this.orderAnnotationsCopy
            })
            .then(response => {
                this.orderAnnotationsCopy = [];
                this.productDataCopy = ProductData
                this.succesMessage = 'Se ha creado correctamente el producto';
                $(`#productAlertSuccess${this.id}`).modal('show');
                $(`#productModal${this.id}`).modal('hide');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $(`#productAlertError${this.id}`).modal('show');
            })
        },
        updateProduct()
        {
            axios.patch<Product>(`/productos/${this.productDataCopy.id}`, {
                data: this.productDataCopy,
                orders: this.orderAnnotationsCopy
            })
            .then(response => {
                this.orderAnnotationsCopy = [];
                this.productDataCopy = ProductData
                this.succesMessage = 'Se ha actualizado correctamente el producto';
                $(`#productAlertSuccess${this.id}`).modal('show');
                $(`#productModal${this.id}`).modal('hide');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $(`#productAlertError${this.id}`).modal('show');
                $(`#productModal${this.id}`).modal('hide');
            })
        }
    },
})