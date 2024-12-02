import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Slider from "react-slick";

export default function DetailPenyakit({ auth, penyakit }) {
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
        <div className="bg-white shadow-md rounded-lg">
            <div className="max-w-screen-xl border-t-2 mt-4 px-6 py-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Information Section */}
                    <div className="mt-4">
                        <div className="space-y-4 mt-4">
                            <InfoCard
                                label="Nama Penyakit"
                                value={penyakit.nama}
                            />
                            <CardDetail
                                title="Keterangan Penyakit"
                                content={penyakit.keterangan}
                            />
                            <CardDetail
                                title="Cara Pencegahan Penyakit"
                                content={penyakit.pencegahan}
                            />
                        </div>
                    </div>

                    {/* Carousel Section */}
                    <div className="w-full">
                        <div className="w-full bg-secondary p-6 md:p-8 rounded-lg shadow-md">
                            {penyakit.galeri.length > 1 ? (
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
                            ) : (
                                penyakit.galeri.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image.image_path}
                                            alt={`Slide ${image.caption}`}
                                            className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Table of Pengobatan */}
            <div className="p-6 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-green-600 text-white">
                            <th className="py-3 px-4 border border-gray-200 text-left text-sm font-semibold">
                                No.
                            </th>
                            <th className="py-3 px-4 border border-gray-200 text-left text-sm font-semibold">
                                Nama Penyakit
                            </th>
                            <th className="py-3 px-4 border border-gray-200 text-left text-sm font-semibold">
                                Keterangan Cara Pengobatan
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {penyakit.pengobatan.length > 0 ? (
                            penyakit.pengobatan.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 transition duration-200"
                                >
                                    <td className="py-3 px-4 border border-gray-200 text-sm text-black">
                                        {index + 1}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200 text-sm text-black">
                                        {penyakit.nama}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200 text-sm text-black">
                                        {sanitizeText(item.keterangan)}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="py-3 px-4 text-center text-sm text-gray -500"
                                >
                                    Tidak ada data yang ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
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
    return (
        <div className="px-3 py-2 border-b-2 bg-green-600">
            <span className="font-semibold text-gray-100">{title}:</span>{" "}
            <span
                className="text-white tracking-wider text-sm"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
function sanitizeText(content) {
    return (
        <p
            className="text-gray-900 leading-2 tracking-wide"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
