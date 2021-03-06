import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Test } from '@interface/Medical/Test.interface';
import { CheckupPaginationData } from '@data/Checkup/CheckupPagination.data';
import { CheckupPagination } from '@interface/Checkup/CheckupPagination.interface';
import { Checkup } from '@interface/Checkup/Checkup.interface';
import { CheckupListData } from '@data/Checkup/CheckupList.data';
import { CheckupMatureData } from '@data/Checkup/options/CheckupMature.data';
import { CheckupMujerCiclicaData } from '@data/Checkup/options/CheckupMujerCiclica.data';
import { CheckupTeenData } from '@data/Checkup/options/CheckupTeen.data';
import { CheckupMom } from '@data/Checkup/options/CheckupMom.data';
import { CheckupDiagnosticoPrenatal } from '@data/Checkup/options/CheckupDiagnosticoPrenatal.data';
import { CheckupConvenioInstitucional } from '@data/Checkup/options/CheckupConvenioInstitucional.data';
import { CheckupItem } from '@interface/Checkup/CheckupItem.interface';
import { CheckupList } from '@interface/Checkup/CheckupList.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import { Select } from '@interface/General/Select.interface';
import { CheckupData } from '@data/Checkup/Checkup.data';
import $ from 'jquery';
require('bootstrap');

/** 
 * @description Componente que muestra la checkups agendados mediante el uso de una tabla
 * @class CheckupTableComponent
 * @example <checkup-table-component :title="" :role=""></checkup-table-component>
*/
export default defineComponent({
    /** 
     * {@link CheckupInfoComponent}
     * {@link SuccessAlertComponent}
     * {@link ConfirmationAlertComponent}
     * {@link EmptyErrorComponent}
     * {@link CheckupSheduleComponent}
     * @member CheckupTableComponent.components
    */
    components: {
        CheckupInfoComponent: require('@component/checkup/checkupInfo/CheckupInfoComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ConfirmationAlertComponent: require('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default,
        EmptyErrorComponent: require('@component/general/error/EmptyErrorComponent.vue').default,
        CheckupSheduleComponent: require('@component/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue').default
    },
    /**
    * Propiedades que recibe el componente
    * @member CheckupTableComponent.props
    * @property {string} title (Obligatorio) Título de la tabla
    * @property {string} role (Obligatorio) Rol del usuario
    */
    props: {
        title: {
            type: String,
            default: 'Checkup pendientes'
        },
        role: {
            type: String,
            default: 'Administrador'
        }
    },
    /**
    * Variables del componente
    * @member CheckupTableComponent.data
    * @property {CheckupPaginationData} checkupData Guarda la información de los checkup que retorna el backend en paginación
    * @property {number} paginationPages Guarda el número de páginas de checkupData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {CheckupListData} checkupSelected Datos de los estudios y citas del checkup seleccionado
    * @property {Checkup} checkupInfoSelected Datos del checkup seleccionado
    * @property {number} checkupIDSelected Id del checkup seleccionado
    * @property {Select} branchesList Lista de las sucursales habilitadas
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    */
    data() {
        return {
            checkupData: CheckupPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            checkupSelected: CheckupListData,
            checkupInfoSelected: CheckupData,
            checkupIDSelected: 0,
            branchesList: [] as Select[],
            successAlert: {
                title: '',
                message: ''
            },
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los checkups creados mediante la función {@link CheckupTableComponent.getCheckupData}
     * Al iniciar el componente, se obtienen los datos de las sucursales habilitadas la función {@link CheckupTableComponent.getBranchesList}
     * @member CheckupTableComponent.mounted
    */
    mounted() {
        this.getCheckupData(1);
        this.getBranchesList();
    },
    methods: {
        /** 
         * Formatea la fecha provista por el parámetro a un formato local (ejemplo: 01-01-2000)
         * @function CheckupTableComponent.formatDate
         * @param {string} date Fecha de creación del checkup
         * @returns string
        */
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        /** 
         * Regresa el nombre completo del paciente
         * @function CheckupTableComponent.formatPatientName
         * @param {Test} test Datos del estudio clínico
         * @returns string
        */
        formatPatientName(test: Test)
        {
            return `${test.patient!.first_name} ${test.patient!.last_name}`;
        },
        /** 
         * Obtiene una lista de los checkups pendientes registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con los checkups, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * branchData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /checkup/pendientes con el parámetro de la página. Si la petición es correcta se asigna la variable checkupData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function CheckupTableComponent.getCheckupData
        */
        getCheckupData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.checkupData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<CheckupPagination>(`/checkup/pendientes?page=${this.paginationActive}`)
                .then(response => {
                    this.checkupData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene una lista de los checkups pendientes registradas en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los checkups, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /checkup/pendientes con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable checkupData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function CheckupTableComponent.getCheckupDataQuery
        */
        getCheckupDataQuery()
        {
            if(this.activateSearch || this.query.length > 0)
            {
                this.loading = true;
                const queryPagination = this.query === '' ? this.paginationActive : 0;
                axios.get<CheckupPagination>(`/checkup/pendientes`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.checkupData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
                this.activateSearch = this.query === '' ? false : true;
            }
        },
        /** 
         * Obtiene los datos del checkup seleccionado consultando al backend por la información mediante su ID. Si la petición es correcta se asigna a la variable checkupInfoSelected
         * la información provista por el backend. La variable checkupSelected guarda la información de las citas y estudios que contiene el checkup junto con el horario y sucursal
         * con el que fueron agendadas para mostrarse correctamente en el componente {@link CheckupSheduleComponent} utilizando la función {@link BranchTableComponent.setCheckupData}.
         * Si el parametro category es igual a show, muestra el componente {@link CheckupInfoComponent} en caso contrario muestra el componente {@link CheckupSheduleComponent}
         * @function CheckupTableComponent.getBranchDataQuery
         * @param {number} id ID del checkup
         * @param {string} category Categoría (componente) a mostrar
        */
        getCheckupDataByID(id: number, category: string)
        {
            axios.get<Checkup>(`/checkup/${id}`)
            .then(response => {
                this.checkupInfoSelected = response.data;
                this.checkupSelected = setCheckupData(response.data, this.checkupSelected, id);
                category === 'show' ? $('#ckpscCheckupInfo').modal('show') : $('#ckpscCheckups').modal('show');
            })
            .catch(error => {
                
            })
        },
        /** 
         * Muestra el componente {@link ConfirmationAlertComponent} antes de cancelar un checkup, asignando el id del checkup a la variable checkupIDSelected
         * @function CheckupTableComponent.showCancelConfirm
         * @param {number} id ID del checkup
        */
        showCancelConfirm(id: number)
        {
            this.checkupIDSelected = id;
            $('#cktcConfirmation').modal('show');
        },
        /** 
         * Cancela el checkup seleccionado, enviando una petición a la URI /checkup/{id}, si la petición es correcta muestra un mensaje de confirmación utilizando el componente
         * {@link SuccessAlertComponent}, a lo cual procede a eliminar de la tabla el checkup eliminado
         * @function CheckupTableComponent.cancelCheckup
         * @param {number} id ID del checkup
        */
        cancelCheckup()
        {
            axios.delete<Checkup>(`/checkup/${this.checkupIDSelected}`)
            .then(response => {
                this.successAlert.title = 'Checkup cancelado';
                this.successAlert.message = 'Checkup cancelado correctamente';
                this.checkupData.data = this.checkupData.data.filter(item => item.id !== this.checkupIDSelected);
                $('#cktcSuccess').modal('show');
            })
            .catch(error => {
                
            })
        },
        /** 
         * Obtiene la lista de sucursales habilitados registrados en el servidor, en caso de que la petición sea correcta transforma la lista de sucursales
         * en un array del tipo Select para utilizarlo en el componente {@link CheckupSheduleComponent}
         * @function CheckupTableComponent.getBranchesList
        */
        getBranchesList(): void
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branchesList = response.data.map(branch => {
                    return {
                        id: branch.id,
                        childID: branch.id, 
                        text: branch.name,
                    }
                });
            })
            .catch(error => {
                
            })
        },
    },
})

/** 
 * Verifica cada uno de los estudios y citas registrados en cada uno de los checkups predefinidos en el sistema (carpeta defaultData/Checkup/options)
 * comparandolo con el checkup seleccionado, con la finalidad de asignar los datos (sucursal, fecha de cita, hora de cita) a la variable checkupSelected y mostrarlos
 * correctamente en el componente {@link CheckupSheduleComponent}
 * @function CheckupTableComponent.setCheckupData
 * @param {Checkup} checkup Checkup seleccionado
 * @param {CheckupList} checkupSelected Checkup al cual se le asignan los nuevos datos
 * @param {number} checkupID ID del checkup seleccionado
 * @returns {CheckupList} Retorna los datos del backend en un formato compatible con el componente {@link CheckupSheduleComponent}
*/
export function setCheckupData(checkup: Checkup, checkupSelected: CheckupList, checkupID: number): CheckupList
{
    checkupSelected.patient_id = checkup.patient_id;
    checkupSelected.name = checkup.category!.name;
    checkupSelected.checkupcategory_id = checkup.category!.id;
    checkupSelected.checkupList = setCheckupList(checkup.category!.name);
    checkupSelected.checkup_id = checkupID;
    checkup.consults!.map(item => {
        let index = -1;
        if(item.test_scheduled! === null)
        {
            index = checkupSelected.checkupList.findIndex(data => data.medicalspecialty_id === item.medicalspecialty_id);
        } else {
            index = checkupSelected.checkupList.findIndex(data => data.code === item.test_scheduled!.order!.product.product_code && item.consult_reason.includes(data.name));
        }
        checkupSelected.checkupList[index].branch_id = item.branch_id;
        checkupSelected.checkupList[index].medicalconsult_id = item.id;
        checkupSelected.checkupList[index].consult_schedule_start = item.consult_schedule_start;
        checkupSelected.checkupList[index].consult_schedule_finish = item.consult_schedule_finish;
    });
    // checkupSelected.checkupList = checkupSelected.checkupList.filter(item => moment(item.consult_schedule_start).isAfter(moment()));
    return checkupSelected;
}

/** 
 * Retorna la lista de estudios y consultas de los checkups predefinidos en el sistema (carpeta defaultData/Checkup/options) de acuerdo a la categoría a la que pertenezcan
 * @function CheckupTableComponent.setCheckupList
 * @param {string} category Categoría del checkup
 * @returns {CheckupItem[]} Retorna la lista de estudios y consultas del checkup seleccionado
*/
export function setCheckupList(category: string): CheckupItem[]
{
    switch(category)
    {
        case 'Mature':
            return CheckupMatureData;
        case 'Mujer cíclica':
            return CheckupMujerCiclicaData;
        case 'Teen':
            return CheckupTeenData;
        case 'Mom':
            return CheckupMom;
        case 'Diagnóstico prenatal':
            return CheckupDiagnosticoPrenatal;
        case 'Convenio institucional':
            return CheckupConvenioInstitucional;
        default:
            return [];
    }
}