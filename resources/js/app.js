import { createApp } from 'vue';

import MedicalConsultPage from './pages/medicalConsult/MedicalConsultPage.vue';
import UsersPage from './pages/user/users/UsersPage.vue';
	
const app = createApp({
    components: {
		ScheduleComponent: require('./components/schedule/ScheduleComponent/ScheduleComponent.vue').default,
		MedicalConsultPage: MedicalConsultPage,
		UsersPage: UsersPage,
		UploadFileComponent: require('@component/general/uploadFile/UploadFileComponent.vue').default,
		ProductPage: require('./pages/product/ProductPage.vue').default,
		PatientsDataTable: require('@component/dataTable/patientsTable/PatientsTableComponent.vue').default,
		EmployeesDataTable: require('@component/dataTable/employeesTable/EmployeesTableComponent.vue').default,
		CuestionarioMastografia: require('@component/medical/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent.vue').default,
		InterpretacionResultados: require('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue').default,
		ConsultProduct: require('./components/medical/consult/consultProduct/ConsultProductComponent.vue').default
	}
});

app.mount('#app');