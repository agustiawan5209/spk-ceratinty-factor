import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-green-700">
            <div class="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
                <div className="flex flex-col items-center justify-center">
                    <Link href="/" className="bg-white rounded-full">
                        <ApplicationLogo className="w-32 h-32 fill-current text-gray-500" />
                    </Link>
                <h1>SISTEM PAKAR DIAGNOSA PENYAKIT AYAM BROILER</h1>

                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-green-400 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
