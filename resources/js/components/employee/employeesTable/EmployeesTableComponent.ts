import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { EmployeePaginationData } from '@data/Employee/EmployeePagination.data';
import { EmployeeData } from '@data/Employee/Employee.data';
import { EmployeePagination } from '@interface/Employee/EmployeePagination.interface';
import { Employee } from '@interface/Employee/Employee.interface';
import EmployeeTableModalComponent from './employeeTableModal/EmployeeTableModalComponent';
import { User } from '@interface/User/User.interface';

/**
 * @description Componente que muestra la lista de empleados registrados en el sistema mediante una tabla
 * @class EmployeeTableComponent
 * @example <employee-table-component></employee-table-component>
*/
export default defineComponent({
    /**
     * {@link EmployeeTableModalComponent}
     * @member EmployeeTableComponent.components
    */
    components: {
        EmployeeTableModalComponent
    },
    /**
     * Variables del componente
     * @member EmployeeTableComponent.data
     * @property {EmployeePagination} userData Guarda la información de los empleados que retorna el backend en paginación
     * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
     * @property {number} paginationActive Guarda el número de página activa de la tabla
     * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
     * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
     * @property {Employee} employeeData Guarda los datos de un empleado nuevo
     * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
     * @property {Employee} employeeSelected Guarda los datos de un empleado seleccionado
     * @property {boolean} disableEditEmployee Habilita o deshabilita la opción de editar al empleado en el componente {@link EmployeeTableModalComponent}
     * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
     * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
     * @property {Branch} confirmationAlert.title Guarda título del mensaje de confirmación del modal {@link ConfirmationAlertComponent}
     * @property {Branch} confirmationAlert.message Guarda el mensaje de confirmación del modal {@link ConfirmationAlertComponent}
     * @property {boolean} isNew Permite al componente {@link EmployeeTableModalComponent} saber si la variable employeeSelected es nueva
     * @property {string[]} rolesSelected Guarda los roles seleccionados del empleado
     * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    */
    data() {
        return {
            userData: EmployeePaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            employeeData: EmployeeData,
            loading: true,
            employeeSelected: EmployeeData,
            disableEditEmployee: true,
            successAlert: {
                title: '',
                message: ''
            },
            confirmationAlert: {
                title: '',
                message: ''
            },
            isNew: false,
            rolesSelected: [] as String[],
            errors: []
        };
    },
    /**
     * Al iniciar el componente, se obtienen los datos de los {@link EmployeeTableComponent.getUserData|empleados registrados}
     * @member BranchTableComponent.mounted
    */
    mounted() {
        this.getUserData(1);
    },
    methods: {
        /**
         * Busca el rol actual del empleado y lo retorna, en caso de que no exista un rol, retorna un string vacío
         * @param {User} user Usuario logueado actualmente
         * @function EmployeeTableComponent.role
         * @returns {string} Retorna el rol del empleado
        */
        role(user: User)
        {
            return user.roles!.length > 0 ? user.roles![0].name : '';
        },
        /**
         * Concatena y retorna el nombre completo del paciente
         * @function EmployeeTableComponent.fullName
         * @param {Employee} employee Datos del empleado seleccionado
         * @returns string
        */
        fullName(employee: Employee)
        {
            return `${employee.first_name} ${employee.last_name}`;
        },
        /**
         * Actualiza el rol seleccionado y lo asigna a la variable rolesSelected
         * @function EmployeeTableComponent.updateRole
         * @param {String[]} roles Roles del empleado
        */
        updateRole(roles: String[])
        {
            this.rolesSelected = roles;
        },
        /**
         * Crea un nuevo empleado asignando datos predefinidos a la variable employeeSelected, deshabilitando los campos bloqueados del componente {@link EmployeeTableModalComponent}
         * mediante la asignación false de la variable disableEditEmployee y asignando a la variable isNew el valor true para indicar que es un nuevo empleado, a lo cual
         * se procede a mostrar el componente {@link EmployeeTableModalComponent}
         * @function EmployeeTableComponent.createEmployee
        */
        createEmployee()
        {
            this.isNew = true;
            this.employeeSelected = EmployeeData;
            this.disableEditEmployee = false;
            $('#etmcEmployee').modal('show');
        },
        /**
         * Muestra el componente de confirmación {@link ConfirmationAlertComponent} antes de deshabilitar un empleado, en caso de que el empleado
         * ya este deshabilitado previamente, muestra un mensaje para confirmar que se desea habilitar al empleado
         * @function EmployeeTableComponent.createEmployee
         * @param {Employee} employee Datos del empleado seleccionado
        */
        showConfirmationAlert(employee: Employee)
        {
            this.employeeSelected = employee;
            this.confirmationAlert.message  = this.employeeSelected.employeestatus_id === 1 ? '¿Desea cesar a este empleado?' : '¿Desea habilitar este empleado?'
            $('#etmcConfirmation').modal('show');
        },
        /**
         * Esta función se utiliza cuando el usuario confirma la acción del componente {@link ConfirmationAlertComponent}
         * Activa o desactiva al empleado de acuerdo al estado en el que se encuentre, si el usuario esta habilitado, lo deshabilita y viceversa
         * @function EmployeeTableComponent.chooseEmployeeStatus
        */
        chooseEmployeeStatus()
        {
            this.employeeSelected.employeestatus_id === 1 ? this.disableEmployee() : this.enableEmployee();
        },
        /**
         * Envía una petición al servidor para deshabilitar el usuario seleccionado. Si la petición es procesada correctamente
         * se asigna al objecto successAlert un título y un mensaje de éxito y se muestra el componente
         * En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @function EmployeeTableComponent.disableEmployee
        */
        disableEmployee()
        {
            axios.post(`/empleados/${this.employeeSelected.id}/deshabilitar`)
            .then(response => {
                this.successAlert.title = 'Empleado cesado';
                this.successAlert.message = 'Empleado cesado correctamente';
                $('#etmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        },
        /**
         * Envía una petición al servidor para habilitar el usuario seleccionado. Si la petición es procesada correctamente
         * se asigna al objecto successAlert un título y un mensaje de éxito y se muestra el componente
         * En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @function EmployeeTableComponent.enableEmployee
        */
        enableEmployee()
        {
            axios.post(`/empleados/${this.employeeSelected.id}/habilitar`)
            .then(response => {
                this.successAlert.title = 'Empleado habilitado';
                this.successAlert.message = 'Empleado habilitado correctamente';
                $('#etmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        },
        /**
         * Muestra el componente {@link EmployeeTableModalComponent} mostrando solo los datos del empleado sin posibilidad de editarlos. Para esto la variable isNew se le asigna
         * un valor false y el valor disableEditEmployee se le asigna un valor true, para pasar los datos al componente {@link EmployeeTableModalComponent} del empleado,
         * se asigna el parametro de la función a la variable employeeSelected
         * @function EmployeeTableComponent.showEmployeeModal
        */
        showEmployeeModal(employee: Employee)
        {
            this.isNew = false;
            this.disableEditEmployee = true;
            this.employeeSelected = employee;
            $('#etmcEmployee').modal('show');
        },
        /**
         * Muestra el componente {@link EmployeeTableModalComponent} permitiendo la posibilidad de editar los datos del empleado. Para esto la variable isNew se le asigna
         * un valor false y el valor disableEditEmployee se le asigna un valor false, para pasar los datos al componente {@link EmployeeTableModalComponent} del empleado,
         * se asigna el parametro de la función a la variable employeeSelected
         * @function EmployeeTableComponent.showEmployeeModal
        */
        showEditModal(employee: Employee)
        {
            this.isNew = false;
            this.disableEditEmployee = false;
            this.employeeSelected = employee;
            $('#etmcEmployee').modal('show');
        },
        /**
         * Obtiene los empleados registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con los empleados, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * userData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /empleados con el parámetro de la página. Si la petición es correcta se asigna la variable userData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function EmployeeTableComponent.getUserData
        */
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.userData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<EmployeePagination>(`/empleados?page=${this.paginationActive}`)
                .then(response => {
                    this.userData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;
                })
            }
        },
        /**
         * Obtiene los empleados registradas en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los empleados, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /empleados con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable userData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function EmployeeTableComponent.getUserDataQuery
        */
        getUserDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<EmployeePagination>(`/empleados`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.userData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {

                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})
