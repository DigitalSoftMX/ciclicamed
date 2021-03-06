import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
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

/**
 * @description Componente que permite crear o editar una consulta, mediante un menu lateral derecho
 * @class LateralScheduleComponent
 * @example <lateral-schedule-component :schedule="" :branchesList="" doctorsList="" :businessHours="" :patientID="" role=""></lateral-schedule-component>
*/
export default defineComponent({
    name: 'LateralScheduleComponent',
    /**
     * {@link https://vcalendar.io/datepicker.html},{@link https://element-plus.org/#/es/component/time-select},
     * {@link SelectComponent}, {@link ErrorAlertComponent}, {@link SuccessAlertComponent}
     * @member LateralScheduleComponent.components
    */
    components: {
        DatePicker,
        ElTimeSelect,
        SelectComponent: require('@component/general/select/SelectComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default
    },
    /**
     * Eventos del componente
     * @member LateralScheduleComponent.emits
     * @property {Schedule} newSchedule Evento que se emite se crea una nueva cita dentro del servidor, junto con los datos de la cita retornados por el servidor
    */
    emits: ['newSchedule'],
    /**
     * Propiedades que recibe el componente
     * @member LateralScheduleComponent.props
     * @property {Schedule} schedule (Obligatorio) Cita m??dica seleccionada
     * @property {Select[]} branchesList (Obligatorio) Lista de sucursales habilitados en el servidor
     * @property {Select[]} doctorsList (Obligatorio) Lista de doctores que pertenecen a la sucursal seleccionada
     * @property {FullCalendarBusinessHour[]} businessHours (Obligatorio) Horarios de trabajo del doctor seleccionado
     * @property {number} patientID (Obligatorio si el rol es paciente) ID del paciente logueado actualmente
     * @property {string} role Rol del usuario logueado actualmente
    */
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
    /**
     * Variables del componente
     * @member LateralScheduleComponent.data
     * @property {number} id ID del componente
     * @property {Schedule} scheduleSelectedCopy Guarda una copia de la cita m??dica seleccionada para su edici??n
     * @property {Select[]} doctorListCopy Guarda una copia de los doctores pertenecientes a una sucursal para su actualizaci??n
     * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petici??n HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
     * @property {Select} doctorSelect Guarda el doctor seleccionado
     * @property {Select} dateSelected Guarda la fecha de la cita seleccionada
     * @property {string} startTime Guarda la hora inicial de la cita
     * @property {string} finishTime Guarda la hora final de la cita
     * @property {Select[]} patientsList Guarda la lista de pacientes registrados en el sistema
     * @property {boolean} startHourUpdated Indica si se ha actualizado o no la hora de trabajo del doctor seleccionado
    */
    data()
    {
        return {
            id: Math.floor(Math.random() * 5) + 1,
            scheduleSelectedCopy: cloneDeep(this.schedule),
            doctorListCopy: [...this.doctorsList],
            testList: [] as Select[],
            errors: [],
            doctorSelect: SelectData,
            dateSelected: moment().format('YYYY-MM-DD'),
            startTime: '07:00',
            finishTime: '21:00',
            patientsList: [] as Select[],
            startHourUpdated: false
        };
    },
    /**
     * Propiedades computadas del componente
     * @member LateralScheduleComponent.computed
     * @property {string} tarjetaPaciente Retorna los datos del paciente y la fecha y hora de inicio y final de la consulta (solo en consulta editada)
     * @property {string} scheduleAction Cambia el t??tulo del bot??n del componente de acuerdo a si es una nueva cita o existente
     * @property {FullCalendarBusinessHour} startHour Busca y actualiza la hora de inicio y final de trabajo disponible para el doctor seleccionado,
     * por ejemplo, si la fecha de la consulta es un martes y ese d??a el doctor trabaja de 07:00 a 15:00, busca dentro de los horarios de trabajo en la variable
     * businessHours y al encontrar el primer horario que coincide con el d??a, entonces asigna a las variables startTime y finishTime la hora de inicio y final del horario
     * (07:00 a 15:00) de trabajo del doctor, en caso de no encontrar coincidencia, asigna a las variables anteriores un valor predefinido
     * @property {number} consultReasonLength Retorna el total de caracteres para el input correspondiente al motivo de la cita (schedule.consult_reason)
    */
    computed: {
        tarjetaPaciente(): string
        {
            return this.patientsList.find(item => item.childID === this.schedule.patient_id!)?.text ?? '';
        },
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
                if(time)
                {
                    this.startTime = time.startTime;
                    this.finishTime = time.endTime;
                    this.updateScheduleTimes();
                    return time;
                }
                else
                {
                    this.updateScheduleTimes();
                    return {
                        daysOfWeek: [],
                        endTime: '21:00',
                        startTime: '07:00'
                    }
                }
            }
            this.updateScheduleTimes();
            return {
                daysOfWeek: [],
                endTime: '21:00',
                startTime: '07:00'
            }
        },
        consultReasonLength(): number
        {
            return this.scheduleSelectedCopy.consult_reason?.length ?? 0;
        }
    },
    /**
     * Variables a observar por el componente
     * @member LateralScheduleComponent.watch
     * @property {string} startTime Al actualiar la hora de inicio se actualiza la {@link LateralScheduleComponent.updateScheduleTimes|fecha y hora de inicio de la cita}
     * @property {string} finishTime Al actualiar la hora de finalizaci??n se actualiza la {@link LateralScheduleComponent.updateScheduleTimes|fecha y hora de finalizaci??n de la cita}
     * @property {number} patientID Al actualizar el ID del paciente logueado actualemente, se asigna a la variable scheduleSelectedCopy.patient_id el nuevo ID del paciente
     * @property {string} dateSelected Al actualiar la fecha de la consulta se actualiza la {@link LateralScheduleComponent.updateScheduleTimes|fecha y hora de la cita}
     * @property {Schedule} schedule Al actualizar la cita seleccionada, se obtiene {@link LateralScheduleComponent.getDoctorList|el doctor seleccionado}, se asigna un copia
     * de la consulta a la variable scheduleSelectedCopy, se asigna a la variable dateSelected la fecha de la consulta. Si el usuario logueado actualmente es un paciente
     * se asigna a la variable scheduleSelectedCopy.patient_id  el ID del paciente. Si la lista de doctores (doctorsList) tiene datos, se asigna una copia a la
     * variable doctorListCopy, en caso contrario se obtiene la {@link LateralScheduleComponent.getDoctorList|lista de doctores}. Finalmente selecciona y muestra en el input
     * del doctor, el {@link LateralScheduleComponent.getDoctorPosition|doctor seleccionado}
     * @property {Select[]} doctorListCopy Si se actuliza la copia de los doctores de la sucursal seleccionada, se muestra en el input
     * del doctor, el {@link LateralScheduleComponent.getDoctorPosition|doctor seleccionado}
     * @property {number} scheduleSelectedCopy.branch_id Si se actualiza el ID de la sucursal de la cita seleccionada, verifica si la lista de los doctores (doctorsList) es igual
     * a su copia (doctorsList), adem??s verifica si el ID de la sucursal de la consulta (schedule.branch_id) es igual que la copia de la consulta (scheduleSelectedCopy.branch_id): en
     * caso de se diferente alguno de las dos verificaciones obtiene la {@link LateralScheduleComponent.getDoctorList|lista de doctores}
     * @property {number} scheduleSelectedCopy.doctor_id Si se actualiza el ID del doctor, verifica el tipo de doctor seleccionado, en caso de ser laboratorio o imagenologia,
     * se obtiene la lista de {@link LateralScheduleComponent.getTestList|estudios m??dicos}, adem??s que se asigna a la variable scheduleSelectedCopy.medicalconsultcategory_id
     * el tipo de consulta m??dica a la que pertenece la consulta
     * @property {number} doctorSelect Al actualizar el doctor seleccionado, se asigna a la copia de la consulta el ID del doctor (scheduleSelectedCopy.doctor_id) y
     * la especialidad m??dica a la que pertenece (scheduleSelectedCopy.medicalspecialty_id)
    */
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
        /**
         * En caso de que el rol del usuario logueado actualmente coincida con el filtro, se obtiene la {@link LateralScheduleComponent.loadPatientList|lista de pacientes del servidor}
         * @function LateralScheduleComponent.loadPatientList
        */
        loadPatientList()
        {
            if(this.role.match(/Asistente|Administrador|Doctor/))
            {
                this.getPatientsList();
            }
        },
        /**
         * Obtiene la lista de pacientes registrados en el servidor. En caso de que la petici??n sea correcta, se transforma los pacientes retornados por el servidor en
         * un tipo de dato Select
         * @function LateralScheduleComponent.getPatientsList
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
         * Retorna la fecha de la cita provista por el servidor, en un formato local
         * @function LateralScheduleComponent.formatScheduleTime
         * @param {string} datetime Fecha de la consulta
        */
        formatScheduleTime(datetime: string): string {
            return moment(datetime).format('hh:mm a');
        },
        /**
         * Actualiza la fecha y hora de la cita y la asigna a las variables scheduleSelectedCopy.consult_schedule_start  y scheduleSelectedCopy.consult_schedule_finish
         * @function LateralScheduleComponent.updateScheduleTimes
        */
        updateScheduleTimes()
        {
            this.scheduleSelectedCopy.consult_schedule_start = moment(
                `${this.dateSelected} ${this.startTime}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
            this.scheduleSelectedCopy.consult_schedule_finish = moment(
                `${this.dateSelected} ${this.finishTime}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        /**
         * Limpia los datos de la consulta
         * @function LateralScheduleComponent.clearData
        */
        clearData()
        {
            this.scheduleSelectedCopy = cloneDeep(this.schedule);
        },
        /**
         * Abre el componente (este menu lateral) desde un componente padre
         * @function LateralScheduleComponent.openLateralSchedule
        */
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
        /**
         * Cierra el componente (este menu lateral)
         * @function LateralScheduleComponent.closeLateralSchedule
        */
        closeLateralSchedule(): void
        {
            this.clearData();
            const drawerBasic = document.getElementById(`drawer${this.id}`) ?? document.createElement('div') as HTMLDivElement;
            const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
            drawerBasic.classList.remove('show');
            overlay.classList.remove('show');
        },
        /**
         * Cambia el t??tulo del men?? lateral (este componente) de acuerdo a si es una nueva cita o es existente
         * @function LateralScheduleComponent.getLateralScheduleTitle
        */
        getLateralScheduleTitle(): string
        {
            return this.schedule.id <= 0 ? 'Crear cita m??dica' : 'Modificar cita m??dica'
        },
        /**
         * Crea una nueva cita en el servidor. En caso de que se procese correctamente la petici??n, se env??a un evento newSchedule junto con los datos de la consulta
         * creada, se muestra el componente {@link SuccessAlertComponent} y finalmente se cierra el componente. En caso contrario, se asigna a la variable errors, los errores
         * devueltos por el servidor y se muestra el componente {@link ErrorAlertComponent}
         * @function LateralScheduleComponent.createNewSchedule
        */
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
        /**
         * Crea actualiza la cita en el servidor. En caso de que se procese correctamente la petici??n, se muestra el componente {@link SuccessAlertComponent}
         * y finalmente se cierra el componente. En caso contrario, se asigna a la variable errors, los errores
         * devueltos por el servidor y se muestra el componente {@link ErrorAlertComponent}
         * @function LateralScheduleComponent.updateSchedule
        */
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
        /**
         * Obtiene los doctores de una sucursal seleccionada. Si la petici??n es correcta, entonces se filtra
         * las especialidades donde no hay un doctor registrado y finalmente se asigna a la variable
         * doctorListCopy la lista de doctores , convirtiendolos en un tipo Select[]
         * @function LateralScheduleComponent.getDoctorList
        */
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

            })
        },
        /**
         * Obtiene la lista de estudios m??dicos registrados en el servidor. Si la petici??n es correcta, entonces los datos
         * retornados se convierten en un tipo Select[]
         * @function LateralScheduleComponent.getTestList
        */
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

            })
        }
    },
    /**
     * Al iniciar el componente, se obtienen los datos de los {@link LateralScheduleComponent.loadPatientList|pacientes registrados}
     * @member LateralScheduleComponent.mounted
    */
    mounted() {
        const self = this;
        const overlay = document.querySelector('.overlay-dark') ?? document.createElement('div') as HTMLDivElement;
        overlay.addEventListener('click', () => self.closeLateralSchedule());
        this.loadPatientList();
    },
})

/**
 * Obtiene la posici??n del doctor dentro de la variable doctorsList de acuerdo a la especialidad m??dica a la que pertenece. Esta acci??n permite
 * mostrar en el input del doctor, el doctor correcto en la especialidad m??dica seleccionada. Para eso verifica que el childID sea igual al ID del doctor, adem??s que
 * verifica que el parentID (especialidad m??dica) sea igual a ID de la especialidad m??dica
 * @function LateralScheduleComponent.getDoctorPosition
 * @param {Select[]} doctorsList Lista de doctores
 * @param {number} doctorID ID del doctor seleccionado
 * @param {number} specialtyID ID de la especialidad de la consulta seleccionada
*/
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
