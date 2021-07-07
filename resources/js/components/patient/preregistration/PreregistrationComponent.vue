<template>
    <div class="e-info-modal modal fade show" id="preregistration-modal" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-sm e-info-dialog modal-dialog-centered modal-static" id="c-event"
            role="document">
            <div class="modal-content">
                <div class="modal-header justify-content-betweem bg-primary">
                    <div>
                        <h6 class="modal-title e-info-title">Preregistro</h6>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img-component url="/svg/close.svg" alt="Perfil" cssClass="rounded-circle" styleData="filter: invert(1);"></img-component>
                        </button>
                    </div>
                </div>

                <div class="modal-body row mx-0 modal-body-static rounded-0">

                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcNombre">Nombre</label>
                        <input class="form-control form-control-lg" type="text" disabled
                            id="pcNombre" v-model="patientDataCopy.first_name">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcApellidos">Apellidos</label>
                        <input class="form-control form-control-lg" type="text" disabled
                            id="pcApellidos" v-model="patientDataCopy.last_name">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcEdad">Edad</label>
                        <input class="form-control form-control-lg" type="text" disabled
                            id="pcEdad" :value="getAge()">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcFechaNacimiento">Fecha de nacimiento</label>
                        <input class="form-control form-control-lg" type="date" disabled
                            id="pcFechaNacimiento" v-model="patientDataCopy.birthday">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcTelefono">Teléfono de casa</label>
                        <input class="form-control form-control-lg" type="text" disabled
                            id="pcTelefono" v-model="patientDataCopy.phone">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcCelular">Celular</label>
                        <input class="form-control form-control-lg" type="text" disabled
                            id="pcCelular" v-model="patientDataCopy.cellphone">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcCorreoElectronico">Correo electrónico</label>
                        <input class="form-control form-control-lg" type="text" disabled
                            id="pcCorreoElectronico" v-model="patientDataCopy.user.email">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcEstadoCivil">Estado civil</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="pcEstadoCivil" v-model="preregistrationData.data.form.estadoCivil">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcEscolaridad">Escolaridad</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="pcEscolaridad" v-model="preregistrationData.data.form.escolaridad">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="pcOcupacion">Ocupación</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="pcOcupacion" v-model="preregistrationData.data.form.ocupacion">
                    </div>

                    <div class="col-12 col-md-4">
                        <label for="pcLugarNacimientoCiudad">Lugar de nacimiento: Ciudad</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="pcLugarNacimientoCiudad" v-model="preregistrationData.data.form.lugarNacimiento.ciudad">
                    </div>

                    <div class="col-12 col-md-4">
                        <label for="pcLugarNacimientoEstado">Lugar de nacimiento: Estado</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="pcLugarNacimientoEstado" v-model="preregistrationData.data.form.lugarNacimiento.estado">
                    </div>

                    <div class="col-12 mb-25">
                        <label for="pcDireccion">Dirección</label>
                        <textarea class="form-control form-control-lg" rows="3" disabled
                            id="pcDireccion" v-model="patientDataCopy.address"></textarea>
                    </div>

                    <div class="card-single col-12 mb-4 mb-25">
                        <div class="card shadow-none card-md">
                            <div class="card-header">
                                <h6>¿Tiene seguro de gastos médicos mayores?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="pcSeguroGastosCheck" v-model="preregistrationData.data.form.seguroGastos.check"
                                        :checked="preregistrationData.data.form.seguroGastos.check">
                                    <label class="custom-control-label" for="pcSeguroGastosCheck"></label>
                                </div>
                            </div>
                            <div class="card-body" v-show="preregistrationData.data.form.seguroGastos.check">
                                <label for="pcSeguroGastosDescription">¿Cúal?</label>
                                <textarea class="form-control form-control-lg" id="pcSeguroGastosDescription"
                                    v-model="preregistrationData.data.form.seguroGastos.description"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card-single col-12 mb-4 mb-25">
                        <div class="card shadow-none card-md">
                            <div class="card-header">
                                <h6>Datos de la pareja (si aplica)</h6>
                            </div>
                            <div class="card-body row mx-0">
                                <div class="col-12 col-md-4 mb-25">
                                    <label for="pcParejaNombre">Nombre</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="pcParejaNombre" v-model="preregistrationData.data.form.datosPareja.nombre">
                                </div>
                                <div class="col-12 col-md-4 mb-25">
                                    <label for="pcParejaApellidos">Apellidos</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="pcParejaApellidos" v-model="preregistrationData.data.form.datosPareja.apellidos">
                                </div>
                                <div class="col-12 col-md-4 mb-25">
                                    <label for="pcParejaEdad">Edad</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="pcParejaEdad" v-model="preregistrationData.data.form.datosPareja.edad">
                                </div>
                                <div class="col-12 col-md-4 mb-25">
                                    <label for="pcParejaOcupacion">Ocupación</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="pcParejaOcupacion" v-model="preregistrationData.data.form.datosPareja.ocupacion">
                                </div>
                                <div class="col-12 col-md-4 mb-25">
                                    <label for="pcParejaTelefono">Teléfono celular</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="pcParejaTelefono" v-model="preregistrationData.data.form.datosPareja.telefono">
                                </div>
                                <div class="col-12 col-md-4 mb-25">
                                    <label for="pcParejaCorreo">Correo electrónico</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="pcParejaCorreo" v-model="preregistrationData.data.form.datosPareja.correo">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-single col-12 mb-4 mb-25">
                        <div class="card shadow-none card-md">
                            <div class="card-header">
                                <h6>Método de contacto</h6>
                            </div>
                            <div class="card-body row mx-0">

                                <div class="col-12 card shadow-none card-md p-0 mb-25">
                                    <div class="card-header">
                                        <h6>Recomendación</h6>
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                                id="pcRecomendacionCheck" v-model="preregistrationData.data.form.recomendacion.check"
                                                :checked="preregistrationData.data.form.recomendacion.check">
                                            <label class="custom-control-label" for="pcRecomendacionCheck"></label>
                                        </div>
                                    </div>
                                    <div class="card-body row mx-0"
                                        v-show="preregistrationData.data.form.recomendacion.check">
                                        <div class="col-12 col-md-6 mb-25">
                                            <label for="pcRecomendacionDescription">Tipo de
                                                recomendación</label>
                                            <select class="form-control form-control-lg" :disabled="disabled"
                                                id="pcRecomendacionDescription"
                                                v-model="preregistrationData.data.form.recomendacion.description">
                                                <option value="Paciente">Paciente</option>
                                                <option value="Medico">Médico</option>
                                                <option value="Hospital">Hospital</option>
                                            </select>
                                        </div>

                                        <div class="col-12 col-md-6 mb-25">
                                            <label for="pcRecomendacionNombre">Nombre de quien lo recomienda</label>
                                            <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                                id="pcRecomendacionNombre"
                                                v-model="preregistrationData.data.form.recomendacion.nombreRecomienda">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 card shadow-none card-md p-0">
                                    <div class="card-header">
                                        <h6>Si el método de contacto no fue la recomendación, seleccione entre las
                                            siguientes opciones</h6>
                                    </div>
                                    <div class="card-body row mx-0">
                                        <div class="col-12 col-md-4 mb-25">
                                            <div class="custom-control custom-switch switch-primary switch-md ">
                                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                                    id="pcFacebook" v-model="preregistrationData.data.form.facebook"
                                                    :checked="preregistrationData.data.form.facebook">
                                                <label class="custom-control-label"
                                                    for="pcFacebook">Facebook</label>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-4 mb-25">
                                            <div class="custom-control custom-switch switch-primary switch-md ">
                                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                                    id="pcInstagram" v-model="preregistrationData.data.form.instagram"
                                                    :checked="preregistrationData.data.form.instagram">
                                                <label class="custom-control-label"
                                                    for="pcInstagram">Instagram</label>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-4 mb-25">
                                            <div class="custom-control custom-switch switch-primary switch-md ">
                                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                                    id="pcFolletos" v-model="preregistrationData.data.form.folletos"
                                                    :checked="preregistrationData.data.form.folletos">
                                                <label class="custom-control-label"
                                                    for="pcFolletos">Folletos</label>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-4 mb-25">
                                            <div class="custom-control custom-switch switch-primary switch-md ">
                                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                                    id="pcPaginaInternet" v-model="preregistrationData.data.form.paginaInternet"
                                                    :checked="preregistrationData.data.form.paginaInternet">
                                                <label class="custom-control-label" for="pcPaginaInternet">Página de
                                                    Internet</label>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-4 mb-25">
                                            <div class="custom-control custom-switch switch-primary switch-md ">
                                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                                    id="pcBusquedaInternet" v-model="preregistrationData.data.form.busquedaInternet"
                                                    :checked="preregistrationData.data.form.busquedaInternet">
                                                <label class="custom-control-label" for="pcBusquedaInternet">Búsqueda de
                                                    Internet</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="card-single col-12 mb-4 mb-25">
                        <div class="card shadow-none card-md">
                            <div class="card-header">
                                <h6>Información complementaria</h6>
                            </div>
                            <div class="card-body row mx-0">
                                <div class="col-12 col-md-6 mb-25 p-0">
                                    <label for="pcLugarLabora">Lugar donde labora</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="pcLugarLabora" v-model="preregistrationData.data.form.lugarTrabajo">
                                </div>

                                <div class="col-12 card shadow-none card-md p-0">
                                    <div class="card-header">
                                        <h6>¿Tiene hijos?</h6>
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                                id="pcHijosCheck" v-model="preregistrationData.data.form.hijos.check"
                                                :checked="preregistrationData.data.form.hijos.check">
                                            <label class="custom-control-label" for="pcHijosCheck"></label>
                                        </div>
                                    </div>
                                    <div class="card-body row mx-0"
                                        v-show="preregistrationData.data.form.hijos.check">

                                        <div class="col-12 mb-25">
                                            <label for="pcHijosDescription">¿Cúantos?</label>
                                            <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                                id="pcHijosDescription"
                                                v-model="preregistrationData.data.form.hijos.description">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer bg-white">
                    <button class="btn btn-primary btn-default btn-squared" @click="updatePreregistration">{{buttonTitle}}</button>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component :id="'preregistrationSuccess'" :message="success.message" :title="success.title">
    </success-alert-component>
    <error-alert-component :id="'preregistrationError'" :errors="errors" :title="'Error al cancelar la cita'">
    </error-alert-component>
</template>

<script lang="ts" src="./PreregistrationComponent.ts"></script>

<style scoped>
    @import './PreregistrationComponent.scss';

</style>
