import React, { useState, useRef } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import "react-quill/dist/quill.snow.css";
import LoadingPage from "@/Components/LoadingPage";
import Modal from "@/Components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FormAturan({ auth, aturan, dataCF, result }) {
    const { data, setData, get, processing, errors } = useForm({
        aturan: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    console.log(aturan)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Form Uji Data
                </h2>
            }
        >
            <Head title="Form Uji" />
            {isLoading && <LoadingPage />}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white relative shadow-sm sm:rounded-lg">
                        <div className="w-full flex flex-1 relative justify-end ">
                            {/* <Link href={route().}>
                                <div className="max-w-xs w-32 p-2 md:p-4 absolute text-base text-white -top-8 left-3 shadow-lg shadow-gray-500 bg-blue-600">
                                    Kembali
                                </div>
                            </Link> */}
                        </div>
                        <div className="p-2 md:p-4 mt-10">
                            <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
                                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
                                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
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
                                                    <tr className="bg-blue-500 text-white">
                                                        <th className="py-2 px-4 border">
                                                            No
                                                        </th>
                                                        <th className="py-2 px-4 border">
                                                            Gejala ID
                                                        </th>
                                                        <th className="py-2 px-4 border">
                                                            Penyakit ID
                                                        </th>
                                                        <th className="py-2 px-4 border">
                                                            MB
                                                        </th>
                                                        <th className="py-2 px-4 border">
                                                            MD
                                                        </th>
                                                        <th className="py-2 px-4 border">
                                                            CF
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {aturan.map(
                                                        (item, index) => (
                                                            <tr
                                                                key={index}
                                                                className="hover:bg-gray-100"
                                                            >
                                                                <td className="py-2 px-4 border text-center">
                                                                    {index + 1}
                                                                </td>
                                                                <td className="py-2 px-4 border text-center">
                                                                    {
                                                                        item.gejala.nama
                                                                    }
                                                                </td>
                                                                <td className="py-2 px-4 border text-center">
                                                                    {
                                                                        item.penyakit.nama
                                                                    }
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
                                                        )
                                                    )}
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
                                                        className="text-gray-600"
                                                    >
                                                        <strong className="text-blue-500">
                                                            Penyakit{" "}
                                                            {item.penyakit.nama}:
                                                        </strong>{" "}
                                                        {(item.cf * 100).toFixed(2)} (%)
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
                                                    Penyakit yang paling
                                                    mungkin:{" "}
                                                    <span className="text-green-900">{`Penyakit ID ${result[0].penyakit.nama}`}</span>
                                                </p>
                                                <p className="text-sm mt-2">
                                                    Nilai CF:{" "}
                                                    {`${(
                                                        result[0].cf * 100
                                                    ).toFixed(2)}%`}
                                                </p>
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
