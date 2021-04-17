import { createApp } from 'vue';
import LoginComponent from  './components/login/LoginComponent';
import UserCardComponent from  './components/user/UserCardComponent';
import UserCardBioComponent from  './components/user/UserCardBioComponent';
import UserProfileComponent from  './components/user/UserProfileComponent';
import ErrorAlertComponent from './components/alert/ErrorAlertComponent';
import SuccessAlertComponent from './components/alert/SuccessAlertComponent';

const app = createApp({
    components: {
		LoginComponent,
		UserCardComponent,
		UserCardBioComponent,
		UserProfileComponent,
		ErrorAlertComponent,
		SuccessAlertComponent
	}
});

app.mount('#app');