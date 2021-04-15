@extends('layouts.app')
@section('content')

<div class="signUP-admin">
    <div class="container-fluid p-0">

        <div class="row justify-content-center center-div p-0 m-0">

            <div class="col-xl-5 col-lg-5 col-md-5 p-0 login-splash"> </div>

            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-8 login-container center-div">

                <div class="signUp-admin-right p-md-40 p-10">

                    <div class="row justify-content-center">


                        <div class="signUp-topbar d-flex flex-row-reverse mt-md-0 mt-20 mb-5">
                            <p class="mb-0">
                                ¿Quiere crear una cuenta?
                                <a href="{{ route('register') }}" class="color-primary">
                                    Registrese aquí
                                </a>
                            </p>
                        </div>

                        <div class="col-xl-10 col-lg-8 col-md-12">

                            <div class="edit-profile mt-md-25 mt-0">

                                <div class="card border-0">

                                    <div class="text-center">
                                        <img src="{{ asset('img/login/logo.png') }}" alt="Ciclica logo"
                                            class="login-logo">
                                    </div>

                                    <div class="card-header border-0  pb-md-15 pb-10 pt-md-20 pt-10 ">
                                        <div class="edit-profile__title">
                                            <h6>Iniciar sesión</h6>
                                        </div>
                                    </div>

                                    <div class="card-body">

                                        <div class="edit-profile__body">

                                            <form method="POST" action="{{ route('login') }}">
                                                @csrf
                                                <div class="form-group mb-20">
                                                    <label for="username">Correo electrónico</label>
                                                    <input type="email"
                                                        class="form-control @error('email') is-invalid @enderror"
                                                        id="email" placeholder="Correo electrónico" name="email"
                                                        required>
                                                    @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>

                                                <div class="form-group mb-20">
                                                    <label for="password-field">Contraseña</label>
                                                    <div class="position-relative">
                                                        <input id="password-field" type="password"
                                                            class="form-control password-text @error('password') is-invalid @enderror"
                                                            name="password" placeholder="Contraseña">
                                                        <div
                                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2">
                                                        </div>
                                                        @error('password')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                        @enderror
                                                    </div>
                                                </div>

                                                <div class="signUp-condition signIn-condition">
                                                    <a href="{{ route('password.request') }}">¿Olvidó su contraseña?</a>
                                                </div>

                                                <div class="button-group d-flex pt-1 justify-content-end">
                                                    <button
                                                        class="btn btn-primary btn-default btn-squared lh-normal px-50 py-15 signIn-createBtn ">
                                                        Iniciar sesión
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div><!-- End: .card-body -->
                                </div><!-- End: .card -->
                            </div><!-- End: .edit-profile -->
                        </div><!-- End: .col-xl-5 -->
                    </div>
                </div><!-- End: .signUp-admin-right  -->
            </div><!-- End: .col-xl-8  -->
        </div>
    </div>
</div><!-- End: .signUP-admin  -->
@endsection
