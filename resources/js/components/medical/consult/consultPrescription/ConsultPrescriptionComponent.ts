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

export default defineComponent({
    components: {
        MedicamentComponent: defineAsyncComponent(() => import('@component/medical/consult/consultPrescription/medicament/ConsultMedicamentComponent.vue'))
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Array as PropType<Prescription[]>,
            default: []
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
    },
    data() {
        return {
            medicamentList: [] as Medicament[],
            prescriptionData: this.modelValue,
        };
    },
    mounted() {
        this.getMedicamentList();
    },
    watch: {
        modelValue: 
        {
            handler()
            {
                this.modelValue.map(medicament => this.addPrescription(medicament));
                this.prescriptionData = this.modelValue;
            },
            deep: true
        },
        orderData:
        {
            handler()
            {
                this.$emit('update:modelValue', this.prescriptionData);
            },
            deep: true
        }
    },
    methods: {
       addPrescription(data: Prescription = PrescriptionData)
       {
           this.prescriptionData.unshift({...data});
       },
       deletePrescription(index: number)
       {
           this.prescriptionData.splice(index, 1);
       },
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
                    console.log(error)
                })
        },
        createPrescription()
        {
            axios.post(`/consultas/1/receta`, {
                data: this.prescriptionData
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        },
        // async createPDF()
        // {
        //     const doctorLicence = this.doctorData.specialties?.filter(specialty => specialty.pivot.medicalspecialty_id === this.consultData.medicalspecialty_id)[0];
        //     const prescriptionDoc = '../../../../files/prescription.pdf';
        //     const buffer: ArrayBuffer = await fetch(prescriptionDoc, {
        //         headers: new Headers({'content-type': 'application/pdf'}),
        //     }).then(res => res.arrayBuffer());
        //     const pdf: PDFDocument = await PDFDocument.load(buffer);
        //     const filterPrescriptionList = this.prescriptionData.filter((medicament: Prescription) => medicament.medicament_id !== -1);

        //     pdf.getForm().getTextField('patient').setText(`${this.patientData.first_name} ${this.patientData.last_name}`);
        //     pdf.getForm().getTextField('birthday').setText(moment(this.patientData.birthday).format('DD/MM/YYYY'));
        //     pdf.getForm().getTextField('age').setText( moment().diff(this.patientData.birthday, 'years').toString() );
        //     pdf.getForm().getTextField('date').setText( moment().format('DD/MM/YYYY') );

        //     pdf.getForm().getTextField('doctorName').setText( `${this.doctorData.first_name} ${this.doctorData.last_name}` );
        //     pdf.getForm().getTextField('doctorPhone').setText( this.doctorData.cellphone );
        //     pdf.getForm().getTextField('doctorEmail').setText( this.doctorData.email );

        //     pdf.getForm().getTextField('doctorDegree').setText( doctorLicence?.pivot.degree_title );
        //     pdf.getForm().getTextField('doctorLicenseNumber').setText( doctorLicence?.pivot.license_number );
        //     pdf.getForm().getTextField('doctorSchool').setText( doctorLicence?.pivot.school_name );
        //     pdf.getForm().getTextField('name').setText( filterPrescriptionList.map((medicament: Prescription) => 
        //         `Nombre: ${this.medicamentList[medicament.medicament_id].name}\tNombre genérico: ${this.medicamentList[medicament.medicament_id].generic_name}\nPresentación: ${this.medicamentList[medicament.medicament_id].presentation}\tVía de administración: ${medicament.administation_type}\tDuración: ${medicament.duration}\n\n`
        //     ).toString() );
        //     pdf.getForm().flatten();
        //     return await pdf.save()
        // },
        // async downloadPDF()
        // {
        //     const pdf = await this.createPDF();
        //     download(pdf, `Receta_${this.patientData.first_name}_${this.patientData.last_name}_${moment().format('DD-MM-YYYY')}.pdf`, 'application/pdf');
        // },
        // async printPDF()
        // {
        //     const pdfBlob = new Blob([await this.createPDF()], { type: "application/pdf" });
        //     const url = URL.createObjectURL(pdfBlob);
        //     printJS(url);
        // }
    },
})
