@extends('layouts.app')
@section('content')
<div id="app">
    <signup-component></signup-component>
</div>
@endsection

@yield('scripts')
<script src="{{ asset('js/SignUp.js') }}"></script>