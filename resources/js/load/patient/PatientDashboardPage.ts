import axios from 'axios';
import { createApp } from 'vue';
import vSelect from "vue-select-3/src";
import 'element-plus/lib/theme-chalk/index.css';
import PatientDashboardPage from '@page/patient/patientDashboardPage/PatientDashboardPage';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
	'_token' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
};
axios.defaults.baseURL = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content;
const app = createApp({
    components: {
		PatientDashboardPage
	}
});

app.config.performance = true;
app.component('ImgComponent', require('@component/general/img/ImgComponent.vue').default);
app.component('vSelect', vSelect);
app.component('SuccessAlertComponent', require('@component/general/alert/SuccessAlertComponent.vue').default);
app.component('ErrorAlertComponent', require('@component/general/alert/ErrorAlertComponent.vue').default);
app.mount('#app');