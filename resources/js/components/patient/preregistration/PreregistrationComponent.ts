import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';
import moment from 'moment';
import $ from 'jquery';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { Preregistration } from '@interface/Patient/Preregistration.interface';
// require('../../../../../public/vendor_assets/js/jquery.mCustomScrollbar.min');

export default defineComponent({
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default
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
        },
        role: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            preregistrationData: PreregistrationData,
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
        patientData: {
            handler()
            {
                this.patientDataCopy = Object.assign({}, this.patientData);
                if(this.role !== 'Enfermera')
                {
                    this.getPreregistration();
                }
            },
            deep: true
        }
    },
    methods: {
        getAge()
        {
            return moment().diff(moment(this.patientDataCopy.birthday), 'years');
        },
        getPreregistration()
        {
            axios.get<Preregistration>(`/pacientes/${this.patientData.id}/preregistro`)
            .then(response => {
                this.preregistrationData = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        updatePreregistration()
        {
            axios.patch(`/pacientes/${this.patientDataCopy.id}/preregistro`, {
                data: {
                    ...this.preregistrationData
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
        },
    },
})