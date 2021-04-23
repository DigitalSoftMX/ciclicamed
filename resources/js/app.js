import { createApp } from 'vue';
import LoginComponent from  './components/login/LoginComponent';

//Pages
import UserProfilePage from './pages/user/UserProfilePage';
import UserPrescriptionPage from './pages/user/UserPrescriptionPage';
import UserTestPage from './pages/user/UserTestPage';

//Components
	//Alert
	import ErrorAlertComponent from './components/alert/ErrorAlertComponent';
	import SuccessAlertComponent from './components/alert/SuccessAlertComponent';
	//Prescription
	import PrescriptionComponent from './components/prescription/PrescriptionComponent';
	import PrescriptionModalComponent from './components/prescription/PrescriptionModalComponent';
	//User
	import UserCardComponent from  './components/user/UserCardComponent';
	import UserCardBioComponent from  './components/user/UserCardBioComponent';
	import UserProfileComponent from  './components/user/UserProfileComponent';
	//Schedule
	import ScheduleComponent from './components/schedule/ScheduleComponent';
	import NewScheduleComponent from './components/schedule/ScheduleComponent';
	import ScheduleActionComponent from './components/schedule/ScheduleActionComponent';
	import LateralScheduleComponent from './components/schedule/LateralScheduleComponent/LateralScheduleComponent';
	
const app = createApp({
    components: {
		LoginComponent,
		UserCardComponent,
		UserCardBioComponent,
		UserProfileComponent,
		ErrorAlertComponent,
		SuccessAlertComponent,
		UserProfilePage,
		UserPrescriptionPage,
		PrescriptionComponent,
		PrescriptionModalComponent,
		UserTestPage,
		ScheduleComponent,
		NewScheduleComponent,
		ScheduleActionComponent,
		LateralScheduleComponent
	}
});

app.mount('#app');