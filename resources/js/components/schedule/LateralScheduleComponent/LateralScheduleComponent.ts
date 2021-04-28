import {
    defineComponent
} from '@vue/runtime-core';
import moment from 'moment';
import {
    DefineComponent,
    PropType
} from 'vue';
moment.locale('es');
require('jquery');
require('jquery-ui-bundle');
import 'select2';
import axios from "axios";
import {
    Schedule
} from '@/resources/js/interfaces/Schedule/Schedule.interface';
import {
    ScheduleData
} from '../../../defaultData/Schedule/Schedule.data';
import {
    Patient
} from '@/resources/js/interfaces/Patient/Patient.interface';
import {
    Branch
} from '@/resources/js/interfaces/Branch/Branch.interface';
import {
    Doctor
} from '@/resources/js/interfaces/Doctor/Doctor.interface';
import {
    ScheduleType
} from '@/resources/js/interfaces/Schedule/ScheduleType.interface';
import {
    ScheduleForm
} from '@/resources/js/interfaces/Schedule/ScheduleForm.interface';
import {
    BranchSpecialtyDoctors
} from '@/resources/js/interfaces/Branch/BranchSpecialtyDoctors.interface';

export default defineComponent({
    name: 'LateralScheduleComponent',
    props: {
        schedule: {
            type: Object as PropType <Schedule> ,
            default: () => ScheduleData
        },
    },
    data() {
        return {
            isPatientDisabled: true,
            isScheduleCategoryDisabled: true,
            isBranchDisabled: true,
            isDoctorDisabled: true,
            patientsList: [] as Patient[],
            branchesList: [] as Branch[],
            doctorsList: [] as BranchSpecialtyDoctors[],
            scheduleTypeList: [] as ScheduleType[],
            formData: {} as ScheduleForm,
            id: Math.floor(Math.random() * 50) + 1
        };
    },
    watch: {
        schedule()
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
            
            $(`#scheduleCategories${this.id}`).val(this.formData.medicalconsulttype_id.toString()).trigger('change');
            $(`#branches${this.id}`).val(this.formData.branch_id.toString()).trigger('change');
            if (this.schedule.id > 0)
            {
                this.isScheduleCategoryDisabled = false;
                this.isBranchDisabled = false;
            }
            if (this.schedule.doctor_id > 0)
            {
                this.getDoctorsList();
                $(`#doctors${this.id}`).val(this.formData.doctor_id.toString()).trigger('change');
                this.isDoctorDisabled = false;
            }
            if(this.scheduleTypeList[this.schedule.medicalconsulttype_id].name !== 'Primera cita' && this.scheduleTypeList[this.schedule.medicalconsulttype_id].name !== 'Cita médica')
            {
                this.isDoctorDisabled = true;
            }

        }
    },
    methods: {

        openLateralSchedule() {
            const drawerBasic = document.getElementById(`drawer${this.id}`) ?? document.createElement('div') as HTMLDivElement;
            const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
            drawerBasic.classList.remove('account');
            drawerBasic.classList.remove('profile');
            drawerBasic.classList.add('basic');
            drawerBasic.classList.add('show');
            overlay.classList.add('show');
        },


        closeLateralSchedule() {
            const drawerBasic = document.getElementById(`drawer${this.id}`) ?? document.createElement('div') as HTMLDivElement;
            const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
            drawerBasic.classList.remove('show');
            overlay.classList.remove('show');
        },


        clickScheduleDate() {
            const menuLateral = this.$refs.scheduleDate as DefineComponent;;
            $(`#scheduleDate${this.id}`).datepicker('show');
            menuLateral.click()
        },

        getLateralScheduleTitle()
        {
            return this.schedule.id < 1 ? 'Crear cita médica' : 'Modificar cita médica'
        },

        getPatientsList() {
            axios.get < Patient[] > (`/pacientes`)
                .then(response => {
                    this.patientsList = [{
                        'id': 0,
                        'first_name': 'Seleccione un paciente',
                        'last_name': ''
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getSchedulesCategories() {
            axios.get(`/consultas/categorias`)
                .then(response => {
                    this.scheduleTypeList = [{
                        id: 0,
                        name: 'Seleccione una categoría'
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },


        getBranchList() {
            axios.get < Branch[] > (`/sucursales`)
                .then(response => {
                    this.branchesList = [{
                        id: 0,
                        name: 'Seleccione una sucursal'
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },


        getDoctorsList() {
            axios.get<BranchSpecialtyDoctors[]>(`/sucursales/${this.formData.branch_id}/especialidades/doctores`)
                .then(response => {
                    this.doctorsList = response.data.filter((list: BranchSpecialtyDoctors) => list.doctors.length > 0);
                    this.doctorsList = [{
                        id: 0,
                        name: 'Ninguno',
                        doctors: [{
                            'id': 0,
                            'first_name': 'Seleccione un doctor',
                            'last_name': ''
                        }]
                    }, ...this.doctorsList];
                })
                .catch(error => {
                    console.log(error)
                })
        },

        createNewSchedule() {
            axios.post('/consultas', {
                    data: {
                        ...this.formData
                    }
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        },


        getPatientSelected(self: any) {
            $(`#patients${self.id}`).on('select2:select', function () {
                self.formData.patient_id = $(`#patients${self.id}`).select2('data')[0][`id`];
                self.isScheduleCategoryDisabled = false;
            });
        },


        getScheduleCategorySelected(self: any) {
            $(`#scheduleCategories${self.id}`).on('select2:select', function () {
                self.formData.medicalconsulttype_id = $(`#scheduleCategories${self.id}`).select2('data')[0][`id`];
                const scheduleTypeSelected = self.scheduleTypeList[self.formData.medicalconsulttype_id].name;
                if (self.isBranchDisabled)
                {
                    $(`#branches${self.id}`).val('0').trigger('change');
                }
                if (scheduleTypeSelected !== 'Primera cita' &&  scheduleTypeSelected !== 'Cita médica' && !self.isBranchDisabled)
                {
                    self.isDoctorDisabled = true;
                    $(`#doctors${self.id}`).val('0').trigger('change');
                }
                if ((scheduleTypeSelected === 'Primera cita' ||  scheduleTypeSelected === 'Cita médica') && !self.isBranchDisabled)
                {
                    self.isDoctorDisabled = false;
                }
                self.isBranchDisabled = false;
            });
        },


        getBranchSelected(self: any) {
            $(`#branches${self.id}`).on('select2:select', function () {
                self.formData.branch_id = $(`#branches${self.id}`).select2('data')[0][`id`];
                const scheduleTypeSelected = self.scheduleTypeList[self.formData.medicalconsulttype_id].name;
                if (scheduleTypeSelected === 'Primera cita' ||  scheduleTypeSelected === 'Cita médica')
                {
                    self.getDoctorsList();
                    self.isDoctorDisabled = false;
                    $(`#doctors${self.id}`).val('0').trigger('change');
                }
            });
        },


        getDoctorSelected(self: any) {
            $(`#doctors${self.id}`).on('select2:select', function () {
                self.formData.doctor_id = $(`#doctors${self.id}`).select2('data')[0][`id`];
            });
        },

        formatScheduleTime(datetime: string): string {
            return moment(datetime, 'YYYY-MM-DD HH:mm A').format('hh:mm A');
        },
    },
    mounted() {
        const self = this;
        const wickedPicker: any = $(`#scheduleTime${this.id}`);
        const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
        overlay.addEventListener('click', () => self.closeLateralSchedule())
        $(`#patients${this.id}`).select2()
        $(`#scheduleCategories${this.id}`).select2()
        $(`#branches${this.id}`).select2()
        $(`#doctors${this.id}`).select2()
        $(`#scheduleDate${this.id}`).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            yearRange: `1930:${new Date().getFullYear().toString()}`,
            onSelect() {
                const time = wickedPicker.wickedpicker('time');
                const date = moment($(`#scheduleDate${self.id}`).datepicker('getDate')).format('YYYY-MM-DD');
                // self.formData.consult_schedule_start = moment(date + ' ' + time, 'YYYY-MM-DD HH:mm A').format('l LT');
                self.formData.consult_schedule_start = moment(date + ' ' + time).unix();
            }
        })

        wickedPicker.wickedpicker({
            title: 'Hora de cita',
            now: "12:00",
            minutesInterval: 30,
            timeSeparator: ':',
        })

        if (this.schedule.patient_id < 1) {
            this.getPatientsList();
            this.isPatientDisabled = false;
        }
        this.getBranchList();
        this.getSchedulesCategories();
        this.getPatientSelected(this);
        this.getScheduleCategorySelected(this);
        this.getBranchSelected(this);
        this.getDoctorSelected(this);
    },
})
