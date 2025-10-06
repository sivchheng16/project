import Navbar from "../../component/Navbar";

export default function Home() {
  return (
    <div className="w-full px-200 bg-red-800">
      <div className=" cotainer">
        <div className="grid items-center height-spacing ">
          <img
            className="size-25 rounded-full"
            src="../public/logo.png"
            alt="logo"
          />

          <Navbar />
        </div>
        <div className="grid">
          <h1>The New Web</h1>
        </div>
      </div>
    </div>
  );
}
