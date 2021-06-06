import { defineComponent } from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';
import moment from 'moment';
moment.locale('es');
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'wickedpicker';
import axios from "axios";
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { ScheduleType } from '@interface/Schedule/ScheduleType.interface';
import { ScheduleForm } from '@interface/Schedule/ScheduleForm.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Select } from '@interface/General/Select.interface';

export default defineComponent({
    name: 'LateralScheduleComponent',
    components: {
        SelectComponent: require('@component/general/select/SelectComponent.vue').default
    },
    props:
    {
        schedule: {
            type: Object as PropType <Schedule> ,
            default: () => ScheduleData
        },
        selectDate: null
    },
    emits: ['newSchedule', 'updateSchedule'],
    data()
    {
        return {
            isPatientDisabled: true,
            isScheduleCategoryDisabled: true,
            isBranchDisabled: true,
            isDoctorDisabled: true,
            patientsList: [] as Select[],
            branchesList: [] as Select[],
            doctorsList: [] as Select[],
            scheduleTypeList: [] as Select[],
            formData: {} as ScheduleForm,
            id: Math.floor(Math.random() * 5) + 1,
            timeStart: {} as any,
            isButtonActivated: false as boolean,
            consultReasonCharLength: 0 as number,
            aaa: 0
        };
    },
    watch:
    {
        selectDate(): void
        {
            $(`#scheduleDate${this.id}`).datepicker("setDate", this.selectDate );
            this.formData.consult_schedule_start;
            this.formatScheduleDateTime();
        },

        schedule(): void
        {
            this.formData = {
                patient_id: this.schedule.patient_id,
                branch_id: this.schedule.branch_id,
                consult_reason: this.schedule.consult_reason,
                consult_schedule_start: moment(this.schedule.consult_schedule_start, 'YYYY-MM-DD HH:mm A').format('l LT'),
                doctor_id: this.schedule.doctor_id,
                medicalconsulttype_id: this.schedule.medicalconsulttype_id
            }

            this.getBranchList();
            if(this.formData.patient_id < 1)
            {
                this.isScheduleCategoryDisabled = true;
                this.isBranchDisabled = true;
                this.isDoctorDisabled = true;
                this.timeStart.wickedpicker('setTime', 0, '08:00');
            }
            else
            {
                if (this.schedule.id > 0)
                {
                    this.isScheduleCategoryDisabled = false;
                    this.isBranchDisabled = false;
                }
                if (this.schedule.doctor_id > 0)
                {
                    this.getDoctorsList();
                    this.isDoctorDisabled = false;
                }
                if(this.scheduleTypeList[this.schedule.medicalconsulttype_id].text !== 'Cita médica')
                {
                    this.isDoctorDisabled = true;
                }
                $(`#scheduleDate${this.id}`).datepicker("setDate", new Date(this.schedule.consult_schedule_start) );
                const time = moment(this.formData.consult_schedule_start, 'YYYY-MM-DD HH:mm A').format('HH:mm')
                this.timeStart.wickedpicker('setTime', 0, time);
            }

        }
    },
    methods: {

        openLateralSchedule(): void
        {
            const drawerBasic = document.getElementById(`drawer${this.id}`) ?? document.createElement('div') as HTMLDivElement;
            const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
            drawerBasic.classList.remove('account');
            drawerBasic.classList.remove('profile');
            drawerBasic.classList.add('basic');
            drawerBasic.classList.add('show');
            overlay.classList.add('show');
        },


        closeLateralSchedule(): void
        {
            const drawerBasic = document.getElementById(`drawer${this.id}`) ?? document.createElement('div') as HTMLDivElement;
            const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
            drawerBasic.classList.remove('show');
            overlay.classList.remove('show');
        },


        clickScheduleDate(): void
        {
            const menuLateral = this.$refs.scheduleDate as DefineComponent;;
            $(`#scheduleDate${this.id}`).datepicker('show');
            menuLateral.click()
        },

        getLateralScheduleTitle(): string
        {
            return this.schedule.id < 1 ? 'Crear cita médica' : 'Modificar cita médica'
        },

        getPatientsList(): void
        {
            axios.get < Patient[] > (`/pacientes`)
            .then(response => {
                this.patientsList = response.data.map(patient => {
                    return {
                        id: patient.id,
                        text: `${patient.patient_code} ${patient.first_name} ${patient.last_name}`,
                        data: []
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },

        getSchedulesCategories(): void
        {
            axios.get<ScheduleType[]>(`/consultas/categorias`)
            .then(response => {
                this.scheduleTypeList = response.data.map(category => {
                    return {
                        id: category.id,
                        text: category.name,
                        data: []
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },


        getBranchList(): void
        {
            axios.get < Branch[] > (`/sucursales`)
            .then(response => {
                this.branchesList = response.data.map(branch => {
                    return {
                        id: branch.id,
                        text: branch.name,
                        data: []
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },


        getDoctorsList(): void
        {
            console.log('dotco')
            axios.get<BranchSpecialtyDoctors[]>(`/sucursales/${this.formData.branch_id}/especialidades/doctores`)
            .then(response => {
                const doctorFilter = response.data.filter((list: BranchSpecialtyDoctors) => list.doctors.length > 0);
                this.doctorsList = doctorFilter.map(doctor => {
                    return {
                        id: doctor.id,
                        text: doctor.name,
                        data: doctor.doctors.map(doctor => {
                            return {
                                id: doctor.id,
                                text: `${doctor.first_name} ${doctor.last_name}`,
                                data: []
                            }
                        })
                    }
                });
                console.log(this.doctorsList)
            })
            .catch(error => {
                console.log(error)
            })
        },

        createNewSchedule(): void
        {
            axios.post('/consultas', {
                data: {
                    ...this.formData
                }
            })
            .then(response => {
                console.log(response);
                this.$emit('newSchedule', response.data);
                this.closeLateralSchedule()
            })
            .catch(error => {
                console.log(error)
            })
        },

        updateSchedule(): void
        {
            axios.patch<Schedule>(`/consultas/${this.schedule.id}`, {
                data: {
                    ...this.formData
                }
            })
            .then(response => {
                console.log(response);
                this.$emit('updateSchedule', response.data);
                this.closeLateralSchedule()
            })
            .catch(error => {
                console.log(error)
            })
        },

        getPatientSelected(): void {
            this.isScheduleCategoryDisabled = false;
        },

        getScheduleCategorySelected(): void {
            const index = this.formData.medicalconsulttype_id - 1;
            const scheduleTypeSelected = index > -1 ? this.scheduleTypeList[index].text : '';
            if (scheduleTypeSelected !== 'Cita médica' && !this.isBranchDisabled)
            {
                this.isDoctorDisabled = true;
            }
            if (scheduleTypeSelected === 'Cita médica' && !this.isBranchDisabled)
            {
                this.isDoctorDisabled = false;
            }
            this.formData.branch_id = 0;
            this.formData.doctor_id = 0;
            this.isBranchDisabled = false;
        },

        getBranchSelected():void {
            const index = this.formData.medicalconsulttype_id - 1;
            const scheduleTypeSelected = index > -1 ? this.scheduleTypeList[index].text : '';
            this.formData.doctor_id = 0;
            if (scheduleTypeSelected === 'Cita médica')
            {
                this.getDoctorsList();
                this.isDoctorDisabled = false;
            }
        },

        formatScheduleTime(datetime: string): string {
            return moment(datetime, 'YYYY-MM-DD HH:mm A').format('hh:mm A');
        },

        formatScheduleDateTime(): void
        {
            const time = this.timeStart.wickedpicker('time');
            const date = moment($(`#scheduleDate${this.id}`).datepicker('getDate')).format('YYYY-MM-DD');
            this.formData.consult_schedule_start = moment(date + ' ' + time, 'YYYY-MM-DD HH:mm A').format('MM/DD/YY LT');
            console.log(this.formData.consult_schedule_start)
            //this.formData.consult_schedule_start = moment(date + ' ' + time).unix();
        },

        updateConsultReasonCharLength(): void
        {
            this.consultReasonCharLength = this.formData.consult_reason.length;
        },

        getConsultReasonCharLength(): number
        {
            return this.consultReasonCharLength;
        },

    },
    mounted() {
        const self = this;
        var $j = jQuery.noConflict();
        this.timeStart = $j(`#scheduleTimeStart${this.id}`);
        const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
        overlay.addEventListener('click', () => self.closeLateralSchedule())
        $(`#scheduleDate${this.id}`).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            yearRange: `1930:${new Date().getFullYear().toString()}`,
            onSelect() {
                self.formatScheduleDateTime();
            }
        })

        this.timeStart.wickedpicker({
            title: 'Hora de cita',
            now: "08:00",
            minutesInterval: 30,
            timeSeparator: ':',
        })

        this.getPatientsList();
        this.isPatientDisabled = false;
        this.getBranchList();
        this.getSchedulesCategories();
    },
})
