import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';
import { ProductData } from '../../defaultData/Product/Product.data';
import { Product } from '../../interfaces/Product/Product.interface';
import $ from 'jquery';

export default defineComponent({
    components: {
        SuccessAlertComponent: require('../alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('../alert/ErrorAlertComponent.vue').default,
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
            type: Boolean,
            default: true
        },
        productCategory: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            productDataCopy: Object.assign({}, this.productData),
            errors: [],
            succesMessage: '',
            buttonTitle: 'Crear producto'
        };
    },
    mounted() {
    },
    watch: {
        productData()
        {
            this.productDataCopy = Object.assign({}, this.productData);
        },
        isNew()
        {
            console.log(this.isNew)
            this.buttonTitle = this.isNew ? 'Crear producto' : 'Actualizar producto';
        }
    },
    methods: {
        modifyProduct()
        {
            this.isNew ? this.createProduct() : this.updateProduct();
        },
        createProduct()
        {
            axios.post<Product>(`/productos`, {
                category: this.productCategory,
                data: this.productDataCopy
            })
            .then(response => {
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
                data: this.productDataCopy
            })
            .then(response => {
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