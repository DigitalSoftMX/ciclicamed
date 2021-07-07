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

export default defineComponent({
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
        ChargePaymentComponent: require('@component/payment/chargePayment/ChargePaymentComponent.vue').default
    },
    emits: [],
    props: {
        consultID: {
            type: Number,
            default: 1
        },
        sendToServer: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: ''
        }
    },
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
                uroginecología: UroginecologiaData,
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
        };
    },
    computed: {
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
                    return this.consultData.medicalconsultstatus_id > 4 ? false : true;
                default:
                    return true;
            }
        }
    },
    watch: 
    {
        sendToServer()
        {
            this.sendToServerData();
        }
    },
    mounted() {
        this.getConsultInfo();
        this.getHistory();
        this.getAttachment();
        this.getFollowUp();
        this.getPrescription();
        this.getTest();
        this.getPayment();
    },
    methods: {
        getPayment()
        {
            axios.get<Payment>(`/consultas/2/pago`)
            .then(response => {
                console.log(response.data, 'as')
                this.paymentProducts = response.data;
            })
            .catch(error => {
            // console.log(error)
            })
        },
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
                    cita: this.followUp.follow_up
                }
            })
            .then(response => {
                this.showPaymentComponent = true;
            })
            .catch(error => {
                console.log(error)
            })
        },
        selectSpecialty()
        {
            switch(this.consultData.medicalspecialty_id)
            {
                case 1:
                    return this.attachmentForm.uroginecología;
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
        getPatientData()
        {
            axios.get<Patient>(`/pacientes/${this.consultData.patient_id}`)
            .then(response => {
                this.patientData = response.data;
            })
            .catch(error => {
            // console.log(error)
            })
        },
        getConsultInfo()
        {
            axios.get<Consult>(`/consultas/${this.consultID}`)
            .then(response => {
                console.log(response.data)
                this.consultData = response.data;
                this.getPatientData();
                this.updateClock();
            })
            .catch(error => {
                // console.log(error)
            })
        },
        getHistory()
        {
            axios.get<History>(`/consultas/${this.consultID}/historial`)
            .then(response => {
                console.log(response.data)
                this.historyData = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        getAttachment()
        {
            axios.get<Attachtment>(`/consultas/${this.consultID}/anexo`)
            .then(response => {
                this.attachment = response.data;
                this.setAttachmentData();
            })
            .catch(error => {
                console.log(error)
            })
        },
        getFollowUp()
        {
            axios.get<FollowUp>(`/consultas/${this.consultID}/seguimiento`)
            .then(response => {
                this.followUp = response.data;
            })
            .catch(error => {
                // console.log(error)
            })
        },
        getPrescription()
        {
            axios.get<Prescription[]>(`/consultas/${this.consultID}/receta`)
            .then(response => {
                console.log(response.data)
                this.prescriptionData = response.data;
            })
            .catch(error => {
                // console.log(error)
            })
        },
        getTest()
        {
            axios.get<Test[]>(`/consultas/${this.consultID}/estudios`)
            .then(response => {
                const data = Object.values(response.data);
                console.log(response.data)
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
                // console.log(error)
            })
        },
        updateClock()
        {
            setInterval(() => {
                const time: any = moment.duration(moment().diff(moment(this.consultData.consult_start_at, 'YYYY-MM-DD HH:mm:ss')));
                this.clock.hours = time._data.hours < 10 ? `0${time._data.hours}` : time._data.hours;
                this.clock.minutes = time._data.minutes < 10 ? `0${time._data.minutes}` : time._data.minutes;
                this.clock.seconds = time._data.seconds < 10 ? `0${time._data.seconds}` : time._data.seconds;
            }, 1000);
        },
        saveAttachmentData()
        {
            switch(this.consultData.medicalspecialty_id)
            {
                case 1:
                    (this.attachment.data.form as Uroginecologia) = this.attachmentForm.uroginecología;
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
        setAttachmentData()
        {
            switch(this.consultData.medicalspecialty_id)
            {
                case 1:
                    this.attachmentForm.uroginecología = (this.attachment.data.form as Uroginecologia);
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
