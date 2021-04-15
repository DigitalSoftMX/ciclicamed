@extends('layouts.app')
@section('content')
<div class="signUP-admin">
    <div class="container-fluid p-0">

        <div class="row justify-content-center center-div p-0 m-0">

            <div class="col-xl-5 col-lg-5 col-md-5 p-0 register-splash center-div"></div>

            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-8">

                <div class="signUp-admin-right  p-md-40 p-10">

                    <div class="row justify-content-center">


                        <div class="signUp-topbar d-flex flex-row-reverse mt-md-0 mt-20 mb-5">
                            <p class="mb-0">
                                ¿Tienes una cuenta?
                                <a href="{{ route('login') }}" class="color-primary">
                                    Inicia sesión aquí
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
                                            <h6>Registrarse</span></h6>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <div class="edit-profile__body">
                                            <form method="POST" action="{{ route('register') }}">
                                                @csrf
                                                <div class="form-group mb-20">
                                                    <label for="email">Correo electrónico</label>
                                                    <input type="text"
                                                        class="form-control @error('email') is-invalid @enderror"
                                                        name="email" value="{{ old('email') }}" required
                                                        autocomplete="email" id="email" placeholder="nombre@ejemplo.com">
                                                    @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                                <div class="form-group mb-15">
                                                    <label for="password-field">Contraseña</label>
                                                    <div class="position-relative">
                                                        <input id="password-field" type="password"
                                                            class="form-control password-text @error('password') is-invalid @enderror"
                                                            required autocomplete="new-password" name="password"
                                                            placeholder="Contraseña">
                                                        <span
                                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                        @error('password')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="form-group mb-15">
                                                    <label for="password-field">Confirmar contraseña</label>
                                                    <div class="position-relative">
                                                        <input id="password-confirm" type="password"
                                                            class="form-control password-text" required autocomplete="new-password"
                                                            name="password_confirmation" required
                                                            autocomplete="new-password"
                                                            placeholder="Confirmar contraseña">
                                                        <span
                                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                    </div>
                                                </div>
                                                <div class="signUp-condition">
                                                    <div class="checkbox-theme-default custom-checkbox ">
                                                        <label for="check-1">
                                                            <span class="checkbox-text capital-text">Al crear una
                                                                cuenta, usted confirma que ha leído y está de acuerdo
                                                                con los siguientes <a href="#modal-useterms"
                                                                    data-toggle="modal" class="color-secondary">Términos
                                                                    de servicio</a> y <a class="color-secondary"
                                                                    href="#modal-privacy" data-toggle="modal"> política
                                                                    de privacidad</a>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="button-group d-flex pt-1 justify-content-end">
                                                    <button
                                                        class="btn btn-primary btn-default btn-squared lh-normal px-50 py-15 signIn-createBtn ">
                                                        Crear cuenta
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@include('auth/register/privacy')
@include('auth/register/use-terms')
@endsection
