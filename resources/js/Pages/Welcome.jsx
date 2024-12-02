import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import HomeLayout from "@/Layouts/HomeLayout";
import CardContent from "@/Components/Web/CardContent";

export default function Welcome({ auth }) {
    return (
        <HomeLayout auth={auth} title={"welcome"}>
            {/* Content */}
            <section className="bg-white">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-8/12 mb-10">
                        <div className="container mx-auto h-full sm:p-10">
                            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                                <div className="w-full">
                                    <h1 className="text-4xl lg:text-6xl font-bold">
                                        Sistem Pakar{" "}
                                        <span className="text-green-700">
                                            MENDIAGNOSA PENYAKIT AYAM BROILER
                                        </span>{" "}
                                        MENGGUNAKAN METODE CERTAINTY FACTOR
                                    </h1>
                                    <div className="w-20 h-2 bg-green-700 my-4"></div>
                                    <p className="text-xl mb-10">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Recusandae maiores
                                        neque eaque ea odit placeat, tenetur
                                        illum distinctio nulla voluptatum a
                                        corrupti beatae tempora aperiam quia id
                                        aliquam possimus aut.
                                    </p>
                                    <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                                       Baca Lebih Lanjut..
                                    </button>
                                </div>
                            </header>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt="Leafs"
                        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
                    />
                </div>
            </section>

            {/* Section content */}

            <main className="text-gray-900 container mx-auto px-2 sm:px-4 lg:px-8">
                <section id="features" className="py-5 lg:pb-3 lg:pt-7">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl lg:text-5xl font-semibold">
                            Fitur Utama Sistem Pakar Diagnosa Ayam Broiler
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
                            <div className="flex-1 px-3">
                                <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-md">
                                    <p className="font-semibold text-xl">
                                        Diagnosa Penyakit Akurat
                                    </p>
                                    <p className="mt-4">
                                        Sistem ini menggunakan metode{" "}
                                        <strong>Certainty Factor</strong> untuk
                                        memberikan diagnosa akurat berdasarkan
                                        gejala yang diinputkan. Memberikan
                                        tingkat kepastian diagnosis yang jelas.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 px-3">
                                <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-md">
                                    <p className="font-semibold text-xl">
                                        Basis Pengetahuan Luas
                                    </p>
                                    <p className="mt-4">
                                        Mengandung data dari{" "}
                                        <strong>7 penyakit utama</strong> dan{" "}
                                        <strong>32 gejala</strong> yang umum
                                        terjadi pada ayam broiler. Data ini
                                        diolah oleh pakar veteriner untuk
                                        memastikan keakuratan.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 px-3">
                                <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-md">
                                    <p className="font-semibold text-xl">
                                        Rekomendasi Perawatan
                                    </p>
                                    <p className="mt-4">
                                        Setelah diagnosis, sistem memberikan
                                        rekomendasi penanganan dan perawatan
                                        untuk setiap penyakit yang terdeteksi,
                                        membantu peternak mengambil keputusan
                                        yang tepat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Konten Gambar Dari Sistem */}
            </main>
        </HomeLayout>
    );
}
