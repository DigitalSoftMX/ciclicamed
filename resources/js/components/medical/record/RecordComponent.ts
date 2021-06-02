import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { Consult } from '@/resources/js/interfaces/Medical/Consult.interface';
import moment from 'moment';
import { Prescription } from '@/resources/js/interfaces/Medical/Prescription.interface';
import { FollowUp } from '@/resources/js/interfaces/Medical/FollowUp.interface';
import { FollowUpData } from '../../../defaultData/Medical/FollowUp.data';
import { Test } from '@/resources/js/interfaces/Medical/Test.interface';


export default defineComponent({
    name: 'RecordComponent',
    components: {
        CitasSubsecuentesComponent: require('../../attachtments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        EmptyErrorComponent: require('../../error/EmptyErrorComponent.vue').default,
        NetworkErrorComponent: require('../../error/NetworkErrorComponent.vue').default
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
                require('../../../../../public/js/horizontal_timeline.2.0.min');
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
