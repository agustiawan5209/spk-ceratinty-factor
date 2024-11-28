<?php

namespace Database\Seeders;

use App\Models\Gejala;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GejalaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gejalas = array(
            "Unggas Lesu",
            'Ayam Duduk Dengan Cara Bungkuk',
            'Bulu saya terlihat kusut dan menggantung',
            'unggas Murung',
            'unggas lemas',
            'ayam terlihat Selalu Mengantuk dan ingin tidur',
            'Pernapasan melalui mulut',
            'ngorok basah',
            'unggas bersin',
            'leleran dari hidung',
            'Mata berair dan diikuti pembengkakan daerah sinus',
            'Jengger membengkak dan berwarna kebiruan',
            'Pendarahan berupa bintik-bintik merah pada kaki unggas biasa disebut kaki kerokan',
            'Keluar cairan pada mata dan hidung unggas ayam',
            'Keluar cairan jernih dan kental dari mulut unggas ayam',
            'Kepala tertunduk menyatu dengan badan',
            'Pendarahan di bawah kulit yang tidak ditumbuhi bulu',
            'Tingkat kematian sangat tinggi hampi 100% pada 2 hari sampai 1 minggu',
            'Tidak banyak bergerak dan lebih banyak diam, serta terlihat lemas',
            'Sering bergerombol mencari tempat hangat karena kedinginan',
            'Bulu sayap terlihat kusut dan menggantung',
            'Jengger mengkerut dan berwarna keabu-abuan',
            'Bulu terlihat kusam dan acak-acakan',
            'Keluar cairan di sekitar mata dan hidung',
            'Nafsu makan turun',
            'Pertumbuhan lambat (pada anak ayam)',
            'Kotoran terlihat berwarna kuning dan menempel disekitar pantat',
            'Ayam mengorok dan sukar untuk bernapas',
            'Keluarnya lendir atau cairan dari hidung, kental berwarna kekuningan dan berbau khas',
            'Ayam terlihat ngantuk, lesu, sayap megantung atau turun',
            'Terdapat kerak di bagian hidung',
            'Pertumbuhan menjadi terhambat',
        );

        $no = 1;
        for ($i = 0; $i < count($gejalas); $i++) {
            Gejala::create([
                'kode' => "G00" . $no++,
                'nama' => $gejalas[$i],
            ]);
        }
    }
}
