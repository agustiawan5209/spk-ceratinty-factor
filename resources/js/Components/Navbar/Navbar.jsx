import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSignInAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-green-600 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand */}
          <Link className="text-2xl font-bold text-white" href={route('home')}>
            Sistem Pakar
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          {/* Navbar Links */}
          <div className={`lg:flex lg:items-center lg:space-x-6 ${navbarOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row list-none lg:space-x-6 mt-4 lg:mt-0">
              <li className="nav-item">
                <Link
                  className="flex border-b items-center text-white p-2 text-lg font-medium hover:bg-white hover:text-gray-800  transition duration-300"
                  href={route('Uji.index')}
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Mulai Diagnosa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex border-b items-center text-white p-2 text-lg font-medium hover:bg-white hover:text-gray-800  transition duration-300"
                  href={route('guest.informasi')}
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Informasi Penyakit
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center bg-white p-2 rounded-md  "
                  href={route('login')}
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  Masuk
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="flex items-center text-white p-2 text-lg font-medium hover:text-gray-200 transition duration-300"
                  href={route('register')}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                  Register
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* Placeholder to push content below fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
}
