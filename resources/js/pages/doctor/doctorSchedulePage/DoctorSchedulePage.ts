import EmployeesScheduleComponent from '@component/employee/employeeSchedule/EmployeesScheduleComponent';
import { DoctorSidebarConfig } from '@config/DoctorSidebar.config';
import { PatientSidebarConfig } from '@config/PatientSidebar.config';
import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { Role } from '@interface/User/Role.interface';
import { defineComponent } from '@vue/runtime-core';
import cloneDeep from 'lodash/cloneDeep';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        EmployeesScheduleComponent,
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
    },
    props: {
        doctor: {
            type: Object as PropType<Employee>,
            default: PatientData
        },
        roles: {
            type: Object as PropType<Role[]>,
            default: []
        }
    },
    data() {
        return {
            employeeCopy: cloneDeep(this.doctor),
            sidebarItems: DoctorSidebarConfig,
            isSidebarOpen: false
        };
    },
    mounted() {
        console.log(this.doctor)
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
       },
    },
})