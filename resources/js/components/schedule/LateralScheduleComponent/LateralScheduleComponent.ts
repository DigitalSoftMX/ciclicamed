import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, PropType } from 'vue';
import moment from 'moment';
moment.locale('es');
import $ from 'jquery';
import 'jquery-ui-bundle';
import axios from "axios";
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { Select } from '@interface/General/Select.interface';
import { DatePicker } from 'v-calendar';
import { FullCalendarBusinessHour } from '@interface/General/FullCalendarBusinessHour.interface';
import { SelectData } from '@data/General/SelectSelected.data';
import { Product } from '@interface/Product/Product.interface';
import cloneDeep from 'lodash/cloneDeep';
import { Role } from '@interface/User/Role.interface';

export default defineComponent({
    name: 'LateralScheduleComponent',
    components: {
        DatePicker,
        TimePickerComponent: defineAsyncComponent(() => import('@component/general/timePicker/TimePickerComponent.vue')),
        SelectComponent: defineAsyncComponent(() => import('@component/general/select/SelectComponent.vue')),
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default
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
        patientID: {
            type: Number,
            default: -1
        },
        roles: {
            type: Array as PropType<Role[]>,
            default: []
        }
    },
    data()
    {
        return {
            id: Math.floor(Math.random() * 5) + 1,
            scheduleSelectedCopy: Object.assign({}, this.schedule),
            startHoursEnabled: [] as string[],
            startMinutesEnabled: ['0-59'],
            finishHoursEnabled: [] as string[],
            finishMinutesEnabled: ['0-59'],
            patientSelect: SelectData,
            categorySelect: SelectData,
            testSelect: SelectData,
            branchSelect: SelectData,
            doctorSelect: SelectData,
            consultReasonCharLength: 0 as number,
            scheduleTypeList: [] as Select[],
            isButtonActivated: false,
            isPatientDisabled: false,
            isScheduleCategoryDisabled: false,
            isBranchDisabled: false,
            isDoctorDisabled: false,
            isTestDisabled: true,
            doctorListCopy: cloneDeep(this.doctorsList),
            testList: [] as Select[],
            categoryListCopy: cloneDeep(this.categoryList),
            errors: [],
            isScheduleCardEnabled: true
        };
    },
    computed: {
        scheduleAction(): string
        {
            return this.schedule.id < 1 ? 'crear' : 'actualizar';
        }
    },
    watch:
    {
        patientID()
        {
            this.scheduleSelectedCopy.patient_id = this.patientID;
        },
        schedule: {
            handler()
            {
                this.scheduleSelectedCopy = Object.assign({}, this.schedule);
                this.doctorListCopy = Object.assign([], this.doctorsList);
                $(`#scheduleDate${this.id}`).datepicker("setDate", new Date(this.scheduleSelectedCopy.consult_schedule_start) );
                this.updateStartMinute(true);
                this.branchSelect = getBranchPosition(this.branchesList,  this.scheduleSelectedCopy.branch_id);
                this.doctorSelect = getDoctorPosition(this.doctorListCopy, this.scheduleSelectedCopy.doctor_id, this.scheduleSelectedCopy.medicalspecialty_id!);
                this.scheduleSelectedCopy.patient_id = this.patientID;
                if(this.roles.filter(item => item.name === 'Paciente' || item.name === 'Laboratorio' || item.name === 'Imagenología').length === 0)
                {
                    this.isScheduleCardEnabled = false;
                } else
                {
                    this.isScheduleCardEnabled = true;
                }
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
        },
        categorySelect()
        {
            const category = this.categoryList.filter(category => category.id === this.categorySelect.id)[0];
            switch(category.text)
            {
                case 'Estudio de imagenología':
                    this.getTestList('imagenologia');
                    this.isTestDisabled = false;
                    break;
                case 'Estudio de laboratorio':
                    this.getTestList('laboratorio');
                    this.isTestDisabled = false;
                    break;
                default:
                    this.isTestDisabled = true;
                    break;
            };
            this.scheduleSelectedCopy.medicalconsultcategory_id = this.categorySelect.childID;
        },
        branchSelect()
        {
            if(this.branchSelect.childID !== this.scheduleSelectedCopy.branch_id)
            {
                this.getDoctorList();
            }
            this.scheduleSelectedCopy.branch_id = this.branchSelect.childID;
        },
        doctorSelect()
        {
            switch(this.doctorSelect.childID)
            {
                case 1: //Laboratorio
                    this.categoryListCopy = this.categoryList.filter(doctor => doctor.text === 'Estudio de laboratorio');
                    break;
                case 2: //Imagenologia
                    this.categoryListCopy = this.categoryList.filter(doctor => doctor.text === 'Estudio de imagenología');
                    break;
                default:
                    this.categoryListCopy = this.categoryList.filter(doctor => doctor.text !== 'Estudio de laboratorio' && doctor.text !== 'Estudio de imagenología');
                    break;
            }
            this.scheduleSelectedCopy.doctor_id = this.doctorSelect.childID;
            this.scheduleSelectedCopy.medicalspecialty_id = this.doctorSelect.parentID!;
        },
        doctorList()
        {
            this.doctorListCopy = [...this.doctorsList];
        }
    },
    methods: {
        clearData()
        {
            this.scheduleSelectedCopy = Object.assign({}, this.schedule);
            this.doctorListCopy = Object.assign([], [...this.doctorsList]);
            this.doctorSelect = getDoctorPosition(this.doctorsList, this.scheduleSelectedCopy.doctor_id, this.scheduleSelectedCopy.medicalspecialty_id!);
            this.branchSelect = getBranchPosition(this.branchesList,  this.scheduleSelectedCopy.branch_id);
        },
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
            if(this.branchSelect.childID !== this.schedule.branch_id || 
                (this.doctorSelect.childID !== this.schedule.doctor_id && this.doctorSelect.parentID !== this.schedule.medicalspecialty_id)
            )
            {
                this.clearData();
            }
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
            this.scheduleSelectedCopy.consult_schedule_start = moment(
                `${date} ${startTime.hours()}:${startTime.minutes()}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
            this.scheduleSelectedCopy.consult_schedule_finish = moment(
                `${date} ${finishTime.hours()}:${finishTime.minutes()}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
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
            this.consultReasonCharLength = this.scheduleSelectedCopy.consult_reason!.length;
        },
        getConsultReasonCharLength(): number
        {
            return this.consultReasonCharLength;
        },
        createNewSchedule(): void
        {
            axios.post('/consultas', {
                data: {
                    ...this.scheduleSelectedCopy
                }
            })
            .then(response => {
                this.patientSelect = SelectData,
                this.branchSelect = SelectData;
                this.categorySelect = SelectData;
                this.doctorSelect = SelectData;
                this.$emit('newSchedule', response.data);
                $('#latscSuccess').modal('show');
                this.closeLateralSchedule()
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#latscError').modal('show');
            })
        },
        updateSchedule(): void
        {
            axios.patch<Schedule>(`/consultas/${this.schedule.id}`, {
                data: {
                    ...this.scheduleSelectedCopy
                }
            })
            .then(response => {
                $('#latscSuccess').modal('show');
                this.closeLateralSchedule()
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#latscError').modal('show');
            })
        },
        getDoctorList(): void
        {
            axios.get<BranchSpecialtyDoctors[]>(`/sucursales/${this.scheduleSelectedCopy.branch_id}/especialidades/doctores`)
            .then(response => {
                var index = 0;
                const doctorFilter = response.data.filter((list: BranchSpecialtyDoctors) => list.doctors.length > 0);
                this.doctorListCopy = doctorFilter.map(specialty => {
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
        getTestList(testCategory: string)
        {
            axios.get<Product[]>(`/productos/${testCategory}`, {
                params: {
                    all: true
                }
            })
            .then(response => {
                var index = 0;
                this.testList = response.data.map(test => {
                    return {
                        id: index++,
                        childID: test.id,
                        text: testCategory === 'imagenologia' ? `${test.product_code} ${test.name}` : `${test.product_code} ${test.supplier_code} ${test.name}`,
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        }
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
    },
})

export function getBranchPosition(branchesList: Select[], branchID: number): Select
{
    return {...branchesList.filter(branch => branch.childID === branchID)[0]};
}

export function getDoctorPosition(doctorsList: Select[], doctorID: number, specialtyID: number): Select
{
    var doctorSelected = SelectData;
    doctorsList.map(doctors => {
        const data = doctors.children?.filter(doctor => doctor.childID === doctorID && doctor.parentID === specialtyID)[0]!
        if(data)
        {
            doctorSelected = data;
        }
    });
    return {...doctorSelected};
}