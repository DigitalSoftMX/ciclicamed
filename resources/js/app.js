import { createApp } from 'vue';

//Pages
import UserProfilePage from './pages/user/UserProfilePage';
import UserPrescriptionPage from './pages/user/UserPrescriptionPage';
import UserTestPage from './pages/user/UserTestPage';
import MedicalConsultPage from './pages/medicalConsult/MedicalConsultPage.vue';
import UsersPage from './pages/user/users/UsersPage.vue';
import PruebaHostComponent from './components/test/Andrologia/PruebaHost/PruebaHostComponent.vue';
	
const app = createApp({
    components: {
		MedicalConsultPage: MedicalConsultPage,
		UsersPage: UsersPage,
		UploadFileComponent: require('./components/general/uploadFile/UploadFileComponent.vue').default,
		ProductPage: require('./pages/product/ProductPage.vue').default,
		PatientsDataTable: require('./components/dataTable/patientsTable/PatientsTableComponent.vue').default,
		EmployeesDataTable: require('./components/dataTable/employeesTable/EmployeesTableComponent.vue').default,
		CuestionarioMastografia: require('./components/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent.vue').default,
		InterpretacionResultados: require('./components/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue').default,
	}
});

app.mount('#app');