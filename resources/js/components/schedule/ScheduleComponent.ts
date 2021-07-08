import { SelectData } from '@data/General/SelectSelected.data';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { ScheduleFormData } from '@data/Schedule/ScheduleForm.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { EmployeeBranch } from '@interface/Employee/EmployeeBranch.interface';
import { EmployeeBusinessHour } from '@interface/Employee/EmployeeBusinessHour';
import { FullCalendarBusinessHour } from '@interface/General/FullCalendarBusinessHour.interface';
import { Select } from '@interface/General/Select.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleType } from '@interface/Schedule/ScheduleType.interface';
import { Role } from '@interface/User/Role.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { DefineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'ScheduleComponent',
    components: {
        CalendarComponet: require('@component/schedule/CalendarComponent/CalendarComponent.vue').default,
        ScheduleSelectComponent: require('@component/schedule/ScheduleSelectComponent/ScheduleSelectComponent.vue').default,
        ScheduleActionComponent: require('@component/schedule/ScheduleActionComponent/ScheduleActionComponent.vue').default,
        LateralScheduleComponent: require('@component/schedule/LateralScheduleComponent/LateralScheduleComponent.vue').default,
        CheckupScheduleComponent: require('@component/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue').default,
    },
    props: {
        userID: {
            type: Number,
            default: -1
        },
        role: {
            type: String as PropType<String>,
            default: ''
        },
        employeeID: {
            type: Number,
            default: -1
        },
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
            employeeBranches: [] as EmployeeBranch[],
        }
    },
    mounted() {
        this.selectUserSchedule();
        this.getBranchesList();
    },
    watch: {
        role()
        {
            this.selectUserSchedule();
        }
    },
    methods: {
        selectEmployeeAllSchedule()
        {
            this.selectUserSchedule();
        },
        //Schedules List
        getAllScheduleList(): void {
            axios.get<Schedule[]>(`/empleados/agenda`)
            .then(response => {
                this.schedules = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
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
        getCheckupScheduleList()
        {
            axios.get<Schedule[]>(`/checkup/agenda`)
            .then(response => {
                this.schedules = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        getDoctorScheduleList()
        {
            axios.get<Schedule[]>(`/empleados/${this.employeeID}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.getBusinessHours();
            })
            .catch(error => {
                console.log(error)
            })
        },
        getPatientScheduleList()
        {
            axios.get<Schedule[]>(`/pacientes/${this.userID}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.businessHours = []
            })
            .catch(error => {
                console.log(error)
            })
        },
        // Branches
        getScheduleBranchList(branchID: number): void {
            axios.get<Schedule[]>(`/sucursales/${branchID}/empleados/${this.employeeID}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.getBusinessHours();
            })
            .catch(error => {
                console.log(error)
            })
        },
        getDoctorBranches()
        {
            axios.get<EmployeeBranch[]>(`/empleados/${this.employeeID}/sucursales`)
            .then(response => {
                this.employeeBranches = response.data;
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
        selectUserSchedule()
        {
            switch(this.role)
            {
                case 'Paciente':
                    this.getPatientScheduleList();
                    break;
                case 'Checkup':
                    this.getCheckupScheduleList();
                    break;
                case 'Asistente':
                    this.getAllScheduleList();
                    break;
                default:
                    this.getDoctorScheduleList();
                    break;
            }
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
        copyScheduleData(date: string)
        {
            const dayOfWeek = moment(date).day();
            this.hoursEnabled = this.businessHours.filter(hours => hours.daysOfWeek.includes(dayOfWeek));
            if(moment().isSameOrBefore(date, 'days') && this.hoursEnabled.length > 0)
            // if(moment().isSameOrBefore(date, 'days'))
            {
                this.scheduleSelected = ScheduleData;
                const startHour = Number(this.hoursEnabled[0].startTime.split(':')[0]);
                const startMinute = Number(this.hoursEnabled[0].startTime.split(':')[1]);
                this.scheduleSelected.consult_schedule_start = this.scheduleSelected.consult_schedule_finish = moment(date)
                    .set('hours', startHour)
                    .set('minutes', startMinute)
                    .format('YYYY-MM-DD HH:mm:00');
                const lateral = this.$refs.openLateralSchedule as DefineComponent;
                lateral.openLateralSchedule();
            }
            if(this.role.includes('Asistente' || 'Administrador'))
            {
                const lateral = this.$refs.openLateralSchedule as DefineComponent;
                lateral.openLateralSchedule();
            }
        },
        getScheduleSelected(schedule: Schedule)
        {
            this.scheduleSelected = Object.assign({}, schedule);
        },
    },
})