import { BranchData } from '@data/Branch/Branch.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        branchData: {
            type: Object as PropType<Branch>,
            default: BranchData
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    watch: {
        branchData:
        {
            handler()
            {
                this.form = this.branchData;
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
            form: this.branchData
        };
    },
    mounted() {
    },
    methods: {
        createBranch()
        {
            axios.post(`/sucursales`, {
                branch: this.form
            })
            .then(response => {
                this.successAlert.title = 'Sucursal creado';
                this.successAlert.message = 'Sucursal creado correctamente';
                $('#emtmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        },
        updateBranch()
        {
            axios.post(`/sucursales/${this.form.id}`, {
                branch: this.form
            })
            .then(response => {
                this.successAlert.title = 'Sucursal actualizado';
                this.successAlert.message = 'Sucursal actualizado correctamente';
                $('#emtmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        }
    }
})