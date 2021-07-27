import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { EmployeeData } from '@data/Employee/Employee.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { UserPagination } from '@interface/User/UserPagination.interface';
import { UserPaginationData } from '@data/User/UserPagination.data';
import { PatientData } from '@data/Patient/Patient.data';
import PatientsTableModalComponent from './patientsTableModal/PatientsTableModalComponent';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import PatientsHistoryModalComponent from './patientHistoryModal/PatientsHistoryModalComponent';

export default defineComponent({
    components: {
        PatientsTableModalComponent,
        PatientsHistoryModalComponent,
        PreregistrationComponent: require('@component/patient/preregistration/PreregistrationComponent.vue').default
    },
    emits: [],
    props: {
    },
    data() {
        return {
            userData: UserPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            patientData: PatientData,
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
            rolesSelected: [] as String[],
        };
    },
    mounted() {
        this.getUserData(1);
    },
    watch: {
        
    },
    methods: {
        deletePatient()
        {
            axios.delete(`/pacientes/${this.patientSelected.id}`)
            .then(response => {
                this.successAlert.title = 'Paciente eliminado';
                this.successAlert.message = 'Paciente eliminado correctamente';
                $('#patcSuccess').modal('show');
            })
            .catch(error => {
                console.log(error)
            })
        },
        fullName(user: Patient)
        {
            return `${user.first_name} ${user.last_name}`;
        },
        formatBirthday(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        createPatient()
        {
            this.isNew = true;
            this.patientSelected = PatientData;
            this.disabledPatientEdit = false;
            $('#patcPatient').modal('show');
        },
        showConfirmationAlert(patient: Patient)
        {
            this.patientSelected = patient;
            this.confirmationAlert.message = '¿Desea eliminar a este usuario? Esta acción no puede deshacerse'
            $('#patcConfirmation').modal('show');
        },
        showPatientModal(patient: Patient)
        {
            this.patientSelected = patient;
            $('#pahmcoHistory').modal('show');
        },
        showEditModal(patient: Patient)
        {
            this.isNew = false;
            this.disabledPatientEdit = false;
            this.patientSelected = patient;
            $('#patcPatient').modal('show');
        },
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
                    console.log(error);
                    this.loading = false;
                })
            }
        },
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
                    console.log(error);
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})