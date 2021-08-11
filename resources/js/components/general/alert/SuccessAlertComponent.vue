<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="successModal"
        aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info modal-dialog-centered" role="document">
            <div class="modal-content modal-bg-success modal-colored">
                <div class="modal-header ">
                    <h6 class="modal-title">{{ title }}</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body mb-3">
                    <div class="modal-info-body d-flex">
                        <div class="modal-info-icon success">
                            <img-component url="/svg/success.svg" alt="Correcto" styleData="filter: invert(1);"></img-component>
                        </div>
                        <div class="modal-info-text text-white">
                            {{ message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/** 
 * @description Componente que muestra un mensaje de éxito, mediante el uso de un modal
 * @class SuccessAlertComponent
 * @example <success-alert-component :id="" :title="" :errors=""></success-alert-component>
*/
export default {
    /** 
     * Propiedades que recibe el componente 
     * @member SuccessAlertComponent.props
     * @property {string} id (Obligatorio) ID del componente
     * @property {string} title (Obligatorio) Título del mensaje de error
     * @property {string[]} message (Obligatorio) Mensaje para mostrar en el cuerpo del componente
    */
    props: ['id', 'title', 'message'],
}

</script>
