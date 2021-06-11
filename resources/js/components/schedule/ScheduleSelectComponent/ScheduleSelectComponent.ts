import { SelectData } from '@data/General/SelectSelected.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { Select } from '@interface/General/Select.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    name: 'ScheduleSelectComponent',
    components: {
        SelectComponent: require('@component/general/select/SelectComponent.vue').default,
    },
    emits: ['onBranchSelected', 'onDoctorSelected'],
    props: {
        branchesList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        doctorList: {
            type: Array as PropType<Select[]>,
            default: []
        },
    },
    data() {
        return {
            branchSelected: SelectData,
            userSelected: SelectData,
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
        }
    },
    methods: {
    },
})