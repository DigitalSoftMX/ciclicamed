import { createApp } from 'vue';
import LoginComponent from  './components/login/LoginComponent';
import UserCardComponent from  './components/user/UserCardComponent';
import UserCardBioComponent from  './components/user/UserCardBioComponent';
import UserProfileComponent from  './components/user/UserProfileComponent';
import ErrorAlertComponent from './components/alert/ErrorAlertComponent';
import SuccessAlertComponent from './components/alert/SuccessAlertComponent';
import UserProfilePage from './pages/user/UserProfilePage';
import UserHealthPage from './pages/user/UserHealthPage';
import PatientPrescriptionComponent from './components/patient/PatientPrescriptionComponent';

const app = createApp({
    components: {
		LoginComponent,
		UserCardComponent,
		UserCardBioComponent,
		UserProfileComponent,
		ErrorAlertComponent,
		SuccessAlertComponent,
		UserProfilePage,
		UserHealthPage,
		PatientPrescriptionComponent
	}
});

app.mount('#app');