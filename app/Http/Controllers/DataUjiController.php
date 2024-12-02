<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use App\Models\Diagnosa;
use App\Models\Gejala;
use App\Models\Penyakit;
use Carbon\Carbon;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class DataUjiController extends Controller
{
    public function admin()
    {
        return Inertia::render("Admin/Uji/Index", [
            'gejala' => Gejala::all(),
        ]);
    }

    public function result()
    {
        if(!Session::has('hasil')){
            return redirect()->route('Test.test');
        }
        $data = Session::get('hasil');
        // dd($data);
        return Inertia::render('Admin/Uji/Result', [
            'dataCF'=> $data['data_cf'],
           'aturan'=> $data['aturan'],
           'result'=> $data['result'],
        ]);
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
                'penyakit'=> Penyakit::with(['galeri', 'pengobatan'])->find($tb->penyakit_id),
                'gejala_id' => $tb->gejala_id,
                'gejala'=> Gejala::find($tb->gejala_id),
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
            'data_cf'=> array_values($data_cf),
            'aturan'=> $aturan,
            'result'=> $result,
        ));

        Diagnosa::create([
            'nama'=> 'Admin',
            'diagnosa'=> array(
                'dataCF'=> array_values($data_cf),
                'aturan'=> $aturan,
                'result'=> $result,
            ),
            'tgl'=> Carbon::now()->format('Y-m-d'),
        ]);
        return redirect()->route('Test.result')->with('success', 'Berhasil Menghitung CF ');
    }
}
