export default function Header() {
  return (
    <div className="grid grid-cols-2 px-3 lg:px-0 md:grid-cols-3 lg:grid-cols-3 items-center fixed w-full top-0 md:flex md:justify-around bg-white md:border-b-5 md:border-white z-100 lg:h-25 ">
      <a
        className="font-bold text-xl md:text-3xl md:pr-5 pl-0 p-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer lg:text-4xl"
        href="/"
      >
        WebCambodia
      </a>

      {/* nav md */}
      <div className="hidden  md:flex items-center text-gray-800 lg:text-xl">
        <div className="grid grid-cols-5 md:gab-5 gap-8 lg:gap-18 ">
          <a
            href="#hero"
            className="hover:text-blue-500 w-fit p-1 rounded-[8px]"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-500 w-fit p-1 rounded-[8px]"
          >
            About
          </a>
          <a
            href="#service"
            className="hover:text-blue-500 w-fit p-1 rounded-[8px]"
          >
            Service
          </a>
          <a
            href="#portfolio"
            className="hover:text-blue-500 w-fit p-1 rounded-[8px]"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 w-fit p-1 rounded-[8px]"
          >
            Contact
          </a>
        </div>
      </div>
      <button className="hidden  md:flex bg-blue-500 py-2 px-6 rounded-[7px] text-white hover:bg-blue-600 font-nomal ml-7 cursor-pointer lg:text-xl lg:px-15 lg:py-6">
        Get Start
      </button>
      {/* end nav screen */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 md:hidden right-3 absolute"
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
