<template>
    <div class="row mx-0 p-0">
        <div class="card mb-25 col-12">
            <div class="card-body text-center pt-30 px-25 pb-0">
                <div class="account-profile-cards  ">
                    <div class="ap-img d-flex justify-content-center">
                        <!-- Profile picture image-->
                        <img class="ap-img__main bg-opacity-primary  wh-120 rounded-circle mb-3 "
                            src="https://demo.jsnorm.com/laravel/strikingdash/img/tm1.png" alt="profile">
                    </div>
                    <div class="ap-nameAddress">
                        <h6 class="ap-nameAddress__title">Duran Clayton</h6>
                        <p class="ap-nameAddress__subTitle  fs-14 pt-1 m-0 ">UI/UX Designer</p>
                    </div>
                    <div
                        class="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap pt-20">
                        <button type="button"
                            class="border text-capitalize px-25 color-white bg-primary shadow2 radius-md">Editar</button>
                    </div>
                </div>
                <div class="card-footer mt-20 pt-20 pb-20 px-0">
                    <div class="profile-overview d-flex justify-content-between flex-wrap">
                        <div class="po-details">
                            <h6 class="po-details__title">$72,572</h6>
                            <span class="po-details__sTitle">Total Revenue</span>
                        </div>
                        <div class="po-details">
                            <h6 class="po-details__title">3,257</h6>
                            <span class="po-details__sTitle">order</span>
                        </div>
                        <div class="po-details">
                            <h6 class="po-details__title">74</h6>
                            <span class="po-details__sTitle">Products</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 card p-0 mb-25">
            <div class="card-header">
                <h4>Tiempo de consulta</h4>
            </div>
            <div class="card-body text-center">
                <h1>00:00</h1>
            </div>
        </div>
        <div class="col-12 p-0">
            <button class="btn btn-danger btn-lg btn-squared w-100">Terminar cita
            </button>
        </div>
    </div>
</template>
