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
import { NurseSidebarConfig } from '@config/NurseSidebar.config';
import { TestOrder } from '@interface/Medical/TestOrder.interface';

export default defineComponent({
    components: {
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
        ConsultPage: require('@page/general/consult/ConsultPage.vue').default,
        PatientProfileComponent: require('@component/medical/consult/consultPatientProfile/ConsultPatientProfileComponent.vue').default,
        HistorialClinicoComponent: require('@component/medical/attachments/HistorialClinico/HistorialClinicoComponent.vue').default,
        ConsultOrderComponent: require('@component/medical/consult/consultTestOrder/order/ConsultOrderComponent.vue').default
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
            sidebarItems: NurseSidebarConfig,
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
            errors: [],
            fum: ''
        };
    },
    mounted() {
        if(this.consult > 0)
        {
            this.getConsultInfo();
        }
    },
    computed:
    {
        testOrders(): any[]
        {
            return this.consultData!.test_scheduled?.order?.product?.order_annotations!;
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
        /**Envia los datos al servidor
         * @function ConsultPatientProfileComponent.sendToServerData
         * @param {object} data:
         */
        sendToServerData()
        {
            axios.post(`/consultas/${this.consult}/resultados`, {
                data: {
                    fum: this.fum,
                    cita: {
                        type: 'form',
                        form: this.formData
                    }
                }
            })
            .then(response => {
                console.log('Response: ',response.data.datas);
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
                this.consultData = response.data;
                this.getPatientData();
                this.updateClock();
                this.getHistory();
            })
            .catch(error => {
            })
        },
        getHistory()
        {
            axios.get<History>(`/pacientes/${this.consultData.patient_id}/historial`)
            .then(response => {
                this.historyData = Array.isArray(response.data) ? HistoryData : response.data;
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
        }
    },
})
