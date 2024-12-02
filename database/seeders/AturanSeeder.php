<?php

namespace Database\Seeders;

use App\Models\Aturan;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AturanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $aturans = array(
            array(
                "id" => 1,
                "penyakit_id" => 1,
                "gejala_id" => 1,
                "mb" => 1.00,
                "md" => 0.40,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:49:15",
                "updated_at" => "2024-11-29 22:49:15",
            ),
            array(
                "id" => 2,
                "penyakit_id" => 1,
                "gejala_id" => 2,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:49:15",
                "updated_at" => "2024-11-29 22:49:15",
            ),
            array(
                "id" => 3,
                "penyakit_id" => 1,
                "gejala_id" => 3,
                "mb" => 0.80,
                "md" => 0.20,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:49:15",
                "updated_at" => "2024-12-01 23:56:30",
            ),
            array(
                "id" => 4,
                "penyakit_id" => 2,
                "gejala_id" => 4,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:49:49",
                "updated_at" => "2024-12-01 23:55:56",
            ),
            array(
                "id" => 5,
                "penyakit_id" => 2,
                "gejala_id" => 5,
                "mb" => 0.80,
                "md" => 0.20,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:49:49",
                "updated_at" => "2024-11-29 22:49:49",
            ),
            array(
                "id" => 6,
                "penyakit_id" => 2,
                "gejala_id" => 6,
                "mb" => 0.60,
                "md" => 0.20,
                "cf" => 0.40,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:49:49",
                "updated_at" => "2024-12-01 23:55:47",
            ),
            array(
                "id" => 7,
                "penyakit_id" => 3,
                "gejala_id" => 7,
                "mb" => 0.80,
                "md" => 0.20,
                "cf" => 0.60,
                "keterangan" => "test",
                "created_at" => "2024-11-29 22:50:32",
                "updated_at" => "2024-11-29 22:50:32",
            ),
            array(
                "id" => 8,
                "penyakit_id" => 3,
                "gejala_id" => 11,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => "t",
                "created_at" => "2024-11-29 22:50:32",
                "updated_at" => "2024-11-29 22:50:32",
            ),
            array(
                "id" => 9,
                "penyakit_id" => 3,
                "gejala_id" => 10,
                "mb" => 1.00,
                "md" => 0.40,
                "cf" => 0.60,
                "keterangan" => "ue",
                "created_at" => "2024-11-29 22:50:32",
                "updated_at" => "2024-11-29 22:50:32",
            ),
            array(
                "id" => 10,
                "penyakit_id" => 3,
                "gejala_id" => 9,
                "mb" => 0.60,
                "md" => 0.20,
                "cf" => 0.40,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:50:32",
                "updated_at" => "2024-11-29 22:50:32",
            ),
            array(
                "id" => 11,
                "penyakit_id" => 3,
                "gejala_id" => 8,
                "mb" => 1.00,
                "md" => 0.40,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:50:32",
                "updated_at" => "2024-11-29 22:50:32",
            ),
            array(
                "id" => 12,
                "penyakit_id" => 4,
                "gejala_id" => 12,
                "mb" => 1.00,
                "md" => 0.40,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:17",
                "updated_at" => "2024-11-29 22:51:17",
            ),
            array(
                "id" => 13,
                "penyakit_id" => 4,
                "gejala_id" => 18,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:17",
                "updated_at" => "2024-11-29 22:51:17",
            ),
            array(
                "id" => 14,
                "penyakit_id" => 4,
                "gejala_id" => 13,
                "mb" => 0.80,
                "md" => 0.60,
                "cf" => 0.20,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:17",
                "updated_at" => "2024-11-29 22:51:17",
            ),
            array(
                "id" => 15,
                "penyakit_id" => 4,
                "gejala_id" => 14,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:17",
                "updated_at" => "2024-11-29 22:51:17",
            ),
            array(
                "id" => 16,
                "penyakit_id" => 4,
                "gejala_id" => 15,
                "mb" => 0.60,
                "md" => 0.40,
                "cf" => 0.20,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:17",
                "updated_at" => "2024-11-29 22:51:17",
            ),
            array(
                "id" => 17,
                "penyakit_id" => 4,
                "gejala_id" => 16,
                "mb" => 0.80,
                "md" => 0.40,
                "cf" => 0.40,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:17",
                "updated_at" => "2024-11-29 22:51:17",
            ),
            array(
                "id" => 18,
                "penyakit_id" => 4,
                "gejala_id" => 17,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:17",
                "updated_at" => "2024-11-29 22:51:17",
            ),
            array(
                "id" => 19,
                "penyakit_id" => 5,
                "gejala_id" => 19,
                "mb" => 0.80,
                "md" => 0.20,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:49",
                "updated_at" => "2024-11-29 22:51:49",
            ),
            array(
                "id" => 20,
                "penyakit_id" => 5,
                "gejala_id" => 20,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:49",
                "updated_at" => "2024-12-01 23:56:14",
            ),
            array(
                "id" => 21,
                "penyakit_id" => 5,
                "gejala_id" => 21,
                "mb" => 0.80,
                "md" => 0.20,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:49",
                "updated_at" => "2024-11-29 22:51:49",
            ),
            array(
                "id" => 22,
                "penyakit_id" => 5,
                "gejala_id" => 22,
                "mb" => 0.60,
                "md" => 0.20,
                "cf" => 0.40,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:51:49",
                "updated_at" => "2024-11-29 22:51:49",
            ),
            array(
                "id" => 23,
                "penyakit_id" => 6,
                "gejala_id" => 28,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:15",
                "updated_at" => "2024-11-29 22:53:15",
            ),
            array(
                "id" => 24,
                "penyakit_id" => 6,
                "gejala_id" => 29,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:15",
                "updated_at" => "2024-11-29 22:53:15",
            ),
            array(
                "id" => 25,
                "penyakit_id" => 6,
                "gejala_id" => 30,
                "mb" => 0.80,
                "md" => 0.40,
                "cf" => 0.40,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:15",
                "updated_at" => "2024-11-29 22:53:15",
            ),
            array(
                "id" => 26,
                "penyakit_id" => 6,
                "gejala_id" => 31,
                "mb" => 0.60,
                "md" => 0.20,
                "cf" => 0.40,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:15",
                "updated_at" => "2024-11-29 22:53:15",
            ),
            array(
                "id" => 27,
                "penyakit_id" => 6,
                "gejala_id" => 32,
                "mb" => 1.00,
                "md" => 0.20,
                "cf" => 0.80,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:15",
                "updated_at" => "2024-12-01 23:56:21",
            ),
            array(
                "id" => 28,
                "penyakit_id" => 7,
                "gejala_id" => 23,
                "mb" => 1.00,
                "md" => 0.80,
                "cf" => 0.20,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:52",
                "updated_at" => "2024-11-29 22:53:52",
            ),
            array(
                "id" => 29,
                "penyakit_id" => 7,
                "gejala_id" => 24,
                "mb" => 0.80,
                "md" => 0.20,
                "cf" => 0.60,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:52",
                "updated_at" => "2024-11-29 22:53:52",
            ),
            array(
                "id" => 30,
                "penyakit_id" => 7,
                "gejala_id" => 25,
                "mb" => 0.20,
                "md" => 0.20,
                "cf" => 0.00,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:52",
                "updated_at" => "2024-11-29 22:53:52",
            ),
            array(
                "id" => 31,
                "penyakit_id" => 7,
                "gejala_id" => 26,
                "mb" => 0.60,
                "md" => 0.20,
                "cf" => 0.40,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:52",
                "updated_at" => "2024-12-01 23:56:04",
            ),
            array(
                "id" => 32,
                "penyakit_id" => 7,
                "gejala_id" => 27,
                "mb" => 0.20,
                "md" => 0.20,
                "cf" => 0.00,
                "keterangan" => NULL,
                "created_at" => "2024-11-29 22:53:52",
                "updated_at" => "2024-11-29 22:53:52",
            ),
        );
        Aturan::insert($aturans);
    }
}
