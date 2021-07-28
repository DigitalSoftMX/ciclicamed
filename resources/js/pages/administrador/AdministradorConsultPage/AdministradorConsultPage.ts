import { AdministradorSidebarConfig } from '@config/AdministradorSidebar.config';
import { DoctorSidebarConfig } from '@config/DoctorSidebar.config';
import { EmployeeData } from '@data/Employee/Employee.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Role } from '@interface/User/Role.interface';
import NurseConsultPage from '@page/enfermera/nurseConsultPage/NurseConsultPage';
import { defineComponent } from '@vue/runtime-core';
import cloneDeep from 'lodash/cloneDeep';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        NurseConsultPage,
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
        ConsultPage: require('@page/general/consult/ConsultPage.vue').default,
    },
    props: {
        doctor: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
        role: {
            type: String,
            default: ''
        },
        consult: {
            type: Number,
            default: -1
        },
        specialty: {
            type: Number,
            default: -1
        },
    },
    data() {
        return {
            employeeCopy: cloneDeep(this.doctor),
            sidebarItems: AdministradorSidebarConfig,
            isSidebarOpen: false,
        };
    },
    mounted() {
    },
    watch: {
        consultSpecialty()
        {
        },
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
       },
    },
})