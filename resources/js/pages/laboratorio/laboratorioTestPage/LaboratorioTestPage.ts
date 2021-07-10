import { PatientData } from '@data/Patient/Patient.data';
import { defineComponent } from '@vue/runtime-core';
import cloneDeep from 'lodash/cloneDeep';
import { PropType } from 'vue';
import axios from 'axios';
import { Patient } from '@interface/Patient/Patient.interface';
import { ImagenologiaSidebarConfig } from '@config/ImagenologiaSidebar.config';
import { TestData } from '@data/Medical/Test.data';
import UploadFileComponent from '@component/general/uploadFile/UploadFileComponent';
import { Test } from '@interface/Medical/Test.interface';
import ConsultPatientProfileComponent from '@component/medical/consult/consultPatientProfile/ConsultPatientProfileComponent';
import TestUploadComponent from '@component/medical/test/testUpload/TestUploadComponent';
import { LaboratorioSidebarConfig } from '@config/LaboratorioSidebar.config';

export default defineComponent({
    components: {
        UploadFileComponent,
        ConsultPatientProfileComponent,
        TestUploadComponent,
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
        TestTableComponent: require('@component/medical/test/testTable/TestTableComponent.vue').default
    },
    props: {
        laboratorio: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        role: {
            type: String as PropType<String>,
            default: ''
        },
        consult: {
            type: Number,
            default: -1
        },
    },
    data() {
        return {
            employeeCopy: cloneDeep(this.laboratorio),
            sidebarItems: LaboratorioSidebarConfig,
            isSidebarOpen: false,
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content,
            errors: [],
            isTestUploadEnabled: false,
            testSelected: TestData,
            clock: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            sendToServer: false
        };
    },
    mounted() {
    },
    computed:
    {
        testOrders(): any
        {
            return this.testSelected.order.product.order_annotations!
        },
        productCode(): string
        {
            return this.testSelected.order?.product?.product_code! ?? this.testSelected.order?.product?.supplier_code!;
        }
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
        showTableComponent()
        {
            this.isTestUploadEnabled = false;
        },
        showUploadComponent(test: Test)
        {
            this.testSelected = test;
            this.isTestUploadEnabled = true;
        },
        showConfirmationAlert()
        {
            $('#itpConfirmation').modal('show');
        },
        changeSidebarStatus()
        {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        sendToServerData()
        {
            this.sendToServer = true;
        },
        resetSendToServer(errors: any)
        {
            this.errors = errors;
            this.sendToServer = false;
        }
    },
})