<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title mb-25 mb-md-0">Lista de pagos de deudas</h4>
    </div>

    <div class="card mt-30 spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="card-body">
            <div class="paymentDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                <div class="table-responsive  hide-y-overflow">
                    <table
                        class="table mb-0 table-borderless table-hover adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                        data-sorting="true" data-paging-current="1" data-paging-position="right" data-paging-size="10"
                        style="">
                        <thead>
                            <tr class="paymentDatatable-header footable-header">
                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="paymentDatatable-title">Fecha</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="paymentDatatable-title">Tipo de pago</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="paymentDatatable-title">Descripcíon</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="paymentDatatable-title">Número de tarjeta</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="paymentDatatable-title">Cantidad abonada</span>
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
                                    <div class="paymentDatatable-content">
                                        {{debt.credit_card}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="paymentDatatable-content">
                                        ${{debt.total}}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="loaded-spin text-center">
            <div class="spinner-border text-primary"></div>
        </div>
    </div>
</template>

<script lang="ts" src="./DebtsTableComponent.ts"></script>

<style lang="scss" scoped>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';
    @import './DebtsTableComponent.scss';
    @import '../../../../../public/css/global.css';
</style>
