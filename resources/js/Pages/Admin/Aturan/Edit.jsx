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
import PetunjukPenggunaanAturan from "./Petunjuk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EditAturan({ auth, gejala, penyakit, aturan }) {
    const { data, setData, put, processing, errors } = useForm({
        slug: aturan.id,
        penyakit_id: aturan.penyakit_id,
        gejala_id:  aturan.gejala_id,
        mb:  Number(aturan.mb).toFixed(1),
        md:  Number(aturan.md).toFixed(1),
        cf:  aturan.cf,
        keterangan:  aturan.keterangan,
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("Aturan.update"), {
            onBefore: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
                // reset()
            },
            onError: (err) => {
                console.log(err);
            },
        });
    };
    const NilaiMB = [
        { nilai: 1.0, txt: "Sangat Yakin" },
        { nilai: 0.8, txt: "Yakin" },
        { nilai: 0.6, txt: "Cukup Yakin" },
        { nilai: 0.4, txt: "Kurang Yakin" },
        { nilai: 0.2, txt: "Tidak yakin" },

    ];
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Form Aturan
                </h2>
            }
        >
            <Head title="Form Aturan" />
            {isLoading && <LoadingPage />}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white relative shadow-sm sm:rounded-lg">
                        <div className="w-full flex flex-1 relative justify-end ">
                            <Link href={route("Aturan.index")}>
                                <div className="max-w-xs w-32 p-2 md:p-4 absolute text-base text-white -top-8 left-3 shadow-lg shadow-gray-500 bg-blue-600">
                                    Kembali
                                </div>
                            </Link>
                            <div className="p-2 mt-4 md:p-4">
                                <h1 className="md:text-2xl font-bold mb-1 md:mb-4">
                                    Ubah Data Aturan
                                </h1>
                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-2 gap-4"
                                    encType="multipart/form-data"
                                >
                                    <div className="mb-4 col-span-full">
                                        <InputLabel
                                            htmlFor="penyakit_id"
                                            value="Pilih Data Penyakit"
                                        />
                                        <select
                                            id="penyakit"
                                            name="penyakit_id"
                                            value={data.penyakit_id}
                                            onChange={(e) =>
                                                setData(
                                                    "penyakit_id",
                                                    e.target.value
                                                )
                                            }
                                            className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">
                                                Pilih Data Penyakit-------
                                            </option>
                                            {penyakit.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.kode}|| {item.nama}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.penyakit_id}
                                            className="mt-2"
                                        />
                                    </div>
{/* Gejala */}
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="gejala_id"
                                            value="Gejala"
                                        />
                                        <select
                                            id="gejala"
                                            name="gejala_id"
                                            value={data.gejala_id}
                                            onChange={(e) =>
                                                setData(
                                                    "gejala_id",
                                                    e.target.value
                                                )
                                            }
                                            disabled={true}
                                            className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">
                                                Pilih Data Penyakit-------
                                            </option>
                                            {gejala.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.kode}|| {item.nama}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.gejala_id}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Nilai MB */}
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="mb"
                                            value="Nilai MB (Hipotesa Kepastian Nilai terhadap suatu gejala)"
                                        />
                                        <select
                                            id="mb"
                                            name="mb"
                                            value={data.mb}
                                            onChange={(e) =>
                                                setData('mb', e.target.value)
                                            }
                                            className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">
                                                Pilih Nilai MB-------
                                            </option>
                                            {NilaiMB.map((col) => (
                                                <option
                                                    key={col.nilai}
                                                    value={col.nilai}
                                                >
                                                    {col.txt}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.mb}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Nilai MD */}
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="md"
                                            value="Nilai MD (Hipotesa Ketidakpastian Nilai terhadap suatu gejala)"
                                        />
                                        <select
                                            id="md"
                                            name="md"
                                            value={data.md}
                                            onChange={(e) =>
                                                setData('md', e.target.value)
                                            }
                                            className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">
                                                Pilih Nilai MD-------
                                            </option>
                                            {NilaiMB.map((col) => (
                                                <option
                                                    key={col.nilai}
                                                    value={col.nilai}
                                                >
                                                    {col.txt}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.md}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Keterangan */}
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="keterangan"
                                            value="Keterangan"
                                        />
                                        <TextInput
                                            id="keterangan"
                                            type="text"
                                            className="mt-1 block w-full"
                                            autoComplete="off"
                                            isFocused={false}
                                            value={data.keterangan}
                                            onChange={(e) =>
                                                setData(
                                                    "keterangan",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Gejala"
                                        />
                                        <InputError
                                            message={errors.keterangan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className=" col-span-full flex items-center justify-center mt-10">
                                        <PrimaryButton
                                            className="ms-4"
                                            disabled={processing}
                                        >
                                            Simpan
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
