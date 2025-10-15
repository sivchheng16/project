import logo from "../../public/logo.png";
import css from "../../public/css.webp";
import html from "../../public/html.webp";
import javascript from "../../public/JavaScript.webp";
import node from "../../public/node.webp";
import tailwindcss from "../../public/tailwindcss.webp";
import terminal from "../../public/terminal.webp";
import react from "../../public/react.webp";

export default function Home() {
  return (
    <section className="max-w-[1080px] items-center justify-center m-auto container">
      <div className=" ">
        <div className="h-[600px] w-full flex ">
          <div className="container m-auto text-start  ">
            <h1 className="text-8xl">The New Web</h1>
            <h2 className="text-7xl">Development</h2>
            <p className="text-2xl tracking-wider">
              Learn From KOOMPI <br />
              Small World.
            </p>
          </div>
        </div>

        <div className="height-spacing h-[400px] container m-auto  grid grid-cols-2 items-center justify-center  ">
          <div className="h-full relative">
            <img
              src={logo}
              alt="img1"
              className="h-full rounded-2xl left-6 absolute"
            />
          </div>
          <div className=" right-0 flex-2  h-full">
            <h1 className="text-5xl pb-2">ABOUT MY SELFE</h1>
            <p className="text-xl tracking-wider">
              Since I was in Height School I don't feel like programming. But
              after i when to Phnom Penh I think and also have information from
              my cousin that he's work in a office private as a development{" "}
            </p>
            <button className=" ">Read More...</button>
          </div>
        </div>
      </div>

      <div className="height-spacing bg-cyan-500">
        <div className="container m-auto  items-center justify-center text-center">
          <h2 className="text-4xl pb-12">
            The Web Develop Support <br /> My Study
          </h2>
          <div className="relative">
            <div className="gap-25 items-center justify-center    flex ">
              <img className="size-15" src={html} alt="html" />
              <img className="size-15" src={css} alt="css" />
              <img className="size-15" src={javascript} alt="javascript" />
              <img className="size-15" src={tailwindcss} alt="tailwindcss" />
              <img className="size-15" src={react} alt="react" />
              <img className="size-15" src={terminal} alt="terminal" />
            </div>
            <div className="flex m-auto items-center justify-center">
              <img className="size-25 " src={node} alt="node" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
