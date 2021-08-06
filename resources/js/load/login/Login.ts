import axios from 'axios';
import { createApp } from 'vue';
import {asset} from '@codinglabs/laravel-asset'
import 'element-plus/lib/theme-chalk/index.css';
import LoginComponent from '@component/login/LoginComponent';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
	'_token' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
};
axios.defaults.baseURL = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content;
const app = createApp({
    components: {
		LoginComponent
	}
});

app.component('ImgComponent', require('@component/general/img/ImgComponent.vue').default);
app.component('SuccessAlertComponent', require('@component/general/alert/SuccessAlertComponent.vue').default);
app.component('ErrorAlertComponent', require('@component/general/alert/ErrorAlertComponent.vue').default);
app.mount('#app');