<template>
    <div class="card mb-25">
        <div class="card-body text-center pt-sm-30 pb-sm-0  px-25 pb-0">
            <div class="account-profile">
                <div class="ap-img w-100 d-flex justify-content-center">
                    <!-- Profile picture image-->
                    <img class="ap-img__main rounded-circle mb-3  wh-120 d-flex bg-opacity-primary"
                        src="https://demo.jsnorm.com/laravel/strikingdash/img/author/profile.png" alt="profile">
                </div>
                <div class="ap-nameAddress pb-3 pt-1">
                    <h5 class="ap-nameAddress__title">Duran Clayton</h5>
                    <p class="ap-nameAddress__subTitle fs-14 m-0">UI/UX Designer</p>
                    <p class="ap-nameAddress__subTitle fs-14 m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-map-pin">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>London, England
                    </p>
                </div>
                <div class="ap-button button-group d-flex justify-content-center flex-wrap">
                    <button type="button" class="border text-capitalize px-25 color-gray transparent shadow2 radius-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-mail">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                            </path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>message</button>
                    <button class="btn btn-primary btn-default btn-squared text-capitalize  px-25"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-user-plus">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        follow
                    </button>
                </div>
            </div>
            <div class="card-footer mt-20 pt-20 pb-20 px-0">
                <div class="profile-overview d-flex justify-content-between flex-wrap">
                    <div class="po-details">
                        <h6 class="po-details__title pb-1">$72,572</h6>
                        <span class="po-details__sTitle">Total Revenue</span>
                    </div>
                    <div class="po-details">
                        <h6 class="po-details__title pb-1">3,257</h6>
                        <span class="po-details__sTitle">order</span>
                    </div>
                    <div class="po-details">
                        <h6 class="po-details__title pb-1">74</h6>
                        <span class="po-details__sTitle">Products</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
