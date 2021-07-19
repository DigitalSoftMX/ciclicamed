<template>
    <div class="breadcrumb-main">
        <div class="form-group p-0">
            <div class="with-icon">
                <span class="mr-5">
                    <img-component url="/svg/search.svg"  alt="Buscar"></img-component>
                </span>
                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                    @keyup="getBranchDataQuery()" placeholder="Buscar">
            </div>
        </div>
        <h4 class="text-capitalize breadcrumb-title mb-25 mb-md-0">
            <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2" @click="createBranch">Crear sucursal</button>
        </h4>
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
                            <tr class="branchDatatable-header footable-header">
                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="branchDatatable-title">ID</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="branchDatatable-title">Sucursal</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="branchDatatable-title">Dirección</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="branchDatatable-title">Teléfono</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-last-visible border-primary border-0 border-bottom rounded-0"
                                    style="display: table-cell;">
                                    <span class="branchDatatable-title float-right">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="branch in branchData.data" :key="branch.id">

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="branchDatatable-content">
                                        {{branch.id}}
                                    </div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="branchDatatable-content">
                                        {{branch.name}}
                                    </div>
                                </td>


                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="branchDatatable-content">
                                        {{branch.address}}
                                    </div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="branchDatatable-content">
                                        {{branch.phone}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap justify-content-end">
                                        <li>
                                            <button
                                                @click="editBranch(branch)"
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img-component url="/svg/edit.svg" alt="Editar"></img-component>
                                            </button>
                                        </li>
                                        <li v-if="branch.status?.id === 2">
                                            <button
                                            @click="enableBranch(branch)"
                                                class="btn btn-icon btn-circle btn-outline-danger border-0 button-img">
                                                <img-component url="/svg/business.svg" alt="Habilitar"></img-component>
                                            </button>
                                        </li>
                                        <li v-else>
                                            <button
                                                @click="disableBranch(branch)"
                                                class="btn btn-icon btn-circle btn-outline-danger border-0 button-img">
                                                <img-component url="/svg/disable.svg" alt="Borrar" ></img-component>
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
                                                @click="getBranchData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getBranchData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>

                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getBranchData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>


                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === branchData.pagination.last_page}"
                                                @click="getBranchData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === branchData.pagination.last_page}"
                                                @click="getBranchData(branchData.pagination.last_page)" data-page="last"><a
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
    <branch-table-modal-component :branchData="branchSelected" :isNew="isNew"></branch-table-modal-component>
    <success-alert-component id="brtcSuccess" :title="successAlert.title" :message="successAlert.message"></success-alert-component>
    <error-alert-component id="brtcError" :errors="errors" :title="'Error al modificar la sucursal'">
    </error-alert-component>
</template>

<script lang="ts" src="./BranchTableComponent.ts"></script>

<style>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';
</style>
