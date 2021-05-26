import { UserPaginationData } from '../../../defaultData/User/UserPagination.data';
import { Patient } from '@/resources/js/interfaces/Patient/Patient.interface';
import { UserPagination } from '@/resources/js/interfaces/User/UserPagination.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { DefineComponent, PropType } from 'vue';
// import $ from 'jquery';
// require('../../../../../public/vendor_assets/js/jquery.mCustomScrollbar.min');

export default defineComponent({
    components: {
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
            activateSearch: true
        };
    },
    mounted() {
        this.getUserData(1);
        // $(".container").customScrollbar();
    },
    watch: {

    },
    methods: {
        getUserData(page: number)
        {
            if(page >= 1 && page <= this.userData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<UserPagination>(`/usuarios/pacientes?page=${this.paginationActive}`)
                .then(response => {
                    this.userData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        getUserDataQuery()
        {
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
                })
                .catch(error => {
                    console.log(error)
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        }
    },
})