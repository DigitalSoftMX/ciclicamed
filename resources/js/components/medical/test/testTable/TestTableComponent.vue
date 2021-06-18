<template>
    <div class="breadcrumb-main">
        <h4 class="breadcrumb-title mb-25 mb-md-0">{{title}}</h4>
        <div class="form-group p-0">
            <div class="with-icon">
                <span class="mr-5">
                    <img src="/svg/search.svg" alt="Search">
                </span>
                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                    @keyup="getUserDataQuery()" placeholder="Buscar">
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
                                    <span class="userDatatable-title">Código estudio</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="userDatatable-title">Código proveedor</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Fecha</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Paciente</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Estudio</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-last-visible border-primary border-0 border-bottom rounded-0"
                                    style="display: table-cell;">
                                    <span class="userDatatable-title float-right">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="test in testData.data" :key="test.id">
                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{test.id}}</div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{test.last_order.product.product_code}}</div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{test.last_order.product.lans_code}}</div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{formatDate(test.created_at)}}
                                    </div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{formatPatientName(test)}}
                                    </div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{test.last_order.product.name}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap justify-content-end">
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img src="/svg/show.svg" alt="Ver">
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img src="/svg/edit.svg" alt="Editar">
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img src="/svg/upload.svg" alt="Subir">
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
                                                @click="getUserData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getUserData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>

                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getUserData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>


                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === testData.pagination.last_page}"
                                                @click="getUserData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === testData.pagination.last_page}"
                                                @click="getUserData(testData.pagination.last_page)" data-page="last"><a
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

<script lang="ts" src="./TestTableComponent.ts"></script>

<style>
    @import '../../../../../../public/vendor_assets/css/footable.standalone.min.css';
</style>
