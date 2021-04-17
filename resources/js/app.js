import { createApp } from 'vue';
import LoginComponent from  './components/login/LoginComponent';
import UserCardComponent from  './components/user/UserCardComponent';
import UserCardBioComponent from  './components/user/UserCardBioComponent';
import UserProfileComponent from  './components/user/UserProfileComponent';


const app = createApp({
    components: {
		LoginComponent,
		UserCardComponent,
		UserCardBioComponent,
		UserProfileComponent
	}
});

app.mount('#app');