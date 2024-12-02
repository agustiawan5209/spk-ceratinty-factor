import React, { useState, useRef } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "react-quill/dist/quill.snow.css";
import LoadingPage from "@/Components/LoadingPage";
import Diagnosa from "@/Components/Web/Diagnosa";
export default function ShowDiagnosa({ auth, diagnosa }) {
    const { data, setData, get, processing, errors } = useForm({
        aturan: [],
    });
    const [isLoading, setIsLoading] = useState(false);

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
                            <div className="max-w-xs w-max p-2 md:p-4 absolute text-base text-white -top-8 left-3 shadow-lg shadow-gray-500 bg-green-600">
                                Hasil Uji Diagnosa Penyakit Tanggal : {diagnosa.tgl}
                            </div>
                        </div>
                            <ul className="mt-10 p-4 space-y-4">
                                <li className="border-b capitalize">Nama : {diagnosa.nama} </li>
                                <li className="border-b capitalize">Alamat : {diagnosa.alamat} </li>
                                <li className="border-b capitalize">Nomor Telepon : {diagnosa.no_telpon} </li>
                            </ul>
                        <Diagnosa aturan={diagnosa.diagnosa.aturan} dataCF={diagnosa.diagnosa.dataCF} result={diagnosa.diagnosa.result}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
