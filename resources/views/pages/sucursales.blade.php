@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
    @case('Administrador')
        <administrador-branch-page :administrador="{{ json_encode($user) }}" role="Administrador"></administrador-branch-page>
        @break
    @endswitch
</div>
@endsection