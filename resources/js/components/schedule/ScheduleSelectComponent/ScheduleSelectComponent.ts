import { SelectData } from '@data/General/SelectSelected.data';
import { EmployeeBranch } from '@interface/Employee/EmployeeBranch.interface';
import { Select } from '@interface/General/Select.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import vSelect from 'vue-select-3/src';

export default defineComponent({
    name: 'ScheduleSelectComponent',
    components: {
        vSelect,
        SelectComponent: defineAsyncComponent(() => import('@component/general/select/SelectComponent.vue'))
    },
    emits: ['onBranchSelected', 'onDoctorSelected', 'onUserSchedule', 'onEmployeeScheduleSelect'],
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
        }
    },
    data() {
        return {
            branchSelected: SelectData,
            userSelected: SelectData,
            employeeBranchSelected: -1
        }
    },
    mounted() {
    },
    watch: {
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
            this.employeeBranchSelected > 0 ? this.$emit('onEmployeeScheduleSelect', this.employeeBranchSelected) : this.$emit('onUserSchedule');
        }
    },
})