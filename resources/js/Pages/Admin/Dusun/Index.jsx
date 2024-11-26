import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";
import FormDusun from "./Form";
import PrimaryButton from "@/Components/PrimaryButton";

export default function DaftarDusun({ auth, dusun, can }) {
    // Mengambil data user dan data dusun dari props
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

    // Membuat form untuk menghapus dan mencari data dusun
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

    // Fungsi untuk mencari data dusun
    const searchDusun = (search) => {
        get(route("Dusun.index", { search: search }), {
            // Mengatur agar state halaman tetap dipertahankan saat melakukan pencarian
            preserveState: true,
        });
    };

    // Fungsi untuk menangani perubahan input pencarian
    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchDusun(e.target.value); // Mencari data dusun berdasarkan query pencarian
    };

    // Menyaring data dusun berdasarkan input pencarian
    const filteredDusun = dusun.data;

    // Fungsi untuk membersihkan teks HTML dari tag HTML
    function sanitizeText(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        return doc.body.textContent || "";
    }

    // State untuk mengatur modal konfirmasi penghapusan
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // State untuk menyimpan data dusun yang akan dihapus
    const [itemData, setItemData] = useState(null);

    // Fungsi untuk membuka modal konfirmasi penghapusan
    const openModal = (item) => {
        setIsDeleteModalOpen(true);
        setItemData(item); // Mengatur slug dusun yang akan dihapus
    };

    // Fungsi untuk menutup modal konfirmasi penghapusan
    const closeModal = () => {
        setIsDeleteModalOpen(false);
        setItemData(null); // Mengatur ulang state slug dusun
    };

    // Fungsi untuk menghapus data dusun
    const deleteData = (id) => {
        destroy(route("Dusun.destroy", { slug: id }), {
            // Mengatur agar modal konfirmasi penghapusan ditutup saat penghapusan berhasil
            onSuccess: () => {
                closeModal();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    // State untuk mengatur modal tambah data
    const [isAddModal, setAddModalOpen] = useState(false);
    // State untuk menyimpan data dusun yang akan ditambah atau diedit
    const [selectedDusun, setSelectedDusun] = useState(null);

    // Fungsi untuk membuka modal tambah data
    const openModalAdd = () => {
        setSelectedDusun(null);
        setAddModalOpen(true);
    };

    // Fungsi untuk membuka modal edit data
    const openModalForEdit = (dusun) => {
        setSelectedDusun(dusun); // Mengatur data dusun yang akan diedit
        setAddModalOpen(true);
    };

    // Fungsi untuk menutup modal tambah data
    const closeAddModal = () => {
        setSelectedDusun(null);
        setAddModalOpen(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Nama Dusun
                </h2>
            }
        >
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
                                    dengan ID: {itemData ? itemData.nama : ""}?
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

            <Modal show={isAddModal} onClose={() => setAddModalOpen(false)}>
                {/* Modal tambah data */}
                <div className="p-2 block">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            {selectedDusun == null
                                ? "Tambah Data"
                                : "Edit Data"}
                        </h3>
                        <button
                            type="button"
                            onClick={closeAddModal}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="updateProductModal"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <FormDusun
                        auth={auth}
                        dusun={selectedDusun}
                        setModalOpen={setAddModalOpen}
                    />
                </div>
            </Modal>
            <Head title="DaftarDusun" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md sm:rounded-lg p-6">
                        {/* Search and Add Button */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                            <input
                                type="search"
                                placeholder="Cari dusun..."
                                value={search}
                                onChange={handleSearch}
                                className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                            {can.add && <PrimaryButton
                                type="button"
                                onClick={openModalAdd}
                                className="mt-2 sm:mt-0 p-2 bg-blue-500 text-white rounded-lg hover:bg-primary transition duration-200"
                            >
                                Tambah Data
                            </PrimaryButton>}
                        </div>

                        {/* Table of Dusun */}
                        <div className="mt-6 overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                            No.
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                            Nama Dusun
                                        </th>
                                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                            Keterangan Dusun
                                        </th>
                                        {aksi && (
                                            <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                                Aksi
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody
                                    className={processing ? "opacity-50" : ""}
                                >
                                    {filteredDusun.length > 0 ? (
                                        filteredDusun.map((item, index) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-gray-50 transition duration-200"
                                            >
                                                <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                                                    {(dusun.current_page - 1) * dusun.per_page + index + 1 }
                                                </td>
                                                <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                                                    {item.nama}
                                                </td>
                                                <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                                                    {sanitizeText(
                                                        item.keterangan
                                                    )}
                                                </td>
                                                <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                                                    <div className="flex space-x-2">
                                                        {can.show && (
                                                            <Link
                                                                href={`/dusun/${item.id}`}
                                                                className="text-blue-500 hover:underline"
                                                            >
                                                                Detail
                                                            </Link>
                                                        )}
                                                        {can.edit && (
                                                            <button
                                                                onClick={() =>
                                                                    openModalForEdit(
                                                                        item
                                                                    )
                                                                }
                                                                className="bg-green-500 text-white p-1 rounded-md hover:underline"
                                                            >
                                                                <span>
                                                                    Edit
                                                                </span>{" "}
                                                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                                            </button>
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
                                                                <span>
                                                                    Hapus
                                                                </span>{" "}
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
                                                colSpan="3"
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
                            {dusun.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-3 py-2 ${
                                        link.active
                                            ? "bg-blue-500 text-white"
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
