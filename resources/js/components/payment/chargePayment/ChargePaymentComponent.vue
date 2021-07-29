<template>
    <div class="row mx-0">
        <div class="col-12 col-lg-5 mb-25">
            <div class="card">
                <div class="card-header">
                    <h4>Agregar servicios</h4>
                </div>
                <div class="card-body row mx-0">
                    <div class="col-6 mb-25">
                        <div class="card shadow-none border p-2" @click="openProductListModal('cirugia', 'Cirugías')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/cirugia.svg" alt="Cirugía" cssClass="mb-10 w-25">
                                </img-component>
                                <p class="m-0">Cirugías</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mb-25">
                        <div class="card shadow-none border p-2"
                            @click="openProductListModal('histeroscopia', 'Histeroscopía')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/histeroscopia.svg" alt="Histeroscopía" cssClass="mb-10 w-25">
                                </img-component>
                                <p class="m-0">Histeroscopía</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mb-25">
                        <div class="card shadow-none border p-2" @click="openProductListModal('ciclica', 'Cíclica')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/ciclica.svg" alt="Cíclica" cssClass="mb-10 w-25">
                                </img-component>
                                <p class="m-0">Cíclica</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mb-25">
                        <div class="card shadow-none border p-2"
                            @click="openProductListModal('imagenologia', 'Imagenología')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/imagenologia.svg" alt="Imagenología" cssClass="mb-10 w-25">
                                </img-component>
                                <p class="m-0">Imagenología</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card shadow-none border p-2"
                            @click="openProductListModal('laboratorio', 'Laboratorio')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/laboratorio.svg" alt="Laboratorio" cssClass="mb-10 w-25">
                                </img-component>
                                <p class="m-0">Laboratorio</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card shadow-none border p-2" @click="openProductListModal('farmacia', 'Farmacia')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/farmacia.svg" alt="Farmacia" cssClass="mb-10 w-25">
                                </img-component>
                                <p class="m-0">Farmacia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="isNew">
                <div class="card mt-25">
                    <div class="card-header">
                        <h4>Sucursal</h4>
                    </div>
                    <div class="card-body">
                        <v-select :options="branchesList" label="text" :reduce="item => item.childID"
                            placeholder="Seleccione una sucursal" v-model="branchID" />
                    </div>
                </div>
                <div class="card mt-25">
                    <div class="card-header">
                        <h4>Pacientes</h4>
                    </div>
                    <div class="card-body">
                        <v-select :options="patientsList" label="text" :reduce="item => item.childID"
                            placeholder="Seleccione un paciente" v-model="patientID" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-7">
            <div class="card">
                <div class="card-header">
                    <h4>Detalles del cobro</h4>
                    <div class="d-flex justify-content-between" v-if="role === 'Caja' || role == 'Administrador'">
                        <div class="action-btn mr-3">
                            <button class="btn btn-primary btn-default" @click="printPDF">
                                <img-component url="/svg/print.svg" cssClass="mr-2 svg-white" alt="Imprimir" styleData="filter: invert(1);">
                                </img-component>
                                Imprimir
                            </button>
                        </div>
                        <div class="action-btn">
                            <button class="btn btn-primary btn-default" @click="downloadPDF">
                                <img-component url="/svg/download.svg" cssClass="mr-2 svg-white" alt="Descargar" styleData="filter: invert(1);">
                                </img-component>
                                Descargar
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body row mx-0">
                    <empty-error-component v-if="productSelectedList.length === 0"></empty-error-component>
                    <div class="table-responsive  hide-y-overflow" v-else>
                        <div class="mb-25">
                            <table class="table table-hover m-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0" scope="col">Servicio</th>
                                        <th class="border-top-0" scope="col">Descuento</th>
                                        <th class="border-top-0" scope="col">Precio</th>
                                        <th class="border-top-0" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in productSelectedList" :key="product.id">
                                        <td class="align-middle">Código: {{product.product_code}}<p class="m-0">
                                                {{product.name}}</p>
                                        </td>
                                        <td class="align-middle">${{product.discount}}</td>
                                        <td class="align-middle">${{product.price}}</td>
                                        <td class="align-middle">
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-danger border-0 button-img m-0"
                                                @click="deleteProduct(product)">
                                                <img-component url="/svg/delete.svg" cssClass="m-0"></img-component>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="col-12 row mx-0 border-top pt-3 px-0">
                                <h6 class="col-7">Total</h6>
                                <h6 class="col-5 text-right">${{totalPrice}}</h6>
                            </div>
                        </div>
                        <div v-if="activePayment">
                            <div class="card shadow-none border mb-25">
                                <div class="card-header">
                                    <h4 class="mb-25 mb-md-0">Forma de pago</h4>
                                </div>
                                <div class="card-body row mx-0">
                                    <div class="col-12 radio-horizontal-list row mx-0 p-0">
                                        <div class="col-12 mb-25 align-self-center row mx-0 mb-25 p-0">
                                            <div class="col-6 mb-25 radio-theme-default custom-radio mx-0">
                                                <input class="radio" type="radio" name="radio-optional" value="1"
                                                    v-model="paymentMethod.check" id="pdtmEfectivo">
                                                <label for="pdtmEfectivo">
                                                    <span class="radio-text">Efectivo</span>
                                                </label>
                                            </div>
                                            <div class="col-6 mb-25 radio-theme-default custom-radio mx-0">
                                                <input class="radio" type="radio" name="radio-optional" value="2"
                                                    v-model="paymentMethod.check" id="pdtmTarjetaCredito">
                                                <label for="pdtmTarjetaCredito">
                                                    <span class="radio-text">Tarjeta de crédito</span>
                                                </label>
                                            </div>
                                            <div class="col-6 mb-25 radio-theme-default custom-radio mx-0">
                                                <input class="radio" type="radio" name="radio-optional" value="3"
                                                    v-model="paymentMethod.check" id="pdtmTarjetaDebito">
                                                <label for="pdtmTarjetaDebito">
                                                    <span class="radio-text">Tarjeta de débito</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12 px-0" v-if="showCredit">
                                            <label for="pdtmTarjeta">Número de tarjeta</label>
                                            <input class="form-control form-control-lg" type="text" id="pdtmTarjeta"
                                                maxlength="4" pattern="[0-9]" v-model="paymentMethod.description">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card shadow-none border mb-4">
                                <div class="card-header">
                                    <h4 class="mb-25 mb-md-0">Deuda</h4>
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" id="chpcDeuda"
                                            v-model="debtData.check" :checked="debtData.check">
                                        <label class="custom-control-label" for="chpcDeuda"></label>
                                    </div>
                                </div>
                                <div class="card-body row mx-0" v-if="debtData.check">
                                    <div class="col-12 row mx-0 mb-25 px-0">
                                        <h6 class="col-7">Pago total</h6>
                                        <h6 class="col-5 text-right">${{totalPrice}}</h6>
                                    </div>
                                    <div class="col-12 mb-25 row px-0 mx-0 align-items-center">
                                        <h6 class="col-8">Pago inicial</h6>
                                        <input type="number" class="col-4 form-control form-control-lg"
                                            v-model="debtData.description" id="ccLeucorreaDescription">
                                    </div>
                                    <div class="col-12 row mx-0 border-top pt-3 px-0">
                                        <h6 class="col-7">Pago restante</h6>
                                        <h6 class="col-5 text-right">${{totalDebt}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary btn-default btn-squared float-right"
                        @click="confirmConsultFinish">Guardar y terminar</button>
                </div>
            </div>
        </div>
    </div>

    <consult-product-list-component id="cpcProductList" :title="titleSelected" :productCategory="categorySelected"
        @productSelected="editProducSelectedList" :productSelectedList="productSelectedList">
    </consult-product-list-component>
    <confirmation-alert-component id="chpcConsult"
        title="¿Está seguro de finalizar la consulta? Esta acción no puede deshacerse"
        @confirmAction="selectPaymentURL"></confirmation-alert-component>
    <success-alert-component id="chpcSuccess" title="Guardado exitoso"
        message="La información se ha guardado correctamente"></success-alert-component>
    <error-alert-component :id="`chpcError`" :errors="errors" :title="'Error al enviar el pago'">
    </error-alert-component>
</template>

<script lang="ts" src="./ChargePaymentComponent.ts"></script>
