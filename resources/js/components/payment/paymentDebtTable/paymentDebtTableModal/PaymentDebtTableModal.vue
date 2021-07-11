<template>
    <div class="modal fade" id="pdtmPaymentModal" tabindex="-1" role="dialog" aria-labelledby="productListModal"
        aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h6 class="modal-title text-white">Pago de deuda</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card mb-25 shadow-none">
                        <div class="card-body">
                            <label for="pdtmCantidad">Cantidad a pagar</label>
                            <input class="form-control form-control-lg" type="number" id="pdtmCantidad"
                                v-model="cantidad">
                        </div>
                    </div>

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

                    <div class="card shadow-none">
                        <div class="card-body">
                            <label for="pdtmCantidad">Descripcion</label>
                            <textarea class="form-control form-control-lg" type="number" id="pdtmDescription"
                                v-model="descripcion" maxlength="255"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-default btn-squared" @click="createDebtPayment">Pagar</button>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component id="pdtmSuccess" title="Pago enviado" message="Pago enviado correctamente">
    </success-alert-component>
    <error-alert-component :id="'pdtmError'" :errors="errors" :title="'Error crear el pago'">
    </error-alert-component>
</template>

<script lang="ts" src="./PaymentDebtTableModal.ts"></script>
