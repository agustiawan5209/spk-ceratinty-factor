<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Aturan;
use App\Models\Gejala;
use App\Models\Penyakit;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\StoreAturanRequest;
use App\Http\Requests\UpdateAturanRequest;

class AturanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Aturan/Index', [
            'aturan' => Aturan::orderBy('id', 'desc')
            ->with(['penyakit', 'gejala'])
                ->filterBySearch(Request::input('search'))
                ->paginate(10)->withQueryString(),
            'filter' => Request::only('search', 'order', 'filter'),
            'can' => [
                'add' => Auth::user()->can('add aturan'),
                'edit' => Auth::user()->can('edit aturan'),
                'show' => Auth::user()->can('show aturan'),
                'delete' => Auth::user()->can('delete aturan'),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Aturan/Form', [
            'penyakit'=> Penyakit::all(),
            'gejala'=> Gejala::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAturanRequest $request)
    {
        try {
            $aturan = Aturan::create($request->all());


            return redirect()->route('Aturan.index')->with('success', 'Data Berhasil Di Tambahkan');
        } catch (\Exception $e) {
            return redirect()->route('Aturan.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Aturan $aturan)
    {
        return Inertia::render('Admin/Aturan/Show', [
            'aturan' => $aturan->with(['galeri'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Aturan $aturan)
    {
        return Inertia::render('Admin/Aturan/Edit', [
            'aturan' => $aturan->with(['galeri'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAturanRequest $request, Aturan $aturan) {
        try {
            $aturan = Aturan::find(Request::input('slug'));
            $aturan->update($request->all());


            return redirect()->route('Aturan.index')->with('success', 'Data Berhasil Di Ubah');
        } catch (\Exception $e) {
            return redirect()->route('Aturan.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aturan $aturan)
    {
        try {
            $aturan = Aturan::find(Request::input('slug'))->delete();

            return redirect()->route('Aturan.index')->with('success', 'Data Berhasil Di Hapus');
        } catch (\Exception $e) {
            return redirect()->route('Aturan.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }
}