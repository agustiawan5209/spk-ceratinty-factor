import React, { useState, useRef } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import LoadingPage from "@/Components/LoadingPage";
export default function FormAturan({ auth, gejala, penyakit }) {
    const { data, setData, post, processing, errors } = useForm({
        penyakit_id: "",
        gejala_id: "",
        md: "",
        mb: "",
        cf: "",
        keterangan: "",
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
                    md: 0.1,
                    mb: 0.1,
                    cf: 0,
                    keterangan: "",
                },
            ]);
        } else {
            // Hapus item dari state jika checkbox tidak dicentang
            setTableGejala((prev) => prev.filter((item) => item.id !== value));
        }
        console.log(tableGejala)
    };

    const handleInput = (id, field, newValue)=>{
        const updateGejala = tableGejala.map((s) => {
            if (s.id === id) {
              return { ...s, [field]: parseFloat(newValue.target.value) }; // Perbarui field tertentu
            }
            return s; // Kembalikan data lainnya tanpa perubahan
          });
          setTableGejala(updateGejala); // Set state baru

          console.log(updateGejala)
    }

    const handleInputKeterangan = (id, field, newValue)=>{
        const updateGejala = tableGejala.map((s) => {
            if (s.id === id) {
              return { ...s, [field]: newValue.target.value }; // Perbarui field tertentu
            }
            return s; // Kembalikan data lainnya tanpa perubahan
          });
          setTableGejala(updateGejala); // Set state baru
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("Aturan.store"), {
            data: formData,
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
                        <div className="max-w-xs w-32 relative -top-5 left-3 shadow-lg shadow-gray-500 bg-blue-600">
                            <Link href={route("Aturan.index")}>
                                <div className="w-full p-2 md:p-4 text-base text-white">
                                    Kembali
                                </div>
                            </Link>
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
                                                            {item.nama}
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
                                                    MB
                                                </th>
                                                <th className="border text-sm p-1">
                                                    MD
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
                                                        <TextInput type="number" step={0.1} max={1} min={-1} name="mb" value={item.mb}  onChange={(e)=> handleInput(item.id, 'mb', e)} />
                                                    </td>
                                                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    <TextInput type="number" step={0.1} max={1} min={-1} name="md" value={item.md}  onChange={(e)=> handleInput(item.id, 'md', e)} />

                                                    </td>
                                                    <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    <TextInput type="text" value={item.keterangan}  onChange={(e)=> handleInputKeterangan(item.id, 'keterangan', e)} />

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
