import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';
import moment from 'moment';
import $ from 'jquery';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { Preregistration } from '@interface/Patient/Preregistration.interface';
// require('../../../../../public/vendor_assets/js/jquery.mCustomScrollbar.min');

/**
 * @description Componente que muestra los datos de preregistro de un paciente, mediante el uso de un formulario dentro de un modal
 * @class PreregistrationComponent
 * @example <preregistration-component isNew="" :disabled="" :patientData="" :role=""></-component>
*/
export default defineComponent({
    /**
     * {@link SuccessAlertComponent}, {@link ErrorAlertComponent}
     * @member PreregistrationComponent.components
    */
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default
    },
    /**
     * Propiedades que recibe el componente
     * @member PreregistrationComponent.props
     * @property {boolean} isNew Indica si el paciente es nuevo o existente
     * @property {boolean} disabled Habilita o deshabilita el formulario del preregistro
     * @property {Patient} patientData (Obligatorio) Datos del paciente seleccionado
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
     *
    */
    props: {
        isNew: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        role: {
            type: String,
            default: ''
        }
    },
    /**
    * Variables del componente
    * @member PreregistrationComponent.data
    * @property {Preregistration} preregistrationData Guarda los datos del preregistro del paciente seleccionado
    * @property {Patient} patientDataCopy Guarda una copia de la variable patientData para su modificación
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {Array<Object>} buttonTitle Guarda el título del boton de crear o actualizar usuario
    */
    data() {
        return {
            preregistrationData: PreregistrationData,
            patientDataCopy: Object.assign({}, this.patientData),
            success: {
                title: '',
                message: ''
            },
            errors: [],
            buttonTitle: this.isNew ? 'Crear' : 'Actualizar',
        };
    },
    /**
     * Al iniciar el componente, si el paciente seleccionado no tiene datos de preregistro, asigna a la variable preregistrationData nuevos datos de preregistro
     * @member PreregistrationComponent.mounted
    */
    mounted() {
        if(!this.patientData.preregistration)
        {
            this.preregistrationData = {...PreregistrationData};
        }
    },
    /**
     * Variables a observar por el componente
     * @member PreregistrationComponent.watch
     * @property {Patient} patientData Al actualizar la variable, asigna los datos de patientData a la variable patientDataCopy para su modificación. Si el rol
     * del usuario logueado actualmente es diferente a enfermera se obtiene {@link PreregistrationComponent.getPreregistration|los datos de preregistro}. Por último
     * verifica si el paciente tiene datos de preregistro, si no es así, se asignan nuevos datos de preregistro a la variable preregistrationData
    */
    watch: {
        patientData: {
            handler()
            {
                this.patientDataCopy = Object.assign({}, this.patientData);
                if(this.role !== 'Enfermera')
                {
                    this.getPreregistration();
                }
                if(!this.patientData.preregistration)
                {
                    this.preregistrationData = {...PreregistrationData};
                }
            },
            deep: true
        }
    },
    methods: {
        /**
         * Calcula la edad del paciente a partir de la fecha de nacimiento
         * @function PreregistrationComponent.getAge
        */
        getAge()
        {
            return moment().diff(moment(this.patientDataCopy.birthday), 'years');
        },
        /**
         * Obtiene los datos del preregistro del paciente seleccionado que están guardados en el servidor. En caso de que la
         * petición se procese correctamente, se verifica que dichos datos sean compatibles con la variable preregistrationData, en caso
         * de que sean compatibles, se asigna a dicha variable los datos retornados por el servidor
         * @function PreregistrationComponent.getPreregistration
        */
        getPreregistration()
        {
            console.log('ID: ', this.patientData.id);
            axios.get<Preregistration>(`/pacientes/${this.patientData.id}/preregistro`)
            .then(response => {
                console.log('Exito: ',response.data);
                 if(response.data.data)
                {
                    this.preregistrationData = response.data;
                }
            })
            .catch(error => {
                console.log('Error getPreregistration:', error.response.data.errors);

            })
        },
        /**
         * Actualiza los datos del preregistro del paciente seleccionado que están guardados en el servidor. En caso de que la
         * petición se procese correctamente, se asigna un mensaje de éxito al objeto success y se muestra el componente {@link SuccessAlertComponent}
         * @function PreregistrationComponent.updatePreregistration
        */
        updatePreregistration()
        {
            axios.patch(`/pacientes/${this.patientDataCopy.id}/preregistro`, {
                data: {
                    ...this.preregistrationData
                }
            })
            .then(response => {
                console.log('Respuesta: ', response.data);
                this.success.title = 'Información actualizada';
                this.success.message = 'Se ha actualizado la información correctamente';
                $('#preregistrationSuccess').modal('show');
            })
            .catch(error => {

            })
        },
    },
})
