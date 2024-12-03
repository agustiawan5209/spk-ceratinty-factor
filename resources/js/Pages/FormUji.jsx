import React, { useState, useRef, useEffect } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import "react-quill/dist/quill.snow.css";
import LoadingPage from "@/Components/LoadingPage";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
export default function FormUji({ gejala }) {
    const { data, setData, post, processing, errors } = useForm({
        aturan: [],
        nama: "",
        no_telpon: "",
        alamat: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const [tableGejala, setTableGejala] = useState([]);

    const HandleChecked = (e, item) => {
        const { value, checked } = e.target;

        if (value == "ya") {
            setTableGejala((prev) => {
                if (!prev.some((s) => s.id === item.id)) {
                    return [...prev, { id: item.id, value: value }];
                }
                return prev;
            });
        } else {
            // Hapus item dari state jika checkbox tidak dicentang
            setTableGejala((prev) => prev.filter((s) => s.id !== item.id));
        }
    };

    useEffect(() => {
        setData("aturan", tableGejala);
    }, [tableGejala]);
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("Uji.store"), {
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
        <>
            {isLoading && <LoadingPage />}

            <div className="p-2 md:p-4 mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    encType="multipart/form-data"
                >
                    <div className="mb-4 col-span-full">
                        <h2 className="font-semibold text-2xl">
                            List Data Gejala
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">
                            catatan: Pilih <b>Ya!</b> untuk gejala terjadi pada
                            ayam anda. Terdapat {gejala.length} Gejala anda
                            dapat memilih lebih dari satu. <br />
                            <FontAwesomeIcon icon={faWarning} /> Mohon Agar
                            memilih sesuai dengan gejala yang terjadi pada hewan
                            ternak anda, agar diagnosa dapat berjalan lebih
                            optimal
                        </p>
                        <div className="w-full overflow-x-auto">
                            <div className="block space-y-4">
                                <div>
                                    <InputLabel
                                        htmlFor="nama"
                                        value="Nama Lengkap"
                                    />

                                    <TextInput
                                        id="nama"
                                        type="text"
                                        name="nama"
                                        value={data.nama}
                                        className="mt-1 block w-full"
                                        autoComplete="nama"
                                        isFocused={true}
                                        required={true}
                                        onChange={(e) =>
                                            setData("nama", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="alamat"
                                        value="Alamat"
                                    />

                                    <TextInput
                                        id="alamat"
                                        type="text"
                                        name="alamat"
                                        value={data.alamat}
                                        className="mt-1 block w-full"
                                        autoComplete="alamat"
                                        isFocused={true}
                                        required={true}
                                        onChange={(e) =>
                                            setData("alamat", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.alamat}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="no_telpon"
                                        value="No. telpon"
                                    />

                                    <TextInput
                                        id="no_telpon"
                                        type="text"
                                        name="no_telpon"
                                        value={data.no_telpon}
                                        className="mt-1 block w-full"
                                        autoComplete="no_telpon"
                                        isFocused={true}
                                        required={true}
                                        onChange={(e) =>
                                            setData("no_telpon", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.no_telpon}
                                        className="mt-2"
                                    />
                                </div>

                                <p className="text-sm text-gray-500 mb-2">
                                    catatan:
                                    <FontAwesomeIcon icon={faWarning} /> Mohon
                                    Agar untuk mengisi nama, alamat, no_telpon diatas sebelum melanjutkan
                                </p>
                            </div>
                            <table className="table w-full mt-10">
                                <colgroup>
                                    <col />
                                    <col className="w-[50%]" />
                                </colgroup>
                                <thead>
                                    <tr className="bg-green-500">
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            No.
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            Gejala
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            /
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-xs font-semibold text-white border">
                                            (dapat dikosongkan)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gejala.length > 0 &&
                                        gejala.map((item, index) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-gray-50 transition duration-200"
                                            >
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    {index + 1}
                                                </td>
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    {item.nama}
                                                </td>
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    <div className="flex items-center">
                                                        <input
                                                            id={
                                                                `default-radio-` +
                                                                index
                                                            }
                                                            type="radio"
                                                            value={`ya`}
                                                            name={`confirm-${item.id}`}
                                                            onChange={(e) =>
                                                                HandleChecked(
                                                                    e,
                                                                    item
                                                                )
                                                            }
                                                            className="w-6 h-6 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 "
                                                        />
                                                        <label
                                                            htmlFor={
                                                                `default-radio-` +
                                                                index
                                                            }
                                                            className="ms-2 text-sm font-medium text-gray-900"
                                                        >
                                                            Ya!
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    <div className="flex items-center">
                                                        <input
                                                            id={
                                                                `default-radio-` +
                                                                index
                                                            }
                                                            type="radio"
                                                            value={`tidak`}
                                                            name={`confirm-${item.id}`}
                                                            onChange={(e) =>
                                                                HandleChecked(
                                                                    e,
                                                                    item
                                                                )
                                                            }
                                                            className="w-6 h-6 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 "
                                                        />
                                                        <label
                                                            htmlFor={
                                                                `default-radio-` +
                                                                index
                                                            }
                                                            className="ms-2 text-sm font-medium text-gray-900"
                                                        >
                                                            Tidak!
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" col-span-full flex items-center justify-center mt-2">
                        <PrimaryButton
                            className="ms-4 w-full flex justify-center !text-xl"
                            disabled={processing}
                        >
                            Mulai Diagnosa!
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
