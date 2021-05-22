import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import { DefineComponent, PropType } from 'vue';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';
import * as download from 'downloadjs';
import { Patient } from '@/resources/js/interfaces/Patient/Patient.interface';
import { PatientData } from '../../../defaultData/Patient/Patient.data';
import moment from 'moment';
import { Doctor } from '@/resources/js/interfaces/Doctor/Doctor.interface';
import { DoctorData } from '../../../defaultData/Doctor/Doctor.data';
import { Medicament } from '@/resources/js/interfaces/Medical/Medicament.interface';
import printJS from 'print-js'
import { Consult } from '@/resources/js/interfaces/Medical/Consult.interface';
import { ConsultData } from '../../../defaultData/Medical/Consult.data';

export default defineComponent({
    components: {
        MedicamentComponent: require('./medicament/MedicamentComponent.vue').default
    },
    emits: [],
    props: {
        consultData: {
            type: Object as PropType<Consult>,
            default: ConsultData
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        doctorData: {
            type: Object as PropType<Doctor>,
            default: DoctorData
        }
    },
    data() {
        return {
            medicamentList: [] as Medicament[],
            prescriptionDataList: [] as {
                medicament_id: number,
                administation_type: string,
                duration: string,
                rate: string
            }[],
            prescriptionList: [] as Number[],
        };
    },
    mounted() {
        this.getMedicamentList();
    },
    watch: {
    },
    methods: {
       addPrescription()
       {
           this.prescriptionDataList.unshift({
                medicament_id: -1,
                administation_type: '',
                duration: '',
                rate: ''
           })
           this.prescriptionList.unshift(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
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
        deleteMedicamentComponent(index: number)
        {
            this.prescriptionDataList.splice(index, 1);
            this.prescriptionList.splice(index, 1);
        },
        updateMedicamentSelected(index: number, value: any)
        {
            this.prescriptionDataList[index] = value;
            console.log(index)
        },
        async createPDF()
        {
            const doctorLicence = this.doctorData.specialties?.filter(specialty => specialty.pivot.medicalspecialty_id === this.consultData.medicalspecialty_id)[0];
            const prescriptionDoc = '../../../../files/prescription.pdf';
            const buffer: ArrayBuffer = await fetch(prescriptionDoc, {
                headers: new Headers({'content-type': 'application/pdf'}),
            }).then(res => res.arrayBuffer());
            const pdf: PDFDocument = await PDFDocument.load(buffer);
            const filterPrescriptionList = this.prescriptionDataList.filter(medicament => medicament.medicament_id !== -1);

            pdf.getForm().getTextField('patient').setText(`${this.patientData.first_name} ${this.patientData.last_name}`);
            pdf.getForm().getTextField('birthday').setText(moment(this.patientData.birthday).format('DD/MM/YYYY'));
            pdf.getForm().getTextField('age').setText( moment().diff(this.patientData.birthday, 'years').toString() );
            pdf.getForm().getTextField('date').setText( moment().format('DD/MM/YYYY') );

            pdf.getForm().getTextField('doctorName').setText( `${this.doctorData.first_name} ${this.doctorData.last_name}` );
            pdf.getForm().getTextField('doctorPhone').setText( this.doctorData.cellphone );
            pdf.getForm().getTextField('doctorEmail').setText( this.doctorData.email );

            pdf.getForm().getTextField('doctorDegree').setText( doctorLicence?.pivot.degree_title );
            pdf.getForm().getTextField('doctorLicenseNumber').setText( doctorLicence?.pivot.license_number );
            pdf.getForm().getTextField('doctorSchool').setText( doctorLicence?.pivot.school_name );
            pdf.getForm().getTextField('name').setText( filterPrescriptionList.map(medicament => 
                `Nombre: ${this.medicamentList[medicament.medicament_id].name}\tNombre genérico: ${this.medicamentList[medicament.medicament_id].generic_name}\nPresentación: ${this.medicamentList[medicament.medicament_id].presentation}\tVía de administración: ${medicament.administation_type}\tDuración: ${medicament.duration}\n\n`
            ).toString() );
            pdf.getForm().flatten();
            return await pdf.save()
        },
        async downloadPDF()
        {
            const pdf = await this.createPDF();
            download(pdf, `Receta_${this.patientData.first_name}_${this.patientData.last_name}_${moment().format('DD-MM-YYYY')}.pdf`, 'application/pdf');
        },
        async printPDF()
        {
            const pdfBlob = new Blob([await this.createPDF()], { type: "application/pdf" });
            const url = URL.createObjectURL(pdfBlob);
            printJS(url);
        }
    },
})
