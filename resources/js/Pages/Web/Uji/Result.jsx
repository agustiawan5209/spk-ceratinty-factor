import React, { useState, useRef } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import LoadingPage from "@/Components/LoadingPage";
import Diagnosa from "@/Components/Web/Diagnosa";
export default function FormAturan({  aturan, dataCF, result }) {
    const { data, setData, get, processing, errors } = useForm({
        aturan: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    return (
        <HomeLayout
            title={'Hasil Diagnosa'}
        >

            {isLoading && <LoadingPage />}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white relative shadow-sm sm:rounded-lg">
                        <div className="w-full flex flex-1 relative justify-end ">
                            {/* <Link href={route().}>
                                <div className="max-w-xs w-32 p-2 md:p-4 absolute text-base text-white -top-8 left-3 shadow-lg shadow-gray-500 bg-green-600">
                                    Kembali
                                </div>
                            </Link> */}
                        </div>
                        <Diagnosa aturan={aturan} dataCF={dataCF} result={result}/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
