@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Asistente')
            <asistente-product-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></asistente-product-page>
            @break
        @case('Administrador')
            <administrador-product-page :administrador="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></administrador-product-page>
            @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorProductPage.js') }}"></script>
        @break
    @case('Asistente')
        <script src="{{ asset('js/AsistenteProductPage.js') }}"></script>
        @break
@endswitch