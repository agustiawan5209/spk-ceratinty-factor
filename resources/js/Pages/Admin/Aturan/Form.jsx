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
export default function FormAturan({ auth, gejala, penyakit }) {
    const { data, setData, post, processing, errors } = useForm({
        penyakit_id: "",
        aturan: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    const [tableGejala, setTableGejala] = useState([]);

    const HandleChecked = (e, item) => {
        const { value, checked } = e.target;

        if (checked) {
            setTableGejala((prev) => [
                ...prev,
                {
                    id: value,
                    nama: item.nama,
                    mb: 0.1,
                    md: 0.1,
                    cf: 0,
                    keterangan: "",
                },
            ]);
        } else {
            // Hapus item dari state jika checkbox tidak dicentang
            setTableGejala((prev) => prev.filter((item) => item.id !== value));
        }
        console.log(tableGejala);
    };

    const handleInput = (id, field, newValue) => {
        const updateGejala = tableGejala.map((s) => {
            if (s.id === id) {
                return { ...s, [field]: parseFloat(newValue.target.value) }; // Perbarui field tertentu
            }
            return s; // Kembalikan data lainnya tanpa perubahan
        });
        setTableGejala(updateGejala); // Set state baru

        console.log(updateGejala);
    };

    const handleInputKeterangan = (id, field, newValue) => {
        const updateGejala = tableGejala.map((s) => {
            if (s.id === id) {
                return { ...s, [field]: newValue.target.value }; // Perbarui field tertentu
            }
            return s; // Kembalikan data lainnya tanpa perubahan
        });
        setTableGejala(updateGejala); // Set state baru
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        data.aturan = tableGejala;
        post(route("Aturan.store"), {
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

    const [showModal, setShowModal] = useState(false);

    const NilaiMB = [
        { nilai: 1.0, txt: "Sangat Yakin" },
        { nilai: 0.8, txt: "Yakin" },
        { nilai: 0.6, txt: "Cukup Yakin" },
        { nilai: 0.4, txt: "Kurang Yakin" },
        { nilai: 0.2, txt: "Tidak yakin" },

    ];
    const NilaiMD = [
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
            <Modal show={showModal} maxWidth="2xl">
                <div className="py-4 w-full h-screen overflow-y-auto block">
                    <div className=" my-8 px-6">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-border-3"
                            aria-label="Close"
                        >
                            <span className="sr-only">Dismiss</span>
                            <FontAwesomeIcon
                                className="w-3 h-3"
                                icon="fa-solid fa-x"
                            />
                        </button>
                        <PetunjukPenggunaanAturan />
                    </div>
                </div>
            </Modal>
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
                            <div className="font-semibold text-base md:text-2xl leading-4 p-1 md:p-6">
                                <PrimaryButton
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                >
                                    {" "}
                                    Petunjuk Penggunaan{" "}
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className="p-2 md:p-4">
                            <h1 className="md:text-2xl font-bold mb-1 md:mb-4">
                                Tambah Data Aturan
                            </h1>
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                encType="multipart/form-data"
                            >
                                <div className="mb-4 col-span-full">
                                    <InputLabel
                                        htmlFor="penyakit_id"
                                        value="Pilih Data Penyakit"
                                    />
                                    <select
                                        id="penyakit"
                                        name="topik"
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

                                <div className="mb-4 col-span-full">
                                    <h2 className="font-semibold text-2xl">
                                        List Data Gejala
                                    </h2>
                                    <p className="text-xs text-gray-500 mb-2">
                                        catatan: centang gejala yang ada pada
                                        penyakit yang telah dipilih
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                                        {gejala.length > 0 &&
                                            gejala.map((item, index) => (
                                                <div
                                                    className="border"
                                                    key={index}
                                                >
                                                    <div className="flex items-center gap-2 p-2">
                                                        <input
                                                            id={
                                                                "checkbox-gejala-" +
                                                                index
                                                            }
                                                            type="checkbox"
                                                            value={item.id}
                                                            onChange={(e) =>
                                                                HandleChecked(
                                                                    e,
                                                                    item
                                                                )
                                                            }
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                                                        />
                                                        <label
                                                            htmlFor={
                                                                "checkbox-gejala-" +
                                                                index
                                                            }
                                                            className="text-base"
                                                        >
                                                           {index +1}. {item.nama}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <table className="table w-full">
                                        <thead>
                                            <tr>
                                                <th className="border text-sm p-1">
                                                    Gejala
                                                </th>
                                                <th className="border text-sm p-1">
                                                    MB (Hipotesa Kepastian terhadap Suatu Gejala)
                                                </th>
                                                <th className="border text-sm p-1">
                                                MD (Hipotesa Ketidakpastian terhadap Suatu Gejala)
                                                </th>
                                                <th className="border text-sm p-1">
                                                    Keteragan
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableGejala.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                        {item.nama}
                                                    </td>
                                                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                        <select
                                                            id="md"
                                                            name="md"
                                                            value={item.mb}
                                                            onChange={(e) =>
                                                                handleInput(
                                                                    item.id,
                                                                    "mb",
                                                                    e
                                                                )
                                                            }
                                                            className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        >
                                                            <option value="">
                                                                Pilih Data
                                                                Penyakit-------
                                                            </option>
                                                            {NilaiMB.map(
                                                                (col) => (
                                                                    <option
                                                                        key={
                                                                            col.nilai
                                                                        }
                                                                        value={
                                                                            col.nilai
                                                                        }
                                                                    >
                                                                        {
                                                                            col.txt
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </td>
                                                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    <select
                                                            id="mb"
                                                            name="md"
                                                            value={item.md}
                                                            onChange={(e) =>
                                                                handleInput(
                                                                    item.id,
                                                                    "md",
                                                                    e
                                                                )
                                                            }
                                                            className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        >
                                                            <option value="">
                                                                Pilih Data
                                                                Penyakit-------
                                                            </option>
                                                            {NilaiMB.map(
                                                                (col) => (
                                                                    <option
                                                                        key={
                                                                            col.nilai
                                                                        }
                                                                        value={
                                                                            col.nilai
                                                                        }
                                                                    >
                                                                        {
                                                                            col.txt
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </td>
                                                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                        <TextInput
                                                            type="text"
                                                            className="w-full"
                                                            value={
                                                                item.keterangan
                                                            }
                                                            onChange={(e) =>
                                                                handleInputKeterangan(
                                                                    item.id,
                                                                    "keterangan",
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
        </AuthenticatedLayout>
    );
}
