import { UserPaginationData } from '../../../defaultData/User/UserPagination.data';
import { UserPagination } from '@/resources/js/interfaces/User/UserPagination.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { DefineComponent, PropType } from 'vue';
import $ from 'jquery';
import { Patient } from '@/resources/js/interfaces/Patient/Patient.interface';
import { PatientData } from '../../../defaultData/Patient/Patient.data';

export default defineComponent({
    components: {
        PreregistrationComponent: require('../../patient/preregistration/PreregistrationComponent.vue').default
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
        openPreregistration(userData: Patient)
        {
            this.patientData = userData;
            $('#preregistration-modal').modal('show');
        }
    },
})