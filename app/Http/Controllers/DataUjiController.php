<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Aturan;
use App\Models\Gejala;
use App\Models\Diagnosa;
use App\Models\Penyakit;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;

class DataUjiController extends Controller
{
    public function index()
    {

        $gejala = Gejala::all();

        if ($gejala->count() == 0) {
            return redirect()->route('dashboard')->with('error', 'Maaf Data Gejala Tidak Boleh Kosong Untuk Melakukan Pengujian Dan Mengakses Halaman');
        }
        $data = [
            'gejala' => $gejala,
        ];

        if (Auth::guest()) {
            return Inertia::render("Web/Uji/Index", $data);
        }
        return Inertia::render("Admin/Uji/Index", $data);
    }

    public function result()
    {
        if (!Session::has('hasil')) {
            return redirect()->route('Uji.test');
        }
        $data = Session::get('hasil');
        // dd($data);
        $compact = [
            'dataCF' => $data['data_cf'],
            'aturan' => $data['aturan'],
            'result' => $data['result'],
        ];
        if (Auth::guest()) {
            return Inertia::render("Web/Uji/Result", $compact);
        }
        return Inertia::render("Admin/Uji/Result", $compact);
    }

   public function store()
{
    Request::validate(['aturan' => 'required|array']);
    $data = Request::input('aturan');

    // 1. Ambil data aturan dari database
    $aturan = [];
    foreach ($data as $i => $item) {
        $tb = Aturan::where('gejala_id', $item['id'])->first();
        if ($tb) {
            $aturan[$i] = [
                'penyakit_id' => $tb->penyakit_id,
                'penyakit' => Penyakit::with(['galeri', 'pengobatan'])->find($tb->penyakit_id),
                'gejala_id' => $tb->gejala_id,
                'gejala' => Gejala::find($tb->gejala_id),
                'mb' => $tb->mb,
                'md' => $tb->md,
                'cf' => round($tb->cf, 4),
            ];
        }
    }

    // 2. Kelompokkan gejala berdasarkan penyakit
    $gejalaByPenyakit = [];
    foreach ($aturan as $item) {
        $gejalaByPenyakit[$item['penyakit_id']][] = $item;
    }

    // 3. Hitung CF untuk setiap penyakit
    $hasilCF = [];
    foreach ($gejalaByPenyakit as $penyakitId => $gejalaList) {
        $cfCombine = 0;
        
        foreach ($gejalaList as $index => $gejala) {
            if ($index == 0) {
                // Gejala pertama
                $cfCombine = $gejala['cf'];
            } else {
                // Kombinasi dengan gejala berikutnya
                $cfCombine = $cfCombine + ($gejala['cf'] * (1 - $cfCombine));
            }
        }
        
        $hasilCF[$penyakitId] = [
            'penyakit' => Penyakit::with(['galeri', 'pengobatan'])->find($penyakitId),
            'cf' => round($cfCombine, 4),
        ];
    }

    // 4. Urutkan berdasarkan CF tertinggi
    $result = [];
    foreach ($hasilCF as $penyakitId => $data) {
        $result[] = [
            'penyakit' => $data['penyakit'],
            'cf' => $data['cf'],
        ];
    }

    usort($result, function ($a, $b) {
        return $b['cf'] <=> $a['cf'];
    });

    // 5. Simpan session dan database
    Session::put('hasil', [
        'data_cf' => array_values($hasilCF),
        'aturan' => $aturan,
        'result' => $result,
    ]);

    Diagnosa::create([
        'nama' => Request::exists('nama') ? Request::input('nama') : 'Admin',
        'alamat' => Request::exists('alamat') ? Request::input('alamat') : '----',
        'no_telpon' => Request::exists('no_telpon') ? Request::input('no_telpon') : '---',
        'diagnosa' => [
            'dataCF' => array_values($hasilCF),
            'aturan' => $aturan,
            'result' => $result,
        ],
        'tgl' => Carbon::now()->format('Y-m-d'),
    ]);

    return redirect()->route('Uji.result')->with('success', 'Berhasil Menghitung CF');
}
}
