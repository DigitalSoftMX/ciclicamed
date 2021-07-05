import axios from 'axios';
import { createApp, defineAsyncComponent } from 'vue';
import {asset} from '@codinglabs/laravel-asset'

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
	'_token' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
};
axios.defaults.baseURL = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content;
const app = createApp({
    components: {
		LoginComponent: defineAsyncComponent(() => import('@component/login/LoginComponent.vue')),
		SignupComponent: defineAsyncComponent(() => import('@component/signUp/SignupComponent.vue')),
		PatientDashboardPage: defineAsyncComponent(() => import('@page/patient/patientDashboardPage/PatientDashboardPage.vue')),
		PatientPrescriptionPage: defineAsyncComponent(() => import('@page/patient/patientPrescriptionPage/PatientPrescriptionPage.vue')),
		PatientTestPage: defineAsyncComponent(() => import('@page/patient/patientTestPage/PatientTestPage.vue')),
		PatientProfilePage: defineAsyncComponent(() => import('@page/patient/patientProfilePage/PatientProfilePage.vue')),

		DoctorDashboardPage: defineAsyncComponent(() => import('@page/doctor/doctorDashboardPage/DoctorDashboardPage.vue')),
		DoctorConsultPage: defineAsyncComponent(() => import('@page/doctor/doctorConsultPage/DoctorConsultPage.vue')),
		DoctorProfilePage: defineAsyncComponent(() => import('@page/doctor/doctorProfilePage/DoctorProfilePage.vue')),

		CheckupDashboardPage: defineAsyncComponent(() => import('@page/checkup/checkupDashboardPage/CheckupDashboardPage.vue')),
		CheckupCheckupPage: defineAsyncComponent(() => import('@page/checkup/checkupCheckupPage/CheckupCheckupPage.vue')),
		CheckupProfilePage: defineAsyncComponent(() => import('@page/checkup/checkupProfilePage/CheckupProfilePage')),

		AsistenteDashboardPage: defineAsyncComponent(() => import('@page/asistente/AsistenteDashboardPage/AsistenteDashboardPage.vue')),
		AsistenteProductPage: defineAsyncComponent(() => import('@page/asistente/AsistenteProductPage/AsistenteProductPage.vue')),
		AsistenteProfilePage: defineAsyncComponent(() => import('@page/asistente/AsistenteProfilePage/AsistenteProfilePage.vue')),
		// ScheduleComponent: defineAsyncComponent(() => import('./components/schedule/ScheduleComponent.vue')),
		// MedicalConsultPage: MedicalConsultPage,
		// UsersPage: UsersPage,
		// UploadFileComponent: defineAsyncComponent(() => ('@component/general/uploadFile/UploadFileComponent.vue')),
		// ProductPage: defineAsyncComponent(() => ('./pages/product/ProductPage.vue')),
		// PatientsDataTable: defineAsyncComponent(() => ('@component/dataTable/patientsTable/PatientsTableComponent.vue')),
		// EmployeesDataTable: defineAsyncComponent(() => ('@component/dataTable/employeesTable/EmployeesTableComponent.vue')),
		// CuestionarioMastografia: defineAsyncComponent(() => ('@component/medical/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent.vue')),
		// InterpretacionResultados: defineAsyncComponent(() => ('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue')),
		// ConsultProduct: defineAsyncComponent(() => import('./components/payment/chargePayment/ChargePaymentComponent.vue')),
		// PatientDebtTable: defineAsyncComponent(() => import('./components/payment/patientDebtTable/PatientDebtTableComponent.vue')),
		// DebtsTable: defineAsyncComponent(() => import('./components/payment/paymentDebtTable/PaymentDebtTableComponent.vue')),
		// DebtsData: defineAsyncComponent(() => import('./components/payment/debtsTable/DebtsTableComponent.vue')),
		// TestTable: defineAsyncComponent(() => import('./components/medical/test/testTable/TestTableComponent.vue')),
		// TestUpload: defineAsyncComponent(() => import('./components/medical/test/testUpload/TestUploadComponent.vue')),
		// CheckupSchedule: defineAsyncComponent(() => import('./components/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue')),
		// CheckupTable: defineAsyncComponent(() => import('./components/checkup/checkupTable/CheckupTableComponent.vue'))
	}
});

app.config.globalProperties.window = window;
app.config.performance = true;
app.mixin({
    methods: {
        asset: asset
    }
})
app.mount('#app');