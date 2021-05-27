import { PreregistrationData } from '../../../defaultData/Patient/Preregistration.data';
import { Preregistration } from '@/resources/js/interfaces/Patient/Preregistration.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { DefineComponent, PropType } from 'vue';
import { Patient } from '@/resources/js/interfaces/Patient/Patient.interface';
import { PatientData } from '../../../defaultData/Patient/Patient.data';
import moment from 'moment';
import $ from 'jquery';
// require('../../../../../public/vendor_assets/js/jquery.mCustomScrollbar.min');

export default defineComponent({
    components: {
        SuccessAlertComponent: require('../../alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('../../alert/ErrorAlertComponent.vue').default
    },
    emits: [],
    props: {
        isNew: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        }
    },
    data() {
        return {
            formDataCopy: Object.assign({}, this.patientData.preregistration),
            patientDataCopy: Object.assign({}, this.patientData),
            success: {
                title: '',
                message: ''
            },
            errors: [],
            buttonTitle: this.isNew ? 'Crear' : 'Actualizar',
        };
    },
    mounted() {
    },
    watch: {
        patientData() {
            this.formDataCopy = Object.assign({}, this.patientData.preregistration);
            this.patientDataCopy = Object.assign({}, this.patientData);
        }
    },
    methods: {
        getAge()
        {
            return moment().diff(moment(this.patientDataCopy.birthday), 'years');
        },
        updatePreregistration()
        {
            axios.patch(`/pacientes/${this.patientDataCopy.id}/preregistro`, {
                data: {
                    ...this.formDataCopy
                }
            })
            .then(response => {
                this.updatePatientData();
            })
            .catch(error => {
                console.log(error)
            })
        },
        updatePatientData()
        {
            axios.patch(`/pacientes/${this.patientDataCopy.id}`, {
                data: {
                    ...this.patientDataCopy
                }
            })
            .then(response => {
                this.success.title = 'Información actualizada';
                this.success.message = 'Se ha actualizado la información correctamente';
                $('#preregistrationSuccess').modal('show');
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
})