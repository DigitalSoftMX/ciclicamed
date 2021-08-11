import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, PropType } from 'vue';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Clock } from '@interface/General/Clock.interface';
import { ClockData } from '@data/General/Clock.data';
require('bootstrap');

/** 
 * @description Componente que muestra los datos de un paciente en la página de consulta, mediante el uso de una tarjeta
 * @class ConsultPatientProfileComponent
 * @example <consult-patient-profile-component :lastDiagnostic="" :consultNote="" :patientData="" :clock="" :role=""></consult-patient-profile-component>
*/
export default defineComponent({
    /** 
     * {@link PreregistrationComponent}
     * @member ConsultPatientProfileComponent.components
    */
    components: {
        PreregistrationComponent: require('@component/patient/preregistration/PreregistrationComponent.vue').default
    },
    /** 
     * Eventos del componente
     * @member ConsultPatientProfileComponent.emits
     * @property {null} onFinish Evento que se lanza cuando se termina la sección de consulta dentro de la consulta médica
    */
    emits: ['onFinish'],
    /** 
     * Propiedades que recibe el componente 
     * @member ConsultPatientProfileComponent.props
     * @property {string} lastDiagnostic (Opcional) Último diagnostico del paciente
     * @property {string} consultNote (Obligatorio) Nota que se ingresó al creal la cita médica
     * @property {Patient} patientData (Obligatorio) Datos del paciente en consulta
     * @property {Clock} patientData (Obligatorio) Datos del tiempo de la consulta
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
    */
    props: {
        lastDiagnostic: {
            type: String,
            default: ''
        },
        consultNote: {
            type: String,
            default: ''
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        clock: {
            type: Object as PropType<Clock>,
            default: ClockData
        },
        role: {
            type: String,
            default: ''
        }
    },
    methods: {
        /** 
         * Formatea la fecha de nacimiento provista por el servidor en un formato local
         * @function ConsultPatientProfileComponent.formatBirthDay
        */
        formatBirthDay()
        {
            return moment(this.patientData.birthday).format('DD/MM/YYYY');
        },
        /** 
         * Muestra el componente {@link PreregistrationComponent}
         * @function ConsultPatientProfileComponent.openPreregistration
        */
        openPreregistration() {
            $('#preregistration-modal').modal('show');
        },
        /** 
         * Envía el evento de finalización de la consulta al componente {@link ConsultComponent}
         * @function ConsultPatientProfileComponent.finishConsult
        */
        finishConsult()
        {
            this.$emit('onFinish');
        }
    },
})
