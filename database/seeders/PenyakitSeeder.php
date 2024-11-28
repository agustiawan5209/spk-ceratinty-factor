<?php

namespace Database\Seeders;

use App\Models\GambarPenyakit;
use App\Models\Penyakit;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PenyakitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $penyakits = array(
            array(
                "id" => 1,
                "kode" => "P001",
                "nama" => "Gumboro (infectious Bursal Disease)",
                "keterangan" => "<p>Penyakit Gumboro atau Penyakit Infectious Bursal Disease (IBD) merupakan penyakit pada ayam yang pertama kali dilaporkan oleh Cosgrove pada tahun 1962 berdasarkan kasus yang terjadi pada tahun 1957 di desa Gumboro-Delaware, negara bagian Amerika Serikat. Sesuai dengan nama asal daerah ditemukannya, penyakit ini dikenal juga sebagai Gumboro. Penyakit ini menyerang sistem kekebalan tubuh unggas, terutama bagian fibrikus dan juga thymus. Kedua bagian ini adalah sistem pertahanan tubuh dari hewan unggas. Pada kerusakan yang parah, antibody si unggas tersebut tidak bisa terbentuk. </p><p><strong>Penyebab: </strong>IBD merupakan penyakit menular akut pada ayam berumur muda, disebabkan oleh Virus IBD tergolong virus RNA dari genus avibirnavirus dan family birnaviridae. Kerugian ekonomi yang diakibatkan cukup besar karena menyerang anak ayam berumur muda (kurang dari tiga minggu) dengan tingkat morbiditas dan mortalitas tinggi</p>",
                "pencegahan" => "<p> Cara pencegahan yang paling efektif adalah melakukan vaksinasi. Tidak ada pengobatan yang efektif. Namun perlakuan terhadap ternak ayam yang sakit dapat  diberikan pengobatan, misalnya dengan tetes 5% dalam air minum selama 3 hari, gula rnerah 2% dicampur dengan NaHC03 0,2% dalam air minum selama 2 hari.</p>",
                "created_at" => "2024-11-28 14:56:30",
                "updated_at" => "2024-11-28 14:56:30",
            ),
            array(
                "id" => 2,
                "kode" => "P002",
                "nama" => "Tetelo (Newcasstle Diseae)",
                "keterangan" => "<p>Penyakit tetelo merupakan salah satu penyakit pada unggas yang ditemukan pertamakali oleh Kraneveld di Indonesia pada tahun 1926. Karena menyerupai pes ayam maka disebutnya Pseudovogelpest. Doyle pada tahun 1927 memberi nama Newcastle Disease hal ini berasal dari nama suatu daerah di inggris “Newcastle on Tyne” yang terjangkit penyakit serupa. ND sendiri merupakan infeksi viral yang menyebabkan gangguan di saraf pernapasan. Penyakit ini disebabkan infeksi virus Paramyxo. </p><p><br></p><p>Penyebab: Penyebab ND adalah virus yang tergolong Paramyxovirus, termasuk virus ss-RNA yang berukuran 150-250 milimikron, dengan bentuk bervariasi tetapi umumnya berbentuk spherik. Newcastle Disease (ND) merupakan penyakit menular akut yang menyerang ayam dan jenis unggas lainnya dengan gejala klinis berupa gangguan pernafasan, pencernaan dan syaraf disertai mortalitas yang sangat tinggi.</p>",
                "pencegahan" => "<p> Pencegahan penyakit dapat dilakukan dengan vaksinasi secara teratur. Usaha yang dapat dilakukan adalah membuat kondisi  badan ayam cepat membaik dan merangsang nafsu makannya dengan memberikan tambahan vitamin dan mineral.&nbsp;</p>",
                "created_at" => "2024-11-28 14:58:58",
                "updated_at" => "2024-11-28 14:58:58",
            ),
            array(
                "id" => 3,
                "kode" => "P003",
                "nama" => "Penyakit Pernapasan (Infectious Bronchitis)",
                "keterangan" => "<p>Merupakan suatu penyakit viral pada saluran pernapasan ayam yang bersifat akut dan sangat mudah. Penyakit ini tersifat oleh adanya cairan trakea, batuk dan bersin. Faktor pendukung kejadian penyakit ini di Indonesia, adalah umur ayam yang berbeda dalam satu lokasi dengan program vaksinasi terhadap IB yang bervariasi, sistem pemasaran telur dalam egg trays yang berpindah dari suatu peternakan ke peternakan yang lain atau dari satu daerah ke daerah yang lainnya.</p><p><br></p><p>Penyebab: Penyakit Infectious Bronchitis (IB) adalah penyakit pernapasan akut dan sangat menular pada ayam IB disebabkan oleh virus dari genus coronavirus dari family&nbsp;Coronaviridae.Virus IB termasuk virus ss-RNA, berbentuk spherik atau pleomorfik dengan diameter 90-200 nm. Spesies rentan terhadap penyakit IB hanyalah ayam, baik broiler ataupun layer, tetapi pernah dilaporkan kejadian pada itik dan burung liar. </p><p><br></p><p>Gejala Klinis: Gejala klinis pada anak ayam ditandai dengan batuk, bersin, ngorok, keluar leleran hidung dan eksudat berbuih di mata. Anak ayam yang terkena tampak tertekan dan akan cenderung meringkuk di dekat sumber panas. Gejala klinis muncul dalam waktu 36 sampai 48 jam.&nbsp;</p>",
                "pencegahan" => "<p> Usaha yang dapat dilakukan adalah membuat kondisi badan ayam cepat membaik dan merangsang nafsu makannya dengan memberikan tambahan vitamin dan mineral.</p>",
                "created_at" => "2024-11-28 15:00:30",
                "updated_at" => "2024-11-28 15:00:30",
            ),
            array(
                "id" => 4,
                "kode" => "P004",
                "nama" => "Flu Burung (Avian Infuenza)",
                "keterangan" => "<p>Flu burung (Avian influenza) atau H5N1 merupakan penyakit infeksi virus yang pernah menggemparkan dunia, termasuk Indonesia. Flu burung sejak tahun 2009 ditetapkan organisasi dunia WHO berada pada fase pandemik atau penularan yang cukup luas. Kasus pertama flu burung ditemukan di Hongkong tahun 1997. </p><p><br></p><p><strong>Penyebab: </strong>Penyakit Avian influenza (AI) pada unggas yang disebabkan oleh virus influenza type A subtipe H5 dan H7.Semua unggas dapat terserang virus influenza A, tetapi wabah AI sering menyerang ayam dan kalkun. Penyakit ini bersifat zoonosis dan angka kematian sangat tinggi karena dapat mencapai 100%. Virus ss-RNA yang tergolong family Orthomyxoviridae, dengan diameter 80-120 nm dan panjang 200-300 nm. </p><p><br></p><p><strong>Gejala Klinis:</strong> Gejala klinis yang terlihat pada ayam penderita HPAI antara lain adalah, jengger, pial, kelopak mata, telapak kaki dan perut yang tidak ditumbuhi bulu terlihat berwarna biru keunguan. Adanya perdarahan pada kaki berupa bintikbintik merah (ptekhie) atau biasa disebut kerokan kaki. Keluarnya cairan dari mata dan hidung, pembengkakan pada muka dan kepala, diare, batuk, bersin dan ngorok. Nafsu makan menurun, penurunan produksi telur, kerabang telur lembek. Adanya gangguan syaraf, tortikolis, lumpuh dan gemetaran. Kematian terjadi dengan cepat. Sementara itu pada LPAI, kadang gejala klinis tidak terlihat dengan jelas.&nbsp;</p>",
                "pencegahan" => "<p> Usaha yang dapat dilakukan adalah membuat kondisi badan ayam cepat membaik dan merangsang nafsu makannya dengan memberikan tambahan vitamin dan mineral, serta mencegah infeksi sekunder dengan pemberian antibiotik. Dapat pula diberikan pemanasan tambahan pada kandang.</p>",
                "created_at" => "2024-11-28 15:01:47",
                "updated_at" => "2024-11-28 15:01:47",
            ),
            array(
                "id" => 5,
                "kode" => "P005",
                "nama" => "Berak Kapur (Pullurom)",
                "keterangan" => "<p>Berak kapur atau pullorum merupakan salah satu penyakit yang menular pada ayam, penyakit ini kebanyakan disebut dengan nama berak putih ( Bacilary White Diarhrhea ). Penyakit berak kapur pada ayam sangat berbahaya yang akan mengakibatkan angka kematian tinggi pada ayam yang berumur 1-10 hari. </p><p><br></p><p><strong>Penyebab</strong>: Pullorum disebabkan oleh bakteri Salmonella pullorum, yaitu suatu bakteri bersifat gram negatif, tidak bergerak, berbentuk batang, fakultatif aerob dan tidak berspora, dan mampu bertahan di tanah hingga satu tahun. Penyakit Pullorum merupakan penyakit menular pada ayam yang menimbulkan kerugian ekonomi yang besar, menyebabkan kematian yang sangat tinggi terutama pada anak ayam umur 1-10 hari. </p><p><br></p><p><strong><em>Gejala Klinis: Gejala penyakit</em></strong> yang tersifat pada ayam ialah kelihatan mengantuk (mata menutup), jengger kebiruan, bergerombol pada suatu tempat dan nafsu makan berkurang. Pada umumnya memperlihatkan diare putih atau coklat kehijau-hijauan dan terdapat gumpalan seperti pasta di sekitar kloaka disertai kelemahan kaki, sayap menggantung kusam, lumpuh karena arthritis, dan nampak sesak nafas</p>",
                "pencegahan" => "<p>   Pencegahan diutamakan pada sanitasi dan tata laksana serta manajemen pemeliharaan yang baik. Pengobatan pullorum dapat dilakukan dengan penyuntikan antibiotik seperti cocillin, neo terramycin ke dada ayam.   </p>",
                "created_at" => "2024-11-28 15:03:04",
                "updated_at" => "2024-11-28 15:03:04",
            ),
            array(
                "id" => 6,
                "kode" => "P007",
                "nama" => "Snot (Coryza)",
                "keterangan" => "<p>Penyakit CRD begitu familier dikalangan peternak khususnya peternak ayam petelur maupun pedaging, sehingga sering disebut penyakit ngorok. Padalah gejala klinis ngorok pada ayam tidak hanya terjadi pada penyakit CRD tapi juga penyakit lainnya seperti Coryza, ND, IB.</p><p><br></p><p> <strong>Penyebab: Chronic Respiratory Disease (CRD)</strong> adalah penyakit menular menahun pada ayam yang disebabkan oleh Mycoplasma gallisepticum. Pada ayam yang disebabkan oleh Mycoplasma gallisepticum dari famili mycoplasmataceae dan ordo mycopplasmatales. Mycoplasma gallisepticum berukuran 0,25-0,50 mikron berbentuk plemorfik, biasanya kokoid dan tidak mempunyai dinding sel sejati. </p><p><br></p><p><strong>Gejala Klinis: Masa tunas CRD</strong> berkisar antara 4-21 hari. Bila CRD menyerang, biasanya seluruh kelompok ayam terkena meskipun derajat keparahannya berbeda. Tanpa komplikasi kelompok ayam yang terserang CRD, tidak menunjukkan gejala klinis yang jelas</p>",
                "pencegahan" => "<p>Cara yang paling baik untuk mencegah terjadinya penyakit ini dengan melaksanakan sanitasi dan manajemen peternakan yang baik. Pengobatan pada suatu flok dengan sulfonamide atau antibiotik direkomendasikan. Berbagai macam sulfonamide seperti sulfadimethoxin e, sulfaquinoxaline, sulfamethazine semuanya efektif, tapi sulfadimethoxine merupakan obat yang paling aman. </p>",
                "created_at" => "2024-11-28 15:04:22",
                "updated_at" => "2024-11-28 15:04:22",
            ),
            array(
                "id" => 7,
                "kode" => "P006",
                "nama" => "Penyakit Ngorok/CRD (Chronic Respiratory Disease)",
                "keterangan" => "<p>Penyakit CRD begitu familier dikalangan peternak khususnya peternak ayam petelur maupun pedaging, sehingga sering disebut penyakit ngorok. Padalah gejala klinis ngorok pada ayam tidak hanya terjadi pada penyakit CRD tapi juga penyakit lainnya seperti Coryza, ND, IB. Penyebab: Chronic Respiratory Disease (CRD) adalah penyakit menular menahun pada ayam yang disebabkan oleh Mycoplasma gallisepticum. Pada ayam yang disebabkan oleh Mycoplasma gallisepticum dari famili mycoplasmataceae dan ordo mycopplasmatales. Mycoplasma gallisepticum berukuran 0,25-0,50 mikron berbentuk plemorfik, biasanya kokoid dan tidak mempunyai dinding sel sejati. Gejala Klinis: Masa tunas CRD berkisar antara 4-21 hari. Bila CRD menyerang, biasanya seluruh kelompok ayam terkena meskipun derajat keparahannya berbeda. Tanpa komplikasi kelompok ayam yang terserang CRD, tidak menunjukkan gejala klinis yang jelas.</p>",
                "pencegahan" => "<p>   Untuk menghindari penyakit ini lingkungan kandang harus bersih segar dan tidak pengap dan tidak lembab, kepadatan kandang harus menjadi perhatian agar sirkulasi udara lancar, suhu kandang dapat menyebabkan berkurangnya nafsu makan, memilih bibit unggul yang sudah terpercaya, menyediakan air minum yang bersih, melakukan biosecurity kandang dan sekitarnya, memberikan suplemen yang mempercepat respon pengobatan.     </p>",
                "created_at" => "2024-11-28 15:25:38",
                "updated_at" => "2024-11-28 15:25:38",
            ),
        );

        Penyakit::insert($penyakits);

        $gambar_penyakits = array(
            array(
                "id" => 1,
                "penyakit_id" => 1,
                "image" => "images/1732805790-6748849ed1476.jpg",
                "created_at" => "2024-11-28 14:56:30",
                "updated_at" => "2024-11-28 14:56:30",
            ),
            array(
                "id" => 2,
                "penyakit_id" => 2,
                "image" => "images/1732805938-67488532b976f.jpg",
                "created_at" => "2024-11-28 14:58:58",
                "updated_at" => "2024-11-28 14:58:58",
            ),
            array(
                "id" => 3,
                "penyakit_id" => 3,
                "image" => "images/1732806030-6748858e445da.jpg",
                "created_at" => "2024-11-28 15:00:30",
                "updated_at" => "2024-11-28 15:00:30",
            ),
            array(
                "id" => 4,
                "penyakit_id" => 4,
                "image" => "images/1732806107-674885dbe4047.png",
                "created_at" => "2024-11-28 15:01:47",
                "updated_at" => "2024-11-28 15:01:47",
            ),
            array(
                "id" => 5,
                "penyakit_id" => 5,
                "image" => "images/1732806184-674886289f1a3.jpg",
                "created_at" => "2024-11-28 15:03:04",
                "updated_at" => "2024-11-28 15:03:04",
            ),
            array(
                "id" => 6,
                "penyakit_id" => 6,
                "image" => "images/1732806262-6748867609966.jpg",
                "created_at" => "2024-11-28 15:04:22",
                "updated_at" => "2024-11-28 15:04:22",
            ),
            array(
                "id" => 7,
                "penyakit_id" => 7,
                "image" => "images/1732807538-67488b725627e.jpg",
                "created_at" => "2024-11-28 15:25:38",
                "updated_at" => "2024-11-28 15:25:38",
            ),
        );

        GambarPenyakit::insert($gambar_penyakits);
    }
}
