import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import LoadingPage from "@/Components/LoadingPage";
export default function FormPengobatan({
    auth,
    pengobatan,
    penyakit,
    setModalOpen,
}) {
    const { data, setData, post, put, processing, errors } = useForm({
        slug: "",
        penyakit_id: "",
        keterangan: "",
    });

    const quillRef = useRef(null); // Membuat ref untuk ReactQuill

    useEffect(() => {
        if (pengobatan) {
            setData({
                slug: pengobatan.id,
                penyakit_id: pengobatan.penyakit_id,
                keterangan: pengobatan.keterangan,
            });
        }
    }, [pengobatan]);

    const [isLoading, setIsLoading] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        if (pengobatan) {
            // Jika ada pengobatan, lakukan update
            put(route("Pengobatan.update"), {
                preserveState: true,
                onBefore: () => {
                    setIsLoading(true);
                },
                onFinish: () => {
                    setIsLoading(false);
                    // reset()
                },
                onSuccess: () => {
                    setModalOpen(false); // Menutup modal setelah berhasil
                },
                onError: (err) => {
                    const errorMessage = Object.values(err).join("\n");
                    console.log(errorMessage);
                },
            });
        } else {
            // Jika tidak ada pengobatan, lakukan create
            post(route("Pengobatan.store"), {
                preserveState: true,
                onSuccess: () => {
                    setModalOpen(false); // Menutup modal setelah berhasil
                },
                onError: (err) => {
                    const errorMessage = Object.values(err).join("\n");
                    console.log(errorMessage);
                },
            });
        }
    };

    return (
        <div className="py-12">
            {isLoading && <LoadingPage />}
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="p-4 max-w-xl">
                        {/* Name Input */}
                        <div className="mb-4">
                            <InputLabel
                                htmlFor="penyakit_id"
                                value="Pilih Data Penyakit"
                            />
                            <select
                                id="penyakit"
                                name="topik"
                                value={data.penyakit_id}
                                onChange={(e) =>
                                    setData("penyakit_id", e.target.value)
                                }
                                className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">
                                    Pilih Data Penyakit-------
                                </option>
                                {penyakit.map((item) => (
                                    <option key={item.id} value={item.id}>
                                       {item.kode}|| {item.nama}
                                    </option>
                                ))}
                            </select>
                            <InputError
                                message={errors.penyakit_id}
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-4">
                            <InputLabel
                                htmlFor="nama"
                                value="Keterangan Pengobatan"
                            />
                            <div>
                                <ReactQuill
                                    ref={quillRef} // Menggunakan ref di sini
                                    theme="snow"
                                    value={data.keterangan}
                                    onChange={(value) =>
                                        setData("keterangan", value)
                                    }
                                    className="mt-1"
                                />
                                <p className="text-xs text-gray-500">
                                    Keterangan: Jelaskan Secara Rinci Mengenai Cara Pengobatan Untuk Penyakit Yang Ada
                                </p>
                            </div>
                            <InputError
                                message={errors.keterangan}
                                className="mt-2"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-end mt-4">
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
    );
}
