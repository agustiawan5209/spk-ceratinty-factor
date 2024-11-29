import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}

        >
            <button type="button"  className={
                "w-full max-w-full p-2 flex gap-3 justify-start items-center shadow-sm  " +
                (active
                    ? "bg-blue-800 shadow-blue-100 text-white"
                    : "text-white shadow-blue-700 ") +
                className
            }>

            {children}
            </button>
        </Link>
    );
}
