<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

/**
 * Class ChatController
 * @package App\Http\Controllers
 */

class ChatController extends Controller
{
    /**
     * Display a chat of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {

        $pageTitle = 'Chat';
        $pageDescription = 'Chat';

        return view('applications.chat', compact('pageTitle', 'pageDescription'));
    }

    /**
     * Display a note of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function note()
    {
        $pageTitle = 'Note';
        $pageDescription = 'lorem note extra';
        $notes = Note::latest()->get();

        return view('applications.note', compact('pageTitle', 'pageDescription', 'notes'));
    }

    public function noteLabel($label)
    {
        $pageTitle = 'Note';
        $pageDescription = 'lorem note extra';
        if ($label != 'favorite') {
            $notes = Note::where('note_label', $label)->get();
        } else {
            $notes = Note::where('status', $label)->get();
        }

        return view('applications.note', compact('pageTitle', 'pageDescription', 'notes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validation Check
        $request->validate([
            'title' => 'required',
        ]);

        // This Data array Using For all Request Set in DB insert
        $data = array(
            'title' => $request->title,
            'description' => $request->description,
            'note_label' => $request->note_label,
        );

        Note::create($data);
        session()->flash('create', 'Note Successfully Saved!');
        return redirect()->route('applications.note');
    }

    /**
     * Update the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function favorite($id)
    {
        $note = Note::findorfail($id);
        if ($note->status == '') {
            $data['status'] = 'favorite';
        } else {
            $data['status'] = null;
        }

        Note::find($id)->update($data);
        session()->flash(($note->status == '' ? 'update' : 'warning'), 'This note ' . ($note->status == '' ? 'added' : 'removed') . ' favorite list!');
        return redirect()->route('applications.note');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $note = Note::findorfail($id);
        $note->delete();

        session()->flash('delete', 'Note Successfully Deleted!');
        return redirect()->route('applications.note');
    }
}
