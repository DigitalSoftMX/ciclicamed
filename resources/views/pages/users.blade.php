@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
    @case('Administrador')
        <administrador-user-page :administrador="{{ json_encode($user) }}" role="Administrador"></administrador-user-page>
        @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorUserPage.js') }}"></script>
        @break
@endswitch
