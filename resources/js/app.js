import { createApp } from 'vue';

//Pages
import UserProfilePage from './pages/user/UserProfilePage';
import UserPrescriptionPage from './pages/user/UserPrescriptionPage';
import UserTestPage from './pages/user/UserTestPage';
import MedicalConsultPage from './pages/medicalConsult/MedicalConsultPage.vue';
	
const app = createApp({
    components: {
		MedicalConsultPage: MedicalConsultPage
	}
});

app.mount('#app');