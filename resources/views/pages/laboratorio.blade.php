@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Administrador')
        <administrador-laboratorio-page :administrador="{{ json_encode($user) }}" role="Administrador"></administrador-imagenolo-page>
    @endif
</div>
@endsection