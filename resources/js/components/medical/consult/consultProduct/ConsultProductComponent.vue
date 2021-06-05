<template>
    <div class="row mx-0">
        <div class="col-12  col-xl-6 mb-25">
            <div class="card">
                <div class="card-header">
                    <h4>Agregar servicios</h4>
                </div>
                <div class="card-body row mx-0">
                    <div class="col-12 col-sm-6 col-md-3 col-xl-4 mb-25">
                        <div class="card" @click="openProductListModal('cirugia', 'Cirugías')">
                            <div class="card-body text-center">
                                <img class="mb-10 w-25" src="/svg/pdf.svg" alt="Cirugía">
                                <p class="m-0">Cirugías</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 col-xl-4 mb-25">
                        <div class="card" @click="openProductListModal('histeroscopia', 'Histeroscopía')">
                            <div class="card-body text-center">
                                <img class="mb-10 w-25" src="/svg/pdf.svg" alt="Histeroscopía">
                                <p class="m-0">Histeroscopía</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 col-xl-4 mb-25">
                        <div class="card" @click="openProductListModal('ciclica', 'Cíclica')">
                            <div class="card-body text-center">
                                <img class="mb-10 w-25" src="/svg/pdf.svg" alt="Cíclica">
                                <p class="m-0">Cíclica</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 col-xl-4 mb-25">
                        <div class="card" @click="openProductListModal('imagenologia', 'Imagenología')">
                            <div class="card-body text-center">
                                <img class="mb-10 w-25" src="/svg/pdf.svg" alt="Imagenología">
                                <p class="m-0">Imagenología</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 col-xl-4 mb-25">
                        <div class="card" @click="openProductListModal('laboratorio', 'Laboratorio')">
                            <div class="card-body text-center">
                                <img class="mb-10 w-25" src="/svg/pdf.svg" alt="Laboratorio">
                                <p class="m-0">Laboratorio</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 col-xl-4 mb-25">
                        <div class="card" @click="openProductListModal('farmacia', 'Farmacia')">
                            <div class="card-body text-center">
                                <img class="mb-10 w-25" src="/svg/pdf.svg" alt="Farmacia">
                                <p class="m-0">Farmacia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4>Detalles del cobro</h4>
                </div>
                <div class="card-body row mx-0">
                    <empty-error-component v-if="productSelectedList.length === 0"></empty-error-component>
                    <div v-else>
                        <div class="col-12 row mx-0 mb-25 p-0">
                            <h6 class="col-9">Servicio</h6>
                            <h6 class="col-3 text-right">Precio</h6>
                        </div>
                        <div class="col-12 row mx-0 mb-25 p-0" v-for="product in productSelectedList" :key="product.id">
                            <h6 class="col-9 font-weight-normal">Código: {{product.product_code}}<p>{{product.name}}</p></h6>
                            <h6 class="col-3 text-right font-weight-normal">${{product.price}}</h6>
                        </div>
                        <div class="col-12 row mx-0 border-top pt-3 px-0">
                            <h6 class="col-7">Total</h6>
                            <h6 class="col-5 text-right">${{getTotalPrice()}}</h6>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary btn-default btn-squared float-right">Guardar y terminar</button>
                </div>
            </div>
        </div>
    </div>

    <consult-product-list-component id="cpcProductList" :title="titleSelected" :productCategory="categorySelected"
        @productSelected="editProducSelectedList" :productSelectedList="productSelectedList">
    </consult-product-list-component>
</template>

<script lang="ts" src="./ConsultProductComponent.ts"></script>
