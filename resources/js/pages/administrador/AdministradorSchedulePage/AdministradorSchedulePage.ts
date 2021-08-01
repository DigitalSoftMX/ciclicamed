import EmployeesScheduleComponent from '@component/employee/employeeSchedule/EmployeesScheduleComponent';
import { AdministradorSidebarConfig } from '@config/AdministradorSidebar.config';
import { DoctorSidebarConfig } from '@config/DoctorSidebar.config';
import { PatientSidebarConfig } from '@config/PatientSidebar.config';
import { EmployeeData } from '@data/Employee/Employee.data';
import { PatientData } from '@data/Patient/Patient.data';
import { UserData } from '@data/User/User.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { Role } from '@interface/User/Role.interface';
import { User } from '@interface/User/User.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import cloneDeep from 'lodash/cloneDeep';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        EmployeesScheduleComponent,
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
    },
    props: {
        administrador: {
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
            employeeCopy: cloneDeep(this.administrador),
            sidebarItems: AdministradorSidebarConfig,
            isSidebarOpen: false,
            doctorSelected: -1,
            doctorSelectedData: UserData,
            doctors: [] as Employee[]
        };
    },
    mounted() {
        this.getDoctors();
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
    computed: {
        fullName(): string
        {
            return `${this.doctorSelectedData.employee?.first_name} ${this.doctorSelectedData.employee?.last_name}` ?? '';
        }
    },
    methods: {
       changeSidebarStatus()
       {
           this.isSidebarOpen = !this.isSidebarOpen;
       },
       getDoctors()
       {
            axios.get<Employee[]>(`/usuarios/doctores`)
            .then(response => {
                this.doctors = response.data;
            })
            .catch(error => {
            })
       }
    },
})