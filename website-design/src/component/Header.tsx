function Header() {
  return (
    <div className="flex justify-between items-center py-5 px-3 bg-amber-50 fixed w-full top-0 ">
      <h1 className="font-bold size-md">WebCambodia</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
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
