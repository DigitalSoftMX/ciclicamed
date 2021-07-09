import { DoctorSidebarConfig } from '@config/DoctorSidebar.config';
import { EmployeeData } from '@data/Employee/Employee.data';
import { CitasSubsecuentesData } from '@data/Medical/Attachments/CitasSubsecuentes.data';
import { ConsultData } from '@data/Medical/Consult.data';
import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { defineComponent } from '@vue/runtime-core';
import cloneDeep from 'lodash/cloneDeep';
import { PropType } from 'vue';
import axios from 'axios';
import { Consult } from '@interface/Medical/Consult.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import moment from 'moment';
import { HistoryData } from '@data/Medical/History.data';
import { History } from '@interface/Medical/History.interface';

export default defineComponent({
    components: {
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
        ConsultPage: require('@page/general/consult/ConsultPage.vue').default,
        PatientProfileComponent: require('@component/medical/consult/consultPatientProfile/ConsultPatientProfileComponent.vue').default,
        HistorialClinicoComponent: require('@component/medical/attachments/HistorialClinico/HistorialClinicoComponent.vue').default,
    },
    props: {
        nurse: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
        consult: {
            type: Number,
            default: -1
        },
    },
    data() {
        return {
            employeeCopy: cloneDeep(this.doctor),
            sidebarItems: DoctorSidebarConfig,
            isSidebarOpen: false,
            formData: CitasSubsecuentesData,
            patientData: PatientData,
            consultData: ConsultData,
            historyData: HistoryData,
            clock: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content,
            errors: []
        };
    },
    mounted() {
        if(this.consult > 0)
        {
            this.getConsultInfo();
        }
    },
    watch: {
        isSidebarOpen()
        {
            if(this.isSidebarOpen )
            {
                document.getElementById('sbcSidebar')?.classList.remove('collapsed');
                document.getElementById('pdpContent')?.classList.remove('expanded');
            } else {
                document.getElementById('sbcSidebar')?.classList.add('collapsed');
                document.getElementById('pdpContent')?.classList.add('expanded');
            }
        }
    },
    methods: {
        showConfirmationAlert()
        {
            $('#nurcpConfirmation').modal('show');
        },
        changeSidebarStatus()
        {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        sendToServerData()
        {
            axios.post(`/consultas/${this.consult}/resultados`, {
                data: {
                    cita: this.formData
                }
            })
            .then(response => {
                $('#nurcpSuccess').modal('show');
                setInterval(() => {
                    window.location.replace(`${this.url}/app/inicio`);
                }, 2000)
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#nurcpError').modal('show');
            })
        },
        getConsultInfo()
        {
            axios.get<Consult>(`/consultas/${this.consult}`)
            .then(response => {
                console.log(response.data)
                this.consultData = response.data;
                this.getPatientData();
                this.updateClock();
            })
            .catch(error => {
            })
        },
        updateClock()
        {
            setInterval(() => {
                const time: any = moment.duration(moment().diff(moment(this.consultData.nurse_start_at, 'YYYY-MM-DD HH:mm:ss')));
                this.clock.hours = time._data.hours < 10 ? `0${time._data.hours}` : time._data.hours;
                this.clock.minutes = time._data.minutes < 10 ? `0${time._data.minutes}` : time._data.minutes;
                this.clock.seconds = time._data.seconds < 10 ? `0${time._data.seconds}` : time._data.seconds;
            }, 1000);
        },
        getPatientData()
        {
            axios.get<Patient>(`/pacientes/${this.consultData.patient_id}`)
            .then(response => {
                this.patientData = response.data;
            })
            .catch(error => {
            })
        },
        getHistory()
        {
            axios.get<History>(`/consultas/${this.consult}/historial`)
            .then(response => {
                if(response.status === 200)
                {
                    this.historyData = response.data;
                }
            })
            .catch(error => {
            })
        },
    },
})