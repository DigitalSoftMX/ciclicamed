import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { TestPaginationData } from '@data/Medical/TestPagination.data';
import { TestPagination } from '@interface/Medical/TestPagination.interface';
import moment from 'moment';
import { Test } from '@interface/Medical/Test.interface';
import { OrderData } from '@data/Medical/Order.data';
import { TestData } from '@data/Medical/Test.data';

export default defineComponent({
    components: {
        TestTableModalComponent: require('@component/medical/test/testTable/testTableModal/TestTableModalComponent.vue').default
    },
    emits: ['onTestEdited', 'onTestUpload'],
    props: {
        testCategory: {
            type: String,
            default: ''
        },
        testStatus: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            testData: TestPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            testSelected: TestData,
            isUploadComponentEnabled: false,
        };
    },
    mounted() {
        this.getUserData(1);
    },
    computed: {
        showSupplierCode(): boolean
        {
            return this.testData.data.filter(item => item.order!.product.supplier_code).length > 0;
        }
    },
    methods: {
        showTestOrderAnnotations(test: Test)
        {
            this.testSelected = test;
            $('#testTableModal').modal('show');
        },
        showUploadComponent(test: Test)
        {
            this.$emit('onTestUpload', test);
        },
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        formatPatientName(test: Test)
        {
            return `${test.patient!.first_name} ${test.patient!.last_name}`;
        },
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.testData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<TestPagination>(`/estudios/${this.testCategory}/${this.testStatus}?page=${this.paginationActive}`)
                .then(response => {
                    this.testData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
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
                axios.get<TestPagination>(`/estudios/${this.testCategory}/${this.testStatus}`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.testData = response.data;
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