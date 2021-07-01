import { SelectData } from '@data/General/SelectSelected.data';
import { Select } from '@interface/General/Select.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'ScheduleSelectComponent',
    components: {
        SelectComponent: defineAsyncComponent(() => import('@component/general/select/SelectComponent.vue'))
    },
    emits: ['onBranchSelected', 'onDoctorSelected', 'onUserSchedule'],
    props: {
        branchesList: {
            type: Array as PropType<Select[]>,
            default: []
        },
        doctorList: {
            type: Array as PropType<Select[]>,
            default: []
        }
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
        openCheckupComponent()
        {
            $('#ckpscCheckups').modal('show');
        },
        selectUserSchedule()
        {
            this.$emit('onUserSchedule');
        }
    },
})