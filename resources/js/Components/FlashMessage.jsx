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
                className={`fixed max-w-[80%] md:max-w-[30%] top-4 md:left-[30%] z-[99999] right-4 `}
            >
                {type == "success" ? (
                    <div
                        id="alert-border-3"
                        className="flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50  "
                        role="alert"
                    >
                        <FontAwesomeIcon  className="flex-shrink-0 w-4 h-4" icon="fa-solid fa-triangle-exclamation" />

                        <div className="ms-3 text-base font-medium">{message}</div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 "
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
                        className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50"
                        role="alert"
                    >
                       <FontAwesomeIcon  className="flex-shrink-0 w-4 h-4" icon="fa-solid fa-circle-exclamation" />
                        <div className="ms-3 text-sm font-medium">{message}</div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 "
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
