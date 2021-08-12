import { Prescription } from '@interface/Medical/Prescription.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra los medicamentos de una receta médica de un paciente (solo rol paciente)
 * @class PrescriptionModalComponent
 * @example <prescription-modal-component :id="" prescription=""></prescription-modal-component>
*/
export default defineComponent({
    components: {
    },
    /** 
     * Propiedades que recibe el componente 
     * @member PrescriptionModalComponent.props
     * @property {string} id ID del componente
     * @property {Prescription[]} prescriptions Lista de medicamentos de la receta médica seleccionada
     * 
    */
    props: {
        id: {
            type: String,
            default: ''
        },
        prescriptions: {
            type: Array as PropType<Prescription[]>,
            default: []
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    }
})