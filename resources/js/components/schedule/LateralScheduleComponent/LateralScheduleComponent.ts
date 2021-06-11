import { defineComponent } from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';
import moment from 'moment';
moment.locale('es');
import $ from 'jquery';
import 'jquery-ui-bundle';
import axios from "axios";
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { ScheduleType } from '@interface/Schedule/ScheduleType.interface';
import { Select } from '@interface/General/Select.interface';
import { DatePicker } from 'v-calendar';

import { FullCalendarBusinessHour } from '@interface/General/FullCalendarBusinessHour.interface';
import { SelectData } from '@data/General/SelectSelected.data';
import { ScheduleForm } from '@interface/Schedule/ScheduleForm.interface';
import { ScheduleFormData } from '@data/Schedule/ScheduleForm.data';

export default defineComponent({
    name: 'LateralScheduleComponent',
    components: {
        DatePicker,
        TimePickerComponent: require('@component/general/timePicker/TimePickerComponent.vue').default,
        SelectComponent: require('@component/general/select/SelectComponent.vue').default
    },
    emits: ['newSchedule', 'updateSchedule'],
    props:
    {
        schedule: {
            type: Object as PropType<Schedule>,
            default: ScheduleData
        },
        branchesList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        doctorsList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        patientsList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        categoryList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        businessHours: {
            type: Object as PropType<FullCalendarBusinessHour[]>,
            default: []
        },
        selectDate: null
    },
    data()
    {
        return {
            id: Math.floor(Math.random() * 5) + 1,
            scheduleSelectedCopy: Object.assign({}, this.schedule),
            isPatientDisabled: true,
            startHoursEnabled: [] as string[],
            startMinutesEnabled: ['0-59'],
            finishHoursEnabled: [] as string[],
            finishMinutesEnabled: ['0-59'],
            isScheduleCategoryDisabled: true,
            patientSelect: SelectData,
            categorySelect: SelectData,
            branchSelect: SelectData,
            doctorSelect: SelectData,
            consultReasonCharLength: 0 as number,
            // isBranchDisabled: true,
            // isDoctorDisabled: true,
            // scheduleTypeList: [] as Select[],
            // isButtonActivated: false as boolean,
        };
    },
    watch:
    {
        schedule: {
            handler()
            {
                this.scheduleSelectedCopy = Object.assign({}, this.schedule);
                $(`#scheduleDate${this.id}`).datepicker("setDate", new Date(this.scheduleSelectedCopy.consult_schedule_start) );
                this.updateStartMinute(true);
                this.branchSelect.id = this.branchesList.filter(branch => branch.childID === this.scheduleSelectedCopy.branch_id)[0].id;
            },
            deep: true,
        },
        businessHours()
        {
            this.startHoursEnabled = [];
            this.businessHours.map(item => {
                this.startHoursEnabled.push(`${ item.startTime.split(':')[0] }-${ item.endTime.split(':')[0] }`);
            });
            this.finishHoursEnabled = this.startHoursEnabled;
            
        },
        patientSelect()
        {
            this.scheduleSelectedCopy.patient_id = this.patientSelect.childID;
            console.log(this.scheduleSelectedCopy)
        },
        categorySelect()
        {
            this.scheduleSelectedCopy.medicalconsulttype_id = this.categorySelect.childID;
            console.log(this.scheduleSelectedCopy)
        },
        branchSelect()
        {
            this.scheduleSelectedCopy.branch_id = this.branchSelect.childID;
            console.log(this.scheduleSelectedCopy)
        },
        doctorSelect()
        {
            this.scheduleSelectedCopy.doctor_id = this.doctorSelect.childID;
            this.scheduleSelectedCopy.medicalspecialty_id = this.doctorSelect.parentID!;
            console.log(this.scheduleSelectedCopy)
        }
        // selectDate(): void
        // {
        //     $(`#scheduleDate${this.id}`).datepicker("setDate", this.selectDate );
        //     this.formatScheduleDateTime();
        // },
        // scheduleSelectedCopy(): void
        // {
        //     console.log(this.schedule);
        //     this.scheduleSelectedCopy = Object.assign({}, this.schedule);

        //     if(this.scheduleSelectedCopy.patient_id < 1)
        //     {
        //         this.isScheduleCategoryDisabled = true;
        //         this.isBranchDisabled = true;
        //         this.isDoctorDisabled = true;
        //     }
        //     else
        //     {
        //         if (this.schedule.id > 0)
        //         {
        //             this.isScheduleCategoryDisabled = false;
        //             this.isBranchDisabled = false;
        //         }
        //         if (this.schedule.doctor_id > 0)
        //         {
        //             // this.getDoctorsList();
        //             this.isDoctorDisabled = false;
        //         }
        //         if(this.scheduleTypeList[this.schedule.medicalconsulttype_id].text !== 'Cita médica')
        //         {
        //             this.isDoctorDisabled = true;
        //         }
        //     }
        //     $(`#scheduleDate${this.id}`).datepicker("setDate", moment(this.scheduleSelectedCopy.consult_schedule_start).format('YYYY-MM-DD') );
        // }
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
        formatScheduleDateTime(): void
        {
            const date = moment($(`#scheduleDate${this.id}`).datepicker('getDate')).format('YYYY-MM-DD');
            const startTime = moment(this.scheduleSelectedCopy.consult_schedule_start);
            const finishTime = moment(this.scheduleSelectedCopy.consult_schedule_finish);
            this.scheduleSelectedCopy.consult_schedule_start = moment(`${date} ${startTime.hours()}:${startTime.minutes()}:00`).format('YYYY-MM-DD HH:mm:00');
            this.scheduleSelectedCopy.consult_schedule_finish = moment(`${date} ${finishTime.hours()}:${finishTime.minutes()}:00`).format('YYYY-MM-DD HH:mm:00');
        },
        getLateralScheduleTitle(): string
        {
            return this.schedule.doctor_id < 1 ? 'Crear cita médica' : 'Modificar cita médica'
        },
        updateStartMinute(isHourUpdated: boolean)
        {
            if(isHourUpdated)
            {
                this.startMinutesEnabled = ['0-59'];
                this.businessHours.map(hour => {
                    const startHour = Number(hour.startTime.split(':')[0]);
                    const scheduleStartHour = moment(this.scheduleSelectedCopy.consult_schedule_start).hours();
                    if(startHour === scheduleStartHour)
                    {
                        const startMinute = hour.startTime.split(':')[1];
                        this.startMinutesEnabled = [`${startMinute}-59`];
                    }
                    return hour;
                });
            }
        },
        updateFinishMinute(isHourUpdated: boolean)
        {
            if(isHourUpdated)
            {
                this.finishMinutesEnabled = ['0-59'];
                this.businessHours.map(hour => {
                    const finishHour = Number(hour.endTime.split(':')[0]);
                    const scheduleFinishHour = moment(this.scheduleSelectedCopy.consult_schedule_finish).hours();
                    if(finishHour === scheduleFinishHour)
                    {
                        const finishMinute = hour.endTime.split(':')[1];
                        this.finishMinutesEnabled = [`0-${finishMinute}`];
                    }
                    return hour;
                });
            }
        },
        getPatientSelected(): void {
            this.isScheduleCategoryDisabled = false;
        },
        formatScheduleTime(datetime: string): string {
            return moment(datetime).format('hh:mm');
        },

        updateConsultReasonCharLength(): void
        {
            this.consultReasonCharLength = this.scheduleSelectedCopy.consult_reason.length;
        },
        getConsultReasonCharLength(): number
        {
            return this.consultReasonCharLength;
        },
        // clickScheduleDate(): void
        // {
        //     const menuLateral = this.$refs.scheduleDate as DefineComponent;;
        //     $(`#scheduleDate${this.id}`).datepicker('show');
        //     menuLateral.click()
        // },
        
        
        // createNewSchedule(): void
        // {
        //     console.log(this.scheduleSelectedCopy)
        //     axios.post('/consultas', {
        //         data: {
        //             ...this.scheduleSelectedCopy
        //         }
        //     })
        //     .then(response => {
        //         console.log(response);
        //         this.$emit('newSchedule', response.data);
        //         this.closeLateralSchedule()
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // },
        // updateSchedule(): void
        // {
        //     axios.patch<Schedule>(`/consultas/${this.schedule.id}`, {
        //         data: {
        //             ...this.scheduleSelectedCopy
        //         }
        //     })
        //     .then(response => {
        //         this.$emit('updateSchedule', response.data);
        //         this.closeLateralSchedule()
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // },
        
        // getScheduleCategorySelected(): void {
        //     const index = this.scheduleSelectedCopy.medicalconsulttype_id - 1;
        //     const scheduleTypeSelected = index > -1 ? this.scheduleTypeList[index].text : '';
        //     if (scheduleTypeSelected !== 'Cita médica' && !this.isBranchDisabled)
        //     {
        //         this.isDoctorDisabled = true;
        //     }
        //     if (scheduleTypeSelected === 'Cita médica' && !this.isBranchDisabled)
        //     {
        //         this.isDoctorDisabled = false;
        //     }
        //     this.scheduleSelectedCopy.branch_id = 0;
        //     this.scheduleSelectedCopy.doctor_id = 0;
        //     this.isBranchDisabled = false;
        // },
        // getBranchSelected():void {
        //     const index = this.scheduleSelectedCopy.medicalconsulttype_id - 1;
        //     const scheduleTypeSelected = index > -1 ? this.scheduleTypeList[index].text : '';
        //     this.scheduleSelectedCopy.doctor_id = 0;
        //     if (scheduleTypeSelected === 'Cita médica')
        //     {
        //         // this.getDoctorsList();
        //         this.isDoctorDisabled = false;
        //     }
        // },
        
    },
    mounted() {
        const self = this;
        const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
        overlay.addEventListener('click', () => self.closeLateralSchedule());
        const actualYear = new Date().getFullYear().toString();

        $(`#scheduleDate${this.id}`).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            yearRange: `${actualYear}:${actualYear}`,
            onSelect() {
                self.formatScheduleDateTime();
            }
        })
        this.isPatientDisabled = false;
        // this.getSchedulesCategories();
        console.log(this.scheduleSelectedCopy)
    },
})