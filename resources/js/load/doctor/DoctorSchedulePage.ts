import axios from 'axios';
import { createApp } from 'vue';
import {asset} from '@codinglabs/laravel-asset'
import vSelect from "vue-select-3/src";
import 'element-plus/lib/theme-chalk/index.css';
import DoctorSchedulePage from '@page/doctor/doctorSchedulePage/DoctorSchedulePage';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
	'_token' : document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
};
axios.defaults.baseURL = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content;
const app = createApp({
    components: {
		DoctorSchedulePage
	}
});

app.config.globalProperties.window = window;
app.config.performance = true;
app.mixin({
    methods: {
        asset: asset
    }
})
app.component('ImgComponent', require('@component/general/img/ImgComponent.vue').default);
app.component('NoConsultComponent', require('@component/general/error/NoConsultComponent.vue').default);
app.component('vSelect', vSelect);
app.component('ConfirmationAlertComponent', require('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default);
app.component('SuccessAlertComponent', require('@component/general/alert/SuccessAlertComponent.vue').default);
app.component('ErrorAlertComponent', require('@component/general/alert/ErrorAlertComponent.vue').default);
app.mount('#app');