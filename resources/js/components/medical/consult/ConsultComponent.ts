import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { DoctorData } from '@data/Doctor/Doctor.data';
import { ConsultData } from '@data/Medical/Consult.data';
import { HistoryData } from '@data/Medical/History.data';
import { FollowUpData } from '@data/Medical/FollowUp.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Test } from '@interface/Medical/Test.interface';
import { Consult } from '@interface/Medical/Consult.interface';
import { Doctor } from '@interface/Doctor/Doctor.interface';
import { FollowUp } from '@interface/Medical/FollowUp.interface';
import { History } from '@interface/Medical/History.interface';

export default defineComponent({
    components: {
        PatientProfileComponent: require('@component/medical/consult/consultPatientProfile/ConsultPatientProfileComponent.vue').default,
        AttachmentComponent: require('@component/medical/consult/consultAttachment/ConsultAttachmentComponent.vue').default,
        HistorialClinicoComponent: require('@component/medical/attachments/HistorialClinico/HistorialClinicoComponent.vue').default,
        CitasSubsecuentesComponent: require('@component/medical/attachments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        PrescriptionComponent: require('@component/medical/consult/consultPrescription/ConsultPrescriptionComponent.vue').default,
        TestOrderComponent: require('@component/medical/consult/consultTestOrder/ConsultTestOrderComponent.vue').default,
        RecordComponent: require('@component/medical/consult/consultRecord/ConsultRecordComponent.vue').default,
        UroginecologiaComponent: require('@component/medical/attachments/Uroginecologia/UroginecologiaComponent.vue').default,
        ClimaterioSaludOseaComponent: require('@component/medical/attachments/ClimaterioSaludOsea/ClimaterioSaludOseaComponent.vue').default,
        MaternoFetalComponent: require('@component/medical/attachments/MaternoFetal/MaternoFetalComponent.vue').default,
        BiologiaReproduccionComponent: require('@component/medical/attachments/BiologiaReproduccion/BiologiaReproduccionComponent.vue').default,
        CirugiaEndoscopicaComponent: require('@component/medical/attachments/CirugiaEndoscopica/CirugiaEndoscopicaComponent.vue').default,
        OncologiaComponent: require('@component/medical/attachments/Oncologia/OncologiaComponent.vue').default,
        ColposcopiaComponent: require('@component/medical/attachments/Colposcopia/ColposcopiaComponent.vue').default,
        NutricionPerinatalComponent: require('@component/medical/attachments/NutricionPerinatal/NutricionPerinatalComponent.vue').default,
        NutricionGeneralComponent: require('@component/medical/attachments/NutricionGeneral/NutricionGeneralComponent.vue').default,
        NetworkErrorComponent: require('@component/general/error/NetworkErrorComponent.vue').default,
        ProductComponent: require('@component/medical/consult/consultProduct/ConsultProductComponent.vue').default
    },
    emits: [],
    props: {
        specialty: {
            type: Number,
            default: -1
        },
        consultID: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            networkError: {
                history: false,
                specialty: false,
                record: false,
                followUp: false,
                prescription: false,
                testOrder: false
            },
            patientData: PatientData,
            doctorData: DoctorData,
            consultData: ConsultData,
            historyData: HistoryData,
            followUp: FollowUpData,
            prescriptionData: [] as Prescription[],
            testData: [] as Test[],
            clock: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
        };
    },
    mounted() {
        this.getConsultInfo();
        this.getPatientData();
        this.getDoctorData();
        this.getHistory();
        this.getFollowUp();
        this.getPrescription();
        this.getTest();
        this.updateClock();
    },
    watch: {
    },
    methods: {
        getPatientData()
        {
            axios.get<Patient>(`/pacientes/1`)
                .then(response => {
                    this.patientData = response.data;
                })
                .catch(error => {
                    // console.log(error)
                })
        },
        getConsultInfo()
        {
            axios.get<Consult>(`/consultas/1`)
                .then(response => {
                    this.consultData = response.data;
                })
                .catch(error => {
                    // console.log(error)
                })
        },
        getDoctorData()
        {
            axios.get<Doctor>(`/consultas/1/doctor`)
                .then(response => {
                    this.doctorData = response.data;
                })
                .catch(error => {
                    // console.log(error)
                })
        },
        getHistory()
        {
            axios.get<History>(`/consultas/1/historial`)
                .then(response => {
                    this.historyData = response.data;
                })
                .catch(error => {
                    // console.log(error)
                })
        },
        getFollowUp()
        {
            axios.get<FollowUp>(`/consultas/1/seguimiento`)
                .then(response => {
                    this.followUp = response.data;
                })
                .catch(error => {
                    // console.log(error)
                })
        },
        getPrescription()
        {
            axios.get<Prescription[]>(`/consultas/1/receta`)
                .then(response => {
                    this.prescriptionData = response.data;
                })
                .catch(error => {
                    // console.log(error)
                })
        },
        getTest()
        {
            axios.get<Test[]>(`/consultas/1/estudios`)
                .then(response => {
                    const data = Object.values(response.data);
                    this.testData = data.map((test: Test) => {
                        return {
                            ...test,
                            last_order: {
                                ...test.last_order,
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
        }
    },
})
