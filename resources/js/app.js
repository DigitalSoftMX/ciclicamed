import { createApp } from 'vue';
import LoginComponent from  './components/login/LoginComponent';
import UserCardComponent from  './components/user/UserCardComponent';
import UserCardBioComponent from  './components/user/UserCardBioComponent';
import UserProfileComponent from  './components/user/UserProfileComponent';

createApp({
    components: {
		LoginComponent,
		UserCardComponent,
		UserCardBioComponent,
		UserProfileComponent
	}
}).mount('#app');