function Header() {
  return (
    <div className="flex justify-between items-center  px-3 fixed w-full top-0 md:flex md:justify-around   ">
      <h1 className="font-bold size-md md:text-3xl md:pr-10 p-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        WebCambodia
      </h1>

      {/* nav md */}
      <div className="hidden  md:flex items-center text-gray-800">
        <div className="grid grid-cols-5 gap-8">
          <a className=" hover:text-blue-500 w-fit p-2 rounded-[8px] " href="#">
            Home
          </a>
          <a className=" hover:text-blue-500 w-fit p-2 rounded-[8px]" href="#">
            About
          </a>
          <a className=" hover:text-blue-500 w-fit p-2 rounded-[8px]" href="#">
            Service
          </a>
          <a className=" hover:text-blue-500 w-fit p-2 rounded-[8px]" href="#">
            Portfolio
          </a>
          <a className=" hover:text-blue-500 w-fit p-2 rounded-[8px]" href="#">
            Contact
          </a>
        </div>
      </div>
      <div>
        <button className="hidden  md:flex bg-blue-500 py-3 px-7 rounded-[7px] text-white font-bold ml-7  ">
          Get Start
        </button>
      </div>
      {/* end nav screen */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}

export default Header;
