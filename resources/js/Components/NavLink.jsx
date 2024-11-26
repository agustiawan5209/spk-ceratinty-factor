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
                    ? "bg-white shadow-white "
                    : "text-white ") +
                className
            }>

            {children}
            </button>
        </Link>
    );
}
