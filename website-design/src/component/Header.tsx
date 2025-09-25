export default function Header() {
  return (
    <div className="grid grid-cols-2 px-3 lg:px-0 md:grid-cols-3 lg:grid-cols-3 items-center fixed w-full top-0 md:flex md:justify-around bg-white md:border-b-5 md:border-white z-100 lg:h-25 ">
      <a className="logo" href="/">
        WebCambodia
      </a>

      {/* nav md */}
      <div className="hidden  md:flex items-center text-gray-800 lg:text-xl">
        <div className="grid grid-cols-5 md:gab-5 gap-8 lg:gap-18 ">
          <a href="#hero" className="nav">
            Home
          </a>
          <a href="#about" className="nav">
            About
          </a>
          <a href="#service" className="nav">
            Service
          </a>
          <a href="#portfolio" className="nav">
            Portfolio
          </a>
          <a href="#contact" className="nav">
            Contact
          </a>
        </div>
      </div>
      <button className="blue-btn">Get Start</button>
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
