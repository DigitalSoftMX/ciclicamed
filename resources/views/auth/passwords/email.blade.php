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
                        <div class="edit-profile__body">
                            @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                            @endif
                            <form method="POST" action="{{ route('password.email') }}">
                                @csrf
                                <div class="form-group mb-20">
                                    <label for="username">{{ __('Correo electrónico') }}</label>
                                    <input type="email" class="form-control @error('email') is-invalid @enderror"
                                        id="email" placeholder="Email" name="email" value="{{ old('email') }}" required>
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="button-group d-flex pt-1 float-right">
                                    <button class="btn btn-primary btn-default btn-squared">
                                        {{ __('Enviar correo de restauración') }}
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

<style>
    .back-font
    {
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
