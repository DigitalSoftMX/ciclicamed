import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { Test } from '@interface/Medical/Test.interface';
import { OrderData } from '@data/Medical/Order.data';
import { TestOrder } from '@interface/Medical/TestOrder.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import { ElTimeSelect } from 'element-plus';
import { Select } from '@interface/General/Select.interface';
import moment from 'moment';
import { ConsultData } from '@data/Medical/Consult.data';
import cloneDeep from 'lodash/cloneDeep';

/** 
 * @description Componente que muestra los datos de un estudio médico, mediante el uso de una tarjeta
 * @class ConsultOrderComponent
 * @example <consult-order-component v-model="" orderList="" id="" disabled="" :branches=""></consult-or-component>
*/
export default defineComponent({
    /** 
     * {@link https://element-plus.org/#/es/component/time-select}
     * @member ConsultOrderComponent.components
    */
    components: {
        ElTimeSelect
    },
    /** 
     * Eventos del componente
     * @member ConsultOrderComponent.emits
    * @property {Prescription} update:modelValue Evento que actualiza la variable que se ingreso en el v-model
    * @property {number} onDelete Evento que indica que una orden de estudios ha sido eliminado de la lista de la receta, indicando el id a la que pertenece
    */
    emits: ['update:modelValue', 'onDelete'],
    /** 
     * Propiedades que recibe el componente 
     * @member ConsultOrderComponent.props
     * @property {Test} modelValue (Opcional) Valor que recibe y actualiza al componente padre. Ver {@link https://v3.vuejs.org/guide/migration/v-model.html|v-model} de vue para mas referencia
     * @property {TestOrder[]} medicamentList (Obligatorio) Lista de ordenes de estudio
     * @property {number} id (Obligatorio) ID del componente
     * @property {boolean} disabled (Obligatorio) Habilita o deshabilita input del componente
     * @property {Select[]} branches (Obligatorio) Lista de sucursales habilitados en el sistema
    */
    props: {
        modelValue: {
            type: Object as PropType<Test>,
            default: OrderData
        },
        orderList: {
            type: Array as PropType<TestOrder[]>,
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
        branches: {
            type: Array as PropType<Select[]>,
            default: []
        }
    },
    /**
    * Propiedades computadas del componente 
    * @member ConsultOrderComponent.computed
    * @property {boolean} disabledData Habilita o deshabilita la fecha y hora de la cita de una orden médica si no se ha seleccionado una sucursal antes
    */
    computed:{
        disabledData(): boolean
        {
            return this.branchSelected <= 0 ? true : false;
        }
    },
    /** 
     * Variables a observar por el componente
     * @member ConsultOrderComponent.watch
     * @property {Prescription} modelValue Al actualizar los datos de esta variable, se asigna los datos de éste a la variable order para permitir su modificación.
     * Si las orden médica no ha sido agendada, entonces se asigna a la variable this.order.consult_scheduled datos vacíos. Por otra parte, si la sucursal de la consulta
     * de la orden de estudio es 0 (no tiene sucursal seleccionado), se asigna una hora de inicio y final predeterminado, se asigna un id inicial a la variable branchSelected
     * y se asigna un string vacío a la variable dateSelected (fecha de la cita del estudio). Por último, se verifica si la fecha no está vacía (dateSelected), si es correcta esta verificación
     * se asignan los datos de la cita de la consulta de acuerdo a los datos guardados con anterioridad por el servidor
     * @property {Test} order Al actualizar los datos de la variable lanza un emit para actualizar el v-model envíando los datos de la orden guardado
     * @property {string} startHour Cuando se actualiza la hora de inicio de la consulta de la orden médica, se asigna a la variable order.consult_scheduled!.consult_schedule_start
     * la fecha y hora de la consulta que se haya ingresado en la consulta en proceso
     * @property {string} finishHour Cuando se actualiza la hora de finalización de la consulta de la orden médica, se asigna a la variable order.consult_scheduled!.consult_schedule_finish
     * la fecha y hora de la consulta que se haya ingresado en la consulta en proceso
     * @property {string} dateSelected Cuando se actualiza la fecha de la consulta de la orden médica, se asigna a la variable order.consult_scheduled!.consult_schedule_finish
     * y la variable order.consult_scheduled!.consult_schedule_start la fecha y hora de la consulta de inicio y finalización que se haya ingresado en la consulta en proceso
     * @property {string} branchSelected Cuando se actualiza la sucursal en la que se va a hacer el estudio médico, se asigna a la variable order.consult_scheduled!.branch_id 
     * el ID de la sucursal seleccionada
    */
    watch: {
        modelValue: {
            handler()
            {
                this.order = this.modelValue;
                if(!this.order.consult_scheduled)
                {
                    this.order.consult_scheduled = cloneDeep(ConsultData);
                }
                if(this.order.consult_scheduled.branch_id <= 0)
                {
                    this.startHour = '07:00';
                    this.finishHour = '07:00';
                    this.branchSelected = 0;
                    this.dateSelected = '';
                }
                if(this.dateSelected !== '')
                {
                    this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
                    this.startHour = moment(this.order.consult_scheduled.consult_schedule_start).format("HH:mm");
                    this.finishHour = moment(this.order.consult_scheduled.consult_schedule_finish).format("HH:mm");
                    this.branchSelected = this.order.consult_scheduled.branch_id;
                    this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
                }
            },
            deep: true
        },
        order: {
            handler()
            {
                this.$emit('update:modelValue', this.order);
            },
            deep: true
        },
        startHour()
        {
            this.order.consult_scheduled!.consult_schedule_start = moment(
                `${this.dateSelected} ${this.startHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        finishHour()
        {
            this.order.consult_scheduled!.consult_schedule_finish = moment(
                `${this.dateSelected} ${this.finishHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        dateSelected()
        {
            this.order.consult_scheduled!.consult_schedule_start = moment(
                `${this.dateSelected} ${this.startHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
            this.order.consult_scheduled!.consult_schedule_finish = moment(
                `${this.dateSelected} ${this.finishHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        branchSelected()
        {
            this.order.consult_scheduled!.branch_id = this.branchSelected;
        }
    },
    /**
    * Variables del componente
    * @member ConsultOrderComponent.data
    * @property {Test} order Guarda los datos de la variable modelValue para modificar dichos datos (v-model)
    * @property {string} startTime Guarda la hora de apertura de la sucursal
    * @property {string} finishTime Guarda la hora de cierre de la sucursal
    * @property {string} startHour Guarda la hora inicial para la consulta del estudio médico
    * @property {string} finishHour Guarda la hora final para la consulta del estudio médico
    * @property {string} branchSelected Guarda el ID de la sucursal seleccionada
    * @property {string} dateSelected Guarda la fecha de la cita para la consulta médica
    */
    data() {
        return {
            order: this.modelValue,
            startTime: '07:00',
            finishTime: '21:00',
            startHour: '07:00',
            finishHour: '07:00',
            branchSelected: 0,
            dateSelected: ''
        };
    },
    /** 
     * Al iniciar el componente, si las orden médica no ha sido agendada, entonces se asigna a la variable this.order.consult_scheduled datos vacíos.
     * Por último, se verifica si la fecha no está vacía (dateSelected), si es correcta esta verificación
     * se asignan los datos de la cita de la consulta de acuerdo a los datos guardados con anterioridad por el servidor
     * @member ConsultOrderComponent.mounted
    */
    mounted() {
        if(!this.order.consult_scheduled)
        {
            this.order.consult_scheduled = cloneDeep(ConsultData);
        }
        if(this.order.consult_scheduled.branch_id > 0)
        {
            this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
            this.startHour = moment(this.order.consult_scheduled.consult_schedule_start).format("HH:mm");
            this.finishHour = moment(this.order.consult_scheduled.consult_schedule_finish).format("HH:mm");
            this.branchSelected = this.order.consult_scheduled.branch_id;
            this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
        }
    },
    methods: {
        /** 
         * Cuando se elimina una orden médica, lanza un emit con el id (index) para que el componente padre {@link ConsultTestOrderComponent} pueda
         * eliminarlo de la variable prescriptionData
         * @function ConsultOrderComponent.deleteThisComponent
        */
        deleteThisComponent()
        {
            this.$emit('onDelete', this.id);
        }
    },
})
