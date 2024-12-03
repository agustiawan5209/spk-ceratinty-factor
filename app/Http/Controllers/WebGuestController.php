<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Gejala;
use App\Models\Penyakit;
use Illuminate\Http\Request;

class WebGuestController extends Controller
{
    public function home(){
        return Inertia::render('Welcome');
    }

    public function informasi(Request $request){
        return Inertia::render('Web/Informasi', [
            'penyakit'=> Penyakit::with(['galeri', 'pengobatan', 'aturan'])->limit(10)->get(),
        ]);
    }

    public function formDiagnosa(Request $request){
        $gejala =Gejala::all();

        if($gejala->count() == 0){
            return redirect()->route('home')->with('error', 'Maaf Data Gejala Tidak Boleh Kosong Untuk Melakukan Pengujian Dan Mengakses Halaman');
        }
        return Inertia::render("Web/Uji/Index", [
            'gejala' => $gejala,
        ]);
    }


}
