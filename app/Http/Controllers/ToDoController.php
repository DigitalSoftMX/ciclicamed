<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

/**
 * Class ToDoController
 * @package App\Http\Controllers
 */

class ToDoController extends Controller
{

    /**
     * Display a todo of the resource.
     *
     * @return \Illuminate\View\View
     */

    public function index()
    {
        $pageTitle = 'To-Do';
        $pageDescription = 'Some description for the page';
        $todos = Todo::latest()->get();

        return view('applications.todo', compact('pageTitle', 'pageDescription', 'todos'));
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
            'todo_text' => 'required',
        ]);

        // This Data array Using For all Request Set in DB insert
        $data = array(
            'todo_text' => $request->todo_text,
        );

        Todo::create($data);
        session()->flash('create', 'Todo Successfully Saved!');
        return redirect()->route('applications.todo');
    }

    public function destroy($id)
    {
        $todo = Todo::findorfail($id);
        $todo->delete();

        session()->flash('delete', 'Todo Successfully Deleted!');
        return redirect()->route('applications.todo');
    }
}
