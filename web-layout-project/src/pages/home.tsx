import logo from "../../public/logo.png";

export default function Home() {
  return (
    <nav>
      <div className="h-[600px] w-full flex bg-red-50">
        <div className="container m-auto  ">
          <h1 className="text-7xl">The New Web</h1>
          <h2 className="text-6xl">Development</h2>
          <p className="text-2xl tracking-wider">
            Learn From KOOMPI <br />
            Small World.
          </p>
        </div>
      </div>

      <div className="height-spacing h-[400px] container m-auto  grid grid-cols-2 items-center justify-center  ">
        <div className="h-full relative">
          <img src={logo} alt="img1" className="h-full rounded-2xl left-6 absolute" />
        </div>
        <div className=" right-0 flex-2  h-full">
          <h1 className="text-5xl">ABOUT MY SELFE</h1>
          <p className="text-xl tracking-wider">
            Since I was in Height School I don't feel like programming. But
            after i when to Phnom Penh I think and also have information from my
            cousin that he's work in a office private as a development{" "}
          </p>
          <button className=" ">Read More...</button>
        </div>
      </div>
    </nav>
  );
}
