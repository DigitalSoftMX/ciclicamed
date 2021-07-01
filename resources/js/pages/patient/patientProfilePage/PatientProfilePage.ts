import { PatientSidebarConfig } from '@config/PatientSidebar.config';
import { PatientData } from '@data/Patient/Patient.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { Role } from '@interface/User/Role.interface';
import { defineComponent } from '@vue/runtime-core';
import cloneDeep from 'lodash/cloneDeep';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        NavbarComponent: defineAsyncComponent(() => import('@component/general/navbar/NavbarComponent.vue')),
        SidebarComponent: defineAsyncComponent(() => import('@component/general/sidebar/SidebarComponent.vue')),
        UserProfileComponent: defineAsyncComponent(() => import('@component/user/userProfile/UserProfileComponent.vue')),
        UserPasswordComponent: defineAsyncComponent(() => import('@component/user/userPassword/UserPasswordComponent.vue')),
        UserProfileInfoComponent: defineAsyncComponent(() => import('@component/user/userProfileInfo/UserProfileInfoComponent.vue')),
    },
    props: {
        patient: {
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
            patientCopy: cloneDeep(this.patient),
            sidebarItems: PatientSidebarConfig,
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
       },
       updatePatientInfo(patient: Patient)
       {
           this.patientCopy = cloneDeep(patient);
       },
       updatePhoto(file: string)
       {
           const input = (document.getElementById('upasscPhoto') as HTMLImageElement);
           input.src = file;
       }
    },
})