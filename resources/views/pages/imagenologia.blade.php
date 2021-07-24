@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Administrador')
        <administrador-imagenologia-page :administrador="{{ json_encode($user) }}" role="Administrador"></administrador-imagenolo-page>
    @endif
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorImagenologiaPage.js') }}"></script>
        @break
@endswitch