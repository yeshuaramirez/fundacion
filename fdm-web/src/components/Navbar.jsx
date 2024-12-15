import { useState } from "react";
import logo from "../../src/assets/FDM-logo.svg";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b md:shadow-lg">
      <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 px-4 flex items-center">
        <div className="flex items-center justify-center space-x-2">
          <img
            src={logo}
            alt="Logo de Fundación de la Divina Misericordia"
            className="w-20 h-20"
          />
        </div>

        {/* Menu items */}
        <ul
          className={`md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block bg-white`}
        >
          <li>
            <a
              href="#about"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
              onClick={handleMenuItemClick}
            >
              <span>Nosotros</span>
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
            >
              <span>Proyectos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 fill-current pt-1 transform transition duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </a>
            <ul
              className={`child transition duration-300 ${
                isDropdownOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
              } md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b`}
            >
              <li>
                <a
                  href="#cara-a-cara"
                  className="flex px-4 py-3 hover:bg-gray-50"
                  onClick={handleMenuItemClick}
                >
                  Cara a Cara
                </a>
              </li>
              <li>
                <a
                  href="#escuela-deportiva-villa-real"
                  className="flex px-4 py-3 hover:bg-gray-50"
                  onClick={handleMenuItemClick}
                >
                  Escuela Deportiva Villa Real
                </a>
              </li>
              <li>
                <a
                  href="#en-tus-manos"
                  className="flex px-4 py-3 hover:bg-gray-50"
                  onClick={handleMenuItemClick}
                >
                  En Tus Manos
                </a>
              </li>
              <li>
                <a
                  href="#zona-verde"
                  className="flex px-4 py-3 hover:bg-gray-50"
                  onClick={handleMenuItemClick}
                >
                  Zona Verde
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#donations"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
              onClick={handleMenuItemClick}
            >
              <span>Donaciones</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
              onClick={handleMenuItemClick}
            >
              <span>Contacto</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="ml-auto md:hidden text-gray-500 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M0 4h24v2H0zm0 5h24v2H0zm0 5h24v2H0z" />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
