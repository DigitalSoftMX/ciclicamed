<template>
    <div class="breadcrumb-main px-3">
        <h4 class="breadcrumb-title mb-25 mb-md-0">Lista de pagos de deudas</h4>
    </div>

    <div class="row mx-0">
        <div class="col-12 col-lg-3">
            <div class="card mb-25">
                <div class="card-body text-center pt-sm-30 pb-sm-0 px-25 pb-0">
                    <div class="account-profile">
                        <div class="ap-img w-100 d-flex justify-content-center">
                            <img class="wh-120" src="/svg/caja.svg')" alt="Caja">
                        </div>
                    </div>
                    <div class="card-footer mt-20 pt-20 pb-20 px-0">
                        <div class="profile-overview d-flex justify-content-between justify-content-lg-center flex-wrap  px-5 px-lg-2">
                            <div class="po-details mx-3">
                                <span class="po-details__sTitle">Deuda a pagar</span>
                                <h6 class="po-details__title pb-1">{{paymentData.total}}</h6>
                                
                            </div>
                            <div class="po-details mx-3">
                                <span class="po-details__sTitle">Deuda cubierta</span>
                                <h6 class="po-details__title pb-1">{{sumDebtPayments}}</h6>
                                
                            </div>
                            <div class="po-details mx-3">
                                <span class="po-details__sTitle">Deuda restante</span>
                                <h6 class="po-details__title pb-1">{{missingPayment}}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-9">
            <div class="card spin-embadded" v-bind:class="{'spin-active': loading}">
                <div class="card-body">
                    <div
                        class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                        <div class="table-responsive  hide-y-overflow">
                            <table
                                class="table mb-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                                data-sorting="true" data-paging-current="1" data-paging-position="right"
                                data-paging-size="10" style="">
                                <thead>
                                    <tr class="userDatatable-header footable-header">
                                        <th class="footable-sortable footable-first-visible"
                                            style="display: table-cell;">
                                            <span class="userDatatable-title">Fecha</span>
                                            <span class="fooicon fooicon-sort"></span></th>

                                        <th class="footable-sortable" style="display: table-cell;">
                                            <span class="userDatatable-title">Tipo de pago</span>
                                            <span class="fooicon fooicon-sort"></span></th>

                                        <th class="footable-sortable" style="display: table-cell;">
                                            <span class="userDatatable-title">Descripcíon</span>
                                            <span class="fooicon fooicon-sort"></span></th>

                                        <th class="footable-sortable" style="display: table-cell;">
                                            <span class="userDatatable-title">Número de tarjeta</span>
                                            <span class="fooicon fooicon-sort"></span></th>

                                        <th class="footable-sortable" style="display: table-cell;">
                                            <span class="userDatatable-title">Cantidad abonada</span>
                                            <span class="fooicon fooicon-sort"></span></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(debt, index) in debtData" :key="index">

                                        <td class="footable-first-visible border-primary border-bottom"
                                            style="display: table-cell;">
                                            <div class="paymentDatatable-content">{{formatDate(debt.created_at)}}</div>
                                        </td>
                                        <td style="display: table-cell;" class="border-primary border-bottom">
                                            <div class="paymentDatatable-content">
                                                {{debt.payment_method?.name}}
                                            </div>
                                        </td>
                                        <td style="display: table-cell;" class="border-primary border-bottom">
                                            <div class="paymentDatatable-content">
                                                {{debt.description}}
                                            </div>
                                        </td>
                                        <td style="display: table-cell;" class="border-primary border-bottom">
                                            <div class="paymentDatatable-content text-center">
                                                {{debt.credit_card}}
                                            </div>
                                        </td>
                                        <td style="display: table-cell;" class="border-primary border-bottom">
                                            <div class="paymentDatatable-content text-center">
                                                ${{debt.total}}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                                <tfoot>
                                    <tr class="footable-paging">
                                        <td colspan="1" class="p-3 text-left">
                                            <h6>Total</h6>
                                        </td>
                                        <td colspan="3"></td>
                                        <td colspan="1" class="py-3 px-4 text-center">
                                            <h6>${{sumDebtPayments}}</h6>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="loaded-spin text-center">
                    <div class="spinner-border text-primary"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./DebtsTableComponent.ts"></script>

<style lang="scss" scoped>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';

</style>
