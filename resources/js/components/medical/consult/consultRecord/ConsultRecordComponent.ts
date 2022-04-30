import PatientTestFileModalComponent from '@component/patient/test/testFileModal/PatientTestFileModalComponent';
import { FollowUpData } from '@data/Medical/FollowUp.data';
import { TestFileResultData } from '@data/Medical/Result/TestFileResult.data';
import { Consult } from '@interface/Medical/Consult.interface';
import { FollowUp } from '@interface/Medical/FollowUp.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Test } from '@interface/Medical/Test.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import ConsultUploadTest from '../consultUploadTest/ConsultUploadTest';

/**
 * @description Componente que muestra el historial médico de un paciente en una consulta, mediante una línea de tiempo
 * @class ConsultRecordComponent
 * @example <consult-record-component :patientID="" specialtyID=""></consult-record-component>
*/
export default defineComponent({
    name: 'RecordComponent',
    /**
     * {@link ConsultUploadTest}, {@link PatientTestFileModalComponent}, {@link CitasSubsecuentesComponent}, {@link EmptyErrorComponent}, {@link NetworkErrorComponent},
     * @member ConsultRecordComponent.components
    */
    components: {
        ConsultUploadTest,
        PatientTestFileModalComponent,
        CitasSubsecuentesComponent: require('@component/medical/attachments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        CitasSubsecuentesShowComponent: require('@component/medical/attachments/CitasSubsecuentes/Show/CitasSubsecuentesShowComponent.vue').default,
        EmptyErrorComponent: require('@component/general/error/EmptyErrorComponent.vue').default,
        NetworkErrorComponent: require('@component/general/error/NetworkErrorComponent.vue').default
    },
    /**
     * Propiedades que recibe el componente
     * @member ConsultRecordComponent.props
     * @property {number} patientID (Obligatorio) ID del paciente en consulta en proceso
     * @property {number} specialtyID (Obligatorio) ID de la especialidad médica de la consulta en proceso
    */
    props: {
        patientID: {
            type: Number,
            default: -1
        },
        specialtyID: {
            type: Number,
            default: -1
        },
        role:{
            type: String,
            default: ''
        }
    },
    /**
    * Variables del componente
    * @member ConsultRecordComponent.data
    * @property {boolean} hasError Muestra u oculta el componente {@link NetworkErrorComponent} en caso de que la petición del historial médico falle
    * @property {Consult[]} consultList Guarda la lista de consultas médicas anteriores de acuerdo a la especialidad de la consulta en proceso
    * @property {FollowUp} followUp Guarda la cita de seguimiento que pertenezca a la cita seleccionada del historial médico
    * @property {Test[]} testList Guarda la lista de examenes médicos creados que pertenezcan a la cita seleccionada del historial médico
    * @property {Prescription} prescriptionList Guarda la lista de medicamentos creados que pertenezcan a la cita seleccionada del historial médico
    * @property {number} componentNumber Guarda el tipo de componente (cita de seguimiento, examen médico o medicamentos) que debe mostrarse, de acuerdo a la selección realizada por el usuario
    * @property {string} consultDateSelected Guarda la fecha de la consulta seleccionada del historial médico
    * @property {TestFileResult} resultSelected Guarda los resultados del estudio médico seleccionado
    * @property {string} productSelected Guarda el nombre del estudio médico seleccionado
    * @property {string} testIDSelected Guarda el ID del estudio médico seleccionado
    */
    data() {
        return {
            hasError: false,
            consultList: [] as Consult[],
            followUp: FollowUpData,
            testList: [] as Test[],
            prescriptionList: [] as Prescription[],
            componentNumber: -1,
            consultDateSelected: '',
            resultSelected: TestFileResultData,
            productSelected: '',
            testIDSelected: 0,
        }
    },
    /**
     * Variables a observar por el componente
     * @member ConsultRecordComponent.watch
     * @property {number} patientID Al actualizar el ID del paciente, se obtienen el {@link ConsultRecordComponent.getConsultData|historial médico} perteneciente al nuevo paciente
     * @property {Consult[]} consultList Al actualizar la lista de consultas pertenecientes al historial médico, se llama a las librerías jquery y timeline para crear la línea de tiempo del historial médico
    */
    watch: {
        patientID()
        {
            this.getConsultData();
        },
        consultList(){
            if (this.consultList.length > 0)
            {
                require('jquery');
                require('@library/timeline.min');
            }
        }
    },
    methods: {
        /**
         * Una vez seleccionado un estudio médico, si dicho estudio contiene resultados médicos, se asigna a la variable resultSelected los resultados obtenidos y
         * a la variable productSelected se le asigna el nombre del estudio médico seleccionado, a lo que se procede a mostrar dichos resultados mediante el componente
         * {@link PatientTestFileModalComponent}. En caso contrario se asigna a la variable testIDSelected el ID del estudio y se abre el componente {@link ConsultUploadTest}
         * para la subida del estudio médico al sistema (Esta última parte solo se puede acceder si durante la consulta donde se agendo dicho estudio, no se indico una cita
         * para tomar dichos estudios dentro de las instalaciones de Cíclica)
         * @function ConsultRecordComponent.selectTest
         * @param {Test} test Exámen médico seleccionado
        */
        selectTest(test: Test)
        {
            if(test.result)
            {
                this.resultSelected = test.result!.results;
                this.productSelected = test.order.product.product_code!;
                $('#pattcFileTest').modal('show');
            }
            if(!test.result && !test.scheduled_in)
            {
                this.testIDSelected = test.id;
                $('#conupteUploadTest').modal('show');
            }
        },
        /**
         * Obtiene el historial médico del paciente de acuerdo a la especialidad médica de la consulta actual. Si la petición es procesada correctamente, se vacía la variable
         * consultList y se procede a asignarle los resultados retornados por el servidor, en caso contrario se asigna a la variable hasError el valor de true, lo cual procederá
         * a mostrar el componente {@link NetworkErrorComponent}
         * @function ConsultRecordComponent.getConsultData
        */
        getConsultData() {
            axios.get<Consult[]> (`/pacientes/${this.patientID}/consultas/categoria/${this.specialtyID}`)
            .then(response => {
                this.consultList = [];
                this.consultList = Object.values(response.data);
            })
            .catch(error => {
                this.hasError = true;
            })
        },
        /**
         * Formatea la fecha de la consulta médica provista por el servidor a un formato local
         * @function ConsultRecordComponent.formatConsultDateTime
         * @param {string} dateTime Fecha de la consulta (consult_schedule_start)
        */
        formatConsultDateTime(dateTime: string) {
            return moment(dateTime).format('DD/MM/YYYY hh:mm a')
        },
        /**
         * Cuando el usuario selecciona una consulta dentro del historial médico, se procede a asignar a la variable consultDateSelected la fecha de dicha consulta,
         * mientras que se resetea la variable componentNumber con un valor de -1 para ocultar todas las tarjetas y componentes hijos del componente.
         * Una vez reseteado el valor anterior, se procede a obtener las {@link ConsultRecordComponent.getFollowUps|citas de seguimiento},
         * {@link ConsultRecordComponent.getTestOrders|examenes médicos} y las {@link ConsultRecordComponent.getPrescriptions|recetas médicos} pertenecientes a la consulta
         * seleccionada
         * @function ConsultRecordComponent.getInfoConsult
         * @param {number} id ID de la consulta
         * @param {string} date Fecha la consulta
        */
        getInfoConsult(id: number, date: string) {
            this.consultDateSelected = date;
            this.componentNumber = -1;
            this.getFollowUps(id);
            this.getTestOrders(id);
            this.getPrescriptions(id);
        },
        /**
         * Obtiene los datos de la cita de seguimiento pertenecientes a la consulta seleccionada. Si la petición fue procesada correctamente se asigna a la variable
         * followUp los datos que retorna el servidor, en caso contrario asigna datos vacíos
         * @function ConsultRecordComponent.getFollowUps
         * @param {number} id ID de la consulta
        */
        getFollowUps(id: number) {
            axios.get<FollowUp>(`/consultas/${id}/seguimiento`)
            .then(response => {
                this.followUp = response.data;
            })
            .catch(error => {
                this.followUp = FollowUpData;
            })
        },
        /**
         * Obtiene la lista de exámenes médicos pertenecientes a la consulta seleccionada. Si la petición fue procesada correctamente se asigna a la variable
         * testList la lista de exámenes médicos creados en la consulta seleccionada
         * @function ConsultRecordComponent.getTestOrders
         * @param {number} id ID de la consulta
        */
        getTestOrders(id: number) {
            axios.get<Test[]>(`/consultas/${id}/estudios`)
            .then(response => {
                this.testList = Object.values(response.data);
            })
            .catch(error => {
                //
            })
        },
        /**
         * Obtiene la lista de medicamentos pertenecientes a la consulta seleccionada. Si la petición fue procesada correctamente se asigna a la variable
         * prescriptionList la lista de medicamentos creados en la consulta seleccionada
         * @function ConsultRecordComponent.getPrescriptions
         * @param {number} id ID de la consulta
        */
        getPrescriptions(id: number) {
            axios.get<Prescription[]>(`/consultas/${id}/receta`)
            .then(response => {
                this.prescriptionList = Object.values(response.data);
            })
            .catch(error => {
                //
            })
        },
        /**
         * Muestra uno de los componentes hijos de este componente de acuerdo a la selección que haga el usuario, asignando a la variable componentNumber el
         * número de componente seleccionado (1 Citas subsecuentes, 2 Medicamentos)
         * @function ConsultRecordComponent.showComponent
         * @param {number} component ID del componente a mostrar
        */
        showComponent(component: number)
        {
            this.componentNumber = component;
        }
    }
})
