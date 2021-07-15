import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { EmployeePaginationData } from '@data/Employee/EmployeePagination.data';
import { EmployeeData } from '@data/Employee/Employee.data';
import { EmployeePagination } from '@interface/Employee/EmployeePagination.interface';
import { defineAsyncComponent } from 'vue';
import { Employee } from '@interface/Employee/Employee.interface';
import EmployeeTableModalComponent from './employeeTableModal/EmployeeTableModalComponent';
import { User } from '@interface/User/User.interface';

export default defineComponent({
    components: {
        EmployeeTableModalComponent
    },
    emits: [],
    props: {
    },
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
        };
    },
    mounted() {
        this.getUserData(1);
    },
    watch: {

    },
    methods: {
        role(user: User)
        {
            return user.roles!.length > 0 ? user.roles![0].name : '';
        },
        fullName(employee: Employee)
        {
            return `${employee.first_name} ${employee.last_name}`;
        },
        updateRole(roles: String[])
        {
            this.rolesSelected = roles;
        },
        createEmployee()
        {
            this.isNew = true;
            this.employeeSelected = EmployeeData;
            this.disableEditEmployee = false;
            $('#etmcEmployee').modal('show');
        },
        showConfirmationAlert(employee: Employee)
        {
            this.employeeSelected = employee;
            this.confirmationAlert.message  = this.employeeSelected.employeestatus_id === 1 ? '¿Desea cesar a este empleado?' : '¿Desea habilitar este empleado?'
            $('#etmcConfirmation').modal('show');
        },
        chooseEmployeeStatus()
        {
            this.employeeSelected.employeestatus_id === 1 ? this.disableEmployee() : this.enableEmployee();
        },
        disableEmployee()
        {
            axios.post(`/empleados/${this.employeeSelected.id}/deshabilitar`)
            .then(response => {
                this.successAlert.title = 'Empleado cesado';
                this.successAlert.message = 'Empleado cesado correctamente';
                $('#etmcSuccess').modal('show');
            })
            .catch(error => {
                console.log(error)
            })
        },
        enableEmployee()
        {
            axios.post(`/empleados/${this.employeeSelected.id}/habilitar`)
            .then(response => {
                this.successAlert.title = 'Empleado habilitado';
                this.successAlert.message = 'Empleado habilitado correctamente';
                $('#etmcSuccess').modal('show');
            })
            .catch(error => {
                console.log(error)
            })
        },
        showEmployeeModal(employee: Employee)
        {
            this.isNew = false;
            this.disableEditEmployee = true;
            this.employeeSelected = employee;
            $('#etmcEmployee').modal('show');
        },
        showEditModal(employee: Employee)
        {
            this.isNew = false;
            this.disableEditEmployee = false;
            this.employeeSelected = employee;
            $('#etmcEmployee').modal('show');
        },
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.userData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<EmployeePagination>(`/empleados?page=${this.paginationActive}`)
                .then(response => {
                    console.log(response.data)
                    this.userData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
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
                    console.log(error)
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})