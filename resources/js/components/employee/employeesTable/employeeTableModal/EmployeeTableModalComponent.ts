import UserProfileComponent from '@component/user/userProfile/UserProfileComponent';
import { EmployeeData } from '@data/Employee/Employee.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Role } from '@interface/User/Role.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        UserProfileComponent
    },
    emits: ['onRoleSelected'],
    props: {
        id: {
            type: String,
            default: ''
        },
        employee: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    watch: {
        roleSelected()
        {
            this.rolesSelected = [this.roleSelected];
        },
        employee:
        {
            handler()
            {
                this.getEmployeeRoles();
            },
            deep:true
        },
        rolesSelected: {
            handler()
            {
                this.$emit('onRoleSelected', this.rolesSelected)
            },
            deep:true
        }
    },
    data() {
        return {
            roles: [] as String[],
            rolesSelected: [] as String[],
            errors: [],
            roleSelected: ''
        };
    },
    mounted() {
        this.getRoles();
    },
    methods: {
        getRoles()
        {
            axios.get<Role[]>(`/empleados/roles`)
            .then(response => {
                this.roles = response.data.map(item => item.name);
            })
            .catch(error => {
                
            })
        },
        getEmployeeRoles()
        {
            axios.get<string[]>(`/empleados/${this.employee.id}/roles`)
            .then(response => {
                this.rolesSelected = response.data;
                this.roleSelected = response.data[0];
            })
            .catch(error => {
                
            })
        },
        setEmployeeRoles()
        {
            axios.post(`/empleados/${this.employee.id}/roles`, {
                roles: this.rolesSelected
            })
            .then(response => {
                $('#emtmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        }
    }
})