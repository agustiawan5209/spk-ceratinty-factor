import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function FlashMessage() {
    const { flash } = usePage().props;

    const [type, setType] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        if (flash?.success) {
            setMessage(flash.success);
            setType('success');
        } else if (flash?.error) {
            setMessage(flash.error);
            setType('error');
        } else {
            // Jika tidak ada flash message, reset state
            setMessage(null);
            setType(null);
        }

        const timer = setTimeout(() => {
            setMessage(null);
            setType(null);
        }, 3000); // Menghilang setelah 3 detik
        return () => clearTimeout(timer);
    }, [flash]);

    // Hanya render jika ada pesan yang valid
    const shouldRender = (type && message);

    return (
        shouldRender && (
            <div
                className={`fixed max-w-[20%] top-4 left-[30%] right-4 px-4 py-2 rounded shadow-lg text-white ${
                    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-gray-500"
                }`}
            >
                {message}
            </div>
        )
    );
}
