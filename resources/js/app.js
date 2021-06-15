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
		ConsultProduct: defineAsyncComponent(() => import('./components/payment/chargePayment/ChargePaymentComponent.vue'))
	}
});

app.mount('#app');