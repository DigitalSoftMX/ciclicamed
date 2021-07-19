import MedicamentTableComponent from '@component/medicament/MedicamentTable/MedicamentTableComponent';
import { AdministradorSidebarConfig } from '@config/AdministradorSidebar.config';
import { AsistenteSidebarConfig } from '@config/AsistenteSidebar.config';
import { EmployeeData } from '@data/Employee/Employee.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Role } from '@interface/User/Role.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
        MedicamentTableComponent
    },
    props: {
        administrador: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
        roles: {
            type: Object as PropType<Role[]>,
            default: []
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