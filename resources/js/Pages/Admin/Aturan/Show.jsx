import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Slider from "react-slick";

export default function ShowPotensiDaerah({ auth, aturan }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const NilaiMD = [
        { nilai: 1.0, txt: "Sangat Yakin" },
        { nilai: 0.8, txt: "Yakin" },
        { nilai: 0.6, txt: "Cukup Yakin" },
        { nilai: 0.4, txt: "Kurang Yakin" },
        { nilai: 0.2, txt: "Tidak Tahu" },
        { nilai: 0, txt: "Tidak" },
    ];

    const filter = (data)=>{
        const result = NilaiMD.filter((item)=>{
            return item.nilai == data;
        })
        console.log(result)
        return result[0].txt;
    }
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
                    <div className="bg-white shadow-md rounded-lg">
                        <section className="py-8 bg-white relative">
                            <div className="w-full flex flex-1 relative justify-center ">
                                <Link href={route("Aturan.index")}>
                                    <div className="max-w-xs w-32 p-2 md:p-4 absolute text-base text-white -top-14 left-3 shadow-lg shadow-gray-500 bg-green-600">
                                        Kembali
                                    </div>
                                </Link>
                                <h3 className="font-semibold text-base md:text-2xl leading-4">Detail Aturan {aturan.penyakit.nama}</h3>
                            </div>
                            <div className="max-w-screen-xl border-t-2 mt-4 px-6 py-4 mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Information Section */}
                                    <div className="mt-4 col-span-full">
                                        <h1 className="text-3xl font-semibold text-gray-900">
                                            {aturan.penyakit.nama}
                                        </h1>
                                        <div className="space-y-4 mt-4">
                                            <InfoCard
                                                label="Gejala Penyakit"
                                                value={aturan.gejala.nama}
                                            />
                                            <InfoCard
                                                label="MB (Hipotesa Kepastian Hubungan Penyakit Terhadap Gejala"
                                                value={filter(aturan.mb)}
                                            />
                                            <InfoCard
                                                label="MD (Hipotesa Ketidakpastian Hubungan Penyakit Terhadap Gejala"
                                                value={filter(aturan.md)}
                                            />
                                            <CardDetail
                                            title={'Keterangan'}
                                            content={aturan.keterangan}
                                             />
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
        <div className="px-3 py-2 border-b-2">
            <span className="font-semibold text-gray-700">{label}:</span>{" "}
            <span
                className="text-gray-800"
                dangerouslySetInnerHTML={{ __html: value }}
            />
        </div>
    );
}

function CardDetail({ title, content }) {
   return ( <div className="px-3 py-2 border-b-2 bg-green-600">
    <span className="font-semibold text-gray-100">{title}:</span>{" "}
    <span
        className="text-white tracking-wider"
        dangerouslySetInnerHTML={{ __html: content }}
    />
</div>);
}
function sanitizeText(content) {
    return (
        <p
            className="text-gray-900 leading-2 tracking-wide"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
