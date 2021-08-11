import UserProfileComponent from '@component/user/userProfile/UserProfileComponent';
import { EmployeeData } from '@data/Employee/Employee.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Role } from '@interface/User/Role.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra los datos de un empleado, mediante el uso de un formulario dentro de un modal
 * @class EmployeeTableModalComponent
 * @example <employee-table-modal-component></employee-table-modal-component>
*/
export default defineComponent({
    /** 
     * {@link UserProfileComponent}
     * @member EmployeeTableModalComponent.components
    */
    components: {
        UserProfileComponent
    },
    /** 
     * Eventos del componente
     * @member EmployeeTableModalComponent.emits
     * @property {Role[]} onRoleSelected Evento que se lanza cuando se selecciona un rol
    */
    emits: ['onRoleSelected'],
    /** 
     * Propiedades que recibe el componente 
     * @member EmployeeTableModalComponent.props
     * @property {string} id (Obligatorio) ID del componente
     * @property {Employee} employee (Obligatorio) Datos del empleado sea nuevo o existente
     * @property {boolean} disabled (Obligatorio) Indica si el formulario del componente se habilita o deshabilita
     * @property {boolean} isNew (Obligatorio) Indica si los datos del empleado son para crear o editar
    */
    props: {
        id: {
            type: String,
            default: ''
        },
        employee: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    /** 
     * Variables a observar por el componente
     * @member EmployeeTableModalComponent.watch
     * @property {string[]} roleSelected Al actualizar un rol dentro del formulario, se agrega a la variable rolesSelected un array con el rol seleccionado
     * @property {Employee} employee AL actualizar los datos del empleado se obtienen los {@link EmployeeTableModalComponent.getEmployeeRoles|roles} asignados para dicho empleado
     * @property {string[]} rolesSelected Al actualizar el rol del empleado se dispara el evento onRoleSelected junto con el rol seleccionado previamente
    */
    watch: {
        roleSelected()
        {
            this.rolesSelected = [this.roleSelected];
        },
        employee:
        {
            handler()
            {
                this.getEmployeeRoles();
            },
            deep:true
        },
        rolesSelected: {
            handler()
            {
                this.$emit('onRoleSelected', this.rolesSelected)
            },
            deep:true
        }
    },
    /**
    * Variables del componente
    * @member EmployeeTableModalComponent.data
    * @property {string[]} roles Guarda la lista de roles existentes que provee el backend
    * @property {string[]} rolesSelected Guarda los roles seleccionados para el empleado seleccionado
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {string} roleSelected Guardar el rol seleccionado por defecto al iniciar el componente
    */
    data() {
        return {
            roles: [] as String[],
            rolesSelected: [] as String[],
            errors: [],
            roleSelected: ''
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link EmployeeTableModalComponent.getRoles|roles registrados}
     * @member EmployeeTableModalComponent.mounted
    */
    mounted() {
        this.getRoles();
    },
    methods: {
        /** 
         * Obtiene los roles registrados en la base de datos. Si la petición se procesa correctamente, se asigna a la variable roles el nombre de los roles provistos
         * por el backend
         * @function EmployeeTableModalComponent.getRoles
        */
        getRoles()
        {
            axios.get<Role[]>(`/empleados/roles`)
            .then(response => {
                this.roles = response.data.map(item => item.name);
            })
            .catch(error => {
                
            })
        },
        /** 
         * Obtiene los roles del empleado seleccionado registrados en la base de datos.
         * Si la petición se procesa correctamente, se asigna a la variable rolesSelected la lista de los roles del empleado,
         * mientras que a la variable roleSelected se le asigna el primer rol del empleado
         * @function EmployeeTableModalComponent.getEmployeeRoles
        */
        getEmployeeRoles()
        {
            axios.get<string[]>(`/empleados/${this.employee.id}/roles`)
            .then(response => {
                this.rolesSelected = response.data;
                this.roleSelected = response.data[0];
            })
            .catch(error => {
                
            })
        },
        /** 
         * Se envía al servidor la lista de roles que han sido seleccionados para el empleado seleccionado previamente. Si la petición se
         * procesó correctamente, se muestral el modal {@link SuccessAlertComponent}, en caso contrario se asigna a la variable errors el mensaje de error
         * provisto por el servidor y se muestra el componente {@link ErrorAlertComponent}
         * @function EmployeeTableModalComponent.setEmployeeRoles
        */
        setEmployeeRoles()
        {
            axios.post(`/empleados/${this.employee.id}/roles`, {
                roles: this.rolesSelected
            })
            .then(response => {
                $('#emtmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        }
    }
})