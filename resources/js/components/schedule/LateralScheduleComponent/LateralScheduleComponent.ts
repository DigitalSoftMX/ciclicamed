import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, PropType } from 'vue';
import moment from 'moment';
moment.locale('es');
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
import { ElTimeSelect } from 'element-plus';
import _ from 'lodash';
import { Patient } from '@interface/Patient/Patient.interface';


export default defineComponent({
    name: 'LateralScheduleComponent',
    components: {
        DatePicker,
        ElTimeSelect,
        TimePickerComponent: require('@component/general/timePicker/TimePickerComponent.vue').default,
        SelectComponent: require('@component/general/select/SelectComponent.vue').default,
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
        businessHours: {
            type: Object as PropType<FullCalendarBusinessHour[]>,
            default: []
        },
        patientID: {
            type: Number,
            default: 0
        },
        role: {
            type: String,
            default: ''
        }
    },
    data()
    {
        return {
            id: Math.floor(Math.random() * 5) + 1,
            scheduleSelectedCopy: cloneDeep(this.schedule),
            scheduleTypeList: [] as Select[],
            doctorListCopy: [...this.doctorsList],
            testList: [] as Select[],
            errors: [],
            doctorSelect: SelectData,
            dateSelected: moment().format('YYYY-MM-DD'),
            startTime: '08:00',
            finishTime: '20:00',
            patientsList: [] as Select[],
            startHourUpdated: false
        };
    },
    computed: {
        scheduleAction(): string
        {
            return this.schedule.id < 1 ? 'crear' : 'actualizar';
        },
        startHour(): FullCalendarBusinessHour
        {
            if(this.businessHours.length > 0 && !this.startHourUpdated)
            {
                this.startHourUpdated = true;
                const time = this.businessHours.find(item => item.daysOfWeek.includes(moment(this.dateSelected).day()))!;
                this.startTime = time.startTime;
                this.finishTime = time.endTime;
                this.updateScheduleTimes();
                return time;
            }
            this.updateScheduleTimes();
            return {
                daysOfWeek: [],
                endTime: '20:00',
                startTime: '08:00'
            }
        },
        consultReasonLength(): number
        {
            return this.scheduleSelectedCopy.consult_reason?.length ?? 0;
        }
    },
    watch:
    {
        startTime()
        {
            this.updateScheduleTimes();
        },
        finishTime()
        {
            this.updateScheduleTimes();
        },
        patientID()
        {
            this.scheduleSelectedCopy.patient_id = this.patientID;
        },
        dateSelected()
        {
            this.updateScheduleTimes();
        },
        schedule: {
            handler()
            {
                this.getDoctorList();
                this.startHourUpdated = false;
                this.scheduleSelectedCopy = cloneDeep(this.schedule);
                this.dateSelected = moment(this.scheduleSelectedCopy.consult_schedule_start).format('YYYY-MM-DD');
                if(this.patientID > 0)
                {
                    this.scheduleSelectedCopy.patient_id = this.patientID;
                }
                this.doctorsList.length > 0 ? this.doctorListCopy = [...this.doctorsList] : this.getDoctorList();
                this.doctorSelect = getDoctorPosition(this.doctorListCopy, this.scheduleSelectedCopy.doctor_id, this.scheduleSelectedCopy.medicalspecialty_id!);
            },
            deep: true,
        },
        doctorListCopy: {
            handler()
            {
                if(this.doctorListCopy.length > 0)
                {
                    this.doctorSelect = getDoctorPosition(this.doctorListCopy, this.schedule.doctor_id, this.schedule.medicalspecialty_id!);
                }
            },
            deep: true,
        },
        'scheduleSelectedCopy.branch_id': {
            handler()
            {
                const isDoctorListExact = _.isEqual(this.doctorListCopy, this.doctorsList);
                const isBranchIDExact = this.schedule.branch_id === this.scheduleSelectedCopy.branch_id;
                if(!isBranchIDExact || !isDoctorListExact)
                {
                    this.getDoctorList();
                }
            },
            deep: true,
        },
        'scheduleSelectedCopy.doctor_id': {
            handler()
            {
                console.log(this.scheduleSelectedCopy.doctor_id)
                if(!this.role.match(/Checkup|Laboratorio|Imagenologia/))
                {
                    switch(this.scheduleSelectedCopy.doctor_id)
                    {
                        case 1:
                            this.scheduleSelectedCopy.medicalconsultcategory_id = 4;
                            this.getTestList('laboratorio');
                            break;
                            break;
                        case 2:
                            this.scheduleSelectedCopy.medicalconsultcategory_id = 3;
                            this.getTestList('imagenologia');
                            break;
                        default:
                            this.scheduleSelectedCopy.medicalconsultcategory_id = 2;
                            break;
                    };
                }
            },
            deep: true,
        },
        doctorSelect()
        {
            this.scheduleSelectedCopy.doctor_id = this.doctorSelect.childID!;
            this.scheduleSelectedCopy.medicalspecialty_id = this.doctorSelect.parentID!;
        }
    },
    methods: {
        loadPatientList()
        {
            if(this.role.match(/Asistente|Administrador|Doctor/))
            {
                this.getPatientsList();
            }
        },
        getPatientsList(): void
        {
            axios.get <Patient[]> (`/pacientes`)
            .then(response => {
                console.log(response.data)
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
        formatScheduleTime(datetime: string): string {
            return moment(datetime).format('hh:mm');
        },
        updateScheduleTimes()
        {
            this.scheduleSelectedCopy.consult_schedule_start = moment(
                `${this.dateSelected} ${this.startTime}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
            this.scheduleSelectedCopy.consult_schedule_finish = moment(
                `${this.dateSelected} ${this.finishTime}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        clearData()
        {
            this.scheduleSelectedCopy = cloneDeep(this.schedule);
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
            this.clearData();
            const drawerBasic = document.getElementById(`drawer${this.id}`) ?? document.createElement('div') as HTMLDivElement;
            const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
            drawerBasic.classList.remove('show');
            overlay.classList.remove('show');
        },
        getLateralScheduleTitle(): string
        {
            return this.schedule.doctor_id < 1 ? 'Crear cita médica' : 'Modificar cita médica'
        },
        createNewSchedule(): void
        {
            axios.post('/consultas', {
                data: {
                    ...this.scheduleSelectedCopy
                }
            })
            .then(response => {
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
            .then( response => {
                
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
        console.log(this.branchesList)
        const self = this;
        const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
        overlay.addEventListener('click', () => self.closeLateralSchedule());
        this.loadPatientList();
    },
})

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