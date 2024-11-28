import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FlashMessage() {
    const { flash } = usePage().props;

    const [type, setType] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        if (flash?.success) {
            setMessage(flash.success);
            setType("success");
        } else if (flash?.error) {
            setMessage(flash.error);
            setType("error");
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
    const shouldRender = type && message;

    return (
        shouldRender && (
            <div
                className={`fixed max-w-[80%] md:max-w-[20%] top-4 md:left-[30%] z-[99999] right-4 `}
            >
                {type == "success" ? (
                    <div
                        id="alert-border-3"
                        className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
                        role="alert"
                    >
                        <FontAwesomeIcon  className="flex-shrink-0 w-4 h-4" icon="fa-solid fa-triangle-exclamation" />

                        <div className="ms-3 text-sm font-medium">{message}</div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-border-3"
                            aria-label="Close"
                        >
                            <span className="sr-only">Dismiss</span>
                            <FontAwesomeIcon  className="w-3 h-3" icon="fa-solid fa-x" />

                        </button>
                    </div>
                ) : (
                    <div
                        id="alert-border-2"
                        className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                        role="alert"
                    >
                       <FontAwesomeIcon  className="flex-shrink-0 w-4 h-4" icon="fa-solid fa-circle-exclamation" />
                        <div className="ms-3 text-sm font-medium">{message}</div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-border-2"
                            aria-label="Close"
                        >
                            <span className="sr-only">Dismiss</span>
                            <FontAwesomeIcon  className="w-3 h-3" icon="fa-solid fa-x" />

                        </button>
                    </div>
                )}
            </div>
        )
    );
}
