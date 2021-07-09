import { DoctorSidebarConfig } from '@config/DoctorSidebar.config';
import { NurseSidebarConfig } from '@config/NurseSidebar.config';
import { PatientData } from '@data/Patient/Patient.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
        TestNurseTableComponent: require('@component/medical/test/testNurseTable/TestNurseTableComponent.vue').default
    },
    props: {
        nurse: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        role: {
            type: String as PropType<String>,
            default: ''
        }
    },
    data() {
        return {
            sidebarItems: NurseSidebarConfig,
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