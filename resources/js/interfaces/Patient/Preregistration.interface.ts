export interface Preregistration {
    id: number;
    user_id: number;
    data: {
        type: string;
        form: {
            expediente: string;
            lugarNacimiento: {
                ciudad: string,
                estado: string
            };
            estadoCivil: string;
            escolaridad: string;
            ocupacion: string;
            religion: string;
            seguroGastos: {
                check: boolean,
                description: string
            };
            datosPareja: {
                apellidos: string,
                nombre: string,
                edad: number,
                ocupacion: string,
                telefono: string,
                correo: string
            };
            recomendacion: {
                check: boolean,
                description: string,
                nombreRecomienda: string
            };
            facebook: boolean;
            instagram: boolean;
            folletos: boolean;
            paginaInternet: boolean;
            busquedaInternet: boolean;
            lugarTrabajo: string;
            hijos: {
                check: boolean,
                description: string
            }
        }
    }
}
