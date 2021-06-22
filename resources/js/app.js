import { createApp, defineAsyncComponent } from 'vue';

import MedicalConsultPage from './pages/medicalConsult/MedicalConsultPage.vue';
import UsersPage from './pages/user/users/UsersPage.vue';
	
const app = createApp({
    components: {
		ScheduleComponent: defineAsyncComponent(() => import('./components/schedule/ScheduleComponent.vue')),
		// MedicalConsultPage: MedicalConsultPage,
		// UsersPage: UsersPage,
		// UploadFileComponent: defineAsyncComponent(() => ('@component/general/uploadFile/UploadFileComponent.vue')),
		// ProductPage: defineAsyncComponent(() => ('./pages/product/ProductPage.vue')),
		// PatientsDataTable: defineAsyncComponent(() => ('@component/dataTable/patientsTable/PatientsTableComponent.vue')),
		// EmployeesDataTable: defineAsyncComponent(() => ('@component/dataTable/employeesTable/EmployeesTableComponent.vue')),
		// CuestionarioMastografia: defineAsyncComponent(() => ('@component/medical/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent.vue')),
		// InterpretacionResultados: defineAsyncComponent(() => ('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue')),
		ConsultProduct: defineAsyncComponent(() => import('./components/payment/chargePayment/ChargePaymentComponent.vue')),
		PatientDebtTable: defineAsyncComponent(() => import('./components/payment/patientDebtTable/PatientDebtTableComponent.vue')),
		DebtsTable: defineAsyncComponent(() => import('./components/payment/paymentDebtTable/PaymentDebtTableComponent.vue')),
		DebtsData: defineAsyncComponent(() => import('./components/payment/debtsTable/DebtsTableComponent.vue')),
		TestTable: defineAsyncComponent(() => import('./components/medical/test/testTable/TestTableComponent.vue')),
		TestUpload: defineAsyncComponent(() => import('./components/medical/test/testUpload/TestUploadComponent.vue')),
		CheckupSchedule: defineAsyncComponent(() => import('./components/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue')),
	}
});

app.mount('#app');