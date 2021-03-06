import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, PropType } from 'vue';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';
import * as download from 'downloadjs';
import moment from 'moment';
import printJS from 'print-js'
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Medicament } from '@interface/Medical/Medicament.interface';
import { PrescriptionData } from '@data/Medical/Prescription.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { EmployeeData } from '@data/Employee/Employee.data';
import { Consult } from '@interface/Medical/Consult.interface';
import { ConsultData } from '@data/Medical/Consult.data';
import cloneDeep from 'lodash/cloneDeep';

/** 
 * @description Componente que muestra los medicamentos para receta dentro de la consulta, utilizando el componente {@link MedicamentComponent}
 * por cada medicamento generado
 * @class ConsultPrescriptionComponent
 * @example <consult-prescription-component v-model="" :disabled="" patientData="" :doctorData="" :consultData=""></consult-prescription-component>
*/
export default defineComponent({
    /** 
     * {@link MedicamentComponent}
     * @member ConsultPrescriptionComponent.components
    */
    components: {
        MedicamentComponent: require('@component/medical/consult/consultPrescription/medicament/ConsultMedicamentComponent.vue').default
    },
    /** 
     * Eventos del componente
     * @member ConsultPrescriptionComponent.emits
    * @property {Prescription} update:modelValue Evento que actualiza la variable que se ingreso en el v-model
    */
    emits: ['update:modelValue'],
    /** 
    * Propiedades que recibe el componente 
    * @member ConsultPrescriptionComponent.props
    * @property {Prescription} modelValue (Opcional) Valor que recibe y actualiza al componente padre. Ver {@link https://v3.vuejs.org/guide/migration/v-model.html|v-model} de vue para mas referencia
    * @property {boolean} disabled (Obligatorio) Habilita o deshabilita input del componente
    * @property {Patient} patientData (Obligatorio) Guarda los datos del paciente en consulta
    * @property {Employee} doctorData (Obligatorio) Guarda los datos del doctor en consulta
    * @property {Consult} consultData (Obligatorio) Guarda los datos de la consulta en proceso
    */
    props: {
        modelValue: {
            type: Array as PropType<Prescription[]>,
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
        }
    },
    /**
    * Variables del componente
    * @member ConsultPrescriptionComponent.data
    * @property {Medicament[]} medicamentList Lista de medicamentos seleccionados por el doctor en la consulta
    * @property {Prescription} prescriptionData Guarda los datos de los medicamentos asignados por la variable modelValue para modificar dichos datos (v-model)
    */
    data() {
        return {
            medicamentList: [] as Medicament[],
            prescriptionData: this.modelValue,
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link ConsultPrescriptionComponent.getMedicamentList|medicamentos registraods}
     * @member ConsultPrescriptionComponent.mounted
    */
    mounted() {
        this.getMedicamentList();
    },
    /** 
     * Variables a observar por el componente
     * @member ConsultPrescriptionComponent.watch
     * @property {Prescription} modelValue Al actualizar los datos de esta variable, se verifica si la lista de medicamentos de la variable modelValue es la misma que la lista de medicamentos
     * guardada en la variable prescriptionData: si es diferente entonces agrega los medicamentos al componente {@link MedicamentComponent}. Por otro lado, asigna los datos de la variable
     * modelValue a la variable prescriptionData
     * @property {Prescription} prescriptionData AL actualizar los datos de la variable lanza un emit para actualizar el v-model
    */
    watch: {
        modelValue: 
        {
            handler()
            {
                if(this.modelValue.length !== this.prescriptionData.length)
                {
                    this.modelValue.map(medicament => this.addPrescription(medicament));
                }
                this.prescriptionData = this.modelValue;
            },
            deep: true
        },
        prescriptionData:
        {
            handler()
            {
                this.$emit('update:modelValue', this.prescriptionData);
            },
            deep: true
        }
    },
    methods: {
        /** 
         * Agrega un nuevo medicamento a la variable prescriptionData
         * @function ConsultPrescriptionComponent.addPrescription
         * @param {Prescription} data Datos del medicamento
        */
       addPrescription(data: Prescription = PrescriptionData)
       {
           this.prescriptionData.unshift({...data});
       },
       /** 
         * Elimina un medicamento a la variable prescriptionData
         * @function ConsultPrescriptionComponent.deletePrescription
         * @param {number} index N??mero de fila donde radica el medicamento que se desea eliminar dentro de la variable prescriptionData
        */
       deletePrescription(index: number)
       {
           this.prescriptionData.splice(index, 1);
       },
       /** 
         * Obtiene la lista de medicamentos registrados dentro del sistema, Si la petici??n es correcta se asigna los datos recibidos a la variable medicamentList
         * @function ConsultPrescriptionComponent.getMedicamentList
        */
       getMedicamentList(): void
        {
            axios.get(`/productos/medicamentos`)
            .then(response => {
                this.medicamentList = [{
                    id: 0,
                    name: 'Seleccione un medicamento',
                }, ...response.data];
            })
            .catch(error => {
                
            })
        },
        /** 
         * Crea un pdf con los datos de los medicamentos de la receta creada en la consulta tomando como base el archivo prescription.pdf.
         * Para crear dicha receta primero convierte el pdf en un archivo legible de tipo ArrayBuffer para la librer??a {@link https://pdf-lib.js.org/|PDF-LIB},
         * despues procede a filtrar los medicamentos que sean creados por el doctor y se asignan a la variable filterPrescriptionList. Una vez realizado
         * este paso, se procede a asignar los datos del doctor, paciente y receta al pdf {@link https://pdf-lib.js.org/|Ver el proceso} y se retorna el pdf creado
         * @function ConsultPrescriptionComponent.createPDF
         * @async
        */
        async createPDF()
        {
            const doctorLicence = this.doctorData.specialties!.filter(specialty => specialty.pivot.medicalspecialty_id === this.consultData.medicalspecialty_id)[0];
            const prescriptionDoc = '../../../../files/prescription.pdf';
            const buffer: ArrayBuffer = await fetch(prescriptionDoc, {
                headers: new Headers({'content-type': 'application/pdf'}),
            }).then(res => res.arrayBuffer());
            const pdf: PDFDocument = await PDFDocument.load(buffer);
            const filterPrescriptionList = this.prescriptionData.filter((medicament: Prescription) => medicament.medicament_id >= 1);
            pdf.getForm().getTextField('patient').setText(`${this.patientData.first_name} ${this.patientData.last_name}`);
            pdf.getForm().getTextField('birthday').setText(moment(this.patientData.birthday).format('DD/MM/YYYY'));
            pdf.getForm().getTextField('age').setText( moment().diff(this.patientData.birthday, 'years').toString() );
            pdf.getForm().getTextField('date').setText( moment().format('DD/MM/YYYY') );

            pdf.getForm().getTextField('doctorName').setText( `${this.doctorData.first_name} ${this.doctorData.last_name}` );
            pdf.getForm().getTextField('doctorPhone').setText( this.doctorData.cellphone );
            pdf.getForm().getTextField('doctorEmail').setText( this.doctorData.user.email );

            pdf.getForm().getTextField('doctorDegree').setText( doctorLicence?.pivot.degree_title );
            pdf.getForm().getTextField('doctorLicenseNumber').setText( doctorLicence?.pivot.license_number );
            pdf.getForm().getTextField('doctorSchool').setText( doctorLicence?.pivot.school_name );
            pdf.getForm().getTextField('name').setText( filterPrescriptionList.map((medicament: Prescription) => 
                `Nombre: ${this.medicamentList[medicament.medicament_id].name}\tNombre gen??rico: ${this.medicamentList[medicament.medicament_id].generic_name}\nPresentaci??n: ${this.medicamentList[medicament.medicament_id].presentation}\tV??a de administraci??n: ${medicament.administration_type}\tDuraci??n: ${medicament.duration}\n\n`
            ).toString() );
            pdf.getForm().flatten();
            return await pdf.save()
        },
        /** 
         * Para descargar el pdf, primero se crea el pdf con la funcion {@link ConsultPrescriptionComponent.createPDF}, a lo cual se utiliza la librer??a
         * {@link https://github.com/rndme/download|Download} para descargarlo al dispositov del doctor
         * @function ConsultPrescriptionComponent.downloadPDF
         * @async
        */
        async downloadPDF()
        {
            const pdf = await this.createPDF();
            download(pdf, `Receta_${this.patientData.first_name}_${this.patientData.last_name}_${moment().format('DD-MM-YYYY')}.pdf`, 'application/pdf');
        },
        /** 
         * Para descargar el pdf, primero se crea el pdf con la funcion {@link ConsultPrescriptionComponent.createPDF}, a lo cual se procede a convertir el archivo
         * a formato BLOB y finalmente se procede a mandar a impresi??n con el uso de la librer??a {@link https://printjs.crabbly.com/|PrintJS}
         * @function ConsultPrescriptionComponent.printPDF
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
