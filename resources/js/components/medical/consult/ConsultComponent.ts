import { ConsultData } from '../../../defaultData/Medical/Consult.data';
import { PatientData } from '../../../defaultData/Patient/Patient.data';
import { Consult } from '@/resources/js/interfaces/Medical/Consult.interface';
import { Patient } from '@/resources/js/interfaces/Patient/Patient.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { DefineComponent, PropType } from 'vue';
import moment from 'moment';
import { HistoryData } from '../../../defaultData/Medical/History.data';
import { History } from '@/resources/js/interfaces/Medical/History.interface';
import { FollowUp } from '@/resources/js/interfaces/Medical/FollowUp.interface';
import { FollowUpData } from '../../../defaultData/Medical/FollowUp.data';
import { Doctor } from '@/resources/js/interfaces/Doctor/Doctor.interface';
import { DoctorData } from '../../../defaultData/Doctor/Doctor.data';
import { PrescriptionData } from '@/resources/js/defaultData/Medical/Prescription.data';
import { Prescription } from '@/resources/js/interfaces/Medical/Prescription.interface';
import { TestOrder } from '@/resources/js/interfaces/Medical/TestOrder.interface';
import { Test } from '@/resources/js/interfaces/Medical/Test.interface';

export default defineComponent({
    components: {
        PatientProfileComponent: require('./patientProfile/PatientProfileComponent.vue').default,
        AttachmentComponent: require('./attachment/AttachmentComponent.vue').default,
        HistorialClinicoComponent: require('../../attachtments/HistorialClinico/HistorialClinicoComponent.vue').default,
        CitasSubsecuentesComponent: require('../../attachtments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        PrescriptionComponent: require('../prescription/PrescriptionComponent.vue').default,
        TestOrderComponent: require('../testOrder/TestOrderComponent.vue').default,
        RecordComponent: require('../record/RecordComponent.vue').default,
        

        UroginecologiaComponent: require('../../attachtments/Uroginecologia/UroginecologiaComponent.vue').default,
        ClimaterioSaludOseaComponent: require('../../attachtments/ClimaterioSaludOsea/ClimaterioSaludOseaComponent.vue').default,
        MaternoFetalComponent: require('../../attachtments/MaternoFetal/MaternoFetalComponent.vue').default,
        BiologiaReproduccionComponent: require('../../attachtments/BiologiaReproduccion/BiologiaReproduccionComponent.vue').default,
        CirugiaEndoscopicaComponent: require('../../attachtments/CirugiaEndoscopica/CirugiaEndoscopicaComponent.vue').default,
        OncologiaComponent: require('../../attachtments/Oncologia/OncologiaComponent.vue').default,
        ColposcopiaComponent: require('../../attachtments/Colposcopia/ColposcopiaComponent.vue').default,
        NutricionPerinatalComponent: require('../../attachtments/Nutricion/NutricionPerinatal/NutricionPerinatalComponent.vue').default,
        NutricionGeneralComponent: require('../../attachtments/Nutricion/NutricionGeneral/NutricionGeneralComponent.vue').default,

        NetworkErrorComponent: require('../../error/NetworkErrorComponent.vue').default
        
      
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
