import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";

export default function DaftarDiagnosa({ auth, diagnosa, can }) {
    // Membuat form untuk menghapus dan mencari data diagnosa
    const {
        data,
        setData,
        get,
        post,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({});

    // Mengambil data user dan data diagnosa dari props
    const { crud } = can;

    const aksi = () => {
        if (crud.add && crud.edit && crud.delete && crud.show) {
            return true;
        } else {
            return false;
        }
    };

    // State untuk menyimpan query pencarian
    const [search, setSearch] = useState("");
    // Fungsi untuk mencari data diagnosa
    const searchTopik = (search) => {
        get(route("Diagnosa.index", { search: search }), {
            // Mengatur agar state halaman tetap dipertahankan saat melakukan pencarian
            preserveState: true,
        });
    };

    // Fungsi untuk menangani perubahan input pencarian
    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchTopik(e.target.value); // Mencari data diagnosa berdasarkan query pencarian
    };

    // State Untuk Filter Data
    const [FilterData, setFilterData] = useState({
        topik: "",
        kategori: "",
        status: "",
    });

    const handleFilter = (e) => {
        const { name, value } = e.target;
        get(route("Diagnosa.index", { [name]: value }), {
            preserveState: true,
        });
        setFilterData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Menyaring data diagnosa berdasarkan input pencarian
    const filteredDiagnosa = diagnosa.data;

    // Fungsi untuk membersihkan teks HTML dari tag HTML
    function sanitizeText(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        return doc.body.textContent || "";
    }

    // State untuk mengatur modal konfirmasi penghapusan
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // State untuk menyimpan data diagnosa yang akan dihapus
    const [itemData, setItemData] = useState(null);

    // Fungsi untuk membuka modal konfirmasi penghapusan
    const openModal = (item) => {
        setIsDeleteModalOpen(true);
        setItemData(item); // Mengatur slug diagnosa yang akan dihapus
    };

    // Fungsi untuk menutup modal konfirmasi penghapusan
    const closeModal = () => {
        setIsDeleteModalOpen(false);
        setItemData(null); // Mengatur ulang state slug diagnosa
    };

    // Fungsi untuk menghapus data diagnosa
    const deleteData = (id) => {
        destroy(route("Diagnosa.destroy", { slug: id }), {
            // Mengatur agar modal konfirmasi penghapusan ditutup saat penghapusan berhasil
            onSuccess: () => {
                closeModal();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Diagnosa
                </h2>
            }
        >
            <Head title="Daftar Diagnosa" />

            <Modal show={isDeleteModalOpen} onClose={closeModal} maxWidth="md">
                {/* Modal konfirmasi penghapusan */}
                <div className="relative">
                    <div className="bg-white w-full rounded-lg p-4 fixed inset-x-0 bottom-0 z-50 md:relative shadow-lg">
                        <div className="md:flex items-center">
                            <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                                <i className="bx bx-error text-3xl">&#9888;</i>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                                <p className="font-bold">Warning!</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Apakah Anda yakin ingin menghapus item
                                    dengan ID: {itemData ? itemData.judul : ""}?
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                            <button
                                onClick={() => deleteData(itemData.id)}
                                id="confirm-delete-btn"
                                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                            >
                                Hapus
                            </button>
                            <button
                                onClick={closeModal}
                                id="confirm-cancel-btn"
                                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-3">
                    <div className="bg-white shadow-md sm:rounded-lg p-6">
                        {/* Search and Add Button */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                            <input
                                type="search"
                                placeholder="Cari diagnosa..."
                                value={search}
                                onChange={handleSearch}
                                className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                            />
                        </div>
                        {/* Table of Topik */}
                        <div className="mt-6 overflow-x-auto rounded-t-md">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                    <tr className="bg-green-500">
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            No.
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            Nama Pengguna
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            Nomor Telepon
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            Alamat
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-white border">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className={processing ? "opacity-50" : ""}
                                >
                                    {filteredDiagnosa.length > 0 ? (
                                        filteredDiagnosa.map((item, index) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-gray-50 transition duration-200"
                                            >
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    {(diagnosa.current_page -
                                                        1) *
                                                        diagnosa.per_page +
                                                        index +
                                                        1}
                                                </td>
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    {item.nama}
                                                </td>
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    {item.no_telpon}
                                                </td>
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    {item.alamat}
                                                </td>
                                                <td className="py-3 px-4 border border-gray-200 text-sm text-gray-700">
                                                    <div className="flex space-x-2">
                                                        {can.show && (
                                                            <Link
                                                                href={route(
                                                                    "Diagnosa.show",
                                                                    {
                                                                        slug: item.id,
                                                                    }
                                                                )}
                                                                className="bg-green-500 text-white p-1 rounded-md hover:underline"
                                                            >
                                                                <FontAwesomeIcon icon="fa-solid fa-eye" />{" "}
                                                                Hasil Diagnosa
                                                            </Link>
                                                        )}
                                                        {can.delete && (
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    openModal(
                                                                        item
                                                                    )
                                                                }
                                                                className="bg-red-500 text-white p-1 rounded-md hover:underline"
                                                            >
                                                                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="py-3 px-4 text-center text-sm text-gray -500"
                                            >
                                                Tidak ada data yang ditemukan.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="mt-4 flex justify-center">
                            {diagnosa.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-3 py-2 ${
                                        link.active
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-200"
                                    } rounded-lg mx-1`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
