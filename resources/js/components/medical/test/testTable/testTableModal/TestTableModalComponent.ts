import { TestData } from '@data/Medical/Test.data';
import { Test } from '@interface/Medical/Test.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra las ordenes de estudio de un estudio seleccionadoo, mediante un modal
 * @class TestTableModalComponent
 * @example <test-table-modal-component :test=""></test-table-modal-component>
*/
export default defineComponent({
    /** 
     * Propiedades que recibe el componente 
     * @member TestTableModalComponent.props
     * @property {Test} test (Obligatorio) Estudio médico seleccionado
    */
    props: {
        test: {
            type: Object as PropType<Test>,
            default: TestData
        }
    },
    /**
    * Variables del componente
    * @member TestTableModalComponent.data
    * @property {Object} annotations Guarda la lista de anotaciones para el estudio seleccionado
    */
    data() {
        return {
            annotations: this.test.order.product.order_annotations!
        };
    },
    /** 
     * Variables a observar por el componente
     * @member TestTableModalComponent.watch
     * @property {Test} test Al actualizar el estudio seleccionado, asigna a la variable annotations la lista de anotaciones del nuevo estudio seleccionado
    */
    watch: {
        test: {
            handler()
            {
                this.annotations = this.test.order.product.order_annotations!
            },
            deep: true
        }
    },
    mounted() {
    },
    methods: {
    }
})