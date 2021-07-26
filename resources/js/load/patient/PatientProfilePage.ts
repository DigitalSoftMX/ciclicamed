import axios from 'axios';
import { createApp } from 'vue';
import PatientProfilePage from '@page/patient/patientProfilePage/PatientProfilePage';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
	'_token' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
};
axios.defaults.baseURL = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content;
const app = createApp({
    components: {
		PatientProfilePage
	}
});

app.config.performance = true;
app.component('ImgComponent', require('@component/general/img/ImgComponent.vue').default);
app.mount('#app');