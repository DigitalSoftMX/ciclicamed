<template>
    <div class="breadcrumb-main">
        <div class="form-group p-0">
            <div class="with-icon">
                <span class="mr-5">
                    <img-component url="/svg/search.svg"  alt="Buscar"></img-component>
                </span>
                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                    @keyup="getMedicamentDataQuery()" placeholder="Buscar">
            </div>
        </div>
        <h4 class="text-capitalize breadcrumb-title mb-25 mb-md-0">
            <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2" @click="createMedicament">Crear medicamento</button>
        </h4>
    </div>
    <div class="card mt-30 spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="card-body">
            <div
                class="medicamentDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                <div class="table-responsive hide-y-overflow">
                    <table
                        class="table mb-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                        data-sorting="true" data-paging-current="1" data-paging-position="right" data-paging-size="10"
                        style="">
                        <thead>
                            <tr class="medicamentDatatable-header footable-header">
                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="medicamentDatatable-title">ID</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="medicamentDatatable-title">Código</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="medicamentDatatable-title">Nombre</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="medicamentDatatable-title">Nombre genérico</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="medicamentDatatable-title">Presentación</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-last-visible border-primary border-0 border-bottom rounded-0"
                                    style="display: table-cell;">
                                    <span class="medicamentDatatable-title float-right">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="medicament in medicamentData.data" :key="medicament.id">

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="medicamentDatatable-content">
                                        {{medicament.id}}
                                    </div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="medicamentDatatable-content">
                                        {{medicament.code}}
                                    </div>
                                </td>


                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="medicamentDatatable-content">
                                        {{medicament.name}}
                                    </div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="medicamentDatatable-content">
                                        {{medicament.generic_name}}
                                    </div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="medicamentDatatable-content">
                                        {{medicament.presentation}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap justify-content-end">
                                        <li>
                                            <button
                                                @click="editMedicament(medicament)"
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img-component url="/svg/edit.svg" alt="Editar"></img-component>
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
                                                @click="getMedicamentData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getMedicamentData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>

                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getMedicamentData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>


                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === medicamentData.pagination.last_page}"
                                                @click="getMedicamentData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === medicamentData.pagination.last_page}"
                                                @click="getMedicamentData(medicamentData.pagination.last_page)" data-page="last"><a
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
    <medicament-table-modal-component :medicamentData="medicamentSelected" :isNew="isNew"></medicament-table-modal-component>
    <success-alert-component id="brtcSuccess" :title="successAlert.title" :message="successAlert.message"></success-alert-component>
    <error-alert-component id="brtcError" :errors="errors" :title="'Error al modificar la sucursal'">
    </error-alert-component>
</template>

<script lang="ts" src="./MedicamentTableComponent.ts"></script>

<style>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';
</style>
