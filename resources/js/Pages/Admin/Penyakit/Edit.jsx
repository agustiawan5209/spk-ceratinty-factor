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
export default function EditPenyakit({ auth, dusun, kategori, penyakit }) {
    // const initialGallery = [...penyakit.galeri].map((item) => item.image_path);
    const initialGallery = [];
    const { data, setData, put, processing, errors } = useForm({
        id: penyakit.id,
        slug: penyakit.id,
        kode: penyakit.kode,
        keterangan: penyakit.keterangan,
        nama: penyakit.nama,
        images: initialGallery,
    });

    const quillRef = useRef(null);
    const quillRefKontak = useRef(null);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setData("images", [...data.images, ...files]);
    };

    const handleRemoveImage = (index) => {
        setData(
            "images",
            data.images.filter((_, i) => i !== index)
        );
    };

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // Object.entries(data).forEach(([key, value]) => {
        //     if (Array.isArray(value)) {
        //         value.forEach((file) => formData.append(key, file));
        //     } else {
        //         formData.append(key, value);
        //     }
        // });

        put(route("Penyakit.update"), {
            // data: formData,
            onBefore: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
                // reset()
            },
            onError: (err) => console.log(err),
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Ubah Potensi Daerah
                </h2>
            }
        >
            <Head title="Ubah Potensi Daerah" />
            {isLoading && <LoadingPage />}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white relative shadow-sm sm:rounded-lg">
                        <div className="max-w-xs w-32 relative -top-5 left-3 shadow-lg shadow-gray-500 bg-blue-600">
                            <Link href={route("Penyakit.index")}>
                                <div className="w-full p-2 md:p-4 text-base text-white">
                                    Kembali
                                </div>
                            </Link>
                        </div>
                       <div className="p-2 md:p-4">
                       <h1 className="text-2xl font-bold mb-4 text-gray-800">
                            Ubah Potensi Daerah
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            encType="multipart/form-data"
                        >
                            <div className="col-span-full mt-6">
                                <InputLabel
                                    htmlFor="gambar"
                                    value="Gambar Potensi Daerah"
                                />
                                <input
                                    type="file"
                                    multiple
                                    id="gambar"
                                    onChange={handleImageChange}
                                    className="block w-full mt-1"
                                />
                                <InputError
                                    message={errors.gambar}
                                    className="mt-2"
                                />
                                <div className="flex gap-4 mt-4">
                                    {data.images.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={
                                                    typeof image === "string"
                                                        ? image
                                                        : URL.createObjectURL(
                                                              image
                                                          )
                                                }
                                                alt="Gambar"
                                                className="w-24 h-24 object-cover rounded"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveImage(index)
                                                }
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500">Keterangan: Anda Dapat Menyimpan Lebih Dari Satu Gambar</p>

                            <div className="col-span-2">
                                <InputLabel
                                    htmlFor="tgl"
                                    value="kode Penyakit"
                                />

                                <TextInput
                                    id="kode"
                                    type="text"
                                    name="kode"
                                    value={data.kode}
                                    className="mt-1 block w-full"
                                    autoComplete="kode"
                                    isFocused={false}
                                    placeholder="00----"
                                    onChange={(e) =>
                                        setData("kode", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.kode}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-span-2">
                                <InputLabel
                                    htmlFor="nama"
                                    value="nama Penyakit"
                                />

                                <TextInput
                                    id="nama"
                                    type="text"
                                    name="nama"
                                    value={data.nama}
                                    className="mt-1 block w-full"
                                    placeholder="nama Penyakit"
                                    autoComplete="nama"
                                    isFocused={false}
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.nama}
                                    className="mt-2"
                                />
                            </div>

                        {/* Description Input using ReactQuill */}
                        <div className="mb-4 col-span-full">
                            <InputLabel
                                htmlFor="keterangan"
                                value="Keterangan Dusun"
                            />
                            <div className="w-full">
                            <ReactQuill
                                ref={quillRef} // Menggunakan ref di sini
                                theme="snow"
                                value={data.keterangan}
                                onChange={(value) =>
                                    setData("keterangan", value)
                                }
                                className="mt-1"
                            />
                            </div>
                            <InputError
                                message={errors.keterangan}
                                className="mt-2"
                            />
                        </div>
                            <div className="col-span-full flex justify-center mt-6">
                                <PrimaryButton disabled={processing}>
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
