<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Penyakit;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\StorePenyakitRequest;
use App\Http\Requests\UpdatePenyakitRequest;

class PenyakitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Penyakit/Index', [
            'penyakit' => Penyakit::orderBy('id', 'desc')
                ->filterBySearch(Request::input('search'))
                ->paginate(10)->withQueryString(),
            'filter' => Request::only('search', 'order', 'filter'),
            'can' => [
                'add' => Auth::user()->can('add penyakit'),
                'edit' => Auth::user()->can('edit penyakit'),
                'show' => Auth::user()->can('show penyakit'),
                'delete' => Auth::user()->can('delete penyakit'),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePenyakitRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Penyakit $penyakit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Penyakit $penyakit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePenyakitRequest $request, Penyakit $penyakit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Penyakit $penyakit)
    {
        //
    }
}
