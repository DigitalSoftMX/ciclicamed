@extends('layouts.app')
@section('content')
<div class="row mx-0 bg-white">
    <div class="col-7 login-splash"></div>
    <div class="col-12 col-md-5 d-flex login-container">
        <div class="card-body align-self-center">
            <div class="card border-0 shadow-none">
                <div class="card-body">
                    <div class="signUp-condition signIn-condition justify-content-end">
                        ¿Tiene una cuenta?
                        <a href="{{ route('login') }}" class="back-font pl-1">Iniciar sesión</a>
                    </div>
                    <div class="text-center mb-25">
                        <img-component url="/img/login/logo.png" alt="Ciclica" cssClass="login-logo mb-25">
                        </img-component>
                        <h2>Restaurar contraseña</h2>
                    </div>
                    <div>
                        <div class="card border-0 shadow-none">
                            <form method="POST" method="POST" action="{{ route('password.update') }}">
                                @csrf
                                <input type="hidden" name="token" value="{{ $token }}">

                                <div class="form-group mb-20">
                                    <label for="email">Correo electrónico</label>
                                    <input type="text" class="form-control @error('email') is-invalid @enderror"
                                        name="email" value="{{ old('email') }}" required autocomplete="email" id="email"
                                        placeholder="name@example.com">
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
                                            class="form-control @error('password') is-invalid @enderror" required
                                            autocomplete="new-password" name="password">
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
                                        <input id="password-confirm" type="password" class="form-control" required
                                            autocomplete="new-password" name="password_confirmation" required
                                            autocomplete="new-password">
                                        <span
                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                    </div>
                                </div>

                                <div class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                    <button
                                        class="btn btn-primary btn-default btn-squared mr-15 text-capitalize lh-normal px-50 py-15 signUp-createBtn signIn-createBtn">
                                        {{ __('Reiniciar contraseña') }}
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

<link rel="stylesheet" href="{{ asset('../vendor_assets/css/bootstrap/bootstrap.css') }}">
<link rel="stylesheet" href="{{ asset('../css/style.css') }}">
<style>
    .back-font {
        font-size: 1.2rem !important;
    }

    .login-splash {
        background-image: url('/images/recuperacion.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: none !important;
    }

    .login-container {
        height: 100vh;
    }

    .center-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .password-text {
        padding-top: 12.5px !important;
    }

    .login-logo {
        width: 20%;
    }

    @media (min-width: 768px) {
        .login-splash {
            display: flex !important;
        }
    }

</style>
@endsection
