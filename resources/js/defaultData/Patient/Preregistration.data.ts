import { Preregistration } from "../../interfaces/Patient/Preregistration.interface";

export const PreregistrationData: Preregistration = {
    id: -1,
    user_id: -1,
    data: {
        type: '',
        form: {
            expediente: '',
            lugarNacimiento: {
                ciudad: '',
                estado: ''
            },
            seguroGastos: {
                check: false,
                description: ''
            },
            datosPareja: {
                apellidos: '',
                nombre: '',
                edad: -1,
                ocupacion: '',
                telefono: '',
                correo: ''
            },
            recomendacion: {
                check: false,
                description: '',
                nombreRecomienda: ''
            },
            facebook: false,
            instagram: false,
            folletos: false,
            paginaInternet: false,
            busquedaInternet: false,
            lugarTrabajo: '',
            hijos: {
                check: false,
                description: ''
            },
            escolaridad: '',
            estadoCivil: '',
            ocupacion: '',
            religion: ''
        }
    }
}