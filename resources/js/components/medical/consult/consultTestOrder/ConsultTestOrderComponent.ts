import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';
import moment from 'moment';
import * as download from 'downloadjs';
import printJS from 'print-js'
import { Test } from '@interface/Medical/Test.interface';
import { TestData } from '@data/Medical/Test.data';
import cloneDeep from 'lodash/cloneDeep';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { EmployeeData } from '@data/Employee/Employee.data';
import { ConsultData } from '@data/Medical/Consult.data';
import { Consult } from '@interface/Medical/Consult.interface';
import { Select } from '@interface/General/Select.interface';

/** 
 * @description Componente que muestra los medicamentos para receta dentro de la consulta, utilizando el componente {@link MedicamentComponent}
 * por cada medicamento generado
 * @class ConsultTestOrderComponent
 * @example <consult-test-order-component v-model="" :disabled="" patientData="" :doctorData="" :consultData="" :branches=""></consult-test-order-component>
*/
export default defineComponent({
    /** 
     * {@link OrderComponent}
     * @member ConsultTestOrderComponent.components
    */
    components: {
        OrderComponent: require('./order/ConsultOrderComponent.vue').default
    },
    /** 
     * Eventos del componente
     * @member ConsultTestOrderComponent.emits
    * @property {Test[]} update:modelValue Evento que actualiza la variable que se ingreso en el v-model
    */
    emits: ['update:modelValue'],
    /** 
    * Propiedades que recibe el componente 
    * @member ConsultTestOrderComponent.props
    * @property {Prescription} modelValue (Opcional) Valor que recibe y actualiza al componente padre. Ver {@link https://v3.vuejs.org/guide/migration/v-model.html|v-model} de vue para mas referencia
    * @property {boolean} disabled (Obligatorio) Habilita o deshabilita input del componente
    * @property {Patient} patientData (Obligatorio) Guarda los datos del paciente en consulta
    * @property {Employee} doctorData (Obligatorio) Guarda los datos del doctor en consulta
    * @property {Consult} consultData (Obligatorio) Guarda los datos de la consulta en proceso
    * @property {Select[]} branches (Obligatorio) Guarda la lista de sucursales habilitados en el sistema
    */
    props: {
        modelValue: {
            type: Array as PropType<Test[]>,
            default: []
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        doctorData: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
        consultData: {
            type: Object as PropType<Consult>,
            default: ConsultData
        },
        branches: {
            type: Array as PropType<Select[]>,
            default: []
        }
    },
    /**
    * Variables del componente
    * @member ConsultTestOrderComponent.data
    * @property {Medicament[]} orderData Guarda los datos de las ordenes médicas pertenecientes a la variable modelValue para modificar dichos datos (v-model)
    * @property {Object[]} orderList Guarada los datos de los estudios médicas guardados en el sistema junto con sus anotaciones correspondientes
    */
    data() {
        return {
            orderData: this.modelValue,
            orderList: [] as {
                id: number;
                name: string;
                product_code: string;
                order_annotations: [{
                    product_id: number,
                    annotation: string
                }]
            }[]
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link ConsultTestOrderComponent.getTestList|estudios médicos registraods}
     * @member ConsultTestOrderComponent.mounted
    */
    mounted() {
        this.getTestList();
    },
    /** 
     * Variables a observar por el componente
     * @member ConsultTestOrderComponent.watch
     * @property {Prescription} modelValue Al actualizar los datos de esta variable, se verifica si la lista de ordenes de estudio de la variable modelValue es la misma que la lista de ordenes de estudio
     * guardada en la variable orderData: si es diferente entonces agrega los medicamentos al componente {@link ConsultOrderComponent}. Por otro lado, asigna los datos de la variable
     * modelValue a la variable orderData
     * @property {Test[]} orderData AL actualizar los datos de la variable lanza un emit para actualizar el v-model
    */
    watch: {
        modelValue: 
        {
            handler()
            {
                if(this.modelValue.length !== this.orderData.length)
                {
                    this.modelValue.map(order => this.addTestOrder(order));
                }
                this.orderData = this.modelValue;
            },
            deep: true
        },
        orderData:
        {
            handler()
            {
                this.$emit('update:modelValue', this.orderData);
            },
            deep: true
        }
    },
    methods: {
        /** 
         * Agrega una nueva orden de estudios a la variable orderData
         * @function ConsultTestOrderComponent.addTestOrder
         * @param {Test} data Datos de la orden de estudios
        */
       addTestOrder(data: Test = TestData)
       {
           const newArray = [cloneDeep(data)].concat(this.orderData)
           this.orderData = newArray;
       },
       /** 
         * Cancela una orden de estudios en caso de que haya sido agendada anteriormente asignando al estado de la orden de estudios
         * el ID 5 (Cancelado), en caso contrario elimina la orden de estudios de la variable orderData
         * @function ConsultTestOrderComponent.deleteTestOrder
         * @param {number} index Número de fila donde radica el medicamento que se desea eliminar dentro de la variable prescriptionData
        */
       deleteTestOrder(index: number)
       {
           this.orderData[index].id > 0 ? this.orderData[index].medicalteststatus_id = 5 : this.orderData.splice(index, 1);
       },
       /** 
         * Obtiene la lista de estudios médicas registrados dentro del sistema, Si la petición es correcta se asigna los datos recibidos a la variable orderList
         * un valor inicia (Seleccione un estudio), concatenando el resto de estudios médicos retornados por el servidor
         * @function ConsultTestOrderComponent.getMedicamentList
        */
       getTestList(): void
        {
            axios.get(`/productos/estudios`)
            .then(response => {
                this.orderList = [{
                    id: 0,
                    name: 'Seleccione un estudio',
                    order_annotations: []
                }, ...response.data];
            })
            .catch(error => {
                
            })
        },
        /** 
         * Crea un pdf con la lista de ordenes médicas creadas en la consulta tomando como base el archivo testOrder.pdf.
         * Para crear dicha receta primero convierte el pdf en un archivo legible de tipo ArrayBuffer para la librería {@link https://pdf-lib.js.org/|PDF-LIB},
         * despues procede a filtrar las ordenes de estudios que sean creados por el doctor y se asignan a la variable filterOrderList. Una vez realizado
         * este paso, se procede a asignar los datos del doctor, paciente y ordenes de estudios al pdf {@link https://pdf-lib.js.org/|Ver el proceso} y se retorna el pdf creado
         * @function ConsultTestOrderComponent.createPDF
         * @async
        */
        async createPDF()
        {
            const doctorLicence = this.doctorData.specialties?.filter(specialty => specialty.pivot.medicalspecialty_id === this.consultData.medicalspecialty_id)[0];
            const prescriptionDoc = '../../../../files/testOrder.pdf';
            const buffer: ArrayBuffer = await fetch(prescriptionDoc, {
                headers: new Headers({'content-type': 'application/pdf'}),
            }).then(res => res.arrayBuffer());
            const filterOrderList = this.orderData.filter(item => item.order.product_id >= 1);

            const pdfDoc = await PDFDocument.create();
            for await(let order of filterOrderList)
            {
                const index = this.orderList.findIndex(orderSelected => orderSelected.id === order.order.product_id);
                var newPDF = await PDFDocument.load(buffer);
                const testCategory = this.orderList[index].product_code.includes('IMA') ? 'IMAGENOLOGÍA' : 'LABORATORIO';
                
                newPDF.getForm().getTextField('patient').setText(`${this.patientData.first_name} ${this.patientData.last_name}`);
                newPDF.getForm().getTextField('birthday').setText(moment(this.patientData.birthday).format('DD/MM/YYYY'));
                newPDF.getForm().getTextField('age').setText( moment().diff(this.patientData.birthday, 'years').toString() );
                newPDF.getForm().getTextField('date').setText( moment().format('DD/MM/YYYY') );
                newPDF.getForm().getTextField('doctorName').setText( `${this.doctorData.first_name} ${this.doctorData.last_name}` );
                newPDF.getForm().getTextField('doctorPhone').setText( this.doctorData.cellphone );
                newPDF.getForm().getTextField('doctorEmail').setText( this.doctorData.user.email );
                newPDF.getForm().getTextField('doctorDegree').setText( doctorLicence?.pivot.degree_title );
                newPDF.getForm().getTextField('doctorLicenseNumber').setText( doctorLicence?.pivot.license_number );
                newPDF.getForm().getTextField('doctorSchool').setText( doctorLicence?.pivot.school_name );
                newPDF.getForm().getTextField('code').setText(testCategory);
                newPDF.getForm().getTextField('name').setText(this.orderList[index].name);
                newPDF.getForm().getTextField('indications').setText( `${this.orderList[index].order_annotations.map(annotation => `${annotation.annotation}\n`)}` );

                newPDF.getForm().flatten();
                const [copiedPages] = await pdfDoc.copyPages(newPDF, [0]);
                await pdfDoc.addPage(copiedPages);
            }
            
            return await pdfDoc.save()
        },
        /** 
         * Para descargar el pdf, primero se crea el pdf con la funcion {@link ConsultTestOrderComponent.createPDF}, a lo cual se utiliza la librería
         * {@link https://github.com/rndme/download|Download} para descargarlo al dispositov del doctor
         * @function ConsultTestOrderComponent.downloadPDF
         * @async
        */
        async downloadPDF()
        {
            const pdf = await this.createPDF();
            download(pdf, `Orden_${this.patientData.first_name}_${this.patientData.last_name}_${moment().format('DD-MM-YYYY')}.pdf`, 'application/pdf');
        },
        /** 
         * Para descargar el pdf, primero se crea el pdf con la funcion {@link ConsultTestOrderComponent.createPDF}, a lo cual se procede a convertir el archivo
         * a formato BLOB y finalmente se procede a mandar a impresión con el uso de la librería {@link https://printjs.crabbly.com/|PrintJS}
         * @function ConsultTestOrderComponent.printPDF
         * @async
        */
        async printPDF()
        {
            const pdfBlob = new Blob([await this.createPDF()], { type: "application/pdf" });
            const url = URL.createObjectURL(pdfBlob);
            printJS(url);
        }
    },
})