import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';
import $ from 'jquery';
import { Product } from '@interface/Product/Product.interface';
import { ProductData } from '@data/Product/Product.data';

/** 
 * @description Componente que permite crear o editar un producto, mediante un formulario dentro de un modal
 * @class ProductComponent
 * @example <product-component :disabled="" :productData="" id="" isNew="" productCategory=""></product-component>
*/
export default defineComponent({
    /** 
     * {@linkSuccessAlertComponent}, {@link ErrorAlertComponent}
     * @member ProductComponent.components
    */
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
    },
    /** 
     * Propiedades que recibe el componente 
     * @member ProductComponent.props
     * @property {Product} productData (Obligatorio) Datos del producto seleccionado
     * @property {string} id (Obligatorio) ID del componente
     * @property {boolean} isNew (Obligatorio) Indica si el producto es nuevo o creado anteriormente
     * @property {boolean} productCategory (Obligatorio) Categoría a la que pertenece el producto seleccionado (ciclica, histeroscopia, etc)
    */
    props: {
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
    /**
    * Variables del componente
    * @member ProductComponent.data
    * @property {Product} productDataCopy Guarda la información del producto seleccionado
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {string} succesMessage Guarda el mensaje de éxito despues de crear o editar un producto
    * @property {string} buttonTitle Guarda el título del boton de creación o edición del producto
    * @property {string[]} orderAnnotationsCopy Guarda la lista de anotaciones de los estudios (solo laboratorio e imagenologia)
    */
    data() {
        return {
            productDataCopy: Object.assign({}, this.productData),
            errors: [],
            succesMessage: '',
            buttonTitle: 'Crear producto',
            orderAnnotationsCopy: [] as String[]
        };
    },
    /** 
     * Variables a observar por el componente
     * @member ProductComponent.watch
     * @property {Product} productData Al actualizar el producto seleccionado, se asigna a la variable productDataCopy el producto seleccionado (para su edición) y se
     * asigna a la variable orderAnnotationsCopy la lista de anotaciones de estudio (si aplica)
     * @property {boolean} isNew Al actualizar la variable, si es nuevo el producto, se asigna a la variable buttonTitle un título de creación de producto, en caso contrario
     * se asigna un mensaje de actualización de producto
    */
    watch: {
        productData:
        {
            handler()
            {
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
        /** 
         * Agrega una anotación de estudio vacía a la variable orderAnnotationsCopy
         * @function ProductComponent.addTestOrder
        */
        addTestOrder()
        {
            this.orderAnnotationsCopy.unshift('');
        },
        /** 
         * Elimina la anotación seleccionada de la variable orderAnnotationsCopy
         * @function ProductComponent.deleteTestOrder
         * @param {number} index Número de la fila para eliminar de la variable orderAnnotationsCopy (anotaciones de estudio)
        */
        deleteTestOrder(index: number)
        {
            this.orderAnnotationsCopy.splice(index, 1);
        },
        /** 
         * Selecciona la acción a realizar de acuerdo al tipo de modificación del producto. En caso de que sea un nuevo producto
         * se {@link ProductComponent.createProduct|crea el producto}, en caso contrario se {@link ProductComponent.updateProduct|actualiza el producto}
         * @function ProductComponent.modifyProduct
        */
        modifyProduct()
        {
            this.isNew ? this.createProduct() : this.updateProduct();
        },
        /** 
         * Crea un nuevo producto en el servidor. En caso de que la petición se procese correctamente, se reinicia la orden de estudios y el producto seleccionado:
         * se crea un mensaje de éxito en la variable succesMessage, se muestra el componente {@link SuccessAlertComponent} con el mensaje de éxito y se oculta 
         * este componente
         * @function ProductComponent.createProduct
        */
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
        /** 
         * Actualiza el producto seleccionado en el servidor. En caso de que la petición se procese correctamente, se reinicia la orden de estudios y el producto seleccionado:
         * se crea un mensaje de éxito en la variable succesMessage, se muestra el componente {@link SuccessAlertComponent} con el mensaje de éxito y se oculta 
         * este componente
         * @function ProductComponent.createProduct
        */
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