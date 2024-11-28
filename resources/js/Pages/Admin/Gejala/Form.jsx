import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef,useState } from "react";
import LoadingPage from "@/Components/LoadingPage";
export default function FormDusun({ auth, gejala, setModalOpen }) {
    const { data, setData, post,put, processing, errors } = useForm({
        slug: "",
        nama: "",
        kode: "",
    });

    const quillRef = useRef(null); // Membuat ref untuk ReactQuill

    useEffect(() => {
        if (gejala) {
            setData({
                slug: gejala.id,
                nama: gejala.nama,
                kode: gejala.kode,
            });
        }
    }, [gejala]);

    const [isLoading, setIsLoading] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        if (gejala) {
            // Jika ada gejala, lakukan update
            put(route("Gejala.update"), {
                preserveState: true,
                onBefore:()=>{
                    setIsLoading(true);
                },
                onFinish:()=>{
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
            // Jika tidak ada gejala, lakukan create
            post(route("Gejala.store"), {
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
                            <InputLabel htmlFor="kode" value="Kode" />
                            <TextInput
                                id="kode"
                                type="text"
                                className="mt-1 block w-full"
                                autoComplete="off"
                                isFocused={false}
                                value={data.kode}
                                onChange={(e) =>
                                    setData("kode", e.target.value)
                                }
                                placeholder="Kode Gejala"
                            />
                            <InputError
                                message={errors.kode}
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-4">
                            <InputLabel htmlFor="nama" value="Nama Gejala" />
                            <TextInput
                                id="nama"
                                type="text"
                                className="mt-1 block w-full"
                                autoComplete="off"
                                isFocused={false}
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                                placeholder="Nama Gejala"
                            />
                            <InputError
                                message={errors.nama}
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
