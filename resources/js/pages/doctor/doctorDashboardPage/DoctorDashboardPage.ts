import { DoctorSidebarConfig } from '@config/DoctorSidebar.config';
import { PatientSidebarConfig } from '@config/PatientSidebar.config';
import { PatientData } from '@data/Patient/Patient.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { Role } from '@interface/User/Role.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        NavbarComponent: defineAsyncComponent(() => import('@component/general/navbar/NavbarComponent.vue')),
        SidebarComponent: defineAsyncComponent(() => import('@component/general/sidebar/SidebarComponent.vue')),
        ScheduleComponent: defineAsyncComponent(() => import('@component/schedule/ScheduleComponent.vue')),
    },
    props: {
        doctor: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        roles: {
            type: Object as PropType<Role[]>,
            default: []
        }
    },
    data() {
        return {
            sidebarItems: DoctorSidebarConfig,
            isSidebarOpen: false
        };
    },
    mounted() {
    },
    watch: {
        isSidebarOpen()
        {
            if(this.isSidebarOpen )
            {
                document.getElementById('sbcSidebar')?.classList.remove('collapsed');
                document.getElementById('pdpContent')?.classList.remove('expanded');
            } else {
                document.getElementById('sbcSidebar')?.classList.add('collapsed');
                document.getElementById('pdpContent')?.classList.add('expanded');
            }
        }
    },
    methods: {
       changeSidebarStatus()
       {
           this.isSidebarOpen = !this.isSidebarOpen;
       }
    },
})