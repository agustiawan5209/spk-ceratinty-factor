import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Slider from "react-slick";

export default function ShowPotensiDaerah({ auth, penyakit }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Show Berita
                </h2>
            }
        >
            <Head title="Show Berita" />

            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <section className="py-8 bg-white relative">
                        <div className="max-w-xs w-32 relative -top-5 left-3 shadow-lg shadow-gray-500 bg-blue-600">
                            <Link href={route("Penyakit.index")}>
                                <div className="w-full p-2 md:p-4 text-base text-white">
                                    Kembali
                                </div>
                            </Link>
                        </div>
                            <div className="max-w-screen-xl border-t-2 mt-4 px-6 py-4 mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Information Section */}
                                    <div className="mt-4">
                                        <h1 className="text-3xl font-semibold text-gray-900">
                                            {penyakit.judul}
                                        </h1>
                                        <div className="space-y-4 mt-4">
                                            <InfoCard
                                                label="Kode"
                                                value={penyakit.kode}
                                            />
                                            <InfoCard
                                                label="Nama Penyakit"
                                                value={penyakit.nama}
                                            />
                                            <InfoCard
                                                label="Keterangan Penyakit"
                                                value={penyakit.keterangan}
                                            />
                                        </div>

                                    </div>

                                 {/* Carousel Section */}
                        <div className="w-full">
                            <div className="w-full bg-secondary p-6 md:p-8 rounded-lg shadow-md">
                                {penyakit.galeri.length > 1 ?
                                <Slider {...settings}>
                                {penyakit.galeri.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image.image_path}
                                            alt={`Slide ${image.caption}`}
                                            className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </Slider>
                            :  penyakit.galeri.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image.image_path}
                                        alt={`Slide ${image.caption}`}
                                        className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            ))
                            }
                            </div>

                        </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function InfoCard({ label, value }) {
    return (
        <div className="py-3 px-6 text-md font-medium text-gray-800 bg-gray-100 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-200">
            <span className="font-semibold text-gray-700">{label}:</span>{" "}
            <sp className="text-gray-600" dangerouslySetInnerHTML={{ __html: value }} />
        </div>
    );
}

function Section({ title, content }) {
    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
            <p
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
