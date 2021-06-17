<template>
    <div class="breadcrumb-main px-3">
        <h4 class="text-capitalize breadcrumb-title mb-25 mb-md-0">Deudas</h4>
    </div>

    <div class="row mx-0">
        <div class="col-12 col-lg-3">
            <div class="card mb-25">
                <div class="card-body text-center pt-sm-30 pb-sm-0  px-25 pb-0">
                    <div class="account-profile">
                        <div class="ap-img w-100 d-flex justify-content-center">
                            <img class="ap-img__main rounded-circle mb-3  wh-120 d-flex bg-opacity-primary"
                                src="https://demo.jsnorm.com/laravel/strikingdash/img/author/profile.png" alt="profile">
                        </div>
                        <div class="ap-nameAddress pb-3 pt-1">
                            <h5 class="ap-nameAddress__title">{{fullName}}</h5>
                            <p class="ap-nameAddress__subTitle fs-14 m-0">{{patientData.email}}</p>
                        </div>
                    </div>
                    <div class="card-footer pt-20 pb-20 px-0">
                        <div class="profile-overview d-flex justify-content-center flex-wrap">
                            <p class="user-content-info__item mx-3">
                                <img :src="'/svg/gender.svg'" alt="Phone" class="mr-2">
                                <span v-if="patientData.gender === 0">Hombre</span>
                                <span v-else>Mujer</span>
                            </p>
                            <p class="user-content-info__item mx-3">
                                <img :src="'/svg/birthday.svg'" alt="Phone" class="mr-2">
                                {{birthday}}
                            </p>
                            <p class="user-content-info__item mx-3">
                                <img :src="'/svg/phone.svg'" alt="Cellphone" class="mr-2">
                                {{patientData.phone}}
                            </p>
                            <p class="user-content-info__item mx-3">
                                <img :src="'/svg/cellphone.svg'" alt="Cellphone" class="mr-2">
                                {{patientData.cellphone}}
                            </p>
                            <p class="user-content-info__item mx-3 mt-3 mt-lg-0">
                                <img :src="'/svg/address.svg'" alt="Cellphone" class="mr-2">
                                {{patientData.address}}
                            </p>

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
                                data-paging-size="10">
                                <thead>
                                    <tr class="userDatatable-header footable-header">
                                        <th class="footable-sortable footable-first-visible"
                                            style="display: table-cell;">
                                            <span class="userDatatable-title">Fecha</span>
                                            <span class="fooicon fooicon-sort"></span></th>

                                        <th class="footable-sortable" style="display: table-cell;">
                                            <span class="userDatatable-title">Conceptos</span>
                                            <span class="fooicon fooicon-sort"></span></th>

                                        <th class="footable-sortable" style="display: table-cell;">
                                            <span class="userDatatable-title">Deuda total</span>
                                            <span class="fooicon fooicon-sort"></span></th>

                                        <th class="footable-sortable" style="display: table-cell;">
                                            <span class="userDatatable-title">Deuda restante</span>
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
                                            <div class="paymentDatatable-content">{{formatDate(payment.created_at)}}
                                            </div>
                                        </td>
                                        <td style="display: table-cell;" class="border-primary border-bottom">
                                            <div class="paymentDatatable-content">
                                                <p class="mb-0 text-dark" v-for="product in safeNullProduct(payment)"
                                                    :key="product.id">{{product.name}}</p>
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
                                                        v-bind:class="{'disabled': paginationActive === 1}"
                                                        data-page="first" @click="getPaymentData(1)"><a
                                                            class="footable-page-link">«</a>
                                                    </li>
                                                    <li class="footable-page-nav"
                                                        v-bind:class="{'disabled': paginationActive === 1}"
                                                        data-page="prev" @click="getPaymentData(paginationActive - 1)">
                                                        <a class="footable-page-link">‹</a></li>
                                                    <li class="footable-page visible"
                                                        v-bind:class="{ 'active': pagination === paginationActive }"
                                                        data-page="1" v-for="pagination in paginationPages"
                                                        :key="pagination" @click="getPaymentData(pagination)">
                                                        <a class="footable-page-link">{{pagination}}</a>
                                                    </li>
                                                    <li class="footable-page-nav"
                                                        v-bind:class="{'disabled': paginationActive === paymentData.pagination.last_page}"
                                                        @click="getPaymentData(paginationActive + 1)" data-page="next">
                                                        <a class="footable-page-link">›</a></li>
                                                    <li class="footable-page-nav"
                                                        v-bind:class="{'disabled': paginationActive === paymentData.pagination.last_page}"
                                                        @click="getPaymentData(paymentData.pagination.last_page)"
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
        </div>
    </div>
</template>

<script lang="ts" src="./PaymentDebtTableComponent.ts"></script>

<style lang="scss" scoped>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';

</style>
