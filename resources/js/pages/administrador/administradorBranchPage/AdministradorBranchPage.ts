import BranchTableComponent from '@component/branch/BranchTable/BranchTableComponent';
import { AdministradorSidebarConfig } from '@config/AdministradorSidebar.config';
import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        BranchTableComponent,
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
    },
    props: {
        administrador: {
            type: Object as PropType<Employee>,
            default: PatientData
        },
        role: {
            type: String as PropType<String>,
            default: ''
        }
    },
    data() {
        return {
            sidebarItems: AdministradorSidebarConfig,
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