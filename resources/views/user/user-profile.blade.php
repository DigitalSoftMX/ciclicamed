@extends('layouts.app')
@section('content')

<div id="app" class="contents">

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
                            <user-card-component :user="{{ json_encode($user) }}"
                                :category="{{ json_encode($category) }}"
                                :photo="{{ json_encode(URL::to('/images/users/'.$user->photo.'')) }}">
                            </user-card-component>
                        </div>

                        <div class="card mb-25">
                            <user-card-bio-component :user="{{ json_encode($user) }}"
                                :category="{{ json_encode($category) }}"
                                :photo="{{ json_encode(URL::to('/images/users/'.$user->photo.'')) }}">
                                </user-card--bio-component>
                        </div>
                    </div>

                </div>

                <div class="card col mx-3">
                    <user-profile-component :user="{{ json_encode($user) }}" :category="{{ json_encode($category) }}"
                        :photo="{{ json_encode(URL::to('/images/users/'.$user->photo.'')) }}">
                    </user-profile-component>
                </div>

            </div>

        </div>

    </div>

</div>

<script src="{{ mix('js/app.js') }}"></script>


@endsection
