<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title mb-25 mb-md-0">Deudas</h4>
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
                                    <span class="paymentDatatable-title">Conceptos</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="paymentDatatable-title">Deuda total</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="paymentDatatable-title">Deuda restante</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-last-visible border-primary border-0 border-bottom rounded-0"
                                    style="display: table-cell;">
                                    <span class="paymentDatatable-title float-right">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="payment in paymentData.data" :key="payment.id">

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="paymentDatatable-content">{{formatDate(payment.created_at)}}</div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="paymentDatatable-content">
                                        <p class="mb-0 text-dark" v-for="product in payment?.products" :key="product.id">{{product?.name}}</p>
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="paymentDatatable-content">
                                        ${{payment.total}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="paymentDatatable-content">
                                        ${{payment.last_debt_payment?.missing_payment}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img src="/svg/cash.svg">
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img"
                                                @click="redirectToDebtInfo(payment)">
                                                <img src="/svg/show.svg">
                                            </button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr class="footable-paging">
                                <td colspan="8">
                                    <div class="footable-pagination-wrapper">
                                        <ul class="pagination justify-content-center">

                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="first"
                                                @click="getPaymentData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getPaymentData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>
                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getPaymentData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === paymentData.pagination.last_page}"
                                                @click="getPaymentData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === paymentData.pagination.last_page}"
                                                @click="getPaymentData(paymentData.pagination.last_page)" data-page="last"><a
                                                    class="footable-page-link">»</a></li>
                                        </ul>
                                    </div>
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
</template>

<script lang="ts" src="./PaymentDebtTableComponent.ts"></script>

<style lang="scss" scoped>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';
    @import './PaymentDebtTableComponent.scss';
    @import '../../../../../public/css/global.css';
</style>
