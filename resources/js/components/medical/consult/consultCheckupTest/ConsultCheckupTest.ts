import { TestData } from '@data/Medical/Test.data';
import { Test } from '@interface/Medical/Test.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';

export default defineComponent({
    components: {
        PatientTestFileModalComponent: require('@component/patient/test/testFileModal/PatientTestFileModalComponent.vue').default
    },
    emits: [],
    props: {
        checkup: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            testData: [] as Test[],
            results: {},
            productSelected: '',
        };
    },
    mounted() {
        this.getCheckupTest();
    },
    watch: {
        checkup()
        {
            this.getCheckupTest();
        }
    },
    methods: {
        getCheckupTest()
        {
            axios.get<Test[]>(`/checkup/${this.checkup}/resultados`)
            .then(response => {
                this.testData = response.data;
            })
            .catch(error => {
                
            })
        },
        showFileResults(test: Test) {
            this.productSelected = test.order.product.name;
            this.results = test.result!.results!;
            $('#conchekFileTest').modal('show');
        },
        getDateFormatted(date: string) {
            moment.locale('es');
            return moment(date).format('D MMMM YYYY');
        },
    },
})
