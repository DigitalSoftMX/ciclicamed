import { FollowUpData } from '@data/Medical/FollowUp.data';
import { Consult } from '@interface/Medical/Consult.interface';
import { FollowUp } from '@interface/Medical/FollowUp.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Test } from '@interface/Medical/Test.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';

export default defineComponent({
    name: 'RecordComponent',
    components: {
        CitasSubsecuentesComponent: require('@component/medical/attachments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        EmptyErrorComponent: require('@component/general/error/EmptyErrorComponent.vue').default,
        NetworkErrorComponent: require('@component/general/error/NetworkErrorComponent.vue').default
    },
    props: {},
    mounted() {
        this.getConsultData();
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
            consultDateSelected: ''
        }
    },
    watch: {
        consultList(){
            if (this.consultList.length > 0)
            {
                require('jquery');
                require('@library/timeline.min');
            }
        }
    },
    methods: {
        getConsultData() {
            axios.get < Consult[] > ('/pacientes/1/consultas/categoria/5')
            .then(response => {
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
            this.componentNumber = -1;
            this.getFollowUps(id);
            this.getTestOrders(id);
            this.getPrescriptions(id);
        },
        getFollowUps(id: number) {
            axios.get<FollowUp>(`/consultas/${id}/seguimiento`)
            .then(response => {
                this.followUp = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        getTestOrders(id: number) {
            axios.get<Test[]>(`/consultas/${id}/estudios`)
            .then(response => {
                this.testList = Object.values(response.data);
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
            this.componentNumber = component;
        }
    }
})
