import { AsistenteSidebarConfig } from '@config/AsistenteSidebar.config';
import { CajaSidebarConfig } from '@config/CajaSidebar.config';
import { CheckupSidebarConfig } from '@config/CheckupSidebar.config';
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
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
        UserProfileComponent: require('@component/user/userProfile/UserProfileComponent.vue').default,
        UserPasswordComponent: require('@component/user/userPassword/UserPasswordComponent.vue').default,
        UserProfileInfoComponent: require('@component/user/userProfileInfo/UserProfileInfoComponent.vue').default,
    },
    props: {
        caja: {
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
            employeeCopy: cloneDeep(this.caja),
            sidebarItems: CajaSidebarConfig,
            isSidebarOpen: false
        };
    },
    mounted() {
        console.log(this.caja)
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
       updatePatientInfo(employee: Employee)
       {
           this.employeeCopy = cloneDeep(employee);
       },
       updatePhoto(file: string)
       {
           const input = (document.getElementById('upasscPhoto') as HTMLImageElement);
           input.src = file;
       }
    },
})