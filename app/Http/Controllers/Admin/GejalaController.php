<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Gejala;
use App\Models\GambarGejala;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreGejalaRequest;
use App\Http\Requests\UpdateGejalaRequest;

class GejalaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Gejala/Index', [
            'gejala' => Gejala::orderBy('id', 'desc')
                ->filterBySearch(Request::input('search'))
                ->paginate(10)->withQueryString(),
            'filter' => Request::only('search', 'order', 'filter'),
            'can' => [
                'add' => Auth::user()->can('add gejala'),
                'edit' => Auth::user()->can('edit gejala'),
                'show' => false,
                'delete' => Auth::user()->can('delete gejala'),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Gejala/Form', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGejalaRequest $request)
    {
        try {
            $gejala = Gejala::create($request->all());


            return redirect()->route('Gejala.index')->with('success', 'Data Berhasil Di Tambahkan');
        } catch (\Exception $e) {
            return redirect()->route('Gejala.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Gejala $gejala)
    {
        return Inertia::render('Admin/Gejala/Show', [
            'gejala' => $gejala->with(['galeri'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gejala $gejala)
    {
        return Inertia::render('Admin/Gejala/Edit', [
            'gejala' => $gejala->with(['galeri'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGejalaRequest $request, Gejala $gejala) {
        try {
            $gejala = Gejala::find(Request::input('slug'));
            $gejala->update($request->all());


            return redirect()->route('Gejala.index')->with('success', 'Data Berhasil Di Ubah');
        } catch (\Exception $e) {
            return redirect()->route('Gejala.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gejala $gejala)
    {
        try {
            $gejala = Gejala::find(Request::input('slug'))->delete();

            return redirect()->route('Gejala.index')->with('success', 'Data Berhasil Di Hapus');
        } catch (\Exception $e) {
            return redirect()->route('Gejala.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }
}
