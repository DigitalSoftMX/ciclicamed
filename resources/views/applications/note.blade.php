@extends('layouts.app')
@section('content')
    <div class="contents">
        <div class="atbd-page-content">
            <div class="container-fluid">
                <div class="note-wrapper">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-main">
                                <h4 class="text-capitalize breadcrumb-title">Note</h4>
                                <div class="breadcrumb-action justify-content-center flex-wrap">
                                    <div class="action-btn">
                                        <div class="form-group mb-0">
                                            <div class="input-container icon-left position-relative">
                                                    <span class="input-icon icon-left">
                                                        <span data-feather="calendar"></span>
                                                    </span>
                                                <input type="text" class="form-control form-control-default date-ranger" name="date-ranger" placeholder="Oct 30, 2019 - Nov 30, 2019">
                                                <span class="input-icon icon-right">
                                                        <span data-feather="chevron-down"></span>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown action-btn">
                                        <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-download"></i> Export
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <span class="dropdown-item">Export With</span>
                                            <div class="dropdown-divider"></div>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-print"></i> Printer</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-file-pdf"></i> PDF</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-file-text"></i> Google Sheets</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-file-excel"></i> Excel (XLSX)</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-file-csv"></i> CSV</a>
                                        </div>
                                    </div>
                                    <div class="dropdown action-btn">
                                        <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-share"></i> Share
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                                            <span class="dropdown-item">Share Link</span>
                                            <div class="dropdown-divider"></div>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-facebook"></i> Facebook</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-twitter"></i> Twitter</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-google"></i> Google</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-feed"></i> Feed</a>
                                            <a href="" class="dropdown-item">
                                                <i class="la la-instagram"></i> Instagram</a>
                                        </div>
                                    </div>
                                    <div class="action-btn">
                                        <a href="#" class="btn btn-sm btn-primary btn-add" data-toggle="modal" data-target="#noteModal">
                                            <i class="la la-plus"></i> Add New</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-12">
                            @include('layouts.partials._message')
                            <div class="note-contents">
                                <div class="note-sibebar-wrapper mb-30">
                                    <div class="note-sidebar">
                                        <div class="card border-0">
                                            <div class="card-body px-15 pt-30">
                                                <div class="px-3">
                                                    <a href="#" class="btn btn-primary btn-default btn-rounded btn-block" data-toggle="modal" data-target="#noteModal"> <span data-feather="plus"></span>
                                                        Add Note</a>
                                                </div>
                                                <div class="note-types">
                                                    <ul class="list-unstyled">
                                                        <li><a href="{{ route('applications.note') }}" class="{{ request()->is('applications/note') ? 'active' : ''}}"><span data-feather="edit"></span> All</a></li>
                                                        <li><a href="{{ route('applications.noteLabel', 'favorite') }}" class="{{ request()->is('applications/note/favorite') ? 'active' : ''}}"><span data-feather="star"></span> Favorite</a></li>
                                                    </ul>
                                                </div>
                                                <div class="note-labels">
                                                    <p><span data-feather="tag"></span> Labels</p>
                                                    <ul class="list-unstyled">
                                                        <li><a class="label-personal {{ request()->is('applications/note/personal') ? 'active' : ''}}" href="{{ route('applications.noteLabel', 'personal') }}"><span></span> Personal</a></li>
                                                        <li><a class="label-work {{ request()->is('applications/note/work') ? 'active' : ''}}" href="{{ route('applications.noteLabel', 'work') }}"><span></span> Work</a></li>
                                                        <li><a class="label-social {{ request()->is('applications/note/social') ? 'active' : ''}}" href="{{ route('applications.noteLabel', 'social') }}"><span></span> Social</a></li>
                                                        <li><a class="label-important {{ request()->is('applications/note/important') ? 'active' : ''}}" href="{{ route('applications.noteLabel', 'important') }}"><span></span> Important</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ends: .col-lg-2 -->
                                <div class="note-grid-wrapper mb-30">
                                    <div class="notes-wrapper">
                                        <div class="note-grid">
                                            @foreach ($notes as $note)
                                            <div class="note-single">
                                                <div class="note-card note-{{ $note->note_label }}">
                                                    <div class="card border-0">
                                                        <div class="card-body">
                                                            <h4 class="note-title">{{ $note->title }} <span class="note-status"></span></h4>
                                                            <p class="note-excerpt">{{ $note->description }}</p>
                                                            <div class="note-action">
                                                                <div class="note-action__left">
                                                                    <a href="{{ route('applications.note.favorite', $note->id) }}" class="{{ ($note->status=='favorite' ? 'favorite' : '' ) }}"><span data-feather="star"></span></a>
                                                                    <a href="{{ route('applications.note.destroy', $note->id) }}"><span data-feather="trash-2"></span></a>
                                                                </div>
                                                                <div class="note-action__right">
                                                                    <div class="label-dropdown dropdown dropdown-hover">
                                                                        <a class="btn-link" href="#"><span data-feather="more-vertical"></span></a>
                                                                        <div class="dropdown-default">
                                                                            <a class="nl-personal dropdown-item" href="#">Personal</a>
                                                                            <a class="nl-work dropdown-item" href="#">Work</a>
                                                                            <a class="nl-social dropdown-item" href="#">Socail</a>
                                                                            <a class="nl-important dropdown-item" href="#">Important</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div><!-- ends: .col-lg-10 -->
                            </div>
                        </div><!-- ends: .col-lg-12 -->
                    </div>
                </div>
            </div>
        </div>
        <!-- ends: .atbd-page-content -->
        <div class="modal fade" id="noteModal" tabindex="-1" aria-labelledby="noteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <form method="POST" action="{{ route('applications.note.store') }}">
                            @csrf
                            <div class="form-group mb-25">
                                <label for="text">Title</label>
                                <input type="text" class="form-control" name="title" placeholder="Note Title" id="text" required>
                            </div>
                            <div class="form-group mb-25">
                                <label for="textarea">Description</label>
                                <textarea id="textarea" name="description" class="form-control" placeholder="Note Description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="n-labels">Note Label</label>
                                <select class="form-control" name="note_label" id="n-labels">
                                    <option value="social">Social</option>
                                    <option value="work">Work</option>
                                    <option value="personal">Personal</option>
                                    <option value="important">Important</option>
                                </select>
                            </div>
                            <div class="form-group mb-0">
                                <button type="submit" class="btn btn-lg btn-primary">Add Note</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
