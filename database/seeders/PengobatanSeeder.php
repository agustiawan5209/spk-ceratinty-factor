<?php

namespace Database\Seeders;

use App\Models\Pengobatan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PengobatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pengobatans = array(
            array(
                "id" => 1,
                "penyakit_id" => 1,
                "keterangan" => "<p> Diberikan air minum yang dicampur dengan molase sebanyak kurang lebih 10% (kira-kira 1 mangkuk molase tiap 5 galon air), biasanya dapat menolong dari kematian, juga bisa dicampur dengan gula merah 2% dicampur dengan NaHC03 0,2% dalam air minum selama dua hari</p>",
                "created_at" => "2024-11-28 14:56:30",
                "updated_at" => "2024-11-28 14:56:30",
            ),
            array(
                "id" => 2,
                "penyakit_id" => 2,
                "keterangan" => "<p> Belum ditemukan obat yang dapat menyembuhkan ND (Newcasstle Diseae)</p>",
                "created_at" => "2024-11-28 14:58:58",
                "updated_at" => "2024-11-28 14:58:58",
            ),
            array(
                "id" => 3,
                "penyakit_id" => 3,
                "keterangan" => "<p>   Belum ditemukan obat yang dapat menyembuhkan Infectious Bronchitis   </p>",
                "created_at" => "2024-11-28 15:00:30",
                "updated_at" => "2024-11-28 15:00:30",
            ),
            array(
                "id" => 4,
                "penyakit_id" => 4,
                "keterangan" => "<p> Belum ditemukan obat yang dapat menyembuhkan Avian Influenza.</p>",
                "created_at" => "2024-11-28 15:01:47",
                "updated_at" => "2024-11-28 15:01:47",
            ),
            array(
                "id" => 5,
                "penyakit_id" => 5,
                "keterangan" => "<p>   Menyuntikkan antibiotik seperti furozolidon, coccilin, neo terramycin, tetra atau   mycomas di dada ayam. </p>",
                "created_at" => "2024-11-28 15:03:04",
                "updated_at" => "2024-11-28 15:03:04",
            ),
            array(
                "id" => 6,
                "penyakit_id" => 6,
                "keterangan" => "<p> Diberikan adalah preparat sulfat seperti sulfadimethoxine atau seperti sulfadimethoxine atausulfathiazole. Pengobatan tradisional Obat yang di berikan adalah Sulfamix dengan dosis</p><p> 0.4 cc/kg BB ayam.</p>",
                "created_at" => "2024-11-28 15:04:22",
                "updated_at" => "2024-11-28 15:04:22",
            ),
            array(
                "id" => 7,
                "penyakit_id" => 7,
                "keterangan" => "<p> diberikan baytrit 10% peroral, mycomas dengan dosis 0.5 ml/L air minum, tetraclorin secara oral atau bacytracyn yang diberikan pada air minum.</p>",
                "created_at" => "2024-11-28 15:25:38",
                "updated_at" => "2024-11-28 15:25:38",
            ),
        );

        Pengobatan::insert($pengobatans);
    }
}
