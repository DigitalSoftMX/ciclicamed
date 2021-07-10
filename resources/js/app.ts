import axios from 'axios';
import { createApp, defineAsyncComponent } from 'vue';
import {asset} from '@codinglabs/laravel-asset'
import vSelect from "vue-select-3/src";
import 'element-plus/lib/theme-chalk/index.css';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
	'_token' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
};
axios.defaults.baseURL = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content;
const app = createApp({
    components: {
		LoginComponent: require('@component/login/LoginComponent.vue').default,
		SignupComponent: require('@component/signUp/SignupComponent.vue').default,
		PatientDashboardPage: require('@page/patient/patientDashboardPage/PatientDashboardPage.vue').default,
		PatientPrescriptionPage: require('@page/patient/patientPrescriptionPage/PatientPrescriptionPage.vue').default,
		PatientTestPage: require('@page/patient/patientTestPage/PatientTestPage.vue').default,
		PatientProfilePage: require('@page/patient/patientProfilePage/PatientProfilePage.vue').default,

		DoctorDashboardPage: require('@page/doctor/doctorDashboardPage/DoctorDashboardPage.vue').default,
		DoctorConsultPage: require('@page/doctor/doctorConsultPage/DoctorConsultPage.vue').default,
		DoctorProfilePage: require('@page/doctor/doctorProfilePage/DoctorProfilePage.vue').default,

		CheckupDashboardPage: require('@page/checkup/checkupDashboardPage/CheckupDashboardPage.vue').default,
		CheckupCheckupPage: require('@page/checkup/checkupCheckupPage/CheckupCheckupPage.vue').default,
		CheckupProfilePage: require('@page/checkup/checkupProfilePage/CheckupProfilePage.vue').default,

		AsistenteDashboardPage: require('@page/asistente/AsistenteDashboardPage/AsistenteDashboardPage.vue').default,
		AsistenteProductPage: require('@page/asistente/AsistenteProductPage/AsistenteProductPage.vue').default,
		AsistenteProfilePage: require('@page/asistente/AsistenteProfilePage/AsistenteProfilePage.vue').default,

		NurseDashboardPage: require('@page/enfermera/nurseDashboardPage/NurseDashboardPage.vue').default,
		NurseConsultPage: require('@page/enfermera/nurseConsultPage/NurseConsultPage.vue').default,
		NursePrescriptionPage: require('@page/enfermera/nursePrescriptionPage/NursePrescriptionPage.vue').default,
		NurseTestPage: require('@page/enfermera//nurseTestPage/NurseTestPage.vue').default,
		NurseProfilePage: require('@page/enfermera/nurseProfilePage/NurseProfilePage.vue').default,

		ImagenologiaDashboardPage: require('@page/imagenologia/imagenologiaDashboardPage/ImagenologiaDashboardPage.vue').default,
		ImagenologiaConsultPage: require('@page/imagenologia/imagenologiaConsultPage/ImagenologiaConsultPage.vue').default,
		ImagenologiaTestPage: require('@page/imagenologia/imagenologiaTestPage/ImagenologiaTestPage.vue').default,
		ImagenologiaProfilePage: require('@page/imagenologia/imagenologiaProfilePage/ImagenologiaProfilePage.vue').default,

		LaboratorioDashboardPage: require('@page/laboratorio/laboratorioDashboardPage/LaboratorioDashboardPage.vue').default,
		LaboratorioTestPage: require('@page/laboratorio/laboratorioTestPage/LaboratorioTestPage.vue').default,
		LaboratorioProfilePage: require('@page/laboratorio/laboratorioProfilePage/LaboratorioProfilePage').default,

		CajaDashboardPage: require('@page/caja/cajaDashboardPage/CajaDashboardPage.vue').default,
		CajaProfilePage: require('@page/caja/cajaProfilePage/CajaProfilePage.vue').default,

		// LaboratorioDashboardPage: require('@page/laboratorio/laboratorioDashboardPage/LaboratorioDashboardPage.vue').default,
		// LaboratorioConsultPage: require('@page/laboratorio/laboratorioConsultPage/LaboratorioConsultPage.vue').default,
		// LaboratorioProfilePage: require('@page/laboratorio/laboratorioProfilePage/LaboratorioProfilePage.vue').default,
		// ScheduleComponent: require('./components/schedule/ScheduleComponent.vue').default,
		// MedicalConsultPage: MedicalConsultPage,
		// UsersPage: UsersPage,
		// UploadFileComponent: defineAsyncComponent(() => ('@component/general/uploadFile/UploadFileComponent.vue').default,
		// ProductPage: defineAsyncComponent(() => ('./pages/product/ProductPage.vue').default,
		// PatientsDataTable: defineAsyncComponent(() => ('@component/dataTable/patientsTable/PatientsTableComponent.vue').default,
		// EmployeesDataTable: defineAsyncComponent(() => ('@component/dataTable/employeesTable/EmployeesTableComponent.vue').default,
		// CuestionarioMastografia: defineAsyncComponent(() => ('@component/medical/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent.vue').default,
		// InterpretacionResultados: defineAsyncComponent(() => ('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue').default,
		// ConsultProduct: require('./components/payment/chargePayment/ChargePaymentComponent.vue').default,
		// PatientDebtTable: require('./components/payment/patientDebtTable/PatientDebtTableComponent.vue').default,
		// DebtsTable: require('./components/payment/paymentDebtTable/PaymentDebtTableComponent.vue').default,
		// DebtsData: require('./components/payment/debtsTable/DebtsTableComponent.vue').default,
		// TestTable: require('./components/medical/test/testTable/TestTableComponent.vue').default,
		// TestUpload: require('./components/medical/test/testUpload/TestUploadComponent.vue').default,
		// CheckupSchedule: require('./components/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue').default,
		// CheckupTable: require('./components/checkup/checkupTable/CheckupTableComponent.vue').default
	}
});

app.config.globalProperties.window = window;
app.config.performance = true;
app.mixin({
    methods: {
        asset: asset
    }
})
app.component('ImgComponent', require('@component/general/img/ImgComponent.vue').default);
app.component('NoConsultComponent', require('@component/general/error/NoConsultComponent.vue').default);
app.component('vSelect', vSelect);
app.component('ConfirmationAlertComponent', require('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default);
app.component('SuccessAlertComponent', require('@component/general/alert/SuccessAlertComponent.vue').default);
app.component('ErrorAlertComponent', require('@component/general/alert/ErrorAlertComponent.vue').default);
app.mount('#app');