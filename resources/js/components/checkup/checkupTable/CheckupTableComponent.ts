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
    * @property {string} title (Obligatorio) T??tulo de la tabla
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
    * @property {CheckupPaginationData} checkupData Guarda la informaci??n de los checkup que retorna el backend en paginaci??n
    * @property {number} paginationPages Guarda el n??mero de p??ginas de checkupData para mostrar el n??mero de p??ginas en la paginaci??n de la tabla
    * @property {number} paginationActive Guarda el n??mero de p??gina activa de la tabla
    * @property {string} query Guarda la b??squeda realizada en el input de b??squeda de la tabla
    * @property {boolean} activateSearch Activa o no la b??squeda desde el input de b??squeda de la tabla
    * @property {boolean} loading Activa o no la animaci??n de carga dentro de la tabla
    * @property {CheckupListData} checkupSelected Datos de los estudios y citas del checkup seleccionado
    * @property {Checkup} checkupInfoSelected Datos del checkup seleccionado
    * @property {number} checkupIDSelected Id del checkup seleccionado
    * @property {Select} branchesList Lista de las sucursales habilitadas
    * @property {string} successAlert.title Guarda el t??tulo para el modal del componente {@link SuccessAlertComponent}
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
     * Al iniciar el componente, se obtienen los datos de los checkups creados mediante la funci??n {@link CheckupTableComponent.getCheckupData}
     * Al iniciar el componente, se obtienen los datos de las sucursales habilitadas la funci??n {@link CheckupTableComponent.getBranchesList}
     * @member CheckupTableComponent.mounted
    */
    mounted() {
        this.getCheckupData(1);
        this.getBranchesList();
    },
    methods: {
        /** 
         * Formatea la fecha provista por el par??metro a un formato local (ejemplo: 01-01-2000)
         * @function CheckupTableComponent.formatDate
         * @param {string} date Fecha de creaci??n del checkup
         * @returns string
        */
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        /** 
         * Regresa el nombre completo del paciente
         * @function CheckupTableComponent.formatPatientName
         * @param {Test} test Datos del estudio cl??nico
         * @returns string
        */
        formatPatientName(test: Test)
        {
            return `${test.patient!.first_name} ${test.patient!.last_name}`;
        },
        /** 
         * Obtiene una lista de los checkups pendientes registradas en el sistema utilizando la paginaci??n provista por el backend.
         * Antes de realizar la petici??n al servidor con los checkups, se habilita la animaci??n de carga con la asignaci??n true de la variable loading, se verifica que la p??gina guardada en la variable page sea mayor o igual a 1,
         * que la p??gina sea menor o igual a la ??ltima p??gina de la paginaci??n guardada en la variable
         * branchData y que la p??gina no sea la misma que la de la variable paginationActive.
         * Si la comprobaci??n es exitosa se realiza una petici??n HTTP a la URI /checkup/pendientes con el par??metro de la p??gina. Si la petici??n es correcta se asigna la variable checkupData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginaci??n provista por el servidor y se deshabilita la animaci??n de carga mediante la asignaci??n false de la variable loading,
         * en caso contrario solo se deshabilita la animaci??n de la carga mediante la asignaci??n false de la variable loading
         * @param {number} page N??mero de la p??gina
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
         * Obtiene una lista de los checkups pendientes registradas en el sistema que coincidan con la b??squeda realizada por el usuario.
         * Antes de realizar la petici??n al servidor con los checkups, se habilita la animaci??n de carga con la asignaci??n true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query est?? vac??o, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /checkup/pendientes con el par??metro de la p??gina y el contenido de la b??squeda.
         * Si la petici??n es correcta se asigna la variable checkupData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginaci??n provista por el servidor
         * y se deshabilita la animaci??n de carga mediante la asignaci??n false de la variable loading, en caso contrario solo se deshabilita la animaci??n de la carga mediante la asignaci??n false de la variable loading
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
         * Obtiene los datos del checkup seleccionado consultando al backend por la informaci??n mediante su ID. Si la petici??n es correcta se asigna a la variable checkupInfoSelected
         * la informaci??n provista por el backend. La variable checkupSelected guarda la informaci??n de las citas y estudios que contiene el checkup junto con el horario y sucursal
         * con el que fueron agendadas para mostrarse correctamente en el componente {@link CheckupSheduleComponent} utilizando la funci??n {@link BranchTableComponent.setCheckupData}.
         * Si el parametro category es igual a show, muestra el componente {@link CheckupInfoComponent} en caso contrario muestra el componente {@link CheckupSheduleComponent}
         * @function CheckupTableComponent.getBranchDataQuery
         * @param {number} id ID del checkup
         * @param {string} category Categor??a (componente) a mostrar
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
         * Cancela el checkup seleccionado, enviando una petici??n a la URI /checkup/{id}, si la petici??n es correcta muestra un mensaje de confirmaci??n utilizando el componente
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
         * Obtiene la lista de sucursales habilitados registrados en el servidor, en caso de que la petici??n sea correcta transforma la lista de sucursales
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
 * Retorna la lista de estudios y consultas de los checkups predefinidos en el sistema (carpeta defaultData/Checkup/options) de acuerdo a la categor??a a la que pertenezcan
 * @function CheckupTableComponent.setCheckupList
 * @param {string} category Categor??a del checkup
 * @returns {CheckupItem[]} Retorna la lista de estudios y consultas del checkup seleccionado
*/
export function setCheckupList(category: string): CheckupItem[]
{
    switch(category)
    {
        case 'Mature':
            return CheckupMatureData;
        case 'Mujer c??clica':
            return CheckupMujerCiclicaData;
        case 'Teen':
            return CheckupTeenData;
        case 'Mom':
            return CheckupMom;
        case 'Diagn??stico prenatal':
            return CheckupDiagnosticoPrenatal;
        case 'Convenio institucional':
            return CheckupConvenioInstitucional;
        default:
            return [];
    }
}