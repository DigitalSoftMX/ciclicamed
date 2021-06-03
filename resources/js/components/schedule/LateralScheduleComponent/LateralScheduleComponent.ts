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
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { ScheduleType } from '@interface/Schedule/ScheduleType.interface';
import { ScheduleForm } from '@interface/Schedule/ScheduleForm.interface';
import { PatientData } from '@data/Patient/Patient.data';

export default defineComponent({
    name: 'LateralScheduleComponent',
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
            patientsList: [] as Patient[],
            branchesList: [] as Branch[],
            doctorsList: [] as BranchSpecialtyDoctors[],
            scheduleTypeList: [] as ScheduleType[],
            formData: {} as ScheduleForm,
            id: Math.floor(Math.random() * 5) + 1,
            wickedPicker: {} as any,
            isButtonActivated: false as boolean,
            consultReasonCharLength: 0 as number
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
                $(`#patients${this.id}`).val('0').trigger('change');
                $(`#scheduleCategories${this.id}`).val('0').trigger('change');
                $(`#branches${this.id}`).val('0').trigger('change');
                $(`#doctors${this.id}`).val('0').trigger('change');
                this.wickedPicker.wickedpicker('setTime', 0, '08:00');
            }
            else
            {
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
                if(this.scheduleTypeList[this.schedule.medicalconsulttype_id].name !== 'Cita médica')
                {
                    this.isDoctorDisabled = true;
                }
                $(`#scheduleDate${this.id}`).datepicker("setDate", new Date(this.schedule.consult_schedule_start) );
                const time = moment(this.formData.consult_schedule_start, 'YYYY-MM-DD HH:mm A').format('HH:mm')
                this.wickedPicker.wickedpicker('setTime', 0, time);
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
            axios.get < Patient[] > (`pacientes`)
                .then(response => {
                    this.patientsList = [{
                        ...PatientData,
                        id: 0,
                        first_name: 'Seleccione un paciente',
                        last_name: '',
                        
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getSchedulesCategories(): void
        {
            axios.get(`consultas/categorias`)
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


        getBranchList(): void
        {
            axios.get < Branch[] > (`sucursales`)
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


        getDoctorsList(): void
        {
            axios.get<BranchSpecialtyDoctors[]>(`sucursales/${this.formData.branch_id}/especialidades/doctores`)
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

        createNewSchedule(): void
        {
            axios.post('consultas', {
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
            axios.patch<Schedule>(`consultas/${this.schedule.id}`, {
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


        getPatientSelected(self: any): void {
            $(`#patients${self.id}`).on('select2:select', function () {
                self.formData.patient_id = $(`#patients${self.id}`).select2('data')[0][`id`];
                self.isScheduleCategoryDisabled = false;
            });
        },


        getScheduleCategorySelected(self: any): void {
            $(`#scheduleCategories${self.id}`).on('select2:select', function () {
                self.formData.medicalconsulttype_id = $(`#scheduleCategories${self.id}`).select2('data')[0][`id`];
                const scheduleTypeSelected = self.scheduleTypeList[self.formData.medicalconsulttype_id].name;
                if (self.isBranchDisabled)
                {
                    $(`#branches${self.id}`).val('0').trigger('change');
                }
                if (scheduleTypeSelected !== 'Cita médica' && !self.isBranchDisabled)
                {
                    self.isDoctorDisabled = true;
                    $(`#doctors${self.id}`).val('0').trigger('change');
                }
                if (scheduleTypeSelected === 'Cita médica' && !self.isBranchDisabled)
                {
                    self.isDoctorDisabled = false;
                }
                self.isBranchDisabled = false;
            });
        },


        getBranchSelected(self: any):void {
            $(`#branches${self.id}`).on('select2:select', function () {
                self.formData.branch_id = $(`#branches${self.id}`).select2('data')[0][`id`];
                const scheduleTypeSelected = self.scheduleTypeList[self.formData.medicalconsulttype_id].name;
                self.formData.doctor_id = null;
                if (scheduleTypeSelected === 'Cita médica')
                {
                    self.getDoctorsList();
                    self.isDoctorDisabled = false;
                    $(`#doctors${self.id}`).val('0').trigger('change');
                }
            });
        },


        getDoctorSelected(self: any): void {
            $(`#doctors${self.id}`).on('select2:select', function () {
                self.formData.doctor_id = $(`#doctors${self.id}`).select2('data')[0][`id`];
            });
        },


        formatScheduleTime(datetime: string): string {
            return moment(datetime, 'YYYY-MM-DD HH:mm A').format('hh:mm A');
        },

        formatScheduleDateTime(): void
        {
            const time = this.wickedPicker.wickedpicker('time');
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
        this.wickedPicker = $(`#scheduleTime${this.id}`);
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
                self.formatScheduleDateTime();
            }
        })

        this.wickedPicker.wickedpicker({
            title: 'Hora de cita',
            now: "08:00",
            minutesInterval: 30,
            timeSeparator: ':',
        })

        this.getPatientsList();
        this.isPatientDisabled = false;
        this.getBranchList();
        this.getSchedulesCategories();
        this.getPatientSelected(this);
        this.getScheduleCategorySelected(this);
        this.getBranchSelected(this);
        this.getDoctorSelected(this);
    },
})
