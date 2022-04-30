import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { UserPagination } from '@interface/User/UserPagination.interface';
import { UserPaginationData } from '@data/User/UserPagination.data';
import { PatientData } from '@data/Patient/Patient.data';
import PatientsTableModalComponent from '@component/patient/patientsTable/patientsTableModal/PatientsTableModalComponent';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import PatientsHistoryModalComponent from '@component/patient/patientsTable/patientHistoryModal/PatientsHistoryModalComponent';

/**
 * @description Componente que muestra la lista de pacientes, mediante el uso de una tabla
 * @class PatientsTableComponent
 * @example <patients-table-component></patients-table-component>
*/
export default defineComponent({
    /**
     * {@link PatientsTableModalComponent}, {@link PatientsHistoryModalComponent}, {@link PreregistrationComponent}
     * @member PatientsTableComponent.components
    */
    components: {
        PatientsTableModalComponent,
        PatientsHistoryModalComponent,
        PreregistrationComponent: require('@component/patient/preregistration/PreregistrationComponent.vue').default
    },
    /**
     * Variables del componente
     * @member PatientsTableComponent.data
     * @property {MedicamentPagination} userData Guarda la información de los pacientes que retorna el backend en paginación
     * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
     * @property {number} paginationActive Guarda el número de página activa de la tabla
     * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
     * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
     * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
     * @property {Patient} patientSelected Guarda los datos del paciente seleccionado
     * @property {boolean} disabledPatientEdit Activa o desactiva la opción de editar al paciente en el componente {@link PatientsTableModalComponent}
     * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
     * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
     * @property {Branch} confirmationAlert.title Guarda título del mensaje de confirmación del modal {@link ConfirmationAlertComponent}
     * @property {Branch} confirmationAlert.message Guarda el mensaje de confirmación del modal {@link ConfirmationAlertComponent}
     * @property {Medicament} isNew Indica si el medicamento seleccionado es nuevo o existente
    */
    data() {
        return {
            userData: UserPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            patientSelected: PatientData,
            disabledPatientEdit: true,
            successAlert: {
                title: '',
                message: ''
            },
            confirmationAlert: {
                title: '',
                message: ''
            },
            isNew: false,
        };
    },
    /**
     * Al iniciar el componente, se obtienen los datos de los {@link PatientsTableComponent.getUserData|pacientes registrados}
     * @member PatientsTableComponent.mounted
    */
    mounted() {
        this.getUserData(1);
    },
    methods: {
        /**
         * Elimina el paciente seleccionado del servidor. Si la petición es correcta, se asigna al objeto successAlert un mensaje de éxito y se muestra el
         * componente {@link SuccessAlertComponent}
         * @function PatientsTableComponent.deletePatient
        */
        deletePatient()
        {
            axios.delete(`/pacientes/${this.patientSelected.id}`)
            .then(response => {
                this.successAlert.title = 'Paciente eliminado';
                this.successAlert.message = 'Paciente eliminado correctamente';
                $('#patcSuccess').modal('show');
            })
            .catch(error => {

            })
        },
        /**
         * Concatena y retorna el nombre completo del paciente
         * @function PatientsTableComponent.fullName
         * @param {Patient} user Datos del paciente seleccionado
         * @returns string
        */
        fullName(user: Patient)
        {
            return `${user.first_name} ${user.last_name}`;
        },
        /**
         * Formatea la fecha de nacimiento provista por el servidor a un formato local
         * @function PatientsTableComponent.formatBirthday
         * @param {string} birthday Fecha de nacimiento del paciente
         * @returns string
        */
        formatBirthday(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        /**
         * Crea un nuevo paciente asignando a la variable patientSelected datos vacíos e indicando que es un nuevo paciente asignando a la variable
         * isNew el valor true, además que se habilita la edición del paciente en el formulario {@link PatientsTableModalComponent} mediante la asignación false a la
         * variable disabledPatientEdit. Finalmente se muestra el componente {@link PatientsTableModalComponent} con los datos del paciente
         * @function PatientsTableComponent.createPatient
        */
        createPatient()
        {
            this.isNew = true;
            this.patientSelected = PatientData;
            this.disabledPatientEdit = false;
            $('#patcPatient').modal('show');
        },
        /**
         * Antes de eliminar a un usuario, se muestra el componente {@link ConfirmationAlertComponent} para mostrar el mensaje de confirmación asignado a la
         * variable this.confirmationAlert.message, además que se asigna a la variable patientSelected los datos del paciente seleccionado
         * @function PatientsTableComponent.showConfirmationAlert
         * @param {Patient} patient Datos del paciente seleccionado
        */
        showConfirmationAlert(patient: Patient)
        {
            this.patientSelected = patient;
            this.confirmationAlert.message = '¿Desea eliminar a este usuario? Esta acción no puede deshacerse'
            $('#patcConfirmation').modal('show');
        },
        /**
         * Muestra el componente {@link ConfirmationAlertComponent} con los datos del paciente seleccionado que se asignan a la variable patientSelected
         * @function PatientsTableComponent.showPatientModal
         * @param {Patient} patient Datos del paciente seleccionado
        */
        showPatientModal(patient: Patient)
        {
            this.patientSelected = patient;
            $('#pahmcoHistory').modal('show');
        },
        /**
         * Muestra el componente {@link ConfirmationAlertComponent} con los datos del paciente seleccionado que se asignan a la variable patientSelected.
         * Para permitir la edición del paciente, se asigna a la variable isNew el valor true junto con la asignación false a la variable disabledPatientEdit
         * @function PatientsTableComponent.showPatientModal
         * @param {Patient} patient Datos del paciente seleccionado
        */
        showEditModal(patient: Patient)
        {
            this.isNew = false;
            this.disabledPatientEdit = false;
            this.patientSelected = patient;
            $('#patcPatient').modal('show');
        },
        /**
         * Obtiene los pacientes registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con los pacientes, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * userData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /usuarios/pacientes con el parámetro de la página. Si la petición es correcta se asigna la variable userData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function PatientsTableComponent.getUserData
        */
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.userData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<UserPagination>(`/usuarios/pacientes?page=${this.paginationActive}`)
                .then(response => {
                    this.userData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    ;
                    this.loading = false;
                })
            }
        },
        /**
         * Obtiene los pacientes registradas en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los pacientes, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /usuarios/pacientes con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable userData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function PatientsTableComponent.getUserDataQuery
        */
        getUserDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<UserPagination>(`/usuarios/pacientes`, {
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
                    ;
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})
