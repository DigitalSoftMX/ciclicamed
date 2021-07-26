@extends('layouts.app')
@section('content')
<div id="app">
    <login-component></login-component>
</div>
@endsection

@yield('scripts')
<script src="{{ asset('js/Login.js') }}"></script>