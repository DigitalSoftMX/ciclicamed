import { SelectData } from '@data/General/SelectSelected.data';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { ScheduleFormData } from '@data/Schedule/ScheduleForm.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { EmployeeBusinessHour } from '@interface/Employee/EmployeeBusinessHour';
import { FullCalendarBusinessHour } from '@interface/General/FullCalendarBusinessHour.interface';
import { Select } from '@interface/General/Select.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleType } from '@interface/Schedule/ScheduleType.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { DefineComponent } from 'vue';

export default defineComponent({
    name: 'ScheduleComponent',
    components: {
        CalendarComponet: defineAsyncComponent(() => import('@component/schedule/CalendarComponent/CalendarComponent.vue')),
        ScheduleSelectComponent: defineAsyncComponent(() => import('@component/schedule/ScheduleSelectComponent/ScheduleSelectComponent.vue')),
        ScheduleActionComponent: defineAsyncComponent(() => import('@component/schedule/ScheduleActionComponent/ScheduleActionComponent.vue')),
        LateralScheduleComponent: defineAsyncComponent(() => import('@component/schedule/LateralScheduleComponent/LateralScheduleComponent.vue')),
        CheckupScheduleComponent: defineAsyncComponent(() => import('@component/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue'))
    },
    props: {
    },
    data() {
        return {
            schedules: [] as Schedule[],
            branchesList: [] as Select[],
            doctorList: [] as Select[],
            patientsList: [] as Select[],
            scheduleCategoryList: [] as Select[],
            businessHours: [] as FullCalendarBusinessHour[],
            scheduleSelected: ScheduleData,
            hoursEnabled: [] as FullCalendarBusinessHour[],
        }
    },
    mounted() {
        this.getPatientsList();
        this.getBranchesList();
        this.getSchedulesCategories();
    },
    watch: {
    },
    methods: {
        getScheduleList(doctorSelected: Select): void {
        
            this.scheduleSelected.doctor_id = doctorSelected.childID;
            this.scheduleSelected.medicalspecialty_id = doctorSelected.parentID!;
            axios.get<Schedule[]>(`/sucursales/${this.scheduleSelected.branch_id}/empleados/${this.scheduleSelected.doctor_id}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.getBusinessHours();
            })
            .catch(error => {
                console.log(error)
            })
        },
        getBusinessHours(): void {
            axios.get<EmployeeBusinessHour[]>(`/sucursales/${this.scheduleSelected.branch_id}/empleados/${this.scheduleSelected.doctor_id}/horarios`)
            .then(response => {
                this.businessHours = response.data.map(hour => {
                    const days = [];
                    for(var i = hour.start_day; i <= hour.finish_day; i++)
                    {
                        days.push(i);
                    }
                    return {
                        daysOfWeek: days,
                        startTime: hour.start_time,
                        endTime: hour.finish_time
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
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
                console.log(error)
            })
        },
        getDoctorList(branchSelected: Select): void
        {
            this.scheduleSelected.branch_id = branchSelected.childID;
            this.scheduleSelected.doctor_id = -1;
            axios.get<BranchSpecialtyDoctors[]>(`/sucursales/${this.scheduleSelected.branch_id}/especialidades/doctores`)
            .then(response => {
                var index = 0;
                const doctorFilter = response.data.filter((list: BranchSpecialtyDoctors) => list.doctors.length > 0);
                this.doctorList = doctorFilter.map(specialty => {
                    return {
                        id: index++,
                        childID: specialty.id,
                        text: specialty.name,
                        children: specialty.doctors.map(doctor => {
                            return {
                                id: index++,
                                text: `${doctor.first_name} ${doctor.last_name}`,
                                childID: doctor.id,
                                parentID: specialty.id
                            }
                        })
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
        getPatientsList(): void
        {
            axios.get <Patient[]> (`/pacientes`)
            .then(response => {
                this.patientsList = response.data.map((patient, index) => {
                    return {
                        id: index,
                        childID: patient.id,
                        text: `${patient.patient_code} ${patient.first_name} ${patient.last_name}`
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
                this.scheduleCategoryList = response.data.map((category, index) => {
                    return {
                        id: index,
                        childID: category.id,
                        text: category.name
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
        copyScheduleData(date: string)
        {
            const dayOfWeek = moment(date).day();
            this.hoursEnabled = this.businessHours.filter(hours => hours.daysOfWeek.includes(dayOfWeek));
            // if(moment().isSameOrBefore(date, 'days') && this.hoursEnabled.length > 0)
            if(moment().isSameOrBefore(date, 'days'))
            {
                const startHour = Number(this.hoursEnabled[0].startTime.split(':')[0]);
                const startMinute = Number(this.hoursEnabled[0].startTime.split(':')[1]);
                this.scheduleSelected.consult_schedule_start = this.scheduleSelected.consult_schedule_finish = moment(date)
                    .set('hours', startHour)
                    .set('minutes', startMinute)
                    .format('YYYY-MM-DD HH:mm:00');
                const lateral = this.$refs.openLateralSchedule as DefineComponent;
                lateral.openLateralSchedule();
            }
        },
        getScheduleSelected(schedule: Schedule)
        {
            console.log(schedule)
            this.scheduleSelected = Object.assign({}, schedule);
        },
    },
})