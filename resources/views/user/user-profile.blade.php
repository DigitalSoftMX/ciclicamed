<!-- @extends('layouts.app') -->
@section('content')
<div id="app" class="contents">

    <user-profile-page :user="{{ json_encode($user) }}" :category="{{ json_encode($category) }}"
        :photo="{{ json_encode(URL::to('/images/users/'.$user->photo.'')) }}">
    </user-profile-page >

</div>
@endsection
