function Portfolio() {
  return (
    <div className="grid grid-cols-1 gap-10 bg-gray-50 pb-15 " id="portfolio">
      <div className="container mx-auto ">
        <div className="md:pt-25 text-center md:p-10">
          <h1 className="font-bold text-2xl p-5 md:text-4xl">Our Portfolio</h1>
          <p className=" text-gray-500 md:text-2xl">
            Explore some of our recent projects and success story
          </p>
        </div>
        {/* card */}
        <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <div className="mx-3 rounded-2xl shadow-2xl block hover:-translate-y-1 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
            <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-tl-2xl rounded-tr-2xl py-10 text-center">
              <span className=" text-6xl">🏛️</span>
              <p className="pt-5 text-white font-bold text-sm md:text-xl">
                Corporate Platform
              </p>
            </div>
            <div className="p-5">
              <h1 className="font-bold py-3 md:text-2xl md:font-normal">
                TechCorp Enterprise
              </h1>
              <p className="text-gray-500 text-sm ">
                Modern corporate website with advanced CMS, team management, and
                client portal functionality.
              </p>
              <div className="text-[10px] pt-3">
                <button className="rounded-4xl bg-blue-300 py-1 px-3 text-blue-800 mr-2">
                  React
                </button>
                <button className="rounded-4xl bg-green-200 py-1 px-3 text-green-800 mr-2">
                  Node.js
                </button>
                <button className="rounded-4xl bg-purple-300 py-1 px-3 text-purple-800 mr-2">
                  PostgreSQL
                </button>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div className="mx-3 rounded-2xl shadow-2xl block hover:-translate-y-1 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
            <div className="bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-tl-2xl rounded-tr-2xl py-10 text-center">
              <span className=" text-6xl">🛒</span>
              <p className="pt-5 text-white font-bold text-sm md:text-xl">
                Corporate Platform
              </p>
            </div>
            <div className="p-5">
              <h1 className="font-bold py-3 md:text-2xl md:font-normal">
                Fashion Hub Marketplace
              </h1>
              <p className="text-gray-500 text-sm ">
                Complete e-commerce platform with multi-vendor support,advanced
                filtering,and analytices dashboard.
              </p>
              <div className="text-[10px] pt-3">
                <button className="rounded-4xl bg-blue-300 py-1 px-3 text-blue-800 mr-2">
                  Vue.js
                </button>
                <button className="rounded-4xl bg-yellow-100 py-1 px-3 text-yellow-800 mr-2">
                  Shopify
                </button>
                <button className="rounded-4xl bg-indigo-200 py-1 px-3 text-indigo-800 mr-2">
                  Stripe
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="mx-3 rounded-2xl shadow-2xl block hover:-translate-y-1 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
            <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-tl-2xl rounded-tr-2xl py-10 text-center">
              <span className=" text-6xl">📱</span>
              <p className="pt-5 text-white font-bold text-sm md:text-xl">
                Corporate Platform
              </p>
            </div>
            <div className="p-5">
              <h1 className="font-bold py-3 md:text-2xl md:font-normal">
                TechCorp Enterprise
              </h1>
              <p className="text-gray-500 text-sm ">
                Modern corporate website with advanced CMS, team management, and
                client portal functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
