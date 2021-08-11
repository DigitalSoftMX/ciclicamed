import { SelectData } from '@data/General/SelectSelected.data';
import { Select } from '@interface/General/Select.interface';
import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';
import 'select2';
import { PropType } from 'vue';

/** 
 * @description Componente que simula la etiqueta select de HTML, con opciones avanzadas de jerarquía.
 * Nota: Se recomienda utilizar solo cuando se muestra una lista de doctores.
 * Para mas referencia del funcionamiento ver {@link https://select2.org/|Select2}
 * @class SelectComponent
 * @example <select-component :id="" disabled="" data="" firstText="" isGroup="" v-model=""></-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member SelectComponent.emits
     * @property {Select} update:modelValue Evento que se lanza para actualizar la variable utilizada en la propiedad v-model
     * @property {null} onChange Evento que se lanza para indicar que se ha seleccionado un valor
    */
    emits: ['update:modelValue', 'onChange'],
    /** 
     * Propiedades que recibe el componente 
     * @member SelectComponent.props
     * @property {string} id (Obligatorio) ID del componente
     * @property {boolean} disabled (Obligatorio) Indica si el componente permite seleccionar o no un valor
     * @property {Select[]} data (Obligatorio) Lista de valores que mostrará el componente
     * @property {string} firstText (Obligatorio) Primer valor que se muestra en el componente, o en caso de que no se seleccione un valor
     * @property {Select} modelValue (Opcional) Valor que recibe y actualiza al componente padre. Ver {@link https://v3.vuejs.org/guide/migration/v-model.html|v-model} de vue para mas referencia
    */
    props: {
        id: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array as PropType<Select[]>,
            default: []
        },
        firstText:
        {
            type: String,
            default: ''
        },
        modelValue: {
            type: Object as PropType<Select>,
            default: SelectData
        },
        isGroup: {
            type: Boolean,
            default: false
        }
    },
    /** 
     * Variables a observar por el componente
     * @member SelectComponent.watch
     * @property {Select[]} data Al actualizar la lista de información que se muestra en el componente, vacía el input, a lo cual procede a inicializar de nuevo el input de Select2 con información de la variable data y finalmente actualiza el valor seleccionado a uno vacío
     * @property {Select} localValue Al actualizar la información seleccionada lanza el evento para actualizar la variable de v-model en el componente padre. Ver custom v-model vue 3 en google para más información
     * @property {Select} modelValue Al actualizar la variable, se asigna a la variable localValue para poder modificar la información y retonarla si hay una variable asignada a la propiedad v-model
    */
    watch: {
        data() {
            $(`#${this.id}`).empty();
            $(`#${this.id}`).select2({
                data: [
                    {
                        id: -1,
                        text: this.firstText,
                        disabled: true
                    },
                    ...this.data
                ]
            });
            $(`#${this.id}`).val('-1').trigger('change');
        },
        localValue() {
            this.$emit('update:modelValue', this.localValue);
        },
        modelValue: {
            handler()
            {
                this.localValue = this.modelValue;
                $(`#${this.id}`).val(this.localValue.id).trigger('change');
            },
            deep: true,
        }
    },
    /**
    * Variables del componente
    * @member SelectComponent.data
    * @property {Select} localValue Guarda la información de la variable modelValue en caso de utilizar un v-model
    */
    data() {
        return {
            localValue: this.modelValue,
        };
    },
    /** 
     * Al iniciar el componente, se inicializar el input de {@link https://select2.org/|Select2} con la información de la variable data y en caso de existir
     * una variable en v-model, se selecciona dentro del inpur de Select2 la opción que coincida con la variable de v-model
     * @member SelectComponent.mounted
    */
    mounted() {
        const self = this;
        $(`#${this.id}`).select2({
            data: [
                {
                    id: -1,
                    text: this.firstText,
                    disabled: true
                },
                ...this.data
            ]
        });
        $(`#${this.id}`).val('-1').trigger('change');
        $(`#${this.id}`).on('select2:select', function (event: any) {
            self.localValue = {
                id: Number(event.params.data.id),
                text: event.params.data.text,
                childID: Number(event.params.data.childID),
                parentID: Number(event.params.data.parentID)
            }
            self.$emit('onChange');
        });
    },
    methods: {
    },
})
