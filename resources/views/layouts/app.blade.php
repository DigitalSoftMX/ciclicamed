<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
   dir="{{ (Session::get('layout')=='rtl' ? 'rtl' : 'ltr') }}">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <meta name="api-base-url" content="{{ url('/') }}" />
      <meta name="asset-url" content="{{ config('app.asset_url') }}">
      {{-- Title Section --}}
      <title>{{ config('app.name') }} | @yield('title', $pageTitle ?? 'Cíclica app')
      </title>
      <meta name="description"
         content="@yield('page_description', $pageDescription ?? 'Bootstrap 4 Laravel Web Application')" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      @include('layouts.partials._styles')
      @yield('styles')
      <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon.ico') }}">
   </head>
   <body class="layout-light side-menu @auth() @endauth">
      @auth()
      @endauth
      <main class="main-content">
         @section('content')
         @show
      </main>
      @auth()
      <!-- <div id="overlayer">
         <span class="loader-overlay">
            <div class="atbd-spin-dots spin-lg">
               <span class="spin-dot badge-dot dot-primary"></span>
               <span class="spin-dot badge-dot dot-primary"></span>
               <span class="spin-dot badge-dot dot-primary"></span>
               <span class="spin-dot badge-dot dot-primary"></span>
            </div>
         </span>
      </div> -->
      @include('layouts.partials._customizer')
      @endauth
      <!-- <div class="overlay-dark-sidebar"></div>
      <div class="customizer-overlay"></div> -->
      @include('layouts.partials._scripts')
      @yield('scripts')
   </body>
</html>