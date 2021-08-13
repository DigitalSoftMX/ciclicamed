import { SelectData } from '@data/General/SelectSelected.data';
import { EmployeeBranch } from '@interface/Employee/EmployeeBranch.interface';
import { Select } from '@interface/General/Select.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

/** 
 * @description Componente que permite seleccionar las citas médicas de un doctor seleccionado, mediante el uso de tarjetas
 * @class ScheduleSelectComponent
 * @example <schedule-select-component:branchesList="" :doctorList="" :employeeBranches="" role=""></schedule-select-component:branchesList=>
*/
export default defineComponent({
    name: 'ScheduleSelectComponent',
    /** 
     * {@link SelectComponent} 
     * @member ScheduleSelectComponent.components
    */
    components: {
        SelectComponent: require('@component/general/select/SelectComponent.vue').default
    },
    /** 
     * Eventos del componente
     * @member ScheduleSelectComponent.emits
     * @property {Branch} onBranchSelected Evento que se emite cuando se selecciona una sucursal, junto con la sucursal seleccionada
     * @property {Employee} onDoctorSelected Evento que se emite cuando se selecciona una doctor, junto con el doctor seleccionada
     * @property {null} onUserSchedule Evento que se emite cuando se selecciona todas las citas de un paciente
     * @property {EmployeeBranch[]} onEmployeeScheduleSelect Evento que se emite cuando se selecciona las cita de una del empleado logueado actualemnte de una sucursal determinada, junto con el doctor y sucursal seleccionado
     * @property {null} onEmployeeAllSchedule Evento que se emite cuando se seleccionan todas las citas del empleado logueado actualmente
     * @property {EmployeeBranch[]} onDoctorBranchSelected Evento que se emite cuando se selecciona las cita de una de un doctor en una sucursal determinada, junto con el doctor y sucursal seleccionado
     * @property {EmployeeBranch[]} onNurseBranchSelected Evento que se emite cuando se selecciona las cita de una de un doctor en una sucursal determinada, junto con el doctor y sucursal seleccionado
     * @property {null} onAllNurseBranchSelected Evento que se emite cuando se selecciona todas las citas que puede ver una enfermera
    */
    emits: [
        'onBranchSelected',
        'onDoctorSelected',
        'onUserSchedule',
        'onEmployeeScheduleSelect',
        'onEmployeeAllSchedule',
        'onDoctorBranchSelected',
        'onNurseBranchSelected',
        'onAllNurseBranchSelected'
    ],
    /** 
     * Propiedades que recibe el componente 
     * @member ScheduleSelectComponent.props
     * @property {Select[]} branchesList (Obligatorio) Lista de las sucursales habilitadas por el servidor
     * @property {Select[]} doctorList (Obligatorio) Lista de doctores pertenecientes a una sucursal
     * @property {EmployeeBranch[]} employeeBranches (Obligatorio solo si el usuario logueado actualmente es doctor) Sucursales donde trabaja el doctor logueado
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
    */
    props: {
        branchesList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        doctorList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        employeeBranches: {
            type: Array as PropType<EmployeeBranch[]>,
            default: []
        },
        role: {
            type: String as PropType<String>,
            default: ''
        },
    },
    /**
    * Variables del componente
    * @member ScheduleSelectComponent.data
    * @property {Select} branchSelected Sucursal seleccioanada
    * @property {Select} userSelected Doctor seleccionado
    * @property {number} employeeBranchSelected Sucursal del doctor logueado actualmente
    */
    data() {
        return {
            branchSelected: SelectData,
            userSelected: SelectData,
            employeeBranchSelected: 0
        }
    },
    /** 
     * Variables a observar por el componente
     * @member ScheduleSelectComponent.watch
     * @property {EmployeeBranch[]} employeeBranchSelected Al actualizar la sucursal del doctor logueado actualmente, envía un evento para que se muestren las citas
     * correspondientes al doctor logueado junto con la sucursal seleccionado donde trabaja el doctor
     * @property {Select} onBranchSelected Al actualizar la sucursal seleccionada, se envía un evento para que se obtengan los doctores que trabajan en la sucursal seleccionada
     * @property {Select} onDoctorSelected Al actualizar el doctor seleccionado, se envía un evento para que se obtengan las citas del doctor seleccionado
    */
    watch: {
        employeeBranchSelected()
        {
            switch(this.role)
            {
                case 'Administrador':
                    this.$emit('onDoctorBranchSelected', this.employeeBranchSelected);
                    break;  
                case 'Doctor':
                    this.$emit('onDoctorBranchSelected', this.employeeBranchSelected);
                    break;                    
            }
           
        },
        branchSelected()
        {
            this.$emit('onBranchSelected', this.branchSelected);
        },
        userSelected()
        {
            this.$emit('onDoctorSelected', this.userSelected);
        },
    },
    methods: {
        /** 
         * Abre el componente {@link CheckupScheduleComponent} para crear un nuevo checkup
         * @function ScheduleSelectComponent.openCheckupComponent
        */
        openCheckupComponent()
        {
            $('#ckpscCheckups').modal('show');
        },
        /** 
         * En caso de que el rol del usuario logueado actualmente sea un paciente, envía un evento onUserSchedule para obtener todas las citas de
         * dicho paciente. En caso de que el usuario logueado sea una enfermera o administrador, envía un eventoo onNurseBranchSelected para obtener todas las citas creadas, 
         * de acuerdo a la sucursal seleccionada.
         * En caso de un doctor, se envía un eventoonEmployeeScheduleSelect para obtener las citas de una sucursal determinada
         * @function ScheduleSelectComponent.selectSchedule
        */
        selectSchedule()
        {
            switch(this.role)
            {
                case 'Administrador':
                    this.$emit('onNurseBranchSelected', this.employeeBranchSelected);
                    break;
                case 'Paciente':
                    this.$emit('onUserSchedule');
                    break;
                case 'Enfermera':
                    this.$emit('onNurseBranchSelected', this.employeeBranchSelected);
                    break;
                default:
                    this.$emit('onEmployeeScheduleSelect', this.employeeBranchSelected)
            }
        },
        /** 
         * En caso de que el rol del usuario logueado actualmente sea una enfermera o administrador, envía un evento onAllNurseBranchSelected para todas las citas creadas.
         * En caso de un doctor, envía un evento onEmployeeAllSchedule para obtener todas las citas del doctor logueado actualmente
         * @function ScheduleSelectComponent.selectSchedule
        */
        selectAllSchedule()
        {
            switch(this.role)
            {
                case 'Administrador':
                    this.$emit('onAllNurseBranchSelected');
                    break;
                case 'Paciente':
                    break;
                case 'Enfermera':
                    this.$emit('onAllNurseBranchSelected');
                    break;
                default:
                    this.$emit('onEmployeeAllSchedule');
            }
        },
    },
})