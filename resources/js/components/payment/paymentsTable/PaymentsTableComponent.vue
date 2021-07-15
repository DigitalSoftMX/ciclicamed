<template>
    <div class="breadcrumb-main">
        <div class="form-group p-0">
            <div class="with-icon">
                <span class="mr-5">
                    <img src="/svg/search.svg" alt="Buscar">
                </span>
                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                    @keyup="getpaymentDataQuery()" placeholder="Buscar">
            </div>
        </div>
        <button @click="createNewPayment" class="btn btn-primary btn-default btn-squared">Nuevo pago
        </button>
    </div>

    <div class="card mt-30 spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="card-body">
            <div
                class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                <div class="table-responsive  hide-y-overflow">
                    <table
                        class="table mb-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                        data-sorting="true" data-paging-current="1" data-paging-position="right" data-paging-size="10"
                        style="">
                        <thead>
                            <tr class="userDatatable-header footable-header">
                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="userDatatable-title">ID</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Fecha de cargo</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Imagen</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Paciente</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Teléfono</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-last-visible border-primary border-0 border-bottom rounded-0"
                                    style="display: table-cell;">
                                    <span class="userDatatable-title float-right">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="payment in paymentData.data" :key="payment.id">
                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{payment.id}}</div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{formatDate(payment.created_at)}}</div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <img-component :url="`/images/users/${payment.patient?.photo}`" cssClass="ap-img__main bg-opacity-primary wh-50 rounded-circle" errorImg="/svg/person.svg"></img-component>
                                </td>


                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{fullName(payment)}}
                                    </div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{payment.patient?.cellphone}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img"
                                                @click="redirectToChargeComponent(payment)">
                                                <img-component url="/svg/cash.svg" alt="Pagar"></img-component>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img"
                                                @click="showModalConfirmation(payment)">
                                                <img-component url="/svg/delete.svg" alt="Borrar"></img-component>
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
                                                @click="getpaymentData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getpaymentData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>

                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getpaymentData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>


                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === paymentData.pagination.last_page}"
                                                @click="getpaymentData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === paymentData.pagination.last_page}"
                                                @click="getpaymentData(paymentData.pagination.last_page)"
                                                data-page="last"><a class="footable-page-link">»</a></li>
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
    <confirmation-alert-component id="paytcConfirmation" title="¿Está seguro de eliminar este pago? Esta acción no se puede deshacerse" @confirmAction="deletePayment"></confirmation-alert-component>
    <success-alert-component id="paytcSuccess" title="Pago eliminado" message="Pago eliminado correctamente"></success-alert-component>
    <error-alert-component :id="'paytcError'" :errors="errors" :title="'Error al modificar los roles'">
    </error-alert-component>
</template>

<script lang="ts" src="./PaymentsTableComponent.ts"></script>

<style scoped>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';

</style>
