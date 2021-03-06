import { Product } from '@interface/Product/Product.interface';
import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';
import 'bootstrap';
import { ProductData } from '@data/Product/Product.data';
import { PropType } from 'vue';
import axios from 'axios';
import { Consult } from '@interface/Medical/Consult.interface';
import { ConsultData } from '@data/Medical/Consult.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import vSelect from "vue-select-3/src";
import { Select } from '@interface/General/Select.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import * as download from 'downloadjs';
import printJS from 'print-js';
import { PDFDocument } from 'pdf-lib';
import moment from 'moment';
import { PagoPDF } from '@data/Files/Pago.file';
import { PaymentData } from '@data/Payment/Payment.data';
import { Payment } from '@interface/Payment/Payment.interface';

/**
 * @description Componente que carga a un paciente un pago de los servicios y productos disponibles en Cíclica
 * @class ChargePaymentComponent
 * @example <charge-payment-component :products="" :role="" :consult="" :patient="" :paymentID="" isNew=""></charge-payment-component>
*/
export default defineComponent({
    /**
     * {@link https://vue-select.org/}, {@link EmptyErrorComponent}, {@link ConsultProductListComponent}
     * {@link ConfirmationAlertComponent}, {@link SuccessAlertComponent}
     * @member ChargePaymentComponent.components
    */
    components: {
        vSelect,
        EmptyErrorComponent: require('@component/general/error/EmptyErrorComponent.vue').default,
        ConsultProductListComponent: require('@component/payment/chargePayment/productModalList/ProductModalListComponent.vue').default,
        ConfirmationAlertComponent: require('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    /**
     * Propiedades que recibe el componente
     * @member ChargePaymentComponent.props
     * @property {Product[]} products (Obligatorio solo si se carga un pago creado anteriormente) Productos pertenecientes al pago seleccionado
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
     * @property {Consult} consult (Obligatorio si el pago se creó en una consulta) Datos de la consulta relacionado con el pago
     * @property {Patient} patient (Obligatorio si el pago se creó en una consulta) Datos del paciente relacionado con el pago
     * @property {number} paymentID (Obligatorio solo si se carga un pago creado anteriormente)
     * @property {boolean} isNew (Obligatorio) Indica si el pago es nuevo o creado anteriormente
    */
    props: {
        products: {
            type: Array as PropType<Product[]>,
            default: []
        },
        role: {
            type: String,
            default: ''
        },
        consult: {
            type: Object as PropType<Consult>,
            default: ConsultData
        },
        patient: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        paymentID: {
            type: Number as PropType<Number>,
            default: 0
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        }
    },
    /**
    * Variables del componente
    * @member ChargePaymentComponent.data
    * @property {Product[]} productSelectedList Guarda la lista de productos y servicios que se van a cobrar
    * @property {string} categorySelected Guarda el nombre de la categoría seleccionado actualmente para mostrar los productos relacionados con dicha categoría
    * @property {string} titleSelected Guarda el nombre del título del componente {@link ProductModalListComponent}
    * @property {string} url Guarda la URL básica donde se aloja el proyecto (local o servidor)
    * @property {boolean} debtData.check Activa y guarda la sección de deuda del pago del pago actual
    * @property {number} debtData.description Guarda la cantidad inicial de la deuda del pago actual
    * @property {number} paymentMethod.check Guarda el método de pago que se utiliza para pagar el pago actual (1 Efectivo, 2 Tarjeta de crédito, 3 Tarjeta de débito)
    * @property {string} paymentMethod.description Guarda los últimos 4 digitos de la tarjeta de débito o crédito
    * @property {Select[]} branchesList Guarda la lista de sucursales habilitadas por el servidor
    * @property {Select[]} patientsList Guarda la lista de pacientes guardados en el servidor
    * @property {number} patientID Guarda el ID del paciente seleccionado
    * @property {number} branchID Guarda el ID de la sucursal seleccionada
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {PaymentData} paymentData Guarda los datos del pago (si se ha creado anteriormente) que guarda el servidor
    * @property {number} newPaymentID Guarda el ID de un nuevo pago, después de que se procese correctamente por el servidor
    */
    data() {
        return {
            productSelectedList: this.products,
            categorySelected: '',
            titleSelected: '',
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content,
            debtData: {
                check: false,
                description: 0
            },
            paymentMethod: {
                check: 1,
                description: ''
            },
            branchesList: [] as Select[],
            patientsList: [] as Select[],
            patientID : 0,
            branchID : 0,
            errors: [],
            paymentData: PaymentData,
            newPaymentID: 0,
        };
    },
    /**
     * Al iniciar el componente, verifica si el pago es nuevo: en caso de ser nuevo se obtiene la {@link ChargePaymentComponent.getPatientsList|lista de pacientes} y
     * {@link ChargePaymentComponent.getBranchesList|lista de sucursales}. En caso contrario, obtiene los {@link ChargePaymentComponent.getPaymentData|datos del pago seleccionado}
     * @member ChargePaymentComponent.mounted
    */
    mounted()
    {
        if(this.isNew)
        {
            this.getPatientsList();
            this.getBranchesList();
        }
        else
        {
            this.getPaymentData();
        }
    },
    /**
    * Propiedades computadas del componente
    * @member ChargePaymentComponent.computed
    * @property {string} totalPrice Precio total de los productos o servicios seleccionados
    * @property {string} totalDebt Deuda total restante del precio total - la deuda inicial
    * @property {boolean} activePayment Activa o desactiva la sección de método de pago y deuda si el usuario logueado actualmente es administrador o caja
    * @property {number} price Suma total del precio de los productos o servicios seleccionados
    * @property {number} discount Suma total del descuento de los productos o servicios seleccionados
    * @property {boolean} showCredit Muestra u oculta el input de los últimos 4 dígitos de la tarjeta si el método de pago es diferente al de pago en efectivo
    */
    computed: {
        totalPrice(): string
        {
            const price: number = this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
            const discount: number = this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
            return (price - discount).toFixed(2);
        },
        totalDebt(): string
        {
            return (Number(this.totalPrice) - this.debtData.description).toFixed(2);
        },
        activePayment(): boolean
        {
            return this.role === 'Administrador' || this.role === 'Caja' || this.role === 'Caja administrador';
        },
        price(): number
        {
            return this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
        },
        discount(): number
        {
            return this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
        },
        showCredit(): boolean
        {
            return Number(this.paymentMethod.check) !== 1 ? true : false;
        }
    },
    /**
     * Variables a observar por el componente
     * @member ChargePaymentComponent.watch
     * @property {Consult} consult Al actualizar los datos de una consulta, verifica si no se han agregado productos anteriormente: en caso de no existir
     * productos, verifica que tipo de cita en proceso, si el la primera cita obtiene el {@link ChargePaymentComponent.getPrimeraCitaProduct|precio de la primera cita},
     * si es subsecuente obtiene el {@link ChargePaymentComponent.getPrimeraCitaProduct|precio de la cita subsecuente}
     * @property {Product[]} products Al actualizar la lista de prodctos, asigna a la variable productSelectedList los nuevos productos
     * @property {bolean} isNew Al actualizar la variable, obtiene la {@link ChargePaymentComponent.getPatientsList|lista de pacientes} y la
     * {@link ChargePaymentComponent.getBranchesList|lista de pacientes}
    */
    watch: {
        consult:
        {
            handler()
            {
                if(this.products.length === 0)
                {
                    switch(this.consult.medicalconsultcategory_id)
                    {
                        case 1:
                            this.getPrimeraCitaProduct();
                            break;
                        case 2:
                            this.getCitaSubsecuenteProduct();
                            break;
                    }
                }
            },
            deep: true
        },
        products:
        {
            handler()
            {
                this.productSelectedList = this.products;
            },
            deep: true
        },
        isNew()
        {
            this.getPatientsList();
            this.getBranchesList();
        }
    },
    methods: {
        /**
         * Obtiene el precio de una primera cita. En caso de ser procesada correctamente la petición, se agrega a la variable productSelectedList
         * el precio de la primera cita obtenida
         * @function ChargePaymentComponent.getPrimeraCitaProduct
        */
        getPrimeraCitaProduct(): void
        {
            axios.get <Product> (`/productos/primera-consulta`)
            .then(response => {
                this.productSelectedList.push(response.data);
            })
            .catch(error => {
            })
        },
        /**
         * Obtiene el precio de una cita subsecuente. En caso de ser procesada correctamente la petición, se agrega a la variable productSelectedList
         * el precio de la cita subsecuente
         * @function ChargePaymentComponent.getCitaSubsecuenteProduct
        */
        getCitaSubsecuenteProduct(): void
        {
            axios.get <Product> (`/productos/cita-subsecuente`)
            .then(response => {
                this.productSelectedList.push(response.data);
            })
            .catch(error => {
            })
        },
        /**
         * Obtiene la lista de sucursales habilitados en el servidor. En caso de ser procesada correctamente la petición, se agrega a la variable branchesList
         * las sucursales retornadas por el servidor
         * @function ChargePaymentComponent.getBranchesList
        */
        getBranchesList(): void
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branchesList = response.data.map((branch, index) => {
                    return {
                        id: index,
                        childID: branch.id,
                        text: branch.name,
                    }
                });
            })
            .catch(error => {

            })
        },
        /**
         * Obtiene la lista de pacientes guardados en el servidor. En caso de ser procesada correctamente la petición, se agrega a la variable patientsList
         * los pacientes retornadas por el servidor
         * @function ChargePaymentComponent.getBranchesList
        */
        getPatientsList(): void
        {
            axios.get <Patient[]> (`/pacientes`)
            .then(response => {
                this.patientsList = response.data.map((patient, index) => {
                    return {
                        id: index,
                        childID: patient.id,
                        text: `${patient.patient_code} ${patient.first_name} ${patient.last_name}`
                    }
                });
            })
            .catch(error => {

            })
        },
        /**
         * Muestra el componente {@link ConfirmationAlertComponent} para confirmar que se desea completar el pago (en consulta o con el rol caja)
         * @function ChargePaymentComponent.confirmConsultFinish
        */
        confirmConsultFinish()
        {
            $('#chpcConsult').modal('show');
        },
        /**
         * Selecciona la URL a la que se debe enviar el pago de acuerdo al rol y si es un nuevo pago o no después del mensaje de confirmación de completar el pago.
         * Si el pago es nuevo se utiliza {@link ChargePaymentComponent.createNewPayment}, en caso contrario se utiliza {@link ChargePaymentComponent.setPayment}
         * @function ChargePaymentComponent.selectPaymentURL
        */
        selectPaymentURL()
        {
            switch(this.role)
            {
                case 'Administrador':
                    if(this.consult.id > 0)
                    {
                        this.createConsultPayment();
                    }
                    else {
                        this.isNew ? this.createNewPayment() : this.setPayment();
                    }
                    break;
                case 'Caja':
                    this.isNew ? this.createNewPayment() : this.setPayment();
                    break;
                case 'Caja administrador':
                    this.isNew ? this.createNewPayment() : this.setPayment();
                    break;
                case 'Doctor':
                    this.createConsultPayment();
                    break;
            }
        },
        /**
         * Envía al servidor los datos de un nuevo pago (solo rol caja). Si la petición se procesa correctamente, se asigna a la variable newPaymentID el ID del
         * pago, lo cual permite imprimir y descargar el comprobante de pago
         * @function ChargePaymentComponent.createNewPayment
        */
        createNewPayment()
        {
            axios.post(`/pagos`, {
                data: {
                    patientID: this.patientID,
                    branchID: this.branchID,
                    products: this.productSelectedList,
                    debt: this.debtData,
                    paymentMethod: this.paymentMethod
                }
            })
            .then(response => {
                this.newPaymentID = response.data;
            })
            .catch(error => {
                this.errors = error.response.data.errors
                $('#chpcError').modal('show');
            })
        },
        /**
         * Envía al servidor los datos actualizados de un nuevo pago. Si la petición se procesa correctamente, se muestra el componente {@link SuccessAlertComponent} con un
         * mensaje de éxito
         * @function ChargePaymentComponent.setPayment
        */
        setPayment()
        {
            axios.post(`/pagos/${this.paymentID}/pago`, {
                data: {
                    products: this.productSelectedList,
                    debt: this.debtData,
                    paymentMethod: this.paymentMethod
                }
            })
            .then(response => {
                $('#chpcSuccess').modal('show');
                setInterval(()=>{
                    window.location.replace(`${this.url}/app/inicio`);
                },2000);
            })
            .catch(error => {
                this.errors = error.response.data.errors
                $('#chpcError').modal('show');
            })
        },
        /**
         * Envía al servidor los datos de un nuevo pago (solo en consulta médica). Si la petición se procesa correctamente, se muestra el componente {@link SuccessAlertComponent} con un
         * mensaje de éxito y se redirige a la página de inicio. En caso contrario se asigna a la variable errors, los errores que retorne el servidor y se muestra el componente
         * {@link ErrorAlertComponent} con el mensaje de error
         * @function ChargePaymentComponent.createConsultPayment
        */
        createConsultPayment()
        {
            axios.post(`/consultas/${this.consult.id}/pago`, {
                data: {
                    id: this.consult.id,
                    branch_id: this.consult.branch_id,
                    products: this.productSelectedList,
                    patient_id: this.patient.id
                }
            })
            .then(response => {
                console.log('createConsultPayment: '+response.data.datas);
                $('#chpcSuccess').modal('show');
                setInterval(() => {
                    window.location.replace(`${this.url}/app/inicio`);
                }, 2000)
            })
            .catch(error => {
                this.errors = error.response.data.errors
                $('#chpcError').modal('show');
            })
        },
        /**
         * Obtiene los datos del pago seleccionado. Si la petición es correcta, se asigna a la variable paymentData los datos del pago que retorne el servidor
         * @function ChargePaymentComponent.getPaymentData
        */
        getPaymentData()
        {
            axios.get<Payment>(`/pagos/${this.paymentID}`)
            .then(response => {
                this.paymentData = response.data;
            })
            .catch(error => {
            })
        },
        /**
         * Abre el componente {@link ConsultProductListComponent} para mostrar los productos que pertenezcan a la categoría que fue seleccionado por el usuario, para
         * lo cual asigna a la variable categorySelected la categoría del producto y a la variable titleSelected el título del componente {@link ConsultProductListComponent}
         * @function ChargePaymentComponent.openProductListModal
         * @param {string} category Categoría de la lista de productos a mostrar (ciclica, histeroscopíaa, etc)
         * @param {string} title Título que va a mostrar el componente {@link ConsultProductListComponent}
        */
        openProductListModal(category: string, title: string)
        {
            this.categorySelected = category;
            this.titleSelected = title;
            $('#cpcProductList').modal('show');
        },
        /**
         * Verifica si un producto fue seleccionado. En caso de ser seleccionado, se agregar el producto a la varaible productSelectedList, en caso contrario se elimina
         * el producto de la variable productSelectedList
         * @function ChargePaymentComponent.editProducSelectedList
         * @param {Product} product Producto seleccionado
         * @param {boolean} checked Indica si se activo o desactivo la selección del producto
        */
        editProducSelectedList(product: Product, checked: boolean)
        {
            checked ? this.productSelectedList.push(product) : this.productSelectedList = this.productSelectedList.filter(item => item.id !== product.id);
        },
        /**
         * Calcula el precio total de la lista de productos seleccionados, restando la suma total del descuento de cada producto seleccionado
         * @function ChargePaymentComponent.getTotalPrice
        */
        getTotalPrice()
        {
            const price: number = this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
            const discount: number = this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
            return (price - discount).toFixed(2);
        },
        /**
         * Elimina un producto de la variable productSelectedList
         * @function ChargePaymentComponent.deleteProduct
        */
        deleteProduct(product: Product)
        {
           this.productSelectedList = this.productSelectedList.filter(item => item.id !== product.id);
        },
        /**
         * Crea un pdf de pago con la lista de productos seleccionados, utilizando la plantilla pdf del archivo Pago.file.ts
         * Para crear dicho pago primero convierte el pdf en un archivo legible de tipo ArrayBuffer para la librería {@link https://pdf-lib.js.org/|PDF-LIB},
         * despues procede a ingresar los productos en el pdf mediante el recorrido de la variable productSelectedList. Si detecta que el pago es nuevo, ingresa el
         * nombre del paciente en el pdf, crea un nuevo folio de pago y lo inserta en el pdf. En caso contrario, además de crear el folio e ingresar los datos del
         * paciente en el pdf, agrega en el pdf el nombre del doctor que genero el pago (solo aplicable cuando se crea en consulta). Una vez realizado
         * este paso, se procede a asignar los datos de la fecha y el total al pdf {@link https://pdf-lib.js.org/|Ver el proceso} y se retorna el pdf creado
         * @function ChargePaymentComponent.createPDF
         * @async
        */
        async createPDF()
        {
            const pdf: PDFDocument = await PDFDocument.load(PagoPDF);

            this.productSelectedList.map((item, index) => {
                pdf.getForm().getTextField(`clave${index + 1}`).setText(item.product_code);
                pdf.getForm().getTextField(`descripcion${index + 1}`).setText(item.name);
                pdf.getForm().getTextField(`cantidad${index + 1}`).setText('1');
                pdf.getForm().getTextField(`costo${index + 1}`).setText(`$${(Number(item.price) - Number(item.discount)).toFixed(2)}`);
            });

            if(this.isNew)
            {
                const patientSel = this.patientsList.filter(item => item.childID === this.patientID)[0].text;
                pdf.getForm().getTextField(`patient`).setText(`${patientSel.split(' ')[1]} ${patientSel.split(' ')[2]}`);
                const fol = '00000'
                const folio = fol.substring(0, fol.length - this.newPaymentID.toString().length) + this.newPaymentID;
                pdf.getForm().getTextField(`folio`).setText(`FOL-${folio}`);
            }
            else
            {
                const fol = '00000'
                const folio = fol.substring(0, fol.length - this.paymentID.toString().length) + this.paymentID;
                pdf.getForm().getTextField(`folio`).setText(`FOL-${folio}`);
                pdf.getForm().getTextField(`patient`).setText(`${this.paymentData.patient!.first_name} ${this.paymentData.patient!.last_name}`);
                pdf.getForm().getTextField(`doctor`).setText(`${this.paymentData.medical_consult!.consult_created.doctor!.first_name} ${this.paymentData.medical_consult!.consult_created.doctor!.last_name}`);
            }

            pdf.getForm().getTextField(`fecha`).setText(moment().format('DD-MM-YYYY'));
            pdf.getForm().getTextField(`total`).setText(`$${this.totalPrice}`);
            pdf.getForm().flatten();

            return await pdf.save()
        },
        /**
         * Para descargar el pdf, primero se crea el pdf con la funcion {@link ChargePaymentComponent.createPDF}, a lo cual se utiliza la librería
         * {@link https://github.com/rndme/download|Download} para descargarlo al dispositov del doctor
         * @function ChargePaymentComponent.downloadPDF
         * @async
        */
        async downloadPDF()
        {
            const pdf = await this.createPDF();
            download(pdf, `Pago${this.patient.first_name}_${this.patient.last_name}_${moment().format('DD-MM-YYYY')}.pdf`, 'application/pdf');
        },
        /**
         * Para descargar el pdf, primero se crea el pdf con la funcion {@link ChargePaymentComponent.createPDF}, a lo cual se procede a convertir el archivo
         * a formato BLOB y finalmente se procede a mandar a impresión con el uso de la librería {@link https://printjs.crabbly.com/|PrintJS}
         * @function ChargePaymentComponent.printPDF
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
