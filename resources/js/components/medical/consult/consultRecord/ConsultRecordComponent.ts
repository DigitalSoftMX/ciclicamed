import PatientTestFileModalComponent from '@component/patient/test/testFileModal/PatientTestFileModalComponent';
import { FollowUpData } from '@data/Medical/FollowUp.data';
import { TestFileResultData } from '@data/Medical/Result/TestFileResult.data';
import { Consult } from '@interface/Medical/Consult.interface';
import { FollowUp } from '@interface/Medical/FollowUp.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Test } from '@interface/Medical/Test.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';
import { defineAsyncComponent } from 'vue';
import ConsultUploadTest from '../consultUploadTest/ConsultUploadTest';

export default defineComponent({
    name: 'RecordComponent',
    components: {
        ConsultUploadTest,
        PatientTestFileModalComponent,
        CitasSubsecuentesComponent: require('@component/medical/attachments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        EmptyErrorComponent: require('@component/general/error/EmptyErrorComponent.vue').default,
        NetworkErrorComponent: require('@component/general/error/NetworkErrorComponent.vue').default
    },
    props: {
        patientID: {
            type: Number,
            default: -1
        },
        specialtyID: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            hasError: false,
            consultList: [] as Consult[],
            followUp: FollowUpData,
            testList: [] as Test[],
            prescriptionList: [] as Prescription[],
            componentNumber: -1,
            isChildEnabled: false,
            consultDateSelected: '',
            resultSelected: TestFileResultData,
            productSelected: '',
            testIDSelected: 0
        }
    },
    watch: {
        patientID()
        {
            this.getConsultData();
        },
        consultList(){
            if (this.consultList.length > 0)
            {
                require('jquery');
                require('@library/timeline.min');
            }
        }
    },
    methods: {
        selectTest(test: Test)
        {
            if(test.result)
            {
                this.resultSelected = test.result!.results;
                this.productSelected = test.order.product.product_code!;
                $('#pattcFileTest').modal('show');
            }
            if(!test.result && !test.scheduled_in)
            {
                this.testIDSelected = test.id;
                $('#conupteUploadTest').modal('show');
            }           
        },
        getConsultData() {
            axios.get<Consult[]> (`/pacientes/${this.patientID}/consultas/categoria/${this.specialtyID}`)
            .then(response => {
                console.log(response.data)
                this.consultList = [];
                this.consultList = Object.values(response.data);
            })
            .catch(error => {
                this.hasError = true;
            })
        },
        formatConsultDateTime(dateTime: string) {
            return moment(dateTime).format('DD/MM/YYYY')
        },
        getInfoConsult(id: number, date: string) {
            this.consultDateSelected = date;
            console.log(this.consultDateSelected)
            this.componentNumber = -1;
            this.getFollowUps(id);
            this.getTestOrders(id);
            this.getPrescriptions(id);
        },
        getFollowUps(id: number) {
            console.log(id)
            axios.get<FollowUp>(`/consultas/${id}/seguimiento`)
            .then(response => {
                this.followUp = response.data;
            })
            .catch(error => {
                this.followUp = FollowUpData;
            })
        },
        getTestOrders(id: number) {
            axios.get<Test[]>(`/consultas/${id}/estudios`)
            .then(response => {
                this.testList = Object.values(response.data);
                console.log(this.testList)
            })
            .catch(error => {
                // console.log(error)
            })
        },
        getPrescriptions(id: number) {
            axios.get<Prescription[]>(`/consultas/${id}/receta`)
            .then(response => {
                this.prescriptionList = Object.values(response.data);
            })
            .catch(error => {
                // console.log(error)
            })
        },
        showComponent(component: number)
        {
            console.log(this.followUp)
            this.componentNumber = component;
        }
    }
})
