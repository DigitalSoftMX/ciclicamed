<template>
    <div class="breadcrumb-main">
        <h4 class="breadcrumb-title mb-25 mb-md-0">{{title}}</h4>
        <div class="form-group p-0">
            <div class="with-icon">
                <span class="mr-5">
                    <img-component url="/svg/search.svg"  alt="Buscar"></img-component>
                </span>
                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                    @keyup="getPrescriptionsDataQuery()" placeholder="Buscar">
            </div>
        </div>
    </div>
    <div class="card mt-30 spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="card-body">
            <div
                class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                <div class="table-responsive hide-y-overflow">
                    <table
                        class="table mb-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                        data-sorting="true" data-paging-current="1" data-paging-position="right" data-paging-size="10"
                        style="">
                        <thead>
                            <tr class="userDatatable-header footable-header">
                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="userDatatable-title">ID</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="userDatatable-title">Creado en</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Paciente</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Medicamentos</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-last-visible border-primary border-0 border-bottom rounded-0"
                                    style="display: table-cell;">
                                    <span class="userDatatable-title float-right">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr> 
                        </thead>

                        <tbody>
                            <tr v-for="prescription in prescriptionData.data" :key="prescription.id">
                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{prescription.id}}</div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{formatDate(prescription.consult_schedule_start)}}</div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{formatPatientName(prescription)}}</div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{prescription.prescriptions?.length}} medicamentos
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap justify-content-end">
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img"
                                                @click="getPrescriptions(prescription)">
                                                <img-component url="/svg/show.svg" alt="Ver"></img-component>
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
                                                @click="getPrescriptionsData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getPrescriptionsData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>

                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getPrescriptionsData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>


                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === prescriptionData.pagination.last_page}"
                                                @click="getPrescriptionsData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === prescriptionData.pagination.last_page}"
                                                @click="getPrescriptionsData(prescriptionData.pagination.last_page)" data-page="last"><a
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

    <prescription-modal-component :id="'prestacoPrescriptions'" :prescriptions="prescriptions"></prescription-modal-component>
</template>

<script lang="ts" src="./PrescriptionsTableComponent.ts"></script>

<style>
    @import '../../../../../../public/vendor_assets/css/footable.standalone.min.css';
</style>
