<template>
    <div class="e-info-modal modal fade p-0" :id="`productModal${id}`" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-sm e-info-dialog modal-dialog-centered" id="c-event" role="document">
            <div class="modal-content">
                <div class="modal-header justify-content-betweem bg-primary">
                    <div>
                        <h6 class="modal-title e-info-title">Datos del producto</h6>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);" data-toggle="tooltip"
                                data-placement="bottom" title="Cerrar">
                        </button>
                    </div>
                </div>
                <div class="modal-body row mx-0 rounded-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="pcCodigo">Código</label>
                        <input class="form-control form-control-lg" type="text" :id="`pc${id}Codigo`" v-model="productDataCopy.product_code">
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="pcCodigoProveedor">Código de proveedor</label>
                        <input class="form-control form-control-lg" type="text" :id="`pc${id}CodigoProveedor`" v-model="productDataCopy.supplier_code">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="pcDescripcion">Descripción</label>
                        <input class="form-control form-control-lg" type="text" :id="`pc${id}Descripcion`" v-model="productDataCopy.name">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="pcUnidad">Unidad</label>
                        <input class="form-control form-control-lg" type="text" :id="`pc${id}Unidad`" v-model="productDataCopy.unit">
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="pcCantidad">Cantidad</label>
                        <input class="form-control form-control-lg" type="number" step="1" :id="`pc${id}Cantidad`" v-model="productDataCopy.quantity_available">
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="pcPrecio">Precio</label>
                        <input class="form-control form-control-lg" type="number" :id="`pc${id}Precio`" v-model="productDataCopy.price">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="pcDescuento">Descuento</label>
                        <input class="form-control form-control-lg" type="number" :id="`pc${id}Descuento`" v-model="productDataCopy.discount">
                    </div>
                </div>
                <div class="modal-footer bg-white justify-content-end">
                    <button class="btn btn-primary btn-default btn-squared" @click="modifyProduct">{{buttonTitle}}</button>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component :id="`productAlertSuccess${id}`" :message="succesMessage"
        :title="'Envío del producto exitoso'">
    </success-alert-component>
    <error-alert-component :id="`productAlertError${id}`" :errors="errors" :title="'Error al enviar los datos del producto'">
    </error-alert-component>
</template>

<script lang="ts" src="./ProductComponent.ts"></script>
