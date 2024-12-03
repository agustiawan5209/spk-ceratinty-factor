<?php

namespace App\Http\Controllers;

use App\Models\Penyakit;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
