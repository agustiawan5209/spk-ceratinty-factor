import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Card from "@/Components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
export default function Dashboard({ auth, penyakit, gejala, aturan }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-3 gap-5">
                            <Card
                                title="Jumlah Penyakit"
                                value={penyakit}
                                icon={<FontAwesomeIcon icon="fas fa-hospital-user" />} // Contoh ikon (ganti sesuai kebutuhan)
                                className="w-64" // Width card
                                footerClassName="bg-red-100 text-red-500" // Footer background dan text color
                            />

                            <Card
                                title="Jumlah Gejala"
                                value={gejala}
                                icon={
                                    <FontAwesomeIcon icon="fas fa-dice-five" />
                                }
                                className="w-64"
                                footerClassName="bg-blue-100 text-blue-500"
                            />

                            <Card
                                title="Jumlah Aturan Diagnosa"
                                value={aturan}
                                icon={
                                    <FontAwesomeIcon icon="fas fa-gears" />
                                }
                                className="w-64"
                                footerClassName="bg-purple-100 text-purple-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function Section(content, className) {
    const [txt, setTxt] = useState("");
    useEffect(() => {
        if (typeof content === "string") {
            let result = "";

            for (let i = 0; i < content.length; i++) {
                const element = content[i];

                if (i === 150) {
                    break;
                }
                result += element;
            }
            setTxt(result + ".........");
        } else {
            setTxt("...............");
        }
    }, [content]);
    return (
        <p className={className} dangerouslySetInnerHTML={{ __html: txt }} />
    );
}
