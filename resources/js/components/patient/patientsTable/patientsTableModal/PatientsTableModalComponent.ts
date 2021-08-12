import UserProfileComponent from '@component/user/userProfile/UserProfileComponent';
import { PatientData } from '@data/Patient/Patient.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra los datos del paciente seleccionado, mediante un formulario dentro de un modal
 * @class PatientsTableModalComponent
 * @example <patient-table-modal-component :patient="" :disabled="" isNew=""></patient-table-modal-component>
*/
export default defineComponent({
    /** 
     * {@link UserProfileComponent}
     * @member PatientsTableModalComponent.components
    */
    components: {
        UserProfileComponent
    },
    /** 
     * Propiedades que recibe el componente 
     * @member PatientsTableModalComponent.props
     * @property {Patient} patient (Obligatorio) Datos del paciente seleccionado
     * @property {boolean} disabled Habilita o deshabilita el formulario del paciente
     * @property {boolean} isNew Indica si el paciente es nuevo o existente
    */
    props: {
        patient: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    watch: {
    },
    /**
    * Variables del componente
    * @member PatientsTableModalComponent.data
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {string} preregistrationData Guarda los datos del preregistro del paciente
    */
    data() {
        return {
            errors: [],
            preregistrationData: PreregistrationData
        };
    },
    mounted() {
    },
    methods: {
    }
})