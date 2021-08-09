import { CheckupData } from '@data/Checkup/Checkup.data';
import { CheckupListData } from '@data/Checkup/CheckupList.data';
import { Checkup } from '@interface/Checkup/Checkup.interface';
import { CheckupList } from '@interface/Checkup/CheckupList.interface';
import { Consult } from '@interface/Medical/Consult.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra el estado actual del checkup seleccionado mediante el uso de un modal
 * @class CheckupInfoComponent
 * @example <checkup-info-component :checkupData=""></checkup-info-component>
*/
export default defineComponent({
    name: 'CheckupInfoComponent',
    /**
    * Propiedades que recibe el componente
    * @member CheckupInfoComponent.props
    * @property {Checkup} id (Obligatorio) Información del checkup seleccionado
    */
    props: {
        checkupData: {
            type: Object as PropType<Checkup>,
            default: CheckupData
        },
    },
    /**
    * Propiedades computadas del componente 
    * @member CheckupInfoComponent.computed
    * @property {Consult[]} consults Lista de las consultas registradas del checkup
    */
    computed:
    {
        consults(): Consult[]
        {
            return this.checkupData.consults!;
        }
    },
    methods: {
        /** 
         * Muestra el nombre del estudio o consulta de cada consulta.
         * Si la consulta pertenece a una consulta médica, divide la razón de la consulta y toma las 3 primeras palabras, en caso contrario, toma el nombre del estudio
         * @function CheckupInfoComponent.showNameInfo
         * @param {Consult} consult Datos de la consulta seleccionada
        */
        showNameInfo(consult: Consult): string
        {
            return consult.test_scheduled === null ? consult.consult_reason.split(' ', 3).join(' ') : consult.test_scheduled!.order.product.name;
        },
        /** 
         * Muestra la categoría de la consulta seleccionado
         * Si la consulta pertenece a una consulta médica, devuelve 'Consulta' en caso contrario detecta si la consulta es de imagenología o laboratorio
         * y devuelve la categoría a la que pertenece
         * @function CheckupInfoComponent.showCategoryInfo
         * @param {Consult} consult Datos de la consulta seleccionada
        */
        showCategoryInfo(consult: Consult): string
        {
            return consult.test_scheduled === null ? 'Consulta' : consult.test_scheduled!.order!.product.product_code!.includes('IMA') ? 'Imagenología': 'Laboratorio';
        },
        /** 
         * Muestra el estado de la consulta seleccionado
         * Si la consulta pertenece a una consulta médica, devuelve el estado de la misma, en caso contrario devuelve el estado del estudio clínico
         * @function CheckupInfoComponent.showStatusInfo
         * @param {Consult} consult Datos de la consulta seleccionada
        */
        showStatusInfo(consult: Consult): string
        {
            return consult.test_scheduled === null ? consult.status!.name : consult.test_scheduled!.status!.name;
        }
    },
})