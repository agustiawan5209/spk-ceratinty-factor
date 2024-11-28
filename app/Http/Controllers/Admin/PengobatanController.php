<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Penyakit;
use App\Models\Pengobatan;
use App\Models\GambarPengobatan;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StorePengobatanRequest;
use App\Http\Requests\UpdatePengobatanRequest;

class PengobatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Pengobatan/Index', [
            'pengobatan' => Pengobatan::orderBy('id', 'desc')
            ->with(['penyakit'])
                ->filterBySearch(Request::input('search'))
                ->paginate(10)->withQueryString(),
            'filter' => Request::only('search', 'order', 'filter'),
            'penyakit'=> Penyakit::all(),
            'can' => [
                'add' => Auth::user()->can('add pengobatan'),
                'edit' => Auth::user()->can('edit pengobatan'),
                'show' => false,
                'delete' => Auth::user()->can('delete pengobatan'),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Pengobatan/Form', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePengobatanRequest $request)
    {
        try {
            $pengobatan = Pengobatan::create($request->all());


            return redirect()->route('Pengobatan.index')->with('success', 'Data Berhasil Di Tambahkan');
        } catch (\Exception $e) {
            return redirect()->route('Pengobatan.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Pengobatan $pengobatan)
    {
        return Inertia::render('Admin/Pengobatan/Show', [
            'pengobatan' => $pengobatan->with(['galeri'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pengobatan $pengobatan)
    {
        return Inertia::render('Admin/Pengobatan/Edit', [
            'pengobatan' => $pengobatan->with(['galeri'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePengobatanRequest $request, Pengobatan $pengobatan) {
        try {
            $pengobatan = Pengobatan::find(Request::input('slug'));
            $pengobatan->update($request->all());


            return redirect()->route('Pengobatan.index')->with('success', 'Data Berhasil Di Ubah');
        } catch (\Exception $e) {
            return redirect()->route('Pengobatan.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengobatan $pengobatan)
    {
        try {
            $pengobatan = Pengobatan::find(Request::input('slug'))->delete();

            return redirect()->route('Pengobatan.index')->with('success', 'Data Berhasil Di Hapus');
        } catch (\Exception $e) {
            return redirect()->route('Pengobatan.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }
}
