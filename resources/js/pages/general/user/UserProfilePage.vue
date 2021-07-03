<template>
    <div class="container-fluid">

        <div class="profile-content mb-50">

            <div class="row">

                <div class="col-lg-12">
                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">Mi perfil</h4>
                    </div>
                </div>

                <div class="cos-lg-3 col-md-4">

                    <div class="profile-sider">

                        <div class="card mb-25">
                            <user-card-component :user="userData" :category="category">
                            </user-card-component>
                        </div>

                        <div class="card mb-25">
                            <user-card-bio-component :user="userData" :category="category"></user-card-bio-component>
                        </div>
                    </div>

                </div>

                <div class="card col mx-3">
                    <user-profile-component :user="userData" @updateUser="updateUser($event)">
                    </user-profile-component>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import UserCardBioComponent from '../../components/user/userBio/UserBioComponent.vue'
    import UserCardComponent from '../../components/user/UserCardComponent.vue'
    import UserProfileComponent from '../../components/user/UserProfileComponent.vue'

    export default {
        components: {
            UserCardComponent,
            UserCardBioComponent,
            UserProfileComponent
        },
        props: ['user', 'category'],
        data: function () {
            return {
                userData: Object.assign({}, this.$props.user),
            }
        },
        methods: {
            updateUser(userData)
            {
                this.userData = Object.assign({}, userData);
            }
        }
    }

</script>
