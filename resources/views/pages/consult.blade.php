@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Doctor')
            <doctor-consult-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></doctor-dashboard-page>
            @break
    @endswitch
</div>
@endsection