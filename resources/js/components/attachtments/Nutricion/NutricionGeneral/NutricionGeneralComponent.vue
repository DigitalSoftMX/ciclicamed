<template>

    <div class="card">
        <div class="card-header">
            <h6>Nutrición general</h6>
        </div>

        <div class="card-body">

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npmEmbarazoActual" aria-expanded="true"
                        aria-controls="npmEmbarazoActual">
                        <i class="la la-angle-right"></i>
                        Peso
                    </a>
                </div>
                <div id="npmEmbarazoActual" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 card p-0 mb-25">
                        <div class="card-header">
                            <h4>Peso mínimo</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="">Peso mínimo</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="">¿Hace cuanto?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="">¿Durante cuanto tiempo?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card p-0 mb-25">
                        <div class="card-header">
                            <h4>Peso máximo</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="">Peso máximo</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="">¿Hace cuanto?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="">¿Durante cuanto tiempo?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <label for="">Peso habitual</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npmEmbarazoActual" aria-expanded="true"
                        aria-controls="npmEmbarazoActual">
                        <i class="la la-angle-right"></i>
                        Antecedentes salud y enfermedad
                    </a>
                </div>
                <div id="npmEmbarazoActual" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 card p-0 mb-25">
                        <div class="card-header">
                            <h4>Problemas actuales</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcDiarrea">
                                    <label class="custom-control-label" for="npcDiarrea">Diarrea</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcEstrenimiento">
                                    <label class="custom-control-label" for="npcEstrenimiento">Estreñimiento</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcGastritis">
                                    <label class="custom-control-label" for="npcGastritis">Gastritis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcUlcera">
                                    <label class="custom-control-label" for="npcUlcera">Úlcera</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcNauseas">
                                    <label class="custom-control-label" for="npcNauseas">Náuseas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcPirosis">
                                    <label class="custom-control-label" for="npcPirosis">Pirosis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcVomito">
                                    <label class="custom-control-label" for="npcVomito">Vómito</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcColitis">
                                    <label class="custom-control-label" for="npcColitis">Colitis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="npcDentadura">
                                    <label class="custom-control-label" for="npcDentadura">Dentadura</label>
                                </div>
                            </div>
                            <div class="col-12 card card-default card-md bg-white">
                                <div class="card-header">
                                    <h6>Otros</h6>
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input"
                                            id="ucIncontinenciaUrinariaEsfuerzo">
                                        <label class="custom-control-label"
                                            for="ucIncontinenciaUrinariaEsfuerzo"></label>
                                    </div>
                                </div>
                                <div class="card-body bg-normal">
                                    <textarea class="form-control form-control-lg" rows="4" type="text"
                                        id="ucEsfuerzoTiempoEvolucion"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 row mb-25 mx-0 p-0">
                        <div class="col-12 mb-25 p-0">
                            <label for="ucUrgenciaCantidadPerdida">Observaciones</label>
                            <textarea class="form-control form-control-lg" rows="4"
                                id="ucUrgenciaCantidadPerdida"></textarea>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="ucUrgenciaCantidadPerdida">¿Padece alguna enfermedad diagnosticada?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                id="ucUrgenciaCantidadPerdida"></textarea>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="ucUrgenciaCantidadPerdida">¿Ha padecido alguna enfermededad importante?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                id="ucUrgenciaCantidadPerdida"></textarea>
                        </div>

                        <div class="col-12 card card-default card-md bg-white mb-25 p-0">
                            <div class="card-header">
                                <h6>¿Toma algún medicamento?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="ccLeucorrea">
                                    <label class="custom-control-label" for="ccLeucorrea"></label>
                                </div>
                            </div>
                            <div class="row mx-0 card-body bg-normal">
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">¿Cúal?</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">Dosis</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">¿Cúal?</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">Dosis</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="">¿Cúal?</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="">Dosis</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-12 card p-0 mb-25">
                            <div class="card-header bg-normal">
                                <h4>Toma...</h4>
                            </div>
                            <div class="row card-body mx-0">
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" id="npcLaxantes">
                                        <label class="custom-control-label" for="npcLaxantes">Laxantes</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" id="npcDiureticos">
                                        <label class="custom-control-label" for="npcDiureticos">Diuréticos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" id="npcAntiacidos">
                                        <label class="custom-control-label" for="npcAntiacidos">Antiácidos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" id="npcAnalgesicos">
                                        <label class="custom-control-label" for="npcAnalgesicos">Analgésicos</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 p-0">
                            <label for="ucUrgenciaCantidadPerdida">¿Le han practicado alguna cirugía?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                id="ucUrgenciaCantidadPerdida"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npmEmbarazoActual" aria-expanded="true"
                        aria-controls="npmEmbarazoActual">
                        <i class="la la-angle-right"></i>
                        Antecedentes familiares
                    </a>
                </div>
                <div id="npmEmbarazoActual" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="npcObesidad">
                            <label class="custom-control-label" for="npcObesidad">Obesidad</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="npcHTA">
                            <label class="custom-control-label" for="npcHTA">HTA</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="npcCancer">
                            <label class="custom-control-label" for="npcCancer">Cáncer</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="npcHipercolesterolemia">
                            <label class="custom-control-label" for="npcHipercolesterolemia">Hipercolesterolemia</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="npcHipertrigliceridemia">
                            <label class="custom-control-label"
                                for="npcHipertrigliceridemia">Hipertrigliceridemia</label>
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Diabetes</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <select class="form-control form-control-lg" id="cecPenetracion">
                                <option value="TipoI">Tipo I</option>
                                <option value="TipoII">Tipo II</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="npcHipertrigliceridemia">TA</label>
                        <input class="form-control form-control-lg" type="text" id="npcHipertrigliceridemia">
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcActividadFisica" aria-expanded="true"
                        aria-controls="npcActividadFisica">
                        <i class="la la-angle-right"></i>
                        Aspectos ginecológicos
                    </a>
                </div>
                <div id="npcActividadFisica" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Embarazo actual</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Semanas de gestación</label>
                                <input class="form-control form-control-lg" type="number">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Peso pregestacional</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Anticonceptivos orales</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Cuál?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Dosis</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">SX</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Climaterio</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="">Fecha</label>
                            <input class="form-control form-control-lg" type="date">
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white">
                        <div class="card-header">
                            <h6>Terapia de reemplazo hormonal</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Cuál?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Dosis</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">SX</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcActividadFisica" aria-expanded="true"
                        aria-controls="npcActividadFisica">
                        <i class="la la-angle-right"></i>
                        Actividad física
                    </a>
                </div>
                <div id="npcActividadFisica" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">¿Cuál es tu profesión?</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">¿Practica algún deporte o hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="">¿Cúantos días y horas al día hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcConsumoFrecuencia" aria-expanded="true"
                        aria-controls="npcConsumoFrecuencia">
                        <i class="la la-angle-right"></i>
                        Consumo en frecuencia y cantidad
                    </a>
                </div>
                <div id="npcConsumoFrecuencia" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Alcohol</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Cantidad</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Frecuencia</label>
                                <select class="form-control form-control-lg" id="cecPenetracion">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Tabaco</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Cantidad</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Frecuencia</label>
                                <select class="form-control form-control-lg" id="cecPenetracion">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white">
                        <div class="card-header">
                            <h6>Café</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Cantidad</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Frecuencia</label>
                                <select class="form-control form-control-lg" id="cecPenetracion">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcConsumoFrecuencia" aria-expanded="true"
                        aria-controls="npcConsumoFrecuencia">
                        <i class="la la-angle-right"></i>
                        Indicadores bioquímicos
                    </a>
                </div>
                <div id="npcConsumoFrecuencia" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="">Últimos estudios de laboratorio</label>
                        <textarea class="form-control form-control-lg" rows="5"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Datos bioquímicos relevantes</label>
                        <textarea class="form-control form-control-lg" rows="5"></textarea>
                    </div>
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Se solicitaron análisis</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="">¿Cúales</label>
                            <input class="form-control form-control-lg" type="text">
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Glucosa capilar</h6>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="">Día</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                                <div class="col-6">
                                    <label for="">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="">Día</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                                <div class="col-6">
                                    <label for="">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0">
                                <div class="col-6">
                                    <label for="">Día</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                                <div class="col-6">
                                    <label for="">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0">
                                <div class="col-6">
                                    <label for="">Día</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                                <div class="col-6">
                                    <label for="">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcConsumoFrecuencia" aria-expanded="true"
                        aria-controls="npcConsumoFrecuencia">
                        <i class="la la-angle-right"></i>
                        Indicadores dietéticos
                    </a>
                </div>
                <div id="npcConsumoFrecuencia" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="">¿Cúantas comidas hace al día?</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">¿Quién prepara sus alimentos?</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Come entre comidas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="">¿Qué come?</label>
                            <textarea class="form-control form-control-lg" rows="3"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Ha modificado su alimentación desde en los últimos 6 meses (trabajo, estudio o
                                actividad)?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">¿Por qué?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">¿Cómo?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Apetito</label>
                        <select class="form-control form-control-lg" id="cecPenetracion">
                            <option value="Bueno">Bueno</option>
                            <option value="Regular">Regular</option>
                            <option value="Malo">Malo</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">¿A qué hora tiene más hambre?</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Alimentos preferidos</label>
                        <textarea class="form-control form-control-lg" rows="3"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Alimentos que no le agradan o no acostumbra</label>
                        <textarea class="form-control form-control-lg" rows="3"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Alimentos que le causan malestar</label>
                        <textarea class="form-control form-control-lg" rows="3"></textarea>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Es alérgico a algún alimento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="">¿Cúal?</label>
                            <textarea class="form-control form-control-lg" rows="2"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Toma algún suplemento o complemento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Cúal?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Dosis</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12">
                                <label for="">¿Por qué?</label>
                                <textarea class="form-control form-control-lg" rows="4"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Su consumo varía cuando está triste, nervioso o ansioso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="">¿Cómo?</label>
                            <textarea class="form-control form-control-lg" rows="2"></textarea>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25 align-self-center">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="ucArdor">
                            <label class="custom-control-label" for="ucArdor">¿Agrega sal a la comida ya
                                preparada?</label>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="">¿Qué grasa utiliza en casa para preparar su comida?</label>
                        <select class="form-control form-control-lg" id="cecPenetracion">
                            <option value="Margarina">Margarina</option>
                            <option value="AceiteVegetal">Aceite vegetal</option>
                            <option value="Manteca">Manteca</option>
                            <option value="Mantequilla">Mantequilla</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Ha llevado alguna dieta especial?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Especificar</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Cuantas?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Qué tipo de dieta?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Hace cuánto?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Por qué razón?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Qué tanto se apegó a ella?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Obtuvo los resultados esperados?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Kg perdidos?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">¿Peso logrado?</label>
                                <input class="form-control form-control-lg" type="text">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white">
                        <div class="card-header">
                            <h6>¿Ha utilizado medicamentos para bajar de peso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    id="ucIncontinenciaUrinariaEsfuerzo">
                                <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">¿Cuáles?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcDoppler" aria-expanded="true"
                        aria-controls="npcDoppler">
                        <i class="la la-angle-right"></i>
                        Recordatorio de 24 horas
                    </a>
                </div>
                <div id="npcDoppler" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">

                    <div class="card mb-25 bg-normal">
                        <div class="card-header">
                            <h4>Entre semana</h4>
                        </div>
                        <div class="col-12 row mx-0 card-body bg-white">
                            <div class="col-12 col-md-6">
                                <label for="">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-25 bg-normal">
                        <div class="card-header">
                            <h4>Fin de semana</h4>
                        </div>
                        <div class="row mx-0 card-body bg-white">
                            <div class="col-12 col-md-6">
                                <label for="">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-normal">
                        <div class="card-header">
                            <h4> Alimentos olvidados</h4>
                        </div>
                        <div class="row mx-0 card-body bg-white">
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Chicles</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Mentas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Patillas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Mermeladas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Miel</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Azúcar</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Sustituto</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Crema</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Dulces</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Mantequilla</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Aceite</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Mayonesa</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Aderezo</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Vinagretas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Sal</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Salsas</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
