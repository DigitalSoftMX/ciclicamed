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
	import ScheduleComponent from './components/schedule/ScheduleComponent/ScheduleComponent.vue';

	import HistorialClinicoComponent from './components/attachtments/HistorialClinico/Parent/HistorialClinicoComponent.vue';

	import UroginecologiaComponent from './components/attachtments/Uroginecologia/UroginecologiaComponent.vue';
	import ClimaterioSaludOseaComponent from './components/attachtments/ClimaterioSaludOsea/ClimaterioSaludOseaComponent.vue';
	import MaternoFetalComponent from './components/attachtments/MaternoFetal/Parent/MaternoFetalComponent.vue';
	import NutricionPerinatalComponent from './components/attachtments/Nutricion/NutricionPerinatal/Parent/NutricionPerinatalComponent.vue';
	import BiologiaReproduccionComponent from './components/attachtments/BiologiaReproduccion/BiologiaReproduccionComponent.vue';
	import CirugiaEndoscopicaComponent from './components/attachtments/CirugiaEndoscopica/CirugiaEndoscopicaComponent.vue';
	import OncologiaComponent from './components/attachtments/Oncologia/OncologiaComponent.vue';
	import CitasSubsecuentesComponent from './components/attachtments/CitasSubsecuentes/CitasSubsecuentesComponent.vue';
	import ColposcopiaComponent from './components/attachtments/Colposcopia/ColposcopiaComponent.vue';
	
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
		HistorialClinicoComponent,
		UroginecologiaComponent,
		ClimaterioSaludOseaComponent,
		MaternoFetalComponent,
		NutricionPerinatalComponent,
		BiologiaReproduccionComponent,
		CirugiaEndoscopicaComponent,
		OncologiaComponent,
		CitasSubsecuentesComponent,
		ColposcopiaComponent
	}
});

app.mount('#app');