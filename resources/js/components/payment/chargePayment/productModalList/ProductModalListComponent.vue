<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="productListModal" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info modal-dialog-centered modal-lg" role="document">
            <div class="modal-content modal-bg-white">
                <div class="modal-header ">
                    <h6 class="modal-title">{{ title }}</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src="/svg/close.svg" alt="CLose">
                    </button>
                </div>
                <div class="modal-body mb-3">
                    <div class="form-group p-0 m-0">
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/search.svg" alt="Search">
                            </span>
                            <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                                @keyup="getProductDataQuery()" placeholder="Buscar">
                        </div>
                    </div>

                    <div class="card mt-30 spin-embadded border-0 shadow-none" v-bind:class="{'spin-active': loading}">
                        <div class="card-body p-0 border-0">
                            <div
                                class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                                <div class="table-responsive  hide-y-overflow">
                                    <table
                                        class="table mb-0 p-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                                        data-sorting="true" data-paging-current="1" data-paging-position="right"
                                        data-paging-size="10" style="">
                                        <thead>
                                            <tr class="userDatatable-header footable-header">
                                                <th class="footable-sortable footable-first-visible"
                                                    style="display: table-cell;">
                                                    <span class="userDatatable-title"></span>
                                                    <span class="fooicon fooicon-sort"></span></th>

                                                <th class="footable-sortable footable-first-visible"
                                                    style="display: table-cell;">
                                                    <span class="userDatatable-title">Código</span>
                                                    <span class="fooicon fooicon-sort"></span></th>

                                                <th class="footable-sortable" style="display: table-cell;">
                                                    <span class="userDatatable-title">Descripción</span>
                                                    <span class="fooicon fooicon-sort"></span></th>

                                                <th class="footable-sortable" style="display: table-cell;">
                                                    <span class="userDatatable-title">Descuento</span>
                                                    <span class="fooicon fooicon-sort"></span></th>

                                                <th class="footable-sortable" style="display: table-cell;">
                                                    <span class="userDatatable-title">Precio</span>
                                                    <span class="fooicon fooicon-sort"></span></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="product in paginationData.data" :key="product.id">

                                                <td class="footable-first-visible border-primary border-bottom"
                                                    style="display: table-cell;">
                                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                                        <input type="checkbox" class="custom-control-input"
                                                            :id="`cplcSelected${product.id}`"
                                                            @change="sendProductSelected(product, $event.target)"
                                                            :checked="productCheckList[product.id]">
                                                        <label class="custom-control-label"
                                                            :for="`cplcSelected${product.id}`"></label>
                                                    </div>
                                                </td>
                                                <td class="footable-first-visible border-primary border-bottom"
                                                    style="display: table-cell;">
                                                    <div class="userDatatable-content">{{product.product_code}}</div>
                                                </td>
                                                <td style="display: table-cell;" class="border-primary border-bottom">
                                                    <div class="userDatatable-content">
                                                        {{product.name}}
                                                    </div>
                                                </td>
                                                <td style="display: table-cell;" class="border-primary border-bottom">
                                                    <div class="userDatatable-content">
                                                        ${{product.discount}}
                                                    </div>
                                                </td>
                                                <td style="display: table-cell;" class="border-primary border-bottom">
                                                    <div class="userDatatable-content">
                                                        ${{product.price}}
                                                    </div>
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
                                                                data-page="first" @click="getProductData(1)"><a
                                                                    class="footable-page-link">«</a>
                                                            </li>
                                                            <li class="footable-page-nav"
                                                                v-bind:class="{'disabled': paginationActive === 1}"
                                                                data-page="prev"
                                                                @click="getProductData(paginationActive - 1)"><a
                                                                    class="footable-page-link">‹</a></li>

                                                            <li class="footable-page visible"
                                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                                data-page="1" v-for="pagination in paginationPages"
                                                                :key="pagination" @click="getProductData(pagination)">
                                                                <a class="footable-page-link">{{pagination}}</a>
                                                            </li>


                                                            <li class="footable-page-nav"
                                                                v-bind:class="{'disabled': paginationActive === paginationData.pagination.last_page}"
                                                                @click="getProductData(paginationActive + 1)"
                                                                data-page="next"><a class="footable-page-link">›</a>
                                                            </li>
                                                            <li class="footable-page-nav"
                                                                v-bind:class="{'disabled': paginationActive === paginationData.pagination.last_page}"
                                                                @click="getProductData(paginationData.pagination.last_page)"
                                                                data-page="last"><a class="footable-page-link">»</a>
                                                            </li>
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
        </div>
    </div>
</template>

<script lang="ts" src="./ProductModalListComponent.ts"></script>
