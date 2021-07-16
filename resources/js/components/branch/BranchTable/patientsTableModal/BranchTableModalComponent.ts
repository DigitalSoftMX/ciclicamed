import { BranchData } from '@data/Branch/Branch.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { defineComponent } from '@vue/runtime-core';
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
                console.log(this.branchData)
                this.form = this.branchData;
            },
            deep:true
        },
    },
    data() {
        return {
            errors: [],
            form: this.branchData
        };
    },
    mounted() {
    },
    methods: {
    }
})