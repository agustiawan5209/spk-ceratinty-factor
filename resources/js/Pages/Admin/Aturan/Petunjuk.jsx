export default function PetunjukPenggunaanAturan() {
    return (
        <div className="container mx-auto w-full bg-white   ">
            {/* <!-- Title --> */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Petunjuk Penggunaan Halaman "Tambah Data Aturan"
            </h1>

            {/* <!-- Introduction --> */}
            <p className="text-gray-700 mb-6">
                Halaman ini digunakan untuk menambahkan aturan pada sistem pakar
                yang mendiagnosis penyakit ayam menggunakan metode{" "}
                <span className="font-semibold">Certainty Factor (CF)</span>. Ikuti
                langkah-langkah berikut untuk menggunakan halaman ini.
            </p>

            {/* <!-- Steps --> */}
            <div className="space-y-6">
                {/* <!-- Step 1 --> */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        1. Pilih Data Penyakit
                    </h2>
                    <p className="text-gray-700">
                        Pada bagian atas halaman, terdapat dropdown dengan label{" "}
                        <span className="font-semibold">"Pilih Data Penyakit"</span>
                        . Klik dropdown tersebut, lalu pilih penyakit yang ingin
                        ditambahkan aturan diagnosanya.
                    </p>
                    <img src="/images/petunjuk/1.png" alt="Petunjuk 1" srcset="" />
                </div>

                {/* <!-- Step 2 --> */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        2. Centang Gejala yang Sesuai
                    </h2>
                    <p className="text-gray-700">
                        Di bagian{" "}
                        <span className="font-semibold">"List Data Gejala"</span>,
                        Anda akan melihat daftar gejala yang mungkin dialami
                        ayam.
                        <span className="font-semibold">Centang gejala</span> yang
                        sesuai dengan penyakit yang telah Anda pilih.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>
                            Pilih gejala yang relevan untuk diagnosis penyakit
                            tersebut.
                        </li>
                    </ul>
                    <img src="/images/petunjuk/2.png" alt="Petunjuk 2" srcset="" />

                </div>

                {/* <!-- Step 3 --> */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        3. Tentukan Nilai MB dan MD
                    </h2>
                    <p className="text-gray-700">
                        Setelah memilih gejala, geser ke tabel di bagian bawah
                        halaman. Masukkan nilai{" "}
                        <span className="font-semibold">
                            MB (Measure of Belief)
                        </span>{" "}
                        dan{" "}
                        <span className="font-semibold">
                            MD (Measure of Disbelief)
                        </span>{" "}
                        untuk gejala yang dipilih.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>
                            <span className="font-semibold">MB</span>: Tingkat
                            keyakinan terhadap gejala (nilai antara 0 dan 1).
                        </li>
                        <li>
                            <span className="font-semibold">MD</span>: Tingkat
                            ketidakpastian terhadap gejala (nilai antara 0 dan
                            1).
                        </li>
                    </ul>
                    {/* <p className="text-gray-700 mt-2">
                        Contoh: Jika Anda yakin{" "}
                        <span className="font-semibold">70%</span>, masukkan MB ={" "}
                        <span className="font-semibold">0,7</span> dan MD ={" "}
                        <span className="font-semibold">0,1</span>.
                    </p> */}
                    <img src="/images/petunjuk/3.png" alt="Petunjuk 1" srcset="" />

                </div>

                {/* <!-- Step 4 --> */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        4. Tambahkan Keterangan (Opsional)
                    </h2>
                    <p className="text-gray-700">
                        Anda dapat menambahkan catatan tambahan terkait gejala
                        di kolom <span className="font-semibold">Keterangan</span>,
                        seperti detail khusus atau situasi tertentu.
                    </p>
                </div>

                {/* <!-- Step 5 --> */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        5. Simpan Aturan
                    </h2>
                    <p className="text-gray-700">
                        Setelah selesai, klik tombol{" "}
                        <span className="font-semibold">"SIMPAN"</span> untuk
                        menyimpan aturan ke dalam sistem.
                    </p>
                </div>
            </div>

            {/* <!-- Certainty Factor Explanation --> */}
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Penjelasan Singkat tentang Certainty Factor (CF)
                </h3>
                <p className="text-gray-700">
                    Certainty Factor (CF) adalah metode untuk menghitung tingkat
                    keyakinan suatu gejala berkaitan dengan penyakit tertentu.
                    CF dihitung menggunakan formula berikut:
                </p>
                <div className="bg-gray-100 p-3 mt-2 rounded text-gray-800 font-mono">
                    CF = MB - MD
                </div>
                <p className="text-gray-700 mt-2">
                    Contoh: Jika MB = 0,7 dan MD = 0,1, maka CF ={" "}
                    <span className="font-semibold">0,6</span>.
                </p>
            </div>
        </div>
    );
}
