<template>
    <div class="breadcrumb-main">
        <div class="form-group p-0 m-0">
            <div class="with-icon">
                <span class="mr-5">
                    <img-component url="/svg/search.svg" alt="Buscar"></img-component>
                </span>
                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                    @keyup="getProductDataQuery()" placeholder="Buscar">
            </div>
        </div>
        <button class="btn btn-primary btn-default btn-squared" @click="createProduct" v-if="enableActions">Crear nuevo producto</button>
    </div>

    <div class="card mt-30 spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="card-body">
            <div
                class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                <div class="table-responsive  hide-y-overflow">
                    <table
                        class="table mb-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                        data-sorting="true" data-paging-current="1" data-paging-position="right" data-paging-size="10">
                        <thead>
                            <tr class="userDatatable-header footable-header">
                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="userDatatable-title">Código</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;" v-if="showProductCode">
                                    <span class="userDatatable-title">Código del proveedor</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Descripción</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;" v-if="showQuantityAvailable">
                                    <span class="userDatatable-title">Cantidad</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Precio</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;" v-if="showDiscount">
                                    <span class="userDatatable-title">Descuento</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable text-right" style="display: table-cell;" v-if="enableActions">
                                    <span class="userDatatable-title">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="product in paginationData.data" :key="product.id">

                                <td class="footable-first-visible border-primary border-bottom" v-bind:class="{'py-3': !enableActions}"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{product.product_code}}</div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom" v-bind:class="{'py-3': !enableActions}" v-if="showProductCode">
                                    <div class="userDatatable-content">
                                        {{product.supplier_code}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom" v-bind:class="{'py-3': !enableActions}">
                                    <div class="userDatatable-content">
                                        {{product.name}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom" v-bind:class="{'py-3': !enableActions}" v-if="showQuantityAvailable">
                                    <div class="userDatatable-content">
                                        {{product.quantity_available}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom" v-bind:class="{'py-3': !enableActions}">
                                    <div class="userDatatable-content">
                                        ${{product.price}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom" v-bind:class="{'py-3': !enableActions}" v-if="showDiscount">
                                    <div class="userDatatable-content">
                                        ${{product.discount}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom" v-if="enableActions"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex">
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img"
                                                @click="editProduct(product)">
                                                <img-component url="/svg/edit.svg" alt="Editar"></img-component>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-danger border-0 button-img"
                                                @click="openDeleteConfirmation(product)">
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
                                                @click="getProductData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getProductData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>

                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getProductData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>


                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === paginationData.pagination.last_page}"
                                                @click="getProductData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === paginationData.pagination.last_page}"
                                                @click="getProductData(paginationData.pagination.last_page)"
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

    <product-component :id="id" :productData="productData" :isNew="isNewProduct" :productCategory="title">
    </product-component>
    <success-alert-component :id="`productTableAlertSuccess${id}`" message="Se ha borrado el producto de forma exitosa"
        :title="'Producto eliminado satisfactoriamente'"></success-alert-component>
    <error-alert-component :id="`productTableAlertError${id}`" :errors="errors" :title="'Error borrar el producto'">
    </error-alert-component>
    <confirmation-alert-component :id="`productTableAlertConfirmation${id}`"
        title="¿Desea eliminar este producto?. Esta acción no se puede deshacer" @confirmAction="deleteProduct">
    </confirmation-alert-component>
</template>

<script lang="ts" src="./ProductTableComponent.ts"></script>

<style scoped>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';

</style>
