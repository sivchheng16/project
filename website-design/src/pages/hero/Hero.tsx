// import Button from "../../component/Button";
import Card from "./Card";
let decriptionHero =
  " We create stunning, hight-performace websites and applications that drive results. Transform your digital presence with our expert design and development services.";

function Hero() {
  return (
    <div
      className="bg-gradient-to-r pt-2
     from-indigo-500 to-violet-700 text-white text-center items-center px-3 lg:pt-30 md:block md:py-32 py-10 lg:py-10  lg:h-full "
      id="hero"
    >
      <div className="container mx-auto ">
        <div className=" md:mx-10">
          <div className="font-bold text-3xl mb-3 md:text-6xl md:pb-10 lg:text-7xl lg:tracking lg:mt-13">
            <h1 className="">Build Amazing</h1>
            <h1 className="text-amber-300">Digitial Experience</h1>
          </div>
          <p className="md:text-2xl lg:text-2xl ">{decriptionHero}</p>
        </div>
        <div className="mt-8 px-4 md:p-10 md:mt-0 md:flex md:justify-center lg:text-xl">
          {/* <Button text={"View Our Work"} /> */}
          <button className="btn1">View Our Work</button>
          <button className="btn2">Get Free Quote</button>
        </div>

        {/* card */}
        <div className="animate-my-bounce">
          <div className="cards">
            <Card
              emoji="🚀"
              title="Lightning Fast"
              text="Optimized for speed and performance"
            />
            <Card
              emoji="☎️"
              title="Mobile First"
              text="Perfect on every device and screen size"
            />
            <Card
              emoji="⚡"
              title=" Performance"
              text="Optimized for speed and performance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
