import { Link, Head, useForm } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import HomeLayout from "@/Layouts/HomeLayout";
import CardContent from "@/Components/Web/CardContent";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import DetailPenyakit from "@/Components/Web/DetailPenyakit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function WebPenyakit({ auth, penyakit }) {
    const { data, setDate, get, errors, processing } = useForm({});

    const [search, setSearch] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault;
        setSearch(e.target.value);
        searchTarget();
    };

    const searchTarget = () => {
        get(route("guest.informasi", { search: search }), {
            preserveState: true,
            onError: (err) => console.log(err),
            onStart: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    const [isModal, setIsModal] = useState(false);
    const [dataPenyakit, setDataPenyakit] = useState([]);
    const showModal = (item) => {
        setIsModal(true);
        setDataPenyakit(item);
    };
    return (
        <HomeLayout auth={auth} title={"Informasi"}>
            <Modal show={isModal} maxWidth="5xl">
                <div className="h-screen md:h-[600px] max-h-[20%] overflow-y-auto">
                    <div className="flex relative flex-row gap-4 justify-end">
                        <span className="fixed left-3 top-4 cursor-pointer" onClick={()=> setIsModal(false)}><FontAwesomeIcon icon={faX} /></span>
                    </div>
                    <div className="bg-white overflow-hidden rounded-lg shadow-lg md:p-4 w-full ">
                        <DetailPenyakit penyakit={dataPenyakit} />
                    </div>
                </div>
            </Modal>
            {/* {isLoading && <LoadingPage  />} */}
            <section className="mt-12 container px-4">
                <div className="border-b mb-5 flex justify-between text-sm">
                    <div className="text-green-600 flex items-center pb-2 pr-2 border-b-2 border-green-600 uppercase">
                        <span className="font-semibold text-base md:text-3xl inline-block">
                            Jenis-Jenis Penyakit Pada Ayam
                        </span>
                    </div>
                    <input
                        type="search"
                        placeholder="Cari penyakit..."
                        value={search}
                        onChange={handleSearch}
                        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    />
                </div>
                {/* Content */}
                <ul
                    className={`grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 ${
                        processing && "opacity-10"
                    }`}
                >
                    {penyakit.length > 0 &&
                        penyakit.map((item, index) => (
                            <li
                                key={index}
                                className={`relative flex flex-col sm:flex-row xl:flex-col items-start`}
                            >
                                <div
                                    key={index}
                                    className="order-1 sm:ml-6 xl:ml-0"
                                >
                                    <h3 className="mb-1 text-slate-900 font-semibold">
                                        {item.nama}
                                    </h3>
                                    <div className="prose prose-slate prose-sm text-slate-600">
                                        {sanitizeText(item.keterangan)}
                                    </div>
                                    <button
                                        onClick={() => showModal(item)}
                                        className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                                        type="button"
                                    >
                                        Lihat Detail
                                    </button>
                                </div>
                                <img
                                    src={item.galeri[0].image_path}
                                    alt=""
                                    className="mb-6 shadow-md object-cover rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                                    width="1216"
                                    height="640"
                                />
                            </li>
                        ))}
                </ul>
            </section>
        </HomeLayout>
    );
}
function sanitizeText(content) {
    let txt = "";

    for (let i = 0; i < content.length; i++) {
        if (i > 100) {
            break;
        }
        txt += content[i];
    }
    txt += "...";
    return (
        <p
            className="text-gray-900 leading-2 tracking-wide"
            dangerouslySetInnerHTML={{ __html: txt }}
        />
    );
}
