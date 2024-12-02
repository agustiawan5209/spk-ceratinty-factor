import { useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlashMessage from "@/Components/FlashMessage";
export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [MasterMenu, setMasterMenu] = useState(false);
    const OpenMasterMenu = () => {
        if (MasterMenu) {
            setMasterMenu(false);
        } else {
            setMasterMenu(true);
        }
    };
    useEffect(() => {
        // if(route().current('Dusun.index') || route().current('Kategori.index') || route().current('Topik.index'))
        //     setMasterMenu(true)
    });
    return (
        <div className="min-h-screen bg-gray-100 flex flex-1">
            <FlashMessage />

            <section
                id="sidebar"
                className="hidden md:block fixed md:w-[18%] max-w-xs  min-h-screen bg-gray-800"
            >
                <nav className="w-full h-full md:mt-10 overflow-y-auto">
                    <div className="w-full py-4 flex justify-center">
                        <div className="w-20 h-auto text-white bg-green-600 p-2 rounded-md shadow-lg shadow-gray-500">
                            <ApplicationLogo />
                        </div>
                    </div>
                    <ul className="w-full h-max mt-10 px-2 block space-y-6 overflow-y-auto">
                        <li className="w-full h-auto">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                <FontAwesomeIcon icon="fa-solid fa-house" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="w-full h-auto">
                            <NavLink
                                href={route("Penyakit.index")}
                                active={
                                    route().current("Penyakit.index") ||
                                    route().current("Penyakit.create") ||
                                    route().current("Penyakit.edit") ||
                                    route().current("Penyakit.show")
                                }
                            >
                                <FontAwesomeIcon icon="fa-solid fa-hospital-user" />
                                <span>Data Penyakit</span>
                            </NavLink>
                        </li>
                        <li className="w-full h-auto">
                            <NavLink
                                href={route("Gejala.index")}
                                active={
                                    route().current("Gejala.index") ||
                                    route().current("Gejala.create") ||
                                    route().current("Gejala.edit")
                                }
                            >
                                <FontAwesomeIcon icon="fa-solid fa-dice-five" />
                                <span>Data Gejala</span>
                            </NavLink>
                        </li>
                        <li className="w-full h-auto">
                            <NavLink
                                href={route("Pengobatan.index")}
                                active={
                                    route().current("Pengobatan.index") ||
                                    route().current("Pengobatan.create") ||
                                    route().current("Pengobatan.edit")
                                }
                            >
                                <FontAwesomeIcon icon="fa-solid fa-hospital" />
                                <span>Data Pengobatan</span>
                            </NavLink>
                        </li>
                        <li className="w-full h-auto">
                            <NavLink
                                href={route("Aturan.index")}
                                active={
                                    route().current("Aturan.index") ||
                                    route().current("Aturan.create") ||
                                    route().current("Aturan.edit")
                                }
                            >
                                <FontAwesomeIcon icon="fa-solid fa-gears" />
                                <span>Data Aturan</span>
                            </NavLink>
                        </li>
                        <li className="w-full h-auto">
                            <NavLink
                                href={route("Test.test")}
                                active={
                                    route().current("Test.test") ||
                                    route().current("Test.result")
                                }
                            >
                                <FontAwesomeIcon icon="fa-solid fa-gear" />
                                <span>Data Uji</span>
                            </NavLink>
                        </li>
                        <li className="w-full h-auto">
                            <NavLink
                                href={route("Diagnosa.index")}
                                active={
                                    route().current("Diagnosa.index") ||
                                    route().current("Diagnosa.show")
                                }
                            >
                                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                <span>Riwayat Diagnosa</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </section>

            <main className="w-full relative md:left-[18%] md:max-w-[82%]">
                {header && (
                    <header className="bg-white shadow flex justify-around px-4">
                        <div className="max-w-sm mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </header>
                )}
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden bg-white"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                            className="w-full p-2 flex justify-start gap-6"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-house" />
                            <span>Dashboard</span>
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
                {children}
            </main>
        </div>
    );
}
