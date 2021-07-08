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
                                <img-component url="/svg/cirugia.svg" alt="Cirugía" cssClass="mb-10 w-25"></img-component>
                                <p class="m-0">Cirugías</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mb-25">
                        <div class="card shadow-none border p-2"
                            @click="openProductListModal('histeroscopia', 'Histeroscopía')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/histeroscopia.svg" alt="Histeroscopía" cssClass="mb-10 w-25"></img-component>
                                <p class="m-0">Histeroscopía</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mb-25">
                        <div class="card shadow-none border p-2" @click="openProductListModal('ciclica', 'Cíclica')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/ciclica.svg" alt="Cíclica" cssClass="mb-10 w-25"></img-component>
                                <p class="m-0">Cíclica</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mb-25">
                        <div class="card shadow-none border p-2"
                            @click="openProductListModal('imagenologia', 'Imagenología')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/imagenologia.svg" alt="Imagenología" cssClass="mb-10 w-25"></img-component>
                                <p class="m-0">Imagenología</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card shadow-none border p-2"
                            @click="openProductListModal('laboratorio', 'Laboratorio')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/laboratorio.svg" alt="Laboratorio" cssClass="mb-10 w-25"></img-component>
                                <p class="m-0">Laboratorio</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card shadow-none border p-2" @click="openProductListModal('farmacia', 'Farmacia')">
                            <div class="card-body text-center p-0">
                                <img-component url="/svg/farmacia.svg" alt="Farmacia" cssClass="mb-10 w-25"></img-component>
                                <p class="m-0">Farmacia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-7">
            <div class="card">
                <div class="card-header">
                    <h4>Detalles del cobro</h4>
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
                                                class="btn btn-icon btn-circle btn-outline-danger border-0 button-img m-0" @click="deleteProduct(product)">
                                                <img-component url="/svg/delete.svg" cssClass="m-0"></img-component>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="col-12 row mx-0 border-top pt-3 px-0">
                                <h6 class="col-7">Total</h6>
                                <h6 class="col-5 text-right">${{getTotalPrice()}}</h6>
                            </div>
                        </div>
                        <div v-if="activePayment">
                            <payment-info-component></payment-info-component>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary btn-default btn-squared float-right" @click="confirmConsultFinish" v-if="role === 'Doctor'">Guardar y terminar</button>
                </div>
            </div>
        </div>
    </div>

    <consult-product-list-component id="cpcProductList" :title="titleSelected" :productCategory="categorySelected"
        @productSelected="editProducSelectedList" :productSelectedList="productSelectedList">
    </consult-product-list-component>
    <confirmation-alert-component id="chpcConsult" title="¿Está seguro de finalizar la consulta? Esta acción no puede deshacerse" @confirmAction="createConsultPayment"></confirmation-alert-component>
    <success-alert-component id="chpcSuccess" title="Guardado exitoso" message="La información se ha guardado correctamente"></success-alert-component>
</template>

<script lang="ts" src="./ChargePaymentComponent.ts"></script>
