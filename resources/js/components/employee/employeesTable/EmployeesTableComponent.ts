import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { EmployeePaginationData } from '@data/Employee/EmployeePagination.data';
import { EmployeeData } from '@data/Employee/Employee.data';
import { EmployeePagination } from '@interface/Employee/EmployeePagination.interface';
import { defineAsyncComponent } from 'vue';

export default defineComponent({
    components: {
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
            loading: true
        };
    },
    mounted() {
        this.getUserData(1);
    },
    watch: {

    },
    methods: {
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