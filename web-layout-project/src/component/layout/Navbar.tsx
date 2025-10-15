import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import "../../App.css";
export default function Navbar() {
  return (
    <nav className="w-full fixed top-3 items-center m-auto">
      <div className="  bg-transparent max-w-[1080px]  m-auto ">
        <div className="container m-auto grid grid-cols-2  items-center px-5 border rounded-2xl border-cyan-600 backdrop-blur-sm ">
          <img src={logo} alt="logo" className="size-20 rounded-full" />
          <div className=" text-end text-xl grid-cols-4 grid h-15 items-center ">
            <Link
              to="/"
              className=" h-full text-center leading-15  text-[#0BF4F4]"
            >
              Home
            </Link>
            <Link to="/about" className=" h-full text-center leading-15  ">
              About Us
            </Link>
            <Link to="/feature" className=" h-full text-center leading-15 ">
              Feature
            </Link>
            <Link to="/contact" className=" h-full text-center leading-15 ">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
