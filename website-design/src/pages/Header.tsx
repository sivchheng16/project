import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <div className="w-full fixed bg-white z-100  ">
      <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-3 items-center text-center md:flex md:justify-around lg:h-25 container mx-auto ">
        <Link className="logo" to="/">
          WebCambodia
        </Link>

        {/* nav md */}
        <div className="hidden  md:flex items-center text-gray-800 lg:text-xl">
          <div className="grid grid-cols-5 md:gab-5 gap-8 lg:gap-18 ">
            <Link to="/" className="nav">
              Home
            </Link>
            <Link to="/about" className="nav">
              About
            </Link>
            <Link to="/service" className="nav">
              Service
            </Link>
            <Link to="/portfolio" className="nav">
              Portfolio
            </Link>
            <Link to="/contact" className="nav">
              Contact
            </Link>
          </div>
        </div>
        <button className="blue-btn">Get Start</button>
        {/* end nav screen */}
        {/* MOBILE MENU */}

        <button
          className="md:hidden size-6 right-3 absolute "
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X size={26} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 relative float-end"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/*  MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="absolute  top-16 right-0 w-40 bg-white flex flex-col items-center space-y-4 py-4 md:hidden">
            <Link to="/" onClick={closeMenu} className="nav">
              Home
            </Link>
            <Link to="/about" onClick={closeMenu} className="nav">
              About
            </Link>
            <Link to="/service" onClick={closeMenu} className="nav">
              Service
            </Link>
            <Link to="/portfolio" onClick={closeMenu} className="nav">
              Portfolio
            </Link>
            <Link to="/contact" onClick={closeMenu} className="nav">
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
