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