<!-- @extends('layouts.app') -->
@section('content')
<div id="app" class="contents">
    <user-profile-page :user="{{ json_encode($user) }}" :category="{{ json_encode($category) }}">
    </user-profile-page >
</div>
@endsection
