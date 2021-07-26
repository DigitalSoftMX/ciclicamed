@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Administrador')
    <administrador-chart-page :administrador="{{ json_encode($user) }}" role="Administrador"></doctor-chart-page>
    @endif
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorChartPage.js') }}"></script>
        @break
@endswitch