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
		PruebaHostComponent: PruebaHostComponent
	}
});

app.mount('#app');