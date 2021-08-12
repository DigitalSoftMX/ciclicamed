import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import MedicamentTableModalComponent from './medicamentTableModal/MedicamentTableModalComponent';
import { MedicamentPaginationData } from '@data/Medical/MedicamentPagination.data';
import { MedicamentData } from '@data/Medical/Medicament.data';
import { Medicament } from '@interface/Medical/Medicament.interface';
import { MedicamentPagination } from '@interface/Medical/MedicamentPagination.interface';
import 'bootstrap';

/** 
 * @description Componente que muestra la lista medicamentos creados por el administrador
 * @class MedicamentTableComponent
 * @example <medicament-table-component></medicament-table-component>
*/
export default defineComponent({
    /** 
     * {@link MedicamentTableModalComponent}
     * @member MedicamentTableComponent.components
    */
    components: {
        MedicamentTableModalComponent
    },
    /**
    * Variables del componente
    * @member MedicamentTableComponent.data
    * @property {MedicamentPagination} medicamentData Guarda la información de los medicamentos que retorna el backend en paginación
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    * @property {Branch} confirmationAlert.title Guarda título del mensaje de confirmación del modal {@link ConfirmationAlertComponent}
    * @property {Branch} confirmationAlert.message Guarda el mensaje de confirmación del modal {@link ConfirmationAlertComponent}
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {Medicament} isNew Indica si el medicamento seleccionado es nuevo o existente
    */
    data() {
        return {
            medicamentData: MedicamentPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            successAlert: {
                title: '',
                message: ''
            },
            confirmationAlert: {
                title: '',
                message: ''
            },
            errors: [],
            medicamentSelected: MedicamentData,
            isNew: false
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link MedicamentTableComponent.getMedicamentData|medicamentos registrados}
     * @member MedicamentTableComponent.mounted
    */
    mounted() {
        this.getMedicamentData(1);
    },
    methods: {
        /** 
         * Crea un nuevo medicamento, asignando a la variable medicamentSelected datos vacíos, e indicando que es un nuevo medicamento
         * con asignación true de la variable isNew, a lo cual se procede a mostrar el componente {@link MedicamentTableModalComponent} con los datos del nuevo medicamento
         * @function MedicamentTableComponent.createMedicament
        */
        createMedicament()
        {
            this.medicamentSelected = MedicamentData;
            this.isNew = true;
            $('#brtmcBranchModal').modal('show');
        },
        /** 
         * Edita un medicamento, asignando a la variable medicamentSelected los datos del medicamento seleccionado, e indicando que es un medicamento existente
         * con asignación false de la variable isNew, a lo cual se procede a mostrar el componente {@link MedicamentTableModalComponent} con los datos del medicamento
         * @function MedicamentTableComponent.editMedicament
         * @param {Medicament} medicament Medicamento seleccionado
        */
        editMedicament(medicament: Medicament)
        {
            this.medicamentSelected = medicament;
            this.isNew = false;
            $('#brtmcBranchModal').modal('show');
        },
        /** 
         * Obtiene los medicamentos registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con los medicamentos, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * medicamentData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /productos/medicamentos/admin con el parámetro de la página. Si la petición es correcta se asigna la variable medicamentData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function MedicamentTableComponent.getMedicamentData
        */
        getMedicamentData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.medicamentData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<MedicamentPagination>(`/productos/medicamentos/admin?page=${this.paginationActive}`)
                .then(response => {
                    this.medicamentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    ;
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene los medicamentos registradas en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los medicamentos, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /productos/medicamentos/admin con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable medicamentData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function MedicamentTableComponent.getMedicamentDataQuery
        */
        getMedicamentDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<MedicamentPagination>(`/productos/medicamentos/admin`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.medicamentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    ;
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})