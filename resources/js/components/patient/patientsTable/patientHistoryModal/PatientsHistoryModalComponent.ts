import HistorialClinicoComponent from '@component/medical/attachments/HistorialClinico/HistorialClinicoComponent';
import { HistorialClinicoData } from '@data/Medical/Attachments/HistorialClinico/HistorialClinico.data';
import { PatientData } from '@data/Patient/Patient.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

/**
 * @description Componente que muestra el historial médico del paciente seleccionado, mediante un formulario dentro de un modal
 * @class PatientsHistoryModalComponent
 * @example <patient-history-modal-component :patient="" :disabled="" edit=""></patient-history-modal-component>
*/
export default defineComponent({
    /**
     * {@link HistorialClinicoComponent}
     * @member PatientsHistoryModalComponent.components
    */
    components: {
        HistorialClinicoComponent
    },
    /**
     * Propiedades que recibe el componente
     * @member PatientsHistoryModalComponent.props
     * @property {Patient} patient (Obligatorio) Datos del paciente seleccionado
     * @property {boolean} disabled Habilita o deshabilita el formulario del historial médico
     * @property {boolean} edit Habilita o deshabilita la edición del historial médico
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
        edit: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
        role: {
            type: String,
            default: ''
        }
    },
    /**
     * Variables a observar por el componente
     * @member PatientsHistoryModalComponent.watch
     * @property {Patient} patient Al actualizar la variable, se obtiene el {@link PatientsHistoryModalComponent.getHistory|historial del paciente}
    */
    watch: {
        patient:
        {
            handler()
            {
                this.getHistory();
            },
            deep: true
        }
    },
    /**
    * Variables del componente
    * @member PatientsHistoryModalComponent.data
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {HistorialClinico} historialClinico Guarda el gistorial médico del paciente
    */
    data() {
        return {
            errors: [],
            historialClinico: HistorialClinicoData,
            consultID: 0
        };
    },
    methods: {
        /**
         * Obtiene el historial médico del servidor. Si la petición es correcta, se asigna a la variable historialClinico la respuesta del servidor
         * @function PatientsHistoryModalComponent.getHistory
        */
        getHistory()
        {
            axios.get(`/pacientes/${this.patient.id}/historial`)
            .then(response => {
                this.historialClinico = response.data.data.form;
                this.consultID = response.data.medicalconsult_id;
                // console.log('ConsultID: ', this.consultID);

            })
            .catch(error => {

            })
        },
    }
})
