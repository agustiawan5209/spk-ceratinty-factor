<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Diagnosa;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\StoreDiagnosaRequest;
use App\Http\Requests\UpdateDiagnosaRequest;

class DiagnosaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Diagnosa/Index', [
            'diagnosa' => Diagnosa::orderBy('id', 'desc')
                ->filterBySearch(Request::input('search'))
                ->paginate(10)->withQueryString(),
            'filter' => Request::only('search', 'order', 'filter'),
            'can' => [
                'add' => false,
                'edit' => false,
                'show' => true,
                'delete' => true,
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDiagnosaRequest $request)
    {
        try {
            $diagnosa = Diagnosa::create($request->all());


            return redirect()->route('Diagnosa.index')->with('success', 'Data Berhasil Di Tambahkan');
        } catch (\Exception $e) {
            return redirect()->route('Diagnosa.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Diagnosa $diagnosa)
    {
        return Inertia::render('Diagnosa/Show', [
            'diagnosa'=> $diagnosa->find(Request::input('slug'))
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Diagnosa $diagnosa)
    {
        try {
            $diagnosa = Diagnosa::find(Request::input('slug'))->delete();

            return redirect()->route('Diagnosa.index')->with('success', 'Data Berhasil Di Hapus');
        } catch (\Exception $e) {
            return redirect()->route('Diagnosa.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }
}
