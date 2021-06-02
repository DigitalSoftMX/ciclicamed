<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="successModal"
        aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info modal-dialog-centered" role="document">
            <div class="modal-content modal-bg-success modal-colored">
                <div class="modal-header ">
                    <h6 class="modal-title">{{ title }}</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);">
                    </button>
                </div>
                <div class="modal-body mb-3">
                    <div class="modal-info-body d-flex">
                        <div class="modal-info-icon success">
                            <img src="/svg/success.svg" alt="Alert logo" style="filter: invert(1);">
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

    export default {
        props: ['id', 'title', 'message'],
    }

</script>
