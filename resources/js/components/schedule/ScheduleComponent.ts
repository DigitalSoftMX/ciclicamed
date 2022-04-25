import { ScheduleData } from '@data/Schedule/Schedule.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { EmployeeBranch } from '@interface/Employee/EmployeeBranch.interface';
import { EmployeeBusinessHour } from '@interface/Employee/EmployeeBusinessHour';
import { FullCalendarBusinessHour } from '@interface/General/FullCalendarBusinessHour.interface';
import { Select } from '@interface/General/Select.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { DefineComponent, PropType } from 'vue';
require('bootstrap');

/**
 * @description Componente encargado de la agenda de todos los roles, incluyendo las opciones para seleccionar la agenda de un doctor y crear checkups
 * @class ScheduleComponent
 * @example <schedule-component:branchesList="" :userID="" role="" :employeeID=""></schedule-component:branchesList=>
*/
export default defineComponent({
    name: 'ScheduleComponent',
    /**
     * {@link CalendarComponent} , {@link ScheduleSelectComponent}, {@link ScheduleActionComponent}, {@link LateralScheduleComponent}, {@link CheckupScheduleComponent}
     * @member ScheduleComponent.components
    */
    components: {
        CalendarComponent: require('@component/schedule/CalendarComponent/CalendarComponent.vue').default,
        ScheduleSelectComponent: require('@component/schedule/ScheduleSelectComponent/ScheduleSelectComponent.vue').default,
        ScheduleActionComponent: require('@component/schedule/ScheduleActionComponent/ScheduleActionComponent.vue').default,
        LateralScheduleComponent: require('@component/schedule/LateralScheduleComponent/LateralScheduleComponent.vue').default,
        CheckupScheduleComponent: require('@component/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue').default,
    },
    /**
     * Propiedades que recibe el componente
     * @member ScheduleComponent.props
     * @property {number} userID (Obligatorio solo si el usuario logueado es un paciente) ID del paciente logueado actualmente
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
     * @property {number} employeeID (Obligatorio solo si el usuario logueado es un empleado) ID del empleado logueado actualmente
    */
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
    /**
     * Variables del componente
     * @member ScheduleComponent.data
     * @property {Schedule[]} schedules Guarda las citas de acuerdo al doctor seleccionado (o al paciente logueado) {@link ScheduleSelectComponent}
     * @property {Select[]} branchesList Guarda la lista de sucursales seleccionadas registradas en el servidor
     * @property {Select[]} doctorList Guarda la lista de doctores de acuerdo a la sucursal seleccionada
     * @property {Select[]} patientsList Guarda la lista de pacientes guardados en el servidor
     * @property {FullCalendarBusinessHour[]} businessHours Guarda los horarios laborales de un doctor seleccionado
     * @property {Schedule} scheduleSelected Guarda los datos de una cita seleccionada
     * @property {FullCalendarBusinessHour} hoursEnabled Guarda la hora de inicio y final del día de un doctor seleccionado, de acuerdo al día del calendario seleccionado
     * @property {EmployeeBranch[]} employeeBranches Guarda las sucursales en las que el doctor logueado actualmente trabaja
     * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}*/
    data() {
        return {
            schedules: [] as Schedule[],
            branchesList: [] as Select[],
            doctorList: [] as Select[],
            patientsList: [] as Select[],
            businessHours: [] as FullCalendarBusinessHour[],
            scheduleSelected: ScheduleData,
            hoursEnabled: [] as FullCalendarBusinessHour[],
            employeeBranches: [] as EmployeeBranch[],
            errors: []
        }
    },
    /**
     * Al iniciar el componente, se obtienen los datos
     * {@link ScheduleComponent.getPatientsList|pacientes registrados},
     * {@link ScheduleComponent.selectUserSchedule|citas del paciente o empleado}
     * {@link ScheduleComponent.getBranchesList|sucursales registradas},
     * @member ScheduleComponent.mounted
    */
    mounted() {
        this.getPatientsList();
        this.selectUserSchedule();
        this.getBranchesList();
    },
    /**
     * Variables a observar por el componente
     * @member ScheduleComponent.watch
     * @property {string} role Al actualizar el rol del usuario logueado actualemente, obtiene {@link ScheduleComponent.selectUserSchedule|citas del paciente o empleado}
    */
    watch: {
        role()
        {
            this.selectUserSchedule();
        }
    },
    methods: {
        /**
         * Obtiene la lista de pacientes registrados en el servidor. En caso de que la petición sea procesada correctamente, se convierte la lista de pacientes
         * a un tipo Select[] y se asigna a la variable patientsList
         * @function ScheduleComponent.getPatientsList
        */
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

            })
        },
        /**
         * Obtiene el {@link ScheduleComponent.getBusinessHours|horario de trabajo} del doctor logueado, de acuerdo a la sucursal seleccionada.
         * @function ScheduleComponent.getDoctorBranch
         * @param {number} branchID ID de la sucursal seleccionada
        */
        getDoctorBranch(branchID: number)
        {
            this.scheduleSelected.branch_id = branchID;
            this.getBusinessHours();
        },
        selectEmployeeAllSchedule()
        {
            this.selectUserSchedule();
        },
        /**
         * Obtiene las citas registrados en el servidor, de acuerdo a la sucursal seleccionada. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable schedules las citas que retorna el servidor
         * @function ScheduleComponent.getAllScheduleBranchList
         * @param {number} id ID de la sucursal seleccionada
        */
        getAllScheduleBranchList(id: number): void {
            axios.get<Schedule[]>(`/sucursales/${id}/agenda`)
            .then(response => {
                this.schedules = response.data;
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene todas las  citas registrados en el servidor. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable schedules las citas que retorna el servidor
         * @function ScheduleComponent.getAllScheduleList
        */
        getAllScheduleList(): void {
            axios.get<Schedule[]>(`/empleados/agenda`)
            .then(response => {
                this.schedules = response.data;
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene todas las  citas registrados en el servidor, de acuerdo al doctor y sucursal seleccionados. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable schedules las citas que retorna el servidor, finalmente obtiene {@link ScheduleComponent.getBusinessHours|los horarios de trabajo}
         * del doctor seleccionado
         * @function ScheduleComponent.getAllScheduleList
         * @param {Select} doctorSelected Doctor seleccionado
        */
        getScheduleList(doctorSelected: Select): void {
            this.scheduleSelected.doctor_id = doctorSelected.childID;
            this.scheduleSelected.medicalspecialty_id = doctorSelected.parentID!;
            axios.get<Schedule[]>(`/sucursales/${this.scheduleSelected.branch_id}/empleados/${this.scheduleSelected.doctor_id}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.getBusinessHours();
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene todas las  citas registrados en el servidor, correspondientes a checkups. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable schedules las citas que retorna el servidor
         * @function ScheduleComponent.getCheckupScheduleList
        */
        getCheckupScheduleList()
        {
            axios.get<Schedule[]>(`/checkup/agenda`)
            .then(response => {
                this.schedules = response.data;
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene todas las  citas registrados en el servidor, de acuerdo al doctor seleccionado. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable schedules las citas que retorna el servidor, finalmente obtiene {@link ScheduleComponent.getDoctorBranches|las sucursales del doctor logueado}
         * y {@link ScheduleComponent.getBusinessHours|los horarios de trabajo}
         * del doctor seleccionado
         * @function ScheduleComponent.getDoctorScheduleList
        */
        getDoctorScheduleList()
        {
            axios.get<Schedule[]>(`/empleados/${this.employeeID}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.getDoctorBranches();
                this.getBusinessHours();
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene las citas registrados en el servidor del paciente logueado actualmente. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable schedules las citas que retorna el servidor y se vacía el horario de trabajo de la variable businessHours
         * @function ScheduleComponent.getPatientScheduleList
        */
        getPatientScheduleList()
        {
            axios.get<Schedule[]>(`/pacientes/${this.userID}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.businessHours = []
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene todas las  citas registrados en el servidor, de acuerdo al doctor logueado actualmente, y la sucursal seleccionada.
         * En caso de que la petición sea procesada correctamente,
         * se asigna a la variable schedules las citas que retorna el servidor, finalmente obtiene {@link ScheduleComponent.getBusinessHours|los horarios de trabajo}
         * del doctor seleccionado
         * @function ScheduleComponent.getScheduleBranchList
         * @param {number} branchID
        */
        getScheduleBranchList(branchID: number): void {
            axios.get<Schedule[]>(`/sucursales/${branchID}/empleados/${this.employeeID}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.getBusinessHours();
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene todas las sucursales en las que trabaja el doctor logueado actualmente. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable employeeBranches las sucursales retornadas por el servidor
         * @function ScheduleComponent.getScheduleBranchList
        */
        getDoctorBranches()
        {
            axios.get<EmployeeBranch[]>(`/empleados/${this.employeeID}/sucursales`)
            .then(response => {
                this.employeeBranches = response.data;
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene todas las sucursales habilitados en el servidor. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable branchesList las sucursales retornadas por el servidor en un tipo Select[]
         * @function ScheduleComponent.getScheduleBranchList
        */
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

            })
        },
        /**
         * Obtiene las citas de acuerdo al rol del usuario logueado actualmente
         * @function ScheduleComponent.selectUserSchedule
        */
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
                case 'Enfermera':
                    this.getAllScheduleList();
                    this.getBranchesList();
                    break;
                default:
                    this.getDoctorScheduleList();
                    break;
            }
        },
        /**
         * Obtiene los horarios de trabaho de acuerdo al doctor y sucursal seleccionado. En caso de que la petición sea procesada correctamente,
         * se asigna a la variable businessHours los horarios retornadas por el servidor
         * @function ScheduleComponent.getScheduleBranchList
        */
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

            })
        },
        /**
         * Obtiene la lista de sucursales en las que trabaja el doctor seleccionado. En caso de que la petición sea procesada correctamente,
         * se filtra las especialidades que no tienen doctores en dicha especialidad y finalmente
         * se asigna a la variable doctorList las sucursales retornadas por el servidor en un tipoo Select[]
         * @function ScheduleComponent.getScheduleBranchList
         * @param {Select} branchSelected Sucursal seleccionada
        */
        getDoctorList(branchSelected: Select): void
        {
            this.scheduleSelected.branch_id = branchSelected.childID;
            this.scheduleSelected.doctor_id = 0;
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

            })
        },
         /**
         * Antes de mostrar el componente {@link LateralScheduleComponent}, verifica que el rol del usuario logueado actualmente no sea
         * imagenologia o laboratorio. Una vez verificado el rol, obtiene el número del día seleccionado y busca si en la variable hoursEnabled existe
         * un horario para el día seleccionado. Si el día seleccionado es igual o mayor al día actual y si existe un horario para el día seleccionado, entonces
         * asigna a la variable scheduleSelected datos vacíos, asigna a la variable startHour y startMinute la hora y minuto (respectivamente) la hora y minuto de inicio
         * de acuerdo al horario de trabajo encontrando anteriormente, a lo cual asigna a las variables scheduleSelected.consult_schedule_finish y
         * scheduleSelected.consult_schedule_start el horario asignado en las variables startHour y startMinute. Finalmente abre el componente (@link LateralScheduleComponent)
         * @function ScheduleComponent.copyScheduleData
         * @param {string} date Fecha de la cita seleccionada
        */
        copyScheduleData(date: string)
        {
            if(!this.role.match(/Imagenologia|Laboratorio/))
            {
                const dayOfWeek = moment(date).day();
                this.hoursEnabled = this.businessHours.filter(hours => hours.daysOfWeek.includes(dayOfWeek));
                if(moment().isSameOrBefore(date, 'days') && this.hoursEnabled.length > 0)
                // if(moment().isSameOrBefore(date, 'days'))
                {
                    this.scheduleSelected = {...ScheduleData};
                    const startHour = Number(this.hoursEnabled[0].startTime.split(':')[0]);
                    const startMinute = Number(this.hoursEnabled[0].startTime.split(':')[1]);
                    this.scheduleSelected.consult_schedule_start = this.scheduleSelected.consult_schedule_finish = moment(date)
                        .set('hours', startHour)
                        .set('minutes', startMinute)
                        .format('YYYY-MM-DD HH:mm:00');
                    const lateral = this.$refs.openLateralSchedule as DefineComponent;
                    lateral.openLateralSchedule();
                }
            }
        },
        /**
         * Asigna a la variable scheduleSelected la cita seleccionada por el usuario
         * @function ScheduleComponent.getScheduleSelected
         * @param {Schedule} schedule Cita seleccionada
        */
        getScheduleSelected(schedule: Schedule)
        {
            this.scheduleSelected = Object.assign({}, schedule);
        },
    },
})
