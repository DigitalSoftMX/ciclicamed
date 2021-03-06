import { ProductData } from '@data/Product/Product.data';
import { ProductPaginationData } from '@data/Product/ProductPagination.data';
import { Product } from '@interface/Product/Product.interface';
import { ProductPagination } from '@interface/Product/ProductPagination.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import $ from 'jquery';
require('bootstrap');

/** 
 * @description Componente que muestra la lista de productos registrados en el servidor, mediante el uso de una tabla
 * @class ProductTableComponent
 * @example <product-table-component></product-table-component>
*/
export default defineComponent({
    /** 
     * {@link ProductComponent}, {@link SuccessAlertComponent}, {@link ErrorAlertComponent} ,{@link ConfirmationAlertComponent}
     * @member ProductTableComponent.components
    */
    components: {
        ProductComponent: require('@component/product/ProductComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        ConfirmationAlertComponent: require('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default
    },
    /** 
     * Propiedades que recibe el componente 
     * @member ProductTableComponent.props
     * @property {string} title (Opcional) Título del componente a mostrar en la tabla
     * @property {boolean} productCategory (Obligatorio) Categoría a la que pertenece el producto seleccionado (ciclica, histeroscopia, etc)
     * @property {string} id (Obligatorio) ID del componente
     * @property {string} enableActions Habilita el botón de creación de producto, además de habilitar la opción de editar o ver el producto dentro de la tabla 
    */
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
    /**
    * Variables del componente
    * @member ProductTableComponent.data
    * @property {ProductPagination} paginationData Guarda la información de los productos registrados en el sistema, de acuerdo a la categoría a la que pertenecen
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {Product} productData Guarda los datos del producto seleccionado
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {boolean} isNewProduct Permite al componente {@link ProductComponent} saber si la variable productData es nueva o existente
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    */
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
            errors: [],
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link ProductTableComponent.getProductData|productos registrados de acuerdo a la categoría seleccionada}
     * @member ProductTableComponent.mounted
    */
    mounted() {
        this.getProductData(1);
    },
    /**
    * Propiedades computadas del componente 
    * @member ProductTableComponent.computed
    * @property {boolean} showProductCode Muestra u oculta la columna de código de proveedor en caso de existir o no dicho campo en algunos de los productos
    * @property {boolean} showQuantityAvailable Muestra u oculta la columna de la cantidad disponible del producto en caso de existir o no dicho campo en algunos de los productos
    * @property {boolean} showDiscount Muestra u oculta la columna del descuento del producto en caso de existir o no dicho campo en algunos de los productos
    */
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
        /** 
         * Obtiene la lista de productos registrados en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con la lista de productos registrados, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * paginationData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /productos/{categoria} con el parámetro de la página. Si la petición es correcta se asigna la variable paginationData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function ProductTableComponent.getProductData
        */
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
                    ;
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene la lista de productos registrados en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con la lista de productos registrados, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /productos/{categoria} con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable paginationData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function ProductTableComponent.getProductDataQuery
        */
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
        /** 
         * Crea un nuevo producto, asignando datos vacíos a la variable productData, junto con la asignación true de la variable isNewProduct,
         * finalmente se muestra el componente {@link ProductComponent}
         * @function ProductTableComponent.createProduct
        */
        createProduct()
        {
            this.productData = ProductData;
            this.isNewProduct = true;
            $(`#productModal${this.id}`).modal('show');
        },
        /** 
         * Asigna los datos del producto seleccionado a la variable productData, junto con la asignación false de la variable isNewProduct (para indicar que es un producto existente),
         * finalmente se muestra el componente {@link ProductComponent}
         * @function ProductTableComponent.createProduct
         * @param {Product} productData Datos del producto seleccionado
        */
        editProduct(productData: Product)
        {
            this.productData = {...productData};
            this.isNewProduct = false;
            $(`#productModal${this.id}`).modal('show');
        },
        /** 
         * Se elimina el producto seleccionado del servidor. Si la petición se procesa correctamente, se muestra el componente {@link SuccessAlertComponent} con
         * un mensaje de éxito, además de eliminar el producto de la tabla al eliminarlo de la variable paginationData. En caso contrario se obtienen los errores
         * del servidor y se asigna a la variable errores, mostrando dichos errores en el componente {@link ErrorAlertComponent}
         * @function ProductTableComponent.deleteProduct
        */
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
        /** 
         * Abre el componente {@link ConfirmationAlertComponent} con un mensaje de confirmación, antes de eliminar un producto del servidor
         * @function ProductTableComponent.openDeleteConfirmation
        */
        openDeleteConfirmation(productData: Product)
        {
            this.productData = productData;
            $(`#productTableAlertConfirmation${this.id}`).modal('show');
        }
    },
})