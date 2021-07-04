<template>
   <div class="row mx-0 mb-25 p-0">
      <div class="col-12 col-md-3 mb-25">
         <label for="gocMenarca">Menarca</label>
         <input class="form-control form-control-lg" type="number" placeholder="Edad en que comenzó" :disabled="disabled" id="gocMenarca"
               v-model="formData.menarca">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocRitmo">Ritmo</label>
         <input class="form-control form-control-lg" type="number" placeholder="Ritmo" :disabled="disabled" id="gocRitmo"
               v-model="formData.ritmo">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocCantidad">Cantidad</label>
         <select class="form-control form-control-lg" :disabled="disabled" id="gocCantidad" v-model="formData.cantidad">
               <option>Escaso</option>
               <option>Normal</option>
               <option>Abundante</option>
         </select>
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocToallas">Toallas por día</label>
         <input class="form-control form-control-lg" type="number" placeholder="Cantidad" :disabled="disabled" id="gocToallas"
               v-model="formData.toallas">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocDolor">Dolor</label>
         <select class="form-control form-control-lg" :disabled="disabled" id="gocDolor" v-model="formData.dolor">
               <option>Seleccione una opción</option>
               <option>Leve</option>
               <option>Moderado</option>
               <option>Severo</option>
         </select>
      </div>
      <div class="col-12 col-md-9 mb-25">
         <label for="gocTratamiento">Tratamiento</label>
         <textarea type="text" class="form-control form-control-lg" placeholder="Tratamiento" :disabled="disabled" id="gocTratamiento"
               v-model="formData.tratamiento"></textarea>
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocFUM">FUM</label>
         <input class="form-control form-control-lg" type="date" placeholder="Fecha" :disabled="disabled" id="gocFUM"
               v-model="formData.fum">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocIVSA">IVSA</label>
         <input class="form-control form-control-lg" type="number" placeholder="IVSA" :disabled="disabled" id="gocIVSA"
               v-model="formData.ivsa">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocParejas">Parejas</label>
         <input class="form-control form-control-lg" type="number" placeholder="Parejas" :disabled="disabled" id="gocParejas"
               v-model="formData.parejas">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocMPF">MPF</label>
         <select class="form-control form-control-lg" :disabled="disabled" id="gocMPF" v-model="formData.mpf">
               <option>Actual</option>
               <option>Previo</option>
         </select>
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocGestas">Gestas</label>
         <input class="form-control form-control-lg" type="number" placeholder="Gestas" :disabled="disabled" id="gocGestas"
               v-model="formData.gestas">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocCesareas">Cesareas</label>
         <input class="form-control form-control-lg" type="number" placeholder="Cantidad" :disabled="disabled" id="gocCesareas"
               v-model="formData.cesareas">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocPartos">Partos</label>
         <input class="form-control form-control-lg" type="number" placeholder="Cantidad" :disabled="disabled" id="gocPartos"
               v-model="formData.partos">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocAbortos">Abortos</label>
         <input class="form-control form-control-lg" type="number" placeholder="Cantidad" :disabled="disabled" id="gocAbortos"
               v-model="formData.abortos">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocEctopicos">Ectópicos</label>
         <input class="form-control form-control-lg" type="number" placeholder="Cantidad" :disabled="disabled" id="gocEctopicos"
               v-model="formData.ectopicos">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocCitologiaVertical">Citología cervical</label>
         <input class="form-control form-control-lg" type="date" placeholder="Fecha" :disabled="disabled" id="gocCitologiaVertical"
               v-model="formData.citologiaVertical">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocDOCMA">DOCMA</label>
         <input class="form-control form-control-lg" type="date" placeholder="Fecha" :disabled="disabled" id="gocDOCMA"
               v-model="formData.docma">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocAutoexploracion">Autoexploración</label>
         <input class="form-control form-control-lg" type="number" placeholder="Autoexploración"
               :disabled="disabled" id="gocAutoexploracion" v-model="formData.autoexploracion">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocUSG">USG</label>
         <input class="form-control form-control-lg" type="number" placeholder="USG" :disabled="disabled" id="gocUSG"
               v-model="formData.usg">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocMastografia">Mastografía</label>
         <input class="form-control form-control-lg" type="number" placeholder="Mastografía" :disabled="disabled" id="gocMastografia"
               v-model="formData.mastografia">
      </div>
      <div class="col-12 col-md-3 mb-25">
         <label for="gocMenopausia">Menopausia</label>
         <input class="form-control form-control-lg" type="number" placeholder="Menopausia" :disabled="disabled" id="gocMenopausia"
               v-model="formData.menopausia">
      </div>
      <div class="col-12">
         <label for="gocAntecedentesInfertilidad">Antecedentes de infertilidad</label>
         <textarea class="form-control form-control-lg" type="number" placeholder="Antecedentes de infertilidad"
               :disabled="disabled" id="gocAntecedentesInfertilidad" v-model="formData.antecedentesInfertilidad"
               ></textarea>
      </div>
   </div>

   <div class="atbd-collapse atbd-collapse-custom mb-25">
      <div class="atbd-collapse-item border rounded">
         <div class="atbd-collapse-item__header">
               <a class="item-link collapsed" data-toggle="collapse" data-target="#gocG1" aria-expanded="false"
                  aria-controls="gocG1">
                  <i class="la la-angle-right"></i>
                  <h6>G1</h6>
               </a>
         </div>
         <div :disabled="disabled" id="gocG1" class="atbd-collapse-item__body collapse bg-white">
               <div class="collapse-body-text p-3">
                  <div class="col-12 row p-0 m-0">
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG1Anio">Año</label>
                           <input class="form-control form-control-lg" type="text" placeholder="Ejem: 1994"
                              :disabled="disabled" id="gocG1Anio" v-model="formData.g1.anio">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG1Edad">Edad Maternal</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Edad" :disabled="disabled" id="gocG1Edad"
                              v-model="formData.g1.edad">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG1Duracion">Duración de embarazo</label>
                           <input class="form-control form-control-lg" type="number" placeholder="1 a 42 semanas"
                              :disabled="disabled" id="gocG1Duracion" v-model="formData.g1.duracion">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="">Sexo</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG1Sexo" v-model="formData.g1.sexo">
                              <option value="Femenino">Femenino</option>
                              <option value="Masculino">Masculino</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG1Peso">Peso</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Eje: 300 gr"
                              :disabled="disabled" id="gocG1Peso" v-model="formData.g1.peso">
                     </div>
                     <div class="col-12 col-md-4 mb-25 align-self-center">
                           <div class="custom-control custom-switch switch-primary switch-md m-auto">
                              <input type="checkbox" class="custom-control-input" :disabled="disabled" id="gocG1VivoSano"
                                 :checked="formData.g1.vivoSano" v-model="formData.g1.vivoSano">
                              <label class="custom-control-label" for="gocG1VivoSano">Vivo y
                                 sano</label>
                           </div>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG1Resol">Resol.</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG1Resol"
                              v-model="formData.g1.resol">
                              <option value="Parto">Parto</option>
                              <option value="Cesarea">Cesarea</option>
                              <option value="Forceps">Forceps</option>
                              <option value="Aborto">Aborto</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG1Comp">Comp</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses" :disabled="disabled" id="gocG1Comp"
                              v-model="formData.g1.comp">
                     </div>
                     <div class="col-12 col-md-4">
                           <label for="gocG1Lactancia">Lactancia</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses"
                              :disabled="disabled" id="gocG1Lactancia" v-model="formData.g1.lactancia">
                     </div>
                  </div>
               </div>
         </div>
      </div>

      <div class="atbd-collapse-item border rounded rounded">
         <div class="atbd-collapse-item__header">
               <a class="item-link collapsed" data-toggle="collapse" data-target="#gocG2" aria-expanded="false"
                  aria-controls="gocG2">
                  <i class="la la-angle-right"></i>
                  <h6>G2</h6>
               </a>
         </div>
         <div :disabled="disabled" id="gocG2" class="atbd-collapse-item__body collapse bg-white">
               <div class="collapse-body-text p-3">
                  <div class="col-12 row p-0 m-0">
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG2Anio">Año</label>
                           <input class="form-control form-control-lg" type="text" placeholder="Ejem: 1994"
                              :disabled="disabled" id="gocG2Anio" v-model="formData.g2.anio">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG2Edad">Edad Maternal</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Edad" :disabled="disabled" id="gocG2Edad"
                              v-model="formData.g2.edad">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG2Duracion">Duración de embarazo</label>
                           <input class="form-control form-control-lg" type="number" placeholder="1 a 42 semanas"
                              :disabled="disabled" id="gocG2Duracion" v-model="formData.g2.duracion">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="">Sexo</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG2Sexo" v-model="formData.g2.sexo">
                              <option value="Femenino">Femenino</option>
                              <option value="Masculino">Masculino</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG2Peso">Peso</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Eje: 300 gr"
                              :disabled="disabled" id="gocG2Peso" v-model="formData.g2.peso">
                     </div>
                     <div class="col-12 col-md-4 mb-25 align-self-center">
                           <div class="custom-control custom-switch switch-primary switch-md m-auto">
                              <input type="checkbox" class="custom-control-input" :disabled="disabled" id="gocG2VivoSano"
                                 :checked="formData.g2.vivoSano" v-model="formData.g2.vivoSano">
                              <label class="custom-control-label" for="gocG2VivoSano">Vivo y
                                 sano</label>
                           </div>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG2Resol">Resol.</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG2Resol"
                              v-model="formData.g2.resol">
                              <option value="Parto">Parto</option>
                              <option value="Cesarea">Cesarea</option>
                              <option value="Forceps">Forceps</option>
                              <option value="Aborto">Aborto</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG2Comp">Comp</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses" :disabled="disabled" id="gocG2Comp"
                              v-model="formData.g2.comp">
                     </div>
                     <div class="col-12 col-md-4">
                           <label for="gocG2Lactancia">Lactancia</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses"
                              :disabled="disabled" id="gocG2Lactancia" v-model="formData.g2.lactancia">
                     </div>
                  </div>
               </div>
         </div>
      </div>

      <div class="atbd-collapse-item border rounded">
         <div class="atbd-collapse-item__header">
               <a class="item-link collapsed" data-toggle="collapse" data-target="#gocG3" aria-expanded="false"
                  aria-controls="gocG3">
                  <i class="la la-angle-right"></i>
                  <h6>G3</h6>
               </a>
         </div>
         <div :disabled="disabled" id="gocG3" class="atbd-collapse-item__body collapse bg-white">
               <div class="collapse-body-text p-3">
                  <div class="col-12 row p-0 m-0">
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG3Anio">Año</label>
                           <input class="form-control form-control-lg" type="text" placeholder="Ejem: 1994"
                              :disabled="disabled" id="gocG3Anio" v-model="formData.g3.anio">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG3Edad">Edad Maternal</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Edad" :disabled="disabled" id="gocG3Edad"
                              v-model="formData.g3.edad">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG3Duracion">Duración de embarazo</label>
                           <input class="form-control form-control-lg" type="number" placeholder="1 a 42 semanas"
                              :disabled="disabled" id="gocG3Duracion" v-model="formData.g3.duracion">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="">Sexo</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG3Sexo" v-model="formData.g3.sexo">
                              <option value="Femenino">Femenino</option>
                              <option value="Masculino">Masculino</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG3Peso">Peso</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Eje: 300 gr"
                              :disabled="disabled" id="gocG3Peso" v-model="formData.g3.peso">
                     </div>
                     <div class="col-12 col-md-4 mb-25 align-self-center">
                           <div class="custom-control custom-switch switch-primary switch-md m-auto">
                              <input type="checkbox" class="custom-control-input" :disabled="disabled" id="gocG3VivoSano"
                                 :checked="formData.g3.vivoSano" v-model="formData.g3.vivoSano">
                              <label class="custom-control-label" for="gocG3VivoSano">Vivo y
                                 sano</label>
                           </div>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG3Resol">Resol.</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG3Resol"
                              v-model="formData.g3.resol">
                              <option value="Parto">Parto</option>
                              <option value="Cesarea">Cesarea</option>
                              <option value="Forceps">Forceps</option>
                              <option value="Aborto">Aborto</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG3Comp">Comp</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses" :disabled="disabled" id="gocG3Comp"
                              v-model="formData.g3.comp">
                     </div>
                     <div class="col-12 col-md-4">
                           <label for="gocG3Lactancia">Lactancia</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses"
                              :disabled="disabled" id="gocG3Lactancia" v-model="formData.g3.lactancia">
                     </div>
                  </div>
               </div>
         </div>
      </div>

      <div class="atbd-collapse-item border rounded">
         <div class="atbd-collapse-item__header">
               <a class="item-link collapsed" data-toggle="collapse" data-target="#gocG4" aria-expanded="false"
                  aria-controls="gocG4">
                  <i class="la la-angle-right"></i>
                  <h6>G4</h6>
               </a>
         </div>
         <div :disabled="disabled" id="gocG4" class="atbd-collapse-item__body collapse bg-white">
               <div class="collapse-body-text p-3">
                  <div class="col-12 row p-0 m-0">
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG4Anio">Año</label>
                           <input class="form-control form-control-lg" type="text" placeholder="Ejem: 1994"
                              :disabled="disabled" id="gocG4Anio" v-model="formData.g4.anio">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG4Edad">Edad Maternal</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Edad" :disabled="disabled" id="gocG4Edad"
                              v-model="formData.g4.edad">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG4Duracion">Duración de embarazo</label>
                           <input class="form-control form-control-lg" type="number" placeholder="1 a 42 semanas"
                              :disabled="disabled" id="gocG4Duracion" v-model="formData.g4.duracion">
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="">Sexo</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG4Sexo" v-model="formData.g4.sexo">
                              <option value="Femenino">Femenino</option>
                              <option value="Masculino">Masculino</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG4Peso">Peso</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Eje: 300 gr"
                              :disabled="disabled" id="gocG4Peso" v-model="formData.g4.peso">
                     </div>
                     <div class="col-12 col-md-4 mb-25 align-self-center">
                           <div class="custom-control custom-switch switch-primary switch-md m-auto">
                              <input type="checkbox" class="custom-control-input" :disabled="disabled" id="gocG4VivoSano"
                                 :checked="formData.g4.vivoSano" v-model="formData.g4.vivoSano">
                              <label class="custom-control-label" for="gocG4VivoSano">Vivo y
                                 sano</label>
                           </div>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG4Resol">Resol.</label>
                           <select class="form-control form-control-lg" :disabled="disabled" id="gocG4Resol"
                              v-model="formData.g4.resol">
                              <option value="Parto">Parto</option>
                              <option value="Cesarea">Cesarea</option>
                              <option value="Forceps">Forceps</option>
                              <option value="Aborto">Aborto</option>
                           </select>
                     </div>
                     <div class="col-12 col-md-4 mb-25">
                           <label for="gocG4Comp">Comp</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses" :disabled="disabled" id="gocG4Comp"
                              v-model="formData.g4.comp">
                     </div>
                     <div class="col-12 col-md-4">
                           <label for="gocG4Lactancia">Lactancia</label>
                           <input class="form-control form-control-lg" type="number" placeholder="Meses"
                              :disabled="disabled" id="gocG4Lactancia" v-model="formData.g4.lactancia">
                     </div>
                  </div>
               </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts" src="./GinecoObstetrosComponent.ts"></script>
