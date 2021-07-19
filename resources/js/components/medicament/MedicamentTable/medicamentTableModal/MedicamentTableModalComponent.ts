import { MedicamentData } from '@data/Medical/Medicament.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { Medicament } from '@interface/Medical/Medicament.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        medicamentData: {
            type: Object as PropType<Medicament>,
            default: MedicamentData
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    watch: {
        medicamentData:
        {
            handler()
            {
                console.log(this.medicamentData)
                this.form = this.medicamentData;
            },
            deep:true
        },
    },
    data() {
        return {
            errors: [],
            successAlert: {
                title: '',
                message: ''
            },
            form: this.medicamentData
        };
    },
    mounted() {
    },
    methods: {
        createMedicament()
        {
            axios.post(`/productos/medicamentos`, {
                medicament: this.form
            })
            .then(response => {
                this.successAlert.title = 'Medicamento creado';
                this.successAlert.message = 'Medicamento creado correctamente';
                $('#metmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#metmcError').modal('show');
            })
        },
        updateMedicament()
        {
            axios.post(`/productos/medicamentos/${this.form.id}`, {
                medicament: this.form
            })
            .then(response => {
                this.successAlert.title = 'Medicamento actualizado';
                this.successAlert.message = 'Medicamento actualizado correctamente';
                $('#metmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#metmcError').modal('show');
            })
        }
    }
})