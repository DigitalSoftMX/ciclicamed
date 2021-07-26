@extends('layouts.app')
@section('content')
<div id="app">
        @switch($roles[0]->name)
            @case('Administrador')
                <administrador-checkup-page :administrador="{{ json_encode($user) }}" role="Administrador"></doctor-dashboard-page>
                @break
            @case('Checkup')
                <checkup-checkup-page :patient="{{ json_encode($user) }}" role="Checkup"></checkup-checkup-page>
                @break
        @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorCheckupPage.js') }}"></script>
        @break
    @case('Checkup')
        <script src="{{ asset('js/CheckupCheckupPage.js') }}"></script>
        @break
@endswitch