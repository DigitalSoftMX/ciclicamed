<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="errorModal" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info" role="document">
            <div class="modal-content modal-bg-danger modal-colored">
                <div class="modal-header ">
                    <h6 class="modal-title">{{ title }}</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);">
                    </button>
                </div>
                <div class="modal-body mb-3">
                    <div class="modal-info-body d-flex mt-2" v-for="error in errors" :key="error">
                        <div class="modal-info-icon danger">
                            <img src="/svg/alert.svg" alt="Alert logo" style="filter: invert(1);">
                        </div>
                        <div class="modal-info-text text-white" v-for="errorInfo in error" :key="errorInfo">
                            {{ errorInfo }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id', 'title', 'errors']
    }

</script>
