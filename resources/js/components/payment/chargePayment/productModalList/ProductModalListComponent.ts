import { ProductData } from '@data/Product/Product.data';
import { ProductPaginationData } from '@data/Product/ProductPagination.data';
import { Product } from '@interface/Product/Product.interface';
import { ProductPagination } from '@interface/Product/ProductPagination.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra los productos de acuerdo a la categoría a la que pertenezca, mediante el uso de un modal
 * @class ProductModalListComponent
 * @example <product-modal-list-component :id="" title="" :productCategory="" :productSelectedList=""></product-modal-list-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member ProductModalListComponent.emits
     * @property {Product|boolean} productSelected Evento que indica que se ha seleccionado o deseleccionado un producto junto con los datos de producto seleccionado
    */
    emits: ['productSelected'],
    /** 
     * Propiedades que recibe el componente 
     * @member ProductModalListComponent.props
     * @property {string} id (Obligatorio) ID del componente
     * @property {string} title (Obligatorio) Título del componente
     * @property {string} productCategory (Obligatorio) Categoría de la lista de productos a mostrar (ciclica, histeroscopia, etc)
     * @property {Product[]} productSelectedList (Obligatorio) Lista de productos seleccionados previamente por el usuario
    */
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
    /**
    * Variables del componente
    * @member ProductModalListComponent.data
    * @property {ProductPaginationData} paginationData Guarda la información la lista de productos obtenida del servidor, de acuerdo a la categoría seleccionada
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {boolean} reset Reinicia la lista de productos obtenidos del servidor
    * @property {Object} productCheckList Guarda la información de los productos seleccionados en este componente
    */
    data() {
        return {
            paginationData: ProductPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            reset: false,
            productCheckList: {} as {
                [key: number]: boolean
            }
        };
    },
    /** 
     * Variables a observar por el componente
     * @member ProductModalListComponent.watch
     * @property {string} productCategory Al actualizar la categoría de la lista de productos, reinicia la lista de productos que se muestran en el modal, además que reinicia
     * la búsqueda del componente, asignando un string vacío a la variable query y por último obtiene la nueva {@link ProductModalListComponent.getProductData|lista de productos}
    */
    watch: {
        productCategory()
        {
            this.reset = true;
            this.query = '';
            this.getProductData(1);
        },
    },
    methods: {
        /** 
         * Asigna a la variable productCheckList la lista de productos que han sido seleccionados por el usuario de la variable productList, esto permite
         * al componente mostrar los productos que han sido seleccionados anteriormente por el usuario, en caso de que el usuario vuelva a seleccionar la misma
         * categoría anteriormente
         * @param {Product[]} productList Lista de productos
         * @function ProductModalListComponent.checkProductSelected
        */
        checkProductSelected(productList: Product[])
        {
            this.productCheckList = Object.assign({}, ...productList.map(product => {
                return {
                    [product.id]: this.productSelectedList.filter(item => item.id === product.id).length > 0
                }
            }));
        },
        /** 
         * Envía el evento productSelected al componente {@link ConsultTestOrderComponent} con el producto seleccionado por el usuario, junto con un valor
         * booleano que indica si ha sido o no seleccionado
         * @param {Product} product Producto seleccionado
         * @param {HTMLInputElement} event Evento del checkbox para seleccionar producto
         * @function ProductModalListComponent.sendProductSelected
        */
        sendProductSelected(product: Product, event: HTMLInputElement)
        {
            this.$emit('productSelected', product, event.checked);
        },
        /** 
         * Obtiene la lista de productos registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con la lista de productos, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada
         * en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * paginationData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /productos/{categoria} con el parámetro de la página. Si la petición es correcta se asigna la variable paginationData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor, se indica a la
         * variable reset que ya se han cargado nuevos datos, se seleccionan los productos agregados anteriormes (si existen) mediante la funcion {@link ProductModalListComponent.checkProductSelected}
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function ProductModalListComponent.getBranchData
        */
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
        /** 
         * Obtiene la lista de productos registradas en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los empleados, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /productos/{categoria} con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable paginationData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function ProductModalListComponent.getProductDataQuery
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
    },
})