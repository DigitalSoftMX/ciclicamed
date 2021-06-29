import axios from 'axios';
import { createApp, defineAsyncComponent } from 'vue';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
};

const app = createApp({
    components: {
		LoginComponent: defineAsyncComponent(() => import('@component/login/LoginComponent.vue')),
		SignupComponent: defineAsyncComponent(() => import('@component/signUp/SignupComponent.vue')),
		PatientDashboardPage: defineAsyncComponent(() => import('@page/patient/PatientDashboardPage.vue'))
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

app.config.performance = true;
app.mount('#app');