import { CajaSidebarConfig } from '@config/CajaSidebar.config';
import { PatientData } from '@data/Patient/Patient.data';
import { Patient } from '@interface/Patient/Patient.interface';
import DebtPage from '@page/general/debt/DebtPage';
import PaymentPage from '@page/general/payment/PaymentPage';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        DebtPage,
        PaymentPage,
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
    },
    props: {
        caja: {
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
            sidebarItems: CajaSidebarConfig,
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