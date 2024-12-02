import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Slider from "react-slick";
import DetailPenyakit from "./DetailPenyakit";
import Popover from "@/Components/Web/PopOver";

export default function Diagnosa({ auth, aturan, dataCF, result }) {
    return (
        <div className="p-2 md:p-4 mt-10">
            <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
                <div className="bg-white rounded-lg shadow-lg md:p-4 w-full max-w-5xl">
                    <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
                        Hasil Diagnosa Penyakit Ayam Broiler
                    </h1>

                    {/* Data Aturan */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            Data Aturan
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-green-500 text-white">
                                        <th className="py-2 px-4 border">No</th>
                                        <th className="py-2 px-4 border">
                                            Gejala ID
                                        </th>
                                        <th className="py-2 px-4 border">
                                            Penyakit ID
                                        </th>
                                        <th className="py-2 px-4 border">MB</th>
                                        <th className="py-2 px-4 border">MD</th>
                                        <th className="py-2 px-4 border">CF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aturan.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                        >
                                            <td className="py-2 px-4 border text-center">
                                                {index + 1}
                                            </td>
                                            <td className="py-2 px-4 border text-center">
                                                {item.gejala.nama}
                                            </td>
                                            <td className="py-2 px-4 border text-center">
                                                {item.penyakit.nama}
                                            </td>
                                            <td className="py-2 px-4 border text-center">
                                                {item.mb}
                                            </td>
                                            <td className="py-2 px-4 border text-center">
                                                {item.md}
                                            </td>
                                            <td className="py-2 px-4 border text-center">
                                                {item.cf}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Data CF */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            Certainty Factor per Penyakit
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            {Object.entries(dataCF).map(
                                ([penyakitId, item]) => (
                                    <li
                                        key={penyakitId}
                                        className="text-gray-600 list-none"
                                    >
                                        <strong className="text-green-500">
                                            <Popover
                                                title={`Penyakit ${
                                                    item.penyakit.nama
                                                } :${(item.cf * 100).toFixed(
                                                    2
                                                )}% `}
                                                content={
                                                    item.penyakit.keterangan
                                                }
                                            />
                                        </strong>
                                    </li>
                                )
                            )}
                        </ul>
                    </section>

                    {/* Hasil Diagnosis */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            Hasil Diagnosis
                        </h2>
                        {result.length > 0 ? (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                                <p className="font-semibold">
                                    Penyakit yang paling mungkin:{" "}
                                    <span className="text-green-900">{`Penyakit ID ${result[0].penyakit.nama}`}</span>
                                </p>
                                <p className="text-2xl mt-2">
                                    Nilai CF:{" "}
                                    {`${(result[0].cf * 100).toFixed(2)}%`}
                                </p>
                                <DetailPenyakit penyakit={result[0].penyakit} />
                            </div>
                        ) : (
                            <div className="text-gray-600">
                                Tidak ada hasil yang ditemukan.
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
