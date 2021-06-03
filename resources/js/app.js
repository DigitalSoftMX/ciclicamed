import { createApp } from 'vue';

import MedicalConsultPage from './pages/medicalConsult/MedicalConsultPage.vue';
import UsersPage from './pages/user/users/UsersPage.vue';
	
const app = createApp({
    components: {
		MedicalConsultPage: MedicalConsultPage,
		UsersPage: UsersPage,
		UploadFileComponent: require('@component/general/uploadFile/UploadFileComponent.vue').default,
		ProductPage: require('./pages/product/ProductPage.vue').default,
		PatientsDataTable: require('@component/dataTable/patientsTable/PatientsTableComponent.vue').default,
		EmployeesDataTable: require('@component/dataTable/employeesTable/EmployeesTableComponent.vue').default,
		CuestionarioMastografia: require('@component/medical/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent.vue').default,
		InterpretacionResultados: require('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue').default,
	}
});

app.mount('#app');