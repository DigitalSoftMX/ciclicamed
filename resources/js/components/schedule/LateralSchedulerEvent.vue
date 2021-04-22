<template>
    <div class="drawer-basic-wrap">


        <div class="atbd-drawer drawer-basic d-none">
            <div class="atbd-drawer__header">
                <h6 class="drawer-title">Basic Drawer</h6>
            </div><!-- ends: .atbd-drawer__header -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">
                    <p>Some Content</p>
                    <p>Some Content</p>
                    <p>Some Content</p>
                </div>
            </div><!-- ends: .atbd-drawer__body -->
        </div><!-- ends: .atbd-drawer -->




        <div class="atbd-drawer drawer-account d-none">
            <div class="atbd-drawer__header d-flex aling-items-center justify-content-between">
                <h6 class="drawer-title">Create a new account</h6>
                <a href="#" class="btdrawer-close"><i class="la la-times"></i></a>
            </div><!-- ends: .atbd-drawer__header -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">
                    <div class="drawer-account-form form-basic">
                        <form action="#">
                            <div class="form-row">
                                <div class="form-group col-lg-6">
                                    <label for="username">Name</label>
                                    <input type="text" name="name" id="username" class="form-control form-control-sm"
                                        placeholder="Please Enter Your Name">
                                </div>
                                <div class="form-group col-lg-6">
                                    <label for="url">Url</label>
                                    <input type="url" name="name" id="url" class="form-control form-control-sm"
                                        placeholder="Please Enter URL">
                                </div>
                                <div class="form-group col-lg-6">
                                    <label for="owner">Owner</label>
                                    <select name="url" id="owner" class="form-control-sm">
                                        <option value="">Jack Ma</option>
                                        <option value="">Tom liu</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-6">
                                    <label for="type">Type</label>
                                    <select name="url" id="type" class="form-control-sm">
                                        <option value="">Jack Ma</option>
                                        <option value="">Tom liu</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-6">
                                    <label for="approver">Approver</label>
                                    <select name="url" id="approver" class="form-control-sm">
                                        <option value="">Jack Ma</option>
                                        <option value="">Tom liu</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-6">
                                    <label for="datepicker">DateTime</label>
                                    <input type="text" name="name" id="datepicker" class="form-control form-control-sm"
                                        placeholder="Please Enter URL">
                                </div>
                                <div class="form-group col-12">
                                    <label for="description">Discription</label>
                                    <textarea name="description" id="description" class="form-control form-control-sm"
                                        placeholder="PLease Enter Url Description"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div><!-- ends: .atbd-drawer__body -->
        </div><!-- ends: .atbd-drawer -->

        <div class="atbd-drawer drawer-profile d-none">
            <div class="atbd-drawer__body">
                <div class="drawer-content">
                    <h6>User Profile</h6>
                    <div class="profile-info-box">
                        <div class="profile-info-box__single">
                            <h6>Personal</h6>
                            <div class="profile-info d-flex flex-wrap">
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Full Name:</span>
                                    <span class="profile-info__text">Lily</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Account:</span>
                                    <span class="profile-info__text">adminDesign@example.com</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">City:</span>
                                    <span class="profile-info__text">Toronto</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Country:</span>
                                    <span class="profile-info__text">Canada</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Birthday:</span>
                                    <span class="profile-info__text">February 21,2020</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Website:</span>
                                    <span class="profile-info__text">-</span>
                                </div><!-- ends: .profile-info__single -->
                            </div>
                            <div class="profile-info-extra">
                                <span class="profile-info__label">Message:</span>
                                <span class="profile-info__text">Make things as simple as possible but no
                                    simpler.</span>
                            </div>
                        </div><!-- ends: .aprofile-info-box__single -->
                        <div class="profile-info-box__single">
                            <h6>Company</h6>
                            <div class="profile-info d-flex flex-wrap">
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Position:</span>
                                    <span class="profile-info__text">Programmer</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Responsibilities:</span>
                                    <span class="profile-info__text">Coding</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Department:</span>
                                    <span class="profile-info__text">XTech</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Supervisor:</span>
                                    <span class="profile-info__text">Canada</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Birthday:</span>
                                    <span class="profile-info__text">February 21,2020</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Website:</span>
                                    <span class="profile-info__text">-</span>
                                </div><!-- ends: .profile-info__single -->
                            </div>
                            <div class="profile-info-extra">
                                <span class="profile-info__label">Skills:</span>
                                <span class="profile-info__text">C / C + +, data structures, software engineering,
                                    operating systems, computer networks, databases, compiler theory, computer
                                    architecture, Microcomputer Principle and Interface Technology, Computer English,
                                    Java, ASP, etc.</span>
                            </div>
                        </div><!-- ends: .aprofile-info-box__single -->
                        <div class="profile-info-box__single">
                            <h6>Conact</h6>
                            <div class="profile-info d-flex flex-wrap">
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Email:</span>
                                    <span class="profile-info__text">adminDesign@example.com</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Phone Number:</span>
                                    <span class="profile-info__text">+86 181 0000 0000</span>
                                </div><!-- ends: .profile-info__single -->
                                <div class="profile-info__single">
                                    <span class="profile-info__label">Github:</span>
                                    <span class="profile-info__text"><a href="#">github.com/admin-desing/</a></span>
                                </div><!-- ends: .profile-info__single -->
                            </div>
                        </div><!-- ends: .aprofile-info-box__single -->
                    </div>
                </div>
            </div><!-- ends: .atbd-drawer__body -->
        </div><!-- ends: .atbd-drawer -->

    </div>
    <div class="overlay-dark"></div>
</template>

<script>
    export default {
        components: {},
        data: function () {
            return {}
        },
        mounted() {
            const that = this;
            const drawerBasic = document.querySelector('.drawer-basic-wrap');
            const overlay = document.querySelector('.overlay-dark');
            overlay.addEventListener('click', () => that.closeLateralSchedule());
        },
        methods: {
            openLateralSchedule() {
                const drawerBasic = document.querySelector('.drawer-basic-wrap');
                const overlay = document.querySelector('.overlay-dark');
                drawerBasic.classList.remove('account');
                drawerBasic.classList.remove('profile');
                drawerBasic.classList.add('basic');
                drawerBasic.classList.add('show');
                overlay.classList.add('show');
            },
            closeLateralSchedule() {
                const drawerBasic = document.querySelector('.drawer-basic-wrap');
                const overlay = document.querySelector('.overlay-dark');
                drawerBasic.classList.remove('show');
                overlay.classList.remove('show');
            }
        }
    }

</script>
