@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Asistente')
            <asistente-product-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></asistente-product-page>
            @break
    @endswitch
</div>
@endsection