import "../App.css";

function Hero() {
  return (
    <div
      className="bg-gradient-to-r pt-2
     from-indigo-500 to-violet-700 text-white text-center items-center px-3 mt-[64px] md:mt-[82px] md:block md:py-32 py-10 lg:py-10 lg:mt-[95px] lg:h-full"
      id="hero"
    >
      <div className="container mx-auto ">
        <div className=" md:mx-10">
          <div className="font-bold text-3xl mb-3 md:text-6xl md:pb-10 lg:text-7xl lg:tracking">
            <h1 className="">Build Amazing</h1>
            <h1 className="text-amber-300">Digitial Experience</h1>
          </div>
          <p className="md:text-2xl lg:text-2xl ">
            We create stunning, hight-performace websites and applications that
            drive results. Transform your digital presence with our expert
            design and development services.
          </p>
        </div>
        <div className="mt-8 px-4 md:p-10 md:mt-0 md:flex md:justify-center lg:text-xl">
          <button className="btn1">View Our Work</button>
          <button className="btn2">Get Free Quote</button>
        </div>
        <div className="animate-my-bounce">
          <div className="cards">
            <div className="hero-card">
              <div className="lg:p-10 ">
                <div className="text-4xl md:text-5xl pb-6 pt-3 ">🚀</div>
                <div>
                  <h3 className="font-bold pb-3 md:text-xl">Lightning Fast</h3>
                  <p className="text-sm text-gray-300 md:text-[15px]">
                    Optimized for speed and performance
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <div className="lg:p-10">
                <div className="text-4xl md:text-5xl pb-6 pt-3 ">☎️</div>
                <div>
                  <h3 className="font-bold pb-3 md:text-xl">Mobile First</h3>
                  <p className="text-sm text-gray-300 md:text-[15px]">
                    Perfect on every device and screen size
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <div className="lg:p-10">
                <div className="text-4xl md:text-5xl pb-6 pt-3 ">⚡</div>
                <div>
                  <h3 className="font-bold pb-3 md:text-xl">Lightning Fast</h3>
                  <p className="text-sm text-gray-300 md:text-[15px]">
                    Optimized for speed and performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
