import React, { useState, useRef } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import FormUji from "@/Pages/FormUji";
export default function WebIndexUji({ gejala, penyakit }) {
    return (
        <HomeLayout  title={"Diagnosa"}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white relative shadow-sm sm:rounded-lg">
                        <div className="w-full flex flex-1 relative justify-end ">
                            <div className="max-w-xs w-max p-2 md:p-4 absolute text-base text-white -top-8 left-3 shadow-lg shadow-gray-500 bg-green-600">
                                Mulai Diagnosa Penyakit Ayam (Boiler)
                            </div>
                        </div>
                        <FormUji
                            gejala={gejala}
                            penyakit={penyakit}
                        />
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
