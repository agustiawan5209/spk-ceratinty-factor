<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use App\Models\Gejala;
use App\Models\Penyakit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', [
            'penyakit' => Penyakit::all()->count(),
            'gejala' => Gejala::all()->count(),
            'aturan' => Aturan::all()->count(),
        ]);
    }
}
