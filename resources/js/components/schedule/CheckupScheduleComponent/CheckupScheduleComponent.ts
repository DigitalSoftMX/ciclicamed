import { CheckupListData } from '@data/Checkup/CheckupList.data';
import { CheckupConvenioInstitucional } from '@data/Checkup/options/CheckupConvenioInstitucional.data';
import { CheckupDiagnosticoPrenatal } from '@data/Checkup/options/CheckupDiagnosticoPrenatal.data';
import { CheckupMatureData } from '@data/Checkup/options/CheckupMature.data';
import { CheckupMom } from '@data/Checkup/options/CheckupMom.data';
import { CheckupMujerCiclicaData } from '@data/Checkup/options/CheckupMujerCiclica.data';
import { CheckupTeenData } from '@data/Checkup/options/CheckupTeen.data';
import { CheckupCategory } from '@interface/Checkup/CheckupCategory.interface';
import { CheckupList } from '@interface/Checkup/CheckupList.interface';
import { Select } from '@interface/General/Select.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { PropType } from 'vue';
import { ElTimeSelect } from 'element-plus';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';

/** 
 * @description Componente que muestra la lista de checkups a crear o actualizar, mediante el uso de un formulario con tarjetas dentro de un modal
 * @class CheckupScheduleComponent
 * @example <checkup-schedule-component></checkup-schedule-component>
*/
export default defineComponent({
    name: 'CheckupScheduleComponent',
    /** 
     * {@link https://element-plus.org/#/es/component/time-select}, {@link SuccessAlertComponent},
     * @member CheckupScheduleComponent.components
    */
    components: {
        ElTimeSelect,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    /** 
     * Propiedades que recibe el componente 
     * @member CheckupScheduleComponent.props
     * @property {Select[]} branches (Obligatorio) Lista de sucursakes habilitados dentro del servidor
     * @property {Select[]} patients (Obligatorio solo en rol que no sea paciente)Lista de pacientes guardados dentro del servidor
     * @property {CheckupList} checkupData (Obligatorio)Datos del checkup seleccionado
     * @property {boolean} enableOptions (Obligatorio) Habilita las tarjetas de consultas (solo en la pagina de checkups)
     * @property {number} patientID (Obligatorio solo en rol paciente) ID del paciente loagueado actualmente (solo rol paciente)
    */
    props: {
        branches: {
            type: Array as PropType<Select[]>,
            default: []
        },
        patients: {
            type: Array as PropType<Select[]>,
            default: []
        },
        checkupData: {
            type: Object as PropType<CheckupList>,
            default: CheckupListData
        },
        enableOptions:
        {
            type: Boolean,
            default: true
        },
        patientID: {
            type: Number,
            default: 0
        }
    },
    /**
    * Variables del componente
    * @member CheckupScheduleComponent.data
    * @property {CheckupCategory[]} categoryList Guarda la lista de la categor??a de los checkups (teen, convenio institucional, etc)
    * @property {number} categorySelected Guarda la categor??a del checkup seleccionado
    * @property {CheckupList} checkupDataCopy Guarda una copia de la variable checkupData para modificaci??n
    * @property {number[]} branchesSelected Guarda la lista de sucursales seleccionadas para cada uno de los estudios y consultas del checkup seleccionado
    * @property {boolean} isButtonDisabled Habilita o deshabilita el boton de guardado del checkup seleccionado
    * @property {string} successAlert.title Guarda el t??tulo para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    * @property {boolean} isCheckupNew Indica si el checkup es nuevo o existente
    * @property {string[]} startTime Guarda la lista de inicio de consulta para cada uno de los estudios y consultas del checkup seleccionado
    * @property {string[]} finishTime Guarda la lista de finalizaci??n de consulta para cada uno de los estudios y consultas del checkup seleccionado
    * @property {Select[][]} doctorListCopy Guarda la lista de los doctores registrados en el servidor
    * @property {Select[]} doctorSelected Guarda la lista de los doctores seleccionados para cada uno de las consultas del checkup seleccionado
    */
    data() {
        return {
            categoryList: [] as CheckupCategory[],
            categorySelected: 0,
            checkupDataCopy: this.checkupData,
            branchesSelected: [] as number[],
            isButtonDisabled: true,
            successAlert: {
                title: '',
                message: ''
            },
            isCheckupNew: true,
            startTime: [] as String[],
            finishTime: [] as String[],
            doctorListCopy: [] as Select[][],
            doctorSelected: [] as Select[],
        }
    },
    /**
    * Propiedades computadas del componente 
    * @member CheckupScheduleComponent.computed
    * @property {string} title T??tulo del modal del checkup de acuerdo a si se habilita o no las Habilita las tarjetas de consultas
    */
    computed: {
        title(): string
        {
            return this.enableOptions ? 'Crear checkup' : `Editar checkup ${this.checkupData.name}`;
        }
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de las {@link CheckupScheduleComponent.getCategories|categor??as de checkup} y se asigna a la variable
     * checkupDataCopy.patient_id el ID del paciente logueado actualmente
     * @member CheckupScheduleComponent.mounted
    */
    mounted() {
        this.getCategories();
        this.checkupDataCopy.patient_id = this.patientID;
    },
    /** 
     * Variables a observar por el componente
     * @member CheckupScheduleComponent.watch
     * @property {string[]} startTime Al actualizar la hora de inicio de algun estudio medico o consulta del checkup, actualiza la fecha completa de inicio de la consulta
     * de todos los elementos y los asigna a la variable checkupDataCopy.checkupList.consult_schedule_start correspondiente
     * @property {string[]} finishTime Al actualizar la hora de finalizaci??n de algun estudio medico o consulta del checkup, actualiza la fecha completa de finalizaci??n de la consulta
     * de todos los elementos y los asigna a la variable checkupDataCopy.checkupList.consult_schedule_finish correspondiente
     * @property {number} patientID Al actualizar el ID del paciente logueado actualmente, se asigna a la variable checkupDataCopy.patient_id  el nuevo ID del paciente
     * @property {number} categorySelected Al actualizar la categor??a del checkup sleccionado, asigna a la lista de checkups (checkupDataCopy.checkupList) la lista de estudios
     * que pertenezcan a la categor??a seleccionada. Despu??s reinicia las sucursales seleccionadas para cada estudio , asigna la nueva categor??a a la variable checkupDataCopy.checkupcategory_id 
     * y finalmente asigna a la variable checkupDataCopy.name el nombre del checkup seleccionado
     * @property {number[]} branchesSelected Al actualizar una sucursal en alguno de los estudios o consultas del checkup, asigna a la variable
     * checkupDataCopy.checkupList.branch_id los nuevas ID de las sucursales seleccionadas
     * @property {number[]} doctorSelected Al actualizar un nuevo doctor en alguno de los estudios o consultas del checkup, asigna a la variable
     * checkupDataCopy.checkupList.doctor_id los nuevas ID de las doctores seleccionadas
     * @property {CheckupList} checkupData Al actualizar el checkup seleccionado, asigna a las variables de {@link CheckupScheduleComponent.data} los datos que coincidan
     * con los datos del checkup seleccionado
     * @property {CheckupList} checkupDataCopy Al actualizar alguno de los estudios o consultas de un checkup seleccionado, verifica si no hay alg??n estudio obligatorio
     * que no haya sido agendado, finalmente habilita el boton de guardado mediante la variable isButtonDisabled, solo en caso de que exista un checkup seleccionado, un paciente
     * seleccionado, y que se haya agendado todos los estudios obligatorios
    */
    watch: {
        startTime:
        {
            handler()
            {
                this.startTime.map((time, index) => {
                    const startTime = moment((time as string),'HH:mm');
                    this.checkupDataCopy.checkupList[index].consult_schedule_start = moment(this.checkupDataCopy.checkupList[index].consult_schedule_start).set('hours', startTime.hours()).set('minutes', startTime.minutes()).format('YYYY-MM-DD HH:mm:00');
                })
                
            },
            deep: true
        },
        finishTime:
        {
            handler()
            {
                this.finishTime.map((time, index) => {
                    const finishTime = moment((time as string), 'HH:mm');
                    this.checkupDataCopy.checkupList[index].consult_schedule_finish = moment(this.checkupDataCopy.checkupList[index].consult_schedule_finish).set('hours', finishTime.hours()).set('minutes', finishTime.minutes()).format('YYYY-MM-DD HH:mm:00');
                })
            },
            deep: true
        },
        patientID()
        {
            this.checkupDataCopy.patient_id = this.patientID;
        },
        categorySelected:
        {
            handler()
            {
                switch(this.categoryList[this.categorySelected -1].name)
                {
                    case 'Mature':
                        this.checkupDataCopy.checkupList = CheckupMatureData.filter(item => item.code !== "CON");
                        break;
                    case 'Mujer c??clica':
                        this.checkupDataCopy.checkupList = CheckupMujerCiclicaData.filter(item => item.code !== "CON");
                        break;
                    case 'Teen':
                        this.checkupDataCopy.checkupList = CheckupTeenData.filter(item => item.code !== "CON");
                        break;
                    case 'Mom':
                        this.checkupDataCopy.checkupList = CheckupMom.filter(item => item.code !== "CON");
                        break;
                    case 'Diagn??stico prenatal':
                        this.checkupDataCopy.checkupList = CheckupDiagnosticoPrenatal.filter(item => item.code !== "CON");
                        break;
                    case 'Convenio institucional':
                        this.checkupDataCopy.checkupList = CheckupConvenioInstitucional.filter(item => item.code !== "CON");
                        break;
                }
                this.branchesSelected = [];
                this.checkupDataCopy.checkupcategory_id = this.categorySelected;
                this.checkupDataCopy.name = this.categoryList[this.categorySelected -1].name;
            },
            deep: true
        },
        branchesSelected:
        {
            handler()
            {
                this.branchesSelected.map((item, index) => this.checkupDataCopy.checkupList[index].branch_id = item);
            },
            deep: true
        },
        doctorSelected:
        {
            handler()
            {
                this.doctorSelected.map((item, index) => this.checkupDataCopy.checkupList[index].doctor_id = item.childID);
            },
            deep: true
        },
        checkupData:
        {
            handler()
            {
                this.checkupDataCopy = this.checkupData;
                this.branchesSelected = this.checkupData.checkupList!.map(item => item.branch_id);
                this.isCheckupNew = this.checkupData.checkup_id > 0 ? false : true;
                this.startTime = this.checkupData.checkupList.map(item => moment(item.consult_schedule_start).format('HH:mm'));
                this.finishTime = this.checkupData.checkupList.map(item => moment(item.consult_schedule_finish).format('HH:mm'));
                this.checkupDataCopy.checkupList.map((item, index) => {
                    if(item.branch_id > 0 && item.code.includes('CON'))
                    {
                        this.getDoctorList(item.branch_id, index)
                    }
                })
            },
            deep: true
        },
        checkupDataCopy:
        {
            handler()
            {
                const incorrectScheduled = this.checkupDataCopy.checkupList.filter(item => item.branch_id <= 0 && !item.name.includes('opcional') && !item.name.includes('50 a??os')).length;
                this.isButtonDisabled = this.checkupDataCopy.checkupList.length > 0 && this.checkupDataCopy.patient_id > 0 && incorrectScheduled === 0 ? false : true;
            },
            deep: true
        }
    },
    methods: {
        /** 
         * Obtiene todas las categor??as del checkup que esten guardados en el servidor (teen, convenio institucional, etc). En caso de procesar correctamente
         * la petici??n, se asigna a la variable categoryList las categor??as retornadas por el servidor
         * @function CheckupScheduleComponent.getCategories
        */
        getCategories()
        {
            axios.get<CheckupCategory[]>(`/checkup/categorias`)
            .then(response => {
                this.categoryList = response.data;
            })
            .catch(error => {
                
            })
        },
        /** 
         * Actualiza la fecha de inicio y finalizaci??n de una consulta, concatenando la fecha junto con la hora de la cita, asignandola a la fila correspondiente
         * de la variable checkupDataCopy.checkupList (variable donde guarda la lista de estudios y consultas del checkup seleccionado)
         * @function CheckupScheduleComponent.updateDate
         * @param {string} datetime Fecha de una consulta o estudio
         * @param {number} index N??mero de la fila que se desea actualizar de la variable checkupDataCopy.checkupList
        */
        updateDate(datetime: string, index: number)
        {
            const startTime = moment(this.checkupDataCopy.checkupList[index].consult_schedule_start);
            const finishTime = moment(this.checkupDataCopy.checkupList[index].consult_schedule_finish);
            this.checkupDataCopy.checkupList[index].consult_schedule_start = moment(datetime).set('hours', startTime.hours()).set('minutes', startTime.minutes()).format('YYYY-MM-DD HH:mm:00');
            this.checkupDataCopy.checkupList[index].consult_schedule_finish = moment(datetime).set('hours', finishTime.hours()).set('minutes', finishTime.minutes()).format('YYYY-MM-DD HH:mm:00');
        },
        /** 
         * Elimina la hora de la consulta de un estudio o consulta del m??dico seleccionado para mostrarlo en el input de fecha
         * de acuerdo al estudio o consulta agendado
         * @function CheckupScheduleComponent.formatDate
         * @param {number} index N??mero de la fila que se desea actualizar de la variable checkupDataCopy.checkupList
        */
        formatDate(index: number)
        {
            return moment(this.checkupDataCopy.checkupList[index].consult_schedule_start).format('YYYY-MM-DD');
        },
        /** 
         * Verifica si el checkup seleccionado es nuevo o existente, de acuerdo al estado del checkup {@link CheckupScheduleComponent.saveCheckupData|crea}
         * o {@link CheckupScheduleComponent.updateCheckupData|actualiza} el checkup
         * @function CheckupScheduleComponent.uploadCheckupData
        */
        uploadCheckupData()
        {
            this.isCheckupNew ? this.saveCheckupData() : this.updateCheckupData();
        },
        /** 
         * Crea un nuevo checkup en el servidor. En caso de que la petici??n sea correcta, asigna un mensaje de ??xito al objeto successAlert y muestra
         * el componente {@link SuccessAlertComponente} con el mensaje de ??xito, adem??s que oculta este componente, finalmente {@link CheckupScheduleComponent.clearData|limpia todos los datos del checkup}
         * @function CheckupScheduleComponent.saveCheckupData
        */
        saveCheckupData()
        {
            axios.post(`/checkup`, {
                data: this.checkupDataCopy
            })
            .then(response => {
                this.successAlert.title = "Checkup creado";
                this.successAlert.message = "El checkup se ha creado correctamente";
                $('#ckpscCheckups').modal('hide');
                $('#ckscSuccess').modal('show');
                this.clearData();
            })
            .catch(error => {
                
            })
        },
        /** 
         * Actualiza el checkup en el servidor. En caso de que la petici??n sea correcta, asigna un mensaje de ??xito al objeto successAlert y muestra
         * el componente {@link SuccessAlertComponente} con el mensaje de ??xito, adem??s que oculta este componente, finalmente {@link CheckupScheduleComponent.clearData|limpia todos los datos del checkup}
         * @function CheckupScheduleComponent.updateCheckupData
        */
        updateCheckupData()
        {
            axios.patch(`/checkup`, {
                data: this.checkupDataCopy
            })
            .then(response => {
                this.successAlert.title = "Checkup actualizado";
                this.successAlert.message = "El checkup se ha actualizado correctamente";
                $('#ckpscCheckups').modal('hide');
                $('#ckscSuccess').modal('show');
                this.clearData();
            })
            .catch(error => {
                
            })
        },
        /** 
         * Limpia todos los datos del checkup
         * @function CheckupScheduleComponent.clearData
        */
        clearData()
        {
            this.categorySelected = 1,
            this.checkupDataCopy = CheckupListData,
            this.checkupDataCopy.checkupList = [];
            this.branchesSelected = [],
            this.isButtonDisabled = true
        },
        /** 
         * Obtiene los doctores de una sucursal en cada uno de las consultas donde se seleccione una sucursal para agendar dicha consulta. Si
         * la petici??n es correcta, entonces se filtra las especialidades donde no hay un doctor registrado y finalmente se asigna a la variable
         * doctorListCopy en la fila donde se aloja la consulta a mostrar la lista de doctores, la lista de doctores, convirtiendo primero la lista en un tipo Select[][]
         * (array bidimensional donde la fila corresponde la consulta donde se muestra la lista de doctores y la columna corresponde a dicha lista de doctores)
         * @function CheckupScheduleComponent.getDoctorList
         * @param {number} branchID ID de la sucursal seleccionada
         * @param {number} indexID N??mero de la fila de la consulta seleccionada
        */
        getDoctorList(branchID: number, indexID: number): void
        {
            axios.get<BranchSpecialtyDoctors[]>(`/sucursales/${branchID}/especialidades/doctores`)
            .then( response => {
                var index = 0;
                const doctorFilter = response.data.filter((list: BranchSpecialtyDoctors) => list.doctors.length > 0);
                this.doctorListCopy[indexID] = doctorFilter.map(specialty => {
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
    },
})