import { SelectData } from '@data/General/SelectSelected.data';
import { EmployeeBranch } from '@interface/Employee/EmployeeBranch.interface';
import { Select } from '@interface/General/Select.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'ScheduleSelectComponent',
    components: {
        SelectComponent: require('@component/general/select/SelectComponent.vue').default
    },
    emits: [
        'onBranchSelected',
        'onDoctorSelected',
        'onUserSchedule',
        'onEmployeeScheduleSelect',
        'onEmployeeAllSchedule',
        'onDoctorBranchSelected',
        'onNurseBranchSelected',
        'onAllNurseBranchSelected'
    ],
    props: {
        branchesList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        doctorList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        employeeBranches: {
            type: Array as PropType<EmployeeBranch[]>,
            default: []
        },
        role: {
            type: String as PropType<String>,
            default: ''
        },
    },
    data() {
        return {
            branchSelected: SelectData,
            userSelected: SelectData,
            employeeBranchSelected: 0
        }
    },
    mounted() {
    },
    watch: {
        employeeBranchSelected()
        {
            switch(this.role)
            {
                case 'Administrador':
                    this.$emit('onDoctorBranchSelected', this.employeeBranchSelected);
                    break;  
                case 'Doctor':
                    this.$emit('onDoctorBranchSelected', this.employeeBranchSelected);
                    break;                    
            }
           
        },
        branchSelected()
        {
            this.$emit('onBranchSelected', this.branchSelected);
        },
        userSelected()
        {
            this.$emit('onDoctorSelected', this.userSelected);
        },
    },
    methods: {
        openCheckupComponent()
        {
            $('#ckpscCheckups').modal('show');
        },
        selectSchedule()
        {
            switch(this.role)
            {
                case 'Administrador':
                    this.$emit('onNurseBranchSelected', this.employeeBranchSelected);
                    break;
                case 'Paciente':
                    this.$emit('onUserSchedule');
                    break;
                case 'Enfermera':
                    this.$emit('onNurseBranchSelected', this.employeeBranchSelected);
                    break;
                default:
                    this.$emit('onEmployeeScheduleSelect', this.employeeBranchSelected)
            }
        },
        selectAllSchedule()
        {
            switch(this.role)
            {
                case 'Administrador':
                    this.$emit('onAllNurseBranchSelected');
                    break;
                case 'Paciente':
                    break;
                case 'Enfermera':
                    this.$emit('onAllNurseBranchSelected');
                    break;
                default:
                    this.$emit('onEmployeeAllSchedule');
            }
        },
        selectNurseBranch()
        {
            this.$emit('onNurseBranchSelected', this.employeeBranchSelected);
        }
    },
})