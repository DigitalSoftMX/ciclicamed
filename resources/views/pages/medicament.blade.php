@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Administrador')
            <administrador-medicament-page :administrador="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></administrador-medicament-page>
            @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorMedicamentPage.js') }}"></script>
        @break
@endswitch