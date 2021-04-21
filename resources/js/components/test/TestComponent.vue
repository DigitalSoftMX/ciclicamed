<template>
    <div class="row">
        <div class="col-12 mb-5">
            <div class="breadcrumb-main user-member justify-content-between p-0">
                <div class="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                    <h4 class="text-capitalize fw-500 breadcrumb-title">Estudios médicos</h4>
                    <!-- <span class="sub-title ml-sm-25 pl-sm-25">24 recetas</span> -->
                </div>

                <div class="d-flex align-items-center user-member__form my-sm-0 my-2 float-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input class="form-control border-0 box-shadow-none" type="search" id="searchTest"
                        placeholder="Buscar por fecha" aria-label="Search">
                </div>
            </div>
        </div>
    </div>
    <div class="row" v-bind:class="{'justify-content-center': enableEmptyData }">
        <div class="text-center" v-if="enableEmptyData">
            <img src="/svg/empty.svg" alt="View prescription" class="ml-4 w-25">
            <h5 class="fw-500 mt-5 display-4">No se encontraron estudios médicos</h5>
        </div>

        <div class="col-lg-4" v-for="test in testsData" :key="test.id" v-else>
            <div class="card shadow-none border-0 mb-25" :style="{'background-color': `${test.status.color}`}">
                <div class="card-body banner-feature--15">
                    <div class="pb-md-0 text-center">
                        <h3 class="m-0 text-white" v-if="test.medicalorders.length > 0">{{test.medicalorders[test.medicalorders.length - 1].product.name}}</h3>
                        <h4 class="text-white text-center">Fecha de estudio:</h4>
                        <h4 class="text-white text-center">{{ getDateFormatted(test.created_at) }}</h4>
                        <p class="text-white display-5">{{ test.status.name }}</p>
                    </div>
                    <div class="content-center mt-25" v-if="testHasResults(test.status.name)">
                        <button class="btn btn-primary btn-sm btn-squared btn-transparent-primary rounded-pill bg-white"
                            v-on:click="showMedicaments(prescription)" v-if="test.status.name=='Resultados creados'">Ver resultados</button>

                        <button class="btn btn-primary btn-sm btn-squared btn-transparent-primary rounded-pill bg-white"
                            v-on:click="showMedicaments(prescription)" v-if="test.status.name=='Estudio creado'">Ver orden de estudios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
</template>

<script>
    import $ from 'jquery';
    import moment from 'moment';
    require('../../../../public/vendor_assets/js/daterangepicker');
    require('../../../../public/vendor_assets/js/jquery/jquery-ui');
    require('../../../../public/vendor_assets/js/jquery/jquery-datepicker-es')
    export default {
        components: {
        },
        props: ['test'],
        data: function () {
            return {
                testsData: Object.assign({}, this.$props.test),
                enableEmptyData: false,
                medicaments: []
            }
        },
        mounted() {
            const that = this;
            $("#searchTest").daterangepicker({
                showDropdowns: true,
                minYear: 1930,
                maxYear: moment().endOf("year").year(),
                ranges: {
                    'Hoy': [moment(), moment()],
                    'Últimos 7 dias': [moment().subtract(6, 'days'), moment()],
                    'Últimos 30 dias': [moment().subtract(29, 'days'), moment()],
                    'Este mes': [moment().startOf('month'), moment().endOf('month')],
                    'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month')
                        .endOf('month')
                    ],
                    'Este año': [moment().startOf('year'), moment().endOf('year')],
                    'Todos': [moment().year('1930').startOf(), moment().endOf('year')],
                },
                locale: {
                    cancelLabel: 'Cancelar',
                    applyLabel: 'Seleccionar',
                    "customRangeLabel": "Seleccionar otra fecha",
                }
            });
            $('#searchTest').on('apply.daterangepicker', function (ev, picker) {
                that.getTestByDate(picker.startDate, picker.endDate)
            });
        },
        methods: {
            getDateFormatted(date) {
                moment.locale('es');
                return moment(date).format('D MMMM YYYY');
            },
            getTestByDate(start, finish) {
                const data = Object.values(this.$props.test).filter(data => moment().isBetween(start, finish))
                this.testsData = data;
                this.enableEmptyData = this.testsData.length === 0 ? true : false;
            },
            showMedicaments(medicaments) {
                this.medicaments = medicaments
                $('#medicamentsModal').modal('show');
            },
            testHasResults(status)
            {
                return status === 'Resultados creados' || 'Estudio creado';
            }
        }
    }

</script>
