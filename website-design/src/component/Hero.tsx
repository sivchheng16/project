function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-violet-700 text-white text-center items-center px-3 mt-[64px] md:mt-[82px] md:block">
      <div className="pt-20">
        <div className="font-bold text-3xl mb-3 md:text-5xl ">
          <h1 className="">Build Amazing</h1>
          <h1 className="text-amber-300">Degitial Experience</h1>
        </div>
        <p>
          We create stunning, hight-performace websites and applications that
          drive results. Transform your digital presence with our expert design
          and development services.
        </p>
      </div>
      <div className="mt-8 px-4">
        <button className="bg-white py-4 px-6 text-blue-600 font-bold rounded-2xl cursor-pointer mb-5">
          View Our Work
        </button>
        <button className="bg-transparent py-4 px-6 text-white-600 font-bold rounded-2xl cursor-pointer border-2 mb-5">
          Get Free Quote
        </button>
      </div>
      <div className="grid gap-5 grid-cols">
        <div className=" p-5 items-center border border-gray-400 rounded-2xl bg-gray-500/10 shadow-2xl">
          <div className="text-4xl pb-6 pt-3 ">🚀</div>
          <div>
            <h3 className="font-bold pb-3">Lightning Fast</h3>
            <p className="text-sm text-gray-300">
              Optimized for speed and performance
            </p>
          </div>
        </div>
        <div className=" p-5 items-center border border-gray-400 rounded-2xl bg-blur-2xl  bg-gray-500/10 shadow-2xl">
          <div className="text-4xl pb-6 pt-3 ">☎️</div>
          <div>
            <h3 className="font-bold pb-3">Mobile First</h3>
            <p className="text-sm text-gray-300">
              Perfect on every device and screen size
            </p>
          </div>
        </div>
        <div className=" p-5 items-center border border-gray-400 rounded-2xl bg-blur-2xl  bg-gray-500/10 shadow-2xl">
          <div className="text-4xl pb-6 pt-3 ">⚡</div>
          <div>
            <h3 className="font-bold pb-3">Lightning Fast</h3>
            <p className="text-sm text-gray-300">
              Optimized for speed and performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
