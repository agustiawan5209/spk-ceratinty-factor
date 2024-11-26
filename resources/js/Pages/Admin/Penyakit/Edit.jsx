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
export default function EditBerita({ auth, topik, kategori, berita }) {
    const { data, setData, post, processing, errors } = useForm({
        id: berita.id,
        topik: berita.topik,
        judul: berita.judul,
        slug: berita.slug,
        konten: berita.konten,
        kategori: berita.kategori,
        tgl: berita.tgl,
        penulis: berita.penulis,
        status: berita.status,
        visitor: 0,
        images: null, // State untuk menyimpan file gambar
    });
    const quillRef = useRef(null);

    const handleImageChange = (e) => {
        setData("images", e.target.files[0]); // Menambahkan gambar baru ke state
    };

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("Berita.update"), {
            onBefore:()=>{
                setIsLoading(true);
            },
            onFinish:()=>{
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
                    Form Berita
                </h2>
            }
        >
                        {isLoading && <LoadingPage />}

            <Head title="Form Berita" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link href={route('Berita.index')}>
                            <PrimaryButton type="button">Kembali</PrimaryButton>
                        </Link>
                        <div className="p-4">
                            <h1 className="text-2xl font-bold mb-4">
                                Tambah Berita
                            </h1>
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"  encType="multipart/form-data"
                            >
                                <div className="col-span-full mt-6">
                                <InputLabel htmlFor="gambar" value="Gambar Berita" />
                                <input type="file" id="gambar" onChange={handleImageChange} className="block w-full mt-1" />
                                <InputError message={errors.gambar} className="mt-2" />
                               {data.images instanceof File && data.images != null ?  <div className="flex gap-4 mt-4">
                                    <div  className="relative">
                                            <img src={URL.createObjectURL(data.images)} alt="Gambar" className="w-24 h-24 object-cover rounded" />
                                        </div>
                                </div> :
                                <div className="flex gap-4 mt-4">
                                <div  className="relative">
                                        <img src={berita.thumbnail_path} alt="Gambar" className="w-24 h-24 object-cover rounded" />
                                    </div>
                            </div>
                                }
                            </div>
                                {/* Input Topik */}
                                <div className="col-span-2 ">
                                    <InputLabel
                                        htmlFor="daftartopik"
                                        value="Daftar Topik"
                                    />
                                    <select
                                        id="daftartopik"
                                        name="topik"
                                        value={data.topik}
                                        onChange={(e) =>
                                            setData("topik", e.target.value)
                                        }
                                        className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="" disabled>
                                            Pilih Topik-------
                                        </option>
                                        {topik.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.nama}
                                            >
                                                {item.nama}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError
                                        message={errors.topik}
                                        className="mt-2"
                                    />
                                </div>
                                {/* Input Kategori */}
                                <div className="col-span-2 ">
                                    <InputLabel
                                        htmlFor="daftarkategori"
                                        value="Daftar Kategori "
                                    />
                                    <select
                                        id="daftarkategori"
                                        name="kategori"
                                        value={data.kategori}
                                        onChange={(e) =>
                                            setData("kategori", e.target.value)
                                        }
                                        className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="" disabled>
                                            Pilih Kategori-------
                                        </option>
                                        {kategori.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.nama}
                                            >
                                                {item.nama}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError
                                        message={errors.kategori}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <InputLabel
                                        htmlFor="judul"
                                        value="Judul Berita"
                                    />

                                    <TextInput
                                        id="judul"
                                        type="text"
                                        name="judul"
                                        value={data.judul}
                                        className="mt-1 block w-full"
                                        placeholder="Judul Berita"
                                        autoComplete="judul"
                                        isFocused={false}
                                        onChange={(e) =>
                                            setData(
                                                "judul",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.judul}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <InputLabel
                                        htmlFor="tgl"
                                        value="Tanggal Berita"
                                    />

                                    <TextInput
                                        id="tgl"
                                        type="date"
                                        name="tgl"
                                        value={data.tgl}
                                        className="mt-1 block w-full"
                                        autoComplete="tgl"
                                        isFocused={false}
                                        placeholder="00/00/000"
                                        onChange={(e) =>
                                            setData("tgl", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.tgl}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <InputLabel
                                        htmlFor="tgl"
                                        value="Nama Penulis Berita"
                                    />

                                    <TextInput
                                        id="penulis"
                                        type="text"
                                        name="penulis"
                                        value={data.penulis}
                                        className="mt-1 block w-full"
                                        autoComplete="penulis"
                                        isFocused={false}
                                        placeholder="-------------"
                                        onChange={(e) =>
                                            setData("penulis", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.penulis}
                                        className="mt-2"
                                    />
                                </div>
                                {/* Select Status */}
                                {/* Input Kategori */}
                                <div className="col-span-2 ">
                                    <InputLabel
                                        htmlFor="status"
                                        value="status "
                                    />
                                    <select
                                        id="status"
                                        name="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="block appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="" disabled>
                                            Pilih Status----
                                        </option>
                                        <option value="Publish">Publish</option>
                                        <option value="Draft">Draft</option>
                                        <option value="nonAktif">
                                            nonAktif
                                        </option>
                                    </select>

                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Description Input using ReactQuill */}
                                <div className="col-span-full mt-10">
                                    <InputLabel
                                        htmlFor="Konten"
                                        value="Konten Berita"
                                    />
                                    <div className="h-96">
                                        <ReactQuill
                                            ref={quillRef}
                                            theme="snow"
                                            value={data.konten}
                                            onChange={(value) =>
                                                setData("konten", value)
                                            }
                                            className="mt-1 w-full h-full"
                                        />
                                    </div>
                                    <InputError
                                        message={errors.konten}
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
        </AuthenticatedLayout>
    );
}
