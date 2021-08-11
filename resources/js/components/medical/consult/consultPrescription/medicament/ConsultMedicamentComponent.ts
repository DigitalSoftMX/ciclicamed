import { PrescriptionData } from '@data/Medical/Prescription.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { defineComponent } from '@vue/runtime-core';
import cloneDeep from 'lodash/cloneDeep';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra los datos de un medicamento para una receta, mediante el uso de una tarjeta
 * @class ConsultMedicamentComponent
 * @example <consult-medicament-component v-model="" medicamentList="" id="" disabled=""></consult-medicament-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member ConsultMedicamentComponent.emits
    * @property {Prescription} update:modelValue Evento que actualiza la variable que se ingreso en el v-model
    * @property {number} onDelete Evento que indica que un medicamento ha sido eliminado de la lista de la receta, indicando el id a la que pertenece
    */
    emits: ['update:modelValue', 'onDelete'],
    /** 
     * Propiedades que recibe el componente 
     * @member ConsultMedicamentComponent.props
     * @property {Prescription} modelValue (Opcional) Valor que recibe y actualiza al componente padre. Ver {@link https://v3.vuejs.org/guide/migration/v-model.html|v-model} de vue para mas referencia
     * @property {any[]} medicamentList (Obligatorio) Lista de medicamentos
     * @property {number} id (Obligatorio) ID del componente
     * @property {boolean} disabled (Obligatorio) Habilita o deshabilita input del componente
    */
    props: {
        modelValue: {
            type: Object as PropType<Prescription>,
            default: PrescriptionData
        },
        medicamentList: {
            type: Array as PropType<any[]>,
            default: []
        },
        id: {
            type: Number as PropType<Number>,
            default: 0
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
    },
    /**
    * Variables del componente
    * @member ConsultMedicamentComponent.data
    * @property {any[]} medicament Guarda los datos de la variable modelValue para modificar dichos datos (v-model)
    */
    data() {
        return {
            medicament: this.modelValue
        };
    },
    /** 
     * Variables a observar por el componente
     * @member ConsultMedicamentComponent.watch
     * @property {Prescription} modelValue Al actualizar los datos de esta variable, se asigna los datos de éste a la variable medicament para permitir su modificación 
     * @property {Prescription} medicament Al actualizar los datos de la variable lanza un emit para actualizar el v-model
    */
    watch: {
        modelValue: {
            handler()
            {
                this.medicament = this.modelValue;
            },
            deep: true
        },
        medicament: {
            handler()
            {
                this.$emit('update:modelValue', this.medicament);
            },
            deep: true
        }
    },
    methods: {
        /** 
         * Cuando se elimina un medicamento, lanza un emit con el id (index) para que el componente padre {@link ConsultPrescriptionComponent} pueda
         * eliminarlo de la variable prescriptionData
         * @function ConsultMedicamentComponent.deleteThisComponent
        */
        deleteThisComponent()
        {
            this.$emit('onDelete', this.id);
        }
    },
})
