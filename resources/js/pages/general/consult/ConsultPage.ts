import { Role } from '@interface/User/Role.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        ConsultComponent: defineAsyncComponent(() => import('@component/medical/consult/ConsultComponent.vue')),
        ScheduleComponent: defineAsyncComponent(() => import('@component/schedule/ScheduleComponent.vue')),
    },
    emits: [],
    props: {
        userCategory: {
            type: String,
            default: ''
        },
        roles: {
            type: Object as PropType<Role[]>,
            default: []
        },
        employeeID: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    computed: {
        isPatient(): boolean
        {
            return this.userCategory.includes('Paciente') ? true : false;
        }
    },
    methods: {
       
    },
})
