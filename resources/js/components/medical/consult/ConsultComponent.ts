import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { ConsultData } from '@data/Medical/Consult.data';
import { HistoryData } from '@data/Medical/History.data';
import { FollowUpData } from '@data/Medical/FollowUp.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Test } from '@interface/Medical/Test.interface';
import { Consult } from '@interface/Medical/Consult.interface';
import { FollowUp } from '@interface/Medical/FollowUp.interface';
import { History } from '@interface/Medical/History.interface';
import { ClimaterioSaludOseaData } from '@data/Medical/Attachments/ClimaterioSaludOsea.data';
import { UroginecologiaData } from '@data/Medical/Attachments/Uroginecologia.data';
import { MaternoFetalData } from '@data/Medical/Attachments/MaternoFetal/MaternoFetal.data';
import { NutricionPerinatalData } from '@data/Medical/Attachments/Nutricion/NutricionPerinatal.data';
import { NutricionGeneralData } from '@data/Medical/Attachments/Nutricion/NutricionGeneral.data';
import { BiologiaReproduccionData } from '@data/Medical/Attachments/BiologiaReproduccion.data';
import { CirugiaEndoscopicaData } from '@data/Medical/Attachments/CirugiaEndoscopica.data';
import { OncologiaData } from '@data/Medical/Attachments/Oncologia.data';
import { ColposcopiaData } from '@data/Medical/Attachments/Colposcopia.data';
import { Uroginecologia } from '@interface/Medical/Attachtments/Uroginecologia.interface';
import { MaternoFetal } from '@interface/Medical/Attachtments/MaternoFetal/MaternoFetal.interface';
import { NutricionGeneral } from '@interface/Medical/Attachtments/Nutricion/NutricionGeneral.interface';
import { BiologiaReproduccion } from '@interface/Medical/Attachtments/BiologiaReproduccion.interface';
import { CirugiaEndoscopica } from '@interface/Medical/Attachtments/CirugiaEndoscopica.interface';
import { Colposcopia } from '@interface/Medical/Attachtments/Colposcopia.interface';
import { ClimaterioSaludOsea } from '@interface/Medical/Attachtments/ClimaterioSaludOsea.interface';
import { NutricionPerinatal } from '@interface/Medical/Attachtments/Nutricion/NutricionPerinatal.interface';
import { Oncologia } from '@interface/Medical/Attachtments/Oncologia.interface';
import { AttachtmentData } from '@data/Medical/Attachments/Attachment.data';
import { Attachtment } from '@interface/Medical/Attachtments/Attachment.interface';
import { Payment } from '@interface/Payment/Payment.interface';
import { PaymentData } from '@data/Payment/Payment.data';
import { PropType } from 'vue';
import { Employee } from '@interface/Employee/Employee.interface';
import { EmployeeData } from '@data/Employee/Employee.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { Select } from '@interface/General/Select.interface';

/**
 * @description Componente que se encarga de mostrar todos los componentes relacionados con una consulta m??dica, sea primera cita o
 * subsecuente (rol Doctor y Administrador). Adem??s que se encarga de crear los datos de pago durante la consulta
 * @class ConsultComponent
 * @example <consult-component :consultID="" :role="" :doctorData=""></consult-component>
*/
export default defineComponent({
    /**
     * {@link PatientProfileComponent}, {@link AttachmentComponent}, {@link HistorialClinicoComponent}, {@link CitasSubsecuentesComponent}, {@link PrescriptionComponent},
     * {@link TestOrderComponent}, {@link RecordComponent}, {@link ProductComponent}, {@link UroginecologiaComponent}, {@link ClimaterioSaludOseaComponent},
     * {@link MaternoFetalComponent}, {@link BiologiaReproduccionComponent}, {@link CirugiaEndoscopicaComponent}, {@link OncologiaComponent},
     * {@link ColposcopiaComponent}, {@link NutricionPerinatalComponent}, {@link NutricionGeneralComponent}, {@link ScheduleComponent},
     * {@link ChargePaymentComponent}, {@link ConsultCheckupTest},
     * @member ConsultComponent.components
    */
    components: {
        PatientProfileComponent: require('@component/medical/consult/consultPatientProfile/ConsultPatientProfileComponent.vue').default,
        AttachmentComponent: require('@component/medical/consult/consultAttachment/ConsultAttachmentComponent.vue').default,
        HistorialClinicoComponent: require('@component/medical/attachments/HistorialClinico/HistorialClinicoComponent.vue').default,
        CitasSubsecuentesComponent: require('@component/medical/attachments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        PrescriptionComponent: require('@component/medical/consult/consultPrescription/ConsultPrescriptionComponent.vue').default,
        TestOrderComponent: require('@component/medical/consult/consultTestOrder/ConsultTestOrderComponent.vue').default,
        RecordComponent: require('@component/medical/consult/consultRecord/ConsultRecordComponent.vue').default,
        ProductComponent: require('@component/payment/chargePayment/ChargePaymentComponent.vue').default,
        UroginecologiaComponent: require('@component/medical/attachments/Uroginecologia/UroginecologiaComponent.vue').default,
        ClimaterioSaludOseaComponent: require('@component/medical/attachments/ClimaterioSaludOsea/ClimaterioSaludOseaComponent.vue').default,
        MaternoFetalComponent: require('@component/medical/attachments/MaternoFetal/MaternoFetalComponent.vue').default,
        BiologiaReproduccionComponent: require('@component/medical/attachments/BiologiaReproduccion/BiologiaReproduccionComponent.vue').default,
        CirugiaEndoscopicaComponent: require('@component/medical/attachments/CirugiaEndoscopica/CirugiaEndoscopicaComponent.vue').default,
        OncologiaComponent: require('@component/medical/attachments/Oncologia/OncologiaComponent.vue').default,
        ColposcopiaComponent: require('@component/medical/attachments/Colposcopia/ColposcopiaComponent.vue').default,
        NutricionPerinatalComponent: require('@component/medical/attachments/NutricionPerinatal/NutricionPerinatalComponent.vue').default,
        NutricionGeneralComponent: require('@component/medical/attachments/NutricionGeneral/NutricionGeneralComponent.vue').default,
        ScheduleComponent: require('@component/schedule/ScheduleComponent.vue').default,
        ChargePaymentComponent: require('@component/payment/chargePayment/ChargePaymentComponent.vue').default,
        ConsultCheckupTest: require('@component/medical/consult/consultCheckupTest/ConsultCheckupTest.vue').default
    },
    /**
     * Propiedades que recibe el componente
     * @member ConsultComponent.props
     * @property {number} consultID (Obligatorio) ID de la consulta
     * @property {string} role (Obligatorio) Rol del usuario loagueado actualmente
     * @property {Employee} doctorData Datos del doctor logueado actualmente
    */
    props: {
        consultID: {
            type: Number,
            default: -1
        },
        role: {
            type: String,
            default: ''
        },
        doctorData: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        }
    },
    /**
     * Variables del componente
     * @member ConsultComponent.data
     * @property {string[]} showPaymentComponent Muestra o no el componente {@link ChargePaymentComponent}
     * @property {Patient} patientData Guarda los datos del paciente que corresponde con la consulta en proceso
     * @property {Consult} consultData Guarda los datos de la consulta en proceso
     * @property {History} historyData Guarda los datos del historial m??dico del paciente que corresponde con la consulta en proceso
     * @property {FollowUp} followUp Guarda los datos de la cita de seguimiento que se generan en la consulta en proceso
     * @property {Prescription[]} prescriptionData Guarda los datos de los medicamentos recetados en la consulta en proceso
     * @property {Test[]} testData Guarda los datos de las ordenes de estudios creados en la consulta en proceso
     * @property {Attachtment} attachment Guarda los datos de la especialidad a la que pertenece la consulta en proceso
     * @property {Payment} paymentProducts Guarda los datos del pago creados en la consulta en proceso
     * @property {Object} attachmentForm Guarda los datos del anexo correspondiente a la consulta en proceso, seleccionandolos cuando sea necesario
     * @property {NutricionGeneral} nutricionGeneral Guarda los datos del anexo nutrici??n general
     * @property {Object} clock Guarda el tiempo que lleva la consulta en proceso
     * @property {boolean} enableAttachmentData Habilita o deshabilita el componente de los anexos (v??lido solo para primera cita)
     * @property {Select[]} branchesList Guarda la lista de sucursales habilitadas en el servidor
     */
    data() {
        return {
            showPaymentComponent: false,
            patientData: PatientData,
            consultData: ConsultData,
            historyData: HistoryData,
            followUp: FollowUpData,
            prescriptionData: [] as Prescription[],
            testData: [] as Test[],
            attachment: AttachtmentData,
            paymentProducts: PaymentData,
            attachmentForm: {
                uroginecolog??a: UroginecologiaData,
                climaterioSaludOsea: ClimaterioSaludOseaData,
                maternoFetal: MaternoFetalData,
                biologiaReproduccion: BiologiaReproduccionData,
                cirugiaEndoscopica: CirugiaEndoscopicaData,
                oncologia: OncologiaData,
                colposcopia: ColposcopiaData,
                nutricionPerinatal: NutricionPerinatalData,
                nutricionGeneral: NutricionGeneralData
            },
            nutricionGeneral: NutricionGeneralData,
            clock: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            enableAttachmentData: false,
            branchesList: [] as Select[],
        };
    },
    /**
    * Propiedades computadas del componente
    * @member ConsultComponent.computed
    * @property {boolean} disableHistory Habilita o deshabilita la edici??n del historial m??dico del paciente de acuerdo al rol, en caso del rol doctor, verifica si es primera cita o subsecuente
    * @property {boolean} disableData Habilita o deshabilita la edici??n de acuerdo al rol (No utilizar)
    * @property {boolean} disableConsult Habilita o deshabilita la opci??n de las citas subsecuentes, receta m??dica y orden m??dica de acuerdo al rol, en caso del rol doctor verifica si una cita ya ha sido finalizada o no
    */
    computed: {
        disableHistory(): boolean
        {
            switch(this.role)
            {
                case 'Administrador':
                    return false;
                case 'Doctor':
                    return this.consultData.medicalconsultcategory_id > 2 ? true : false;//cambiar 2 por 1
                default:
                    return true;
            }
        },

        disableData(): boolean
        {
            switch(this.role)
            {
                case 'Administrador':
                    return false;
                case 'Doctor':
                    return this.consultData.medicalconsultcategory_id === 1 ? false : true;
                default:
                    return true;
            }
        },
        disableConsult(): boolean
        {
            switch(this.role)
            {
                case 'Administrador':
                    return false;
                case 'Doctor':
                    return this.consultData.medicalconsultstatus_id > 4 ? true : false;
                default:
                    return true;
            }
        }
    },
    /**
     * Variables a observar por el componente
     * @member ConsultComponent.watch
     * @property {string[]} sendToServer Al actualizar dicha variable, se env??a al servidor la informaci??n de la consula (No utilizar)
    */
    watch:
    {
        sendToServer()
        {
            this.sendToServerData();
        }
    },
    /**
     * Al iniciar el componente, verifica el rol del usuario loagueado actualmente y se obtienen los siguientes datos {@link ConsultComponent.getConsultInfo|informaci??n de la consulta},
     * {@link ConsultComponent.getPrescription|receta de la consulta}, {@link ConsultComponent.getTest|estudios m??dicos de la consulta}, {@link ConsultComponent.getFollowUp|cita subsecuente de la consulta}
     * {@link ConsultComponent.getPayment|pago generado de la consulta}, {@link ConsultComponent.getBranchesList|lista de sucursales},
     * @member ConsultComponent.mounted
    */
    mounted() {
        switch(this.role)
        {
            case 'Administrador':
                this.getConsultInfo();
                this.getPrescription();
                this.getTest();
                this.getFollowUp();
                this.getPayment();
                this.getBranchesList();
                break;
            case 'Doctor':
                this.getConsultInfo();
                this.getPrescription();
                this.getTest();
                this.getFollowUp();
                this.getPayment();
                this.getBranchesList();
                break;
        }
    },
    methods: {
        /**
         * Obtiene la lista de sucursales habilitados en el servidor. Si la petici??n se procesa correctamente, se asigna a la variable branchesList la lista de sucursales
         * @function ConsultComponent.getBranchesList
        */
        getBranchesList(): void
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branchesList = response.data.map((branch, index) => {
                    return {
                        id: index,
                        childID: branch.id,
                        text: branch.name,
                    }
                });
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene el pago generado de la consulta en proceso si existe. Si la petici??n se procesa correctamente, se asigna a la variable paymentProducts el pago generado
         * @function ConsultComponent.getPayment
        */
        getPayment()
        {
            axios.get<Payment>(`/consultas/${this.consultID}/pago`)
            .then(response => {
                this.paymentProducts = response.data;
            })
            .catch(error => {
            //
            })
        },
        /**
         * Env??a al servidor los datos relacionados con la consulta (historial, anexos, medicamentos, cita subsecuente, ordenes m??dicas).
         * Si la petici??n se procesa correctamente, se asigna a la variable showPaymentComponent el valor true, lo cual muestra el componente {@link ChargePaymentComponent} para
         * crear el pago de la consulta
         * @function ConsultComponent.sendToServerData
        */
        sendToServerData()
        {
            axios.post(`/consultas/${this.consultID}/resultados`, {
                data: {
                    receta: this.prescriptionData,
                    examen: this.testData,
                    historial: this.historyData,
                    especialidad: {
                        type: 'form',
                        form: this.selectSpecialty()
                    },
                    cita: this.followUp
                }
            })
            .then(response => {
                this.showPaymentComponent = true;
            })
            .catch(error => {

            })
        },
        /**
         * Selecciona el anexo de acuerdo a la especialidad de la consulta m??dica en proceso de acuerdo al ID de la variable consultData.medicalspecialty_id
         * @function ConsultComponent.selectSpecialty
        */
        selectSpecialty()
        {
            switch(this.consultData.medicalspecialty_id)
            {
                case 1:
                    return this.attachmentForm.uroginecolog??a;
                    break;
                case 2:
                    return this.attachmentForm.climaterioSaludOsea;
                    break;
                case 3:
                    return this.attachmentForm.maternoFetal;
                    break;
                case 4:
                    return this.attachmentForm.nutricionPerinatal;
                    break;
                case 5:
                    return this.attachmentForm.nutricionGeneral;
                    break;
                case 7:
                    return this.attachmentForm.biologiaReproduccion;
                    break;
                case 8:
                    return this.attachmentForm.cirugiaEndoscopica;
                    break;
                case 9:
                    return this.attachmentForm.oncologia;
                    break;
                case 10:
                    return this.attachmentForm.colposcopia;
                    break;
            }
        },
        /**
         * Obtiene la informaci??n del paciente de la consulta en proceso. Si la petici??n se procesa correctamente, se asigna a la variable patientData
         * la informaci??n del paciente que retorne el servidor
         * @function ConsultComponent.getPatientData
        */
        getPatientData()
        {
            axios.get<Patient>(`/pacientes/${this.consultData.patient_id}`)
            .then(response => {
                this.patientData = response.data;
            })
            .catch(error => {
            //
            })
        },
        /**
         * Obtiene la informaci??n de la consulta en proceso. Si la petici??n se procesa correctamente, se asigna a la variable consultData
         * la informaci??n de la consulta que retorne el servidor, a lo cual se procede a obtener informaci??n del {@link ConsultComponent.getPatientData|paciente},
         * {@link ConsultComponent.updateClock|tiempo de la consulta}, {@link ConsultComponent.getHistory|historial del paciente} y {@link ConsultComponent.getAttachment|anexo del paciente},
         * @function ConsultComponent.getConsultInfo
        */
        getConsultInfo()
        {
            axios.get<Consult>(`/consultas/${this.consultID}`)
            .then(response => {
                this.consultData = response.data;
                this.getPatientData();
                this.updateClock();
                this.getHistory();
                this.getAttachment();

                // console.log('respuesta', this.consultData);
            })
            .catch(error => {
                //
            })
        },
        /**
         * Obtiene la informaci??n historial m??dico del paciente. Si la petici??n se procesa correctamente, se asigna a la variable historyData
         * la informaci??n del historial m??dico del paciente que retorne el servidor
         * @function ConsultComponent.getHistory
        */
        getHistory()
        {
            axios.get<History>(`/pacientes/${this.consultData.patient_id}/historial`)
            .then(response => {
                this.historyData = Array.isArray(response.data) ? HistoryData : response.data;
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene la informaci??n anexo de la especialidad la consulta en proceso. Si la petici??n se procesa correctamente, se asigna a la variable attachment
         * la informaci??n de la especialidad la consulta en proceso que retorne el servidor, {@link ConsultComponent.getAttachment|se habilita o deshabilita la edici??n del anexo }.
         * En caso contrario se habilita la edici??n del anexo
         * @function ConsultComponent.getPatientData
        */
        getAttachment()
        {
            axios.get<Attachtment>(`/consultas/${this.consultID}/anexo`)
            .then(response => {
                this.attachment = response.data;
                this.setAttachmentData();
                this.enableAttachmentData = true;
                if(this.role==='Administrador'){
                    this.enableAttachmentData = false;
                }
            })
            .catch(error => {
                this.enableAttachmentData = false;
            })
        },
        /**
         * Obtiene la informaci??n de la cita subsecuente de la consulta en proceso si existe. Si la petici??n se procesa correctamente, se asigna a la variable followUp
         * la informaci??n de la cita subsecuente que retorne el servidor
         * @function ConsultComponent.getFollowUp
        */
        getFollowUp()
        {
            axios.get<FollowUp>(`/consultas/${this.consultID}/seguimiento`)
            .then(response => {
                this.followUp = response.data;
            })
            .catch(error => {
                //
            })
        },
        /**
         * Obtiene la lista de medicamentos creados en la consulta en proceso si existe. Si la petici??n se procesa correctamente, se asigna a la variable prescriptionData
         * la lista de medicamentos que retorne el servidor
         * @function ConsultComponent.getPrescription
        */
        getPrescription()
        {
            axios.get<Prescription[]>(`/consultas/${this.consultID}/receta`)
            .then(response => {
                this.prescriptionData = response.data;
            })
            .catch(error => {
                //
            })
        },
        /**
         * Obtiene la lista de ordenes de estudios creados en la consulta en proceso si existe. Si la petici??n se procesa correctamente, se asigna a la variable testData
         * la lista de ordenes m??dicas que retorne el servidor
         * @function ConsultComponent.getTest
        */
        getTest()
        {
            axios.get<Test[]>(`/consultas/${this.consultID}/estudios`)
            .then(response => {
                const data = Object.values(response.data);
                this.testData = data.map((test: Test) => {
                    return {
                        ...test,
                        order: {
                            ...test.order,
                            status: test.medicalteststatus_id
                        }
                    }
                });
            })
            .catch(error => {
                //
            })
        },
        /**
         * Actualiza cada segundo el tiempo total de la consulta en proceso, si las horas, minutos o segundos son inferiores a 10, se agrefa un 0 para que el reloj
         * se muestre en un formato 00:00:00
         * @function ConsultComponent.updateClock
        */
        updateClock()
        {
            setInterval(() => {
                const time: any = moment.duration(moment().diff(moment(this.consultData.consult_start_at, 'YYYY-MM-DD HH:mm:ss')));
                this.clock.hours = time._data.hours < 10 ? `0${time._data.hours}` : time._data.hours;
                this.clock.minutes = time._data.minutes < 10 ? `0${time._data.minutes}` : time._data.minutes;
                this.clock.seconds = time._data.seconds < 10 ? `0${time._data.seconds}` : time._data.seconds;
            }, 1000);
        },
        /**
         * Guarda la informaci??n del anexo de acuerdo a la especialidad a la que pertenece la consulta en proceso, tomando como referencia el ID de la
         * especialida guardada
         * @function ConsultComponent.saveAttachmentData
        */
        saveAttachmentData()
        {
            switch(this.consultData.medicalspecialty_id)
            {
                case 1:
                    (this.attachment.data.form as Uroginecologia) = this.attachmentForm.uroginecolog??a;
                    break;
                case 2:
                    (this.attachment.data.form as ClimaterioSaludOsea) = this.attachmentForm.climaterioSaludOsea;
                    break;
                case 3:
                    (this.attachment.data.form as MaternoFetal) = this.attachmentForm.maternoFetal;
                    break;
                case 4:
                    (this.attachment.data.form as NutricionPerinatal) = this.attachmentForm.nutricionPerinatal;
                    break;
                case 5:
                    (this.attachment.data.form as NutricionGeneral) = this.attachmentForm.nutricionGeneral;
                    break;
                case 7:
                    (this.attachment.data.form as BiologiaReproduccion) = this.attachmentForm.biologiaReproduccion;
                    break;
                case 8:
                    (this.attachment.data.form as CirugiaEndoscopica) = this.attachmentForm.cirugiaEndoscopica;
                    break;
                case 9:
                    (this.attachment.data.form as Oncologia) = this.attachmentForm.oncologia;
                    break;
                case 10:
                    (this.attachment.data.form as Colposcopia) = this.attachmentForm.colposcopia;
                    break;
            }
        },
        /**
         * Habilita o deshabilita la edici??n del anexo de acuerdo al rol, adem??s que asigna a la variable attachmentForm la informaci??n del anexo de acuerdo
         *  a la especialidad a la que pertenece la cita en proceso
         * @function ConsultComponent.setAttachmentData
        */
        setAttachmentData()
        {
            switch(this.role)
            {
                case 'Administrador':
                    this.enableAttachmentData = false;
                    break;
                case 'Doctor':
                    this.enableAttachmentData = false;
                    break;
                default:
                    this.enableAttachmentData = true;
                    break;
            }

            switch(this.consultData.medicalspecialty_id)
            {
                case 1:
                    this.attachmentForm.uroginecolog??a = (this.attachment.data.form as Uroginecologia);
                    break;
                case 2:
                    this.attachmentForm.climaterioSaludOsea = (this.attachment.data.form as ClimaterioSaludOsea);
                    this.attachmentForm.nutricionGeneral = (this.attachment.data.form as NutricionGeneral);
                    break;
                case 3:
                    this.attachmentForm.maternoFetal = (this.attachment.data.form as MaternoFetal);
                    break;
                case 4:
                    this.attachmentForm.nutricionPerinatal = (this.attachment.data.form as NutricionPerinatal);
                    break;
                case 5:
                    this.attachmentForm.nutricionGeneral = (this.attachment.data.form as NutricionGeneral);
                    break;
                case 7:
                    this.attachmentForm.biologiaReproduccion = (this.attachment.data.form as BiologiaReproduccion);
                    break;
                case 8:
                    this.attachmentForm.cirugiaEndoscopica = (this.attachment.data.form as CirugiaEndoscopica);
                    break;
                case 9:
                    this.attachmentForm.oncologia = (this.attachment.data.form as Oncologia);
                    break;
                case 10:
                    this.attachmentForm.colposcopia = (this.attachment.data.form as Colposcopia);
                    break;
            }
        }
    },
})
