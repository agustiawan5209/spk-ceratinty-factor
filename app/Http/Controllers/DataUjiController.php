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

        $length = count($data);
        $aturan = [];
        for ($i = 0; $i < $length; $i++) {
            $tb = Aturan::where('gejala_id', $data[$i]['id'])->first();
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
        $result = [];
        $data_cf = [];
        $cf = [];
        for ($i = 0; $i < count($aturan); $i++) {
            $data = $aturan[$i];

            if (empty($cf[$data['penyakit_id']])) {
                $cf[$data['penyakit_id']] = 0;
            }
            if ($i == 0) {
                $cf[$data['penyakit_id']] = $data['cf'];
            }
            $cf[$data['penyakit_id']] += ($data['cf'] * (1 - abs($cf[$data['penyakit_id']])));

            $data_cf[$data['penyakit_id']] = [
                'penyakit' => Penyakit::with(['galeri', 'pengobatan'])->find($data['penyakit_id']),
                'cf' => $cf[$data['penyakit_id']], // Membulatkan hasil CF
            ];
        }
        // Hasil perhitungan CF untuk setiap penyakit
        $result = [];
        foreach ($data_cf as $penyakit_id => $cf) {
            $result[] = [
                'penyakit' => $cf['penyakit'],
                'cf' => round($cf['cf'], 4), // Membulatkan hasil CF
            ];
        }

        // Mengurutkan hasil berdasarkan CF tertinggi
        usort($result, function ($a, $b) {
            return $b['cf'] <=> $a['cf'];
        });

        Session::put('hasil', array(
            'data_cf' => array_values($data_cf),
            'aturan' => $aturan,
            'result' => $result,
        ));

        Diagnosa::create([
            'nama' => Request::exists('nama') ? Request::input('nama'): 'Admin',
            'alamat' => Request::exists('alamat') ? Request::input('alamat'): '----',
            'no_telpon' => Request::exists('no_telpon') ? Request::input('no_telpon'): '---',
            'diagnosa' => array(
                'dataCF' => array_values($data_cf),
                'aturan' => $aturan,
                'result' => $result,
            ),
            'tgl' => Carbon::now()->format('Y-m-d'),
        ]);
        return redirect()->route('Uji.result')->with('success', 'Berhasil Menghitung CF ');
    }
}
