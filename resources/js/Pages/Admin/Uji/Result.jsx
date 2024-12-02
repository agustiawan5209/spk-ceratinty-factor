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
import Diagnosa from "@/Components/Web/Diagnosa";
export default function FormAturan({ auth, aturan, dataCF, result }) {
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
                            {/* <Link href={route().}>
                                <div className="max-w-xs w-32 p-2 md:p-4 absolute text-base text-white -top-8 left-3 shadow-lg shadow-gray-500 bg-blue-600">
                                    Kembali
                                </div>
                            </Link> */}
                        </div>
                        <Diagnosa aturan={aturan} dataCF={dataCF} result={result}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
