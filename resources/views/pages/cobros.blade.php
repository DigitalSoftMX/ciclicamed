@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Administrador')
        <administrador-cobros-page :caja="{{ json_encode($user) }}" role="Administrador"></administrador-cobros-page>
    @endif
</div>
@endsection