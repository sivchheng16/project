function Service() {
  return (
    <div className="bg-gray-100 py-15 px-3 grid grid-cols-1 gap-8 md:px-5">
      <div className="text-center md:py-5">
        <h1 className="font-bold text-2xl pb-5 md:text-5xl">Out Service</h1>
        <p className="text-gray-500 md:text-xl md:py-3">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
        {/* 1 */}
        <div className="py-15 px-10 bg-white  border border-gray-300 shadow-2xl rounded-2xl hover:-translate-y-3 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
          <span className="text-5xl pb-10 block">💻</span>
          <h1 className="text-xl font-bold pb-7">Web Development</h1>
          <p className=" text-gray-600 text-sm pb-5">
            Custom websites built with modern tochnologies like React,Vue,and
            Note.js for optimal performace and scalabilty.
          </p>

          <ul className="list-disc list-style-size-sm list-inside text-gray-500 text-sm">
            <li>Responsive Web Design</li>
            <li>Performance Optimization</li>
            <li>SCO Implementation</li>
            <li>Cross-browser Compatibility</li>
          </ul>
        </div>
        {/* 2 */}
        <div className="py-15 px-10 bg-white  border border-gray-300 shadow-2xl rounded-2xl hover:-translate-y-3 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
          <span className="text-5xl pb-10 block">🎨</span>
          <h1 className="text-xl font-bold pb-7">UX/UI Design</h1>
          <p className=" text-gray-600 text-sm pb-5">
            Butiful, user-friendly designs that convert visites tnto customers
            and provide exceptional user exerpriences.
          </p>

          <ul className="list-disc list-style-size-sm list-inside text-gray-500 text-sm">
            <li>User Reserch & Analysis</li>
            <li>Wrieframing & Prototype</li>
            <li>Visual Design Systems</li>
            <li>Usabilit Testing</li>
          </ul>
        </div>
        {/* 3 */}
        <div className="py-15 px-10 bg-white  border border-gray-300 shadow-2xl rounded-2xl hover:-translate-y-3 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
          <span className="text-5xl pb-10 block">🛒</span>
          <h1 className="text-xl font-bold pb-7">E-commerce Solutions</h1>
          <p className=" text-gray-600 text-sm pb-5">
            Complete online store with secure payment intergration, inverntory
            mangement, and comprehensive analytics.
          </p>

          <ul className="list-disc list-style-size-sm list-inside text-gray-500 text-sm">
            <li>Payment Gateway Intergration</li>
            <li>Inventory Management System</li>
            <li>Order Processing & tracking</li>
            <li>Custommer Management</li>
          </ul>
        </div>
        {/* 4 */}
        <div className="py-15 px-10 bg-white  border border-gray-300 shadow-2xl rounded-2xl hover:-translate-y-3 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
          <span className="text-5xl pb-10 block">📱</span>
          <h1 className="text-xl font-bold pb-7">Mobile Application</h1>
          <p className=" text-gray-600 text-sm pb-5">
            Nativeand hybird mobile applications for iOS and android platform
            with seamles user experiences.
          </p>

          <ul className="list-disc list-style-size-sm list-inside text-gray-500 text-sm">
            <li>iOS App Development</li>
            <li>Android Ap development</li>
            <li>Cross-platform Solutions</li>
            <li>App Store Optimizaton</li>
          </ul>
        </div>
        {/* 5 */}
        <div className="py-15 px-10 bg-white  border border-gray-300 shadow-2xl rounded-2xl hover:-translate-y-3 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
          <span className="text-5xl pb-10 block">⚡</span>
          <h1 className="text-xl font-bold pb-7">Performance Optimization</h1>
          <p className=" text-gray-600 text-sm pb-5">
            Website optimization services to improve loading speed, search
            rankings, and overall user engagement.
          </p>

          <ul className="list-disc list-style-size-sm list-inside text-gray-500 text-sm">
            <li>Speed Optimization</li>

            <li>SEO Audits & Implementation</li>
            <li>Performance Monitoring</li>
            <li>Core Wrb Vitals Optimization</li>
          </ul>
        </div>
        {/* 6 */}
        <div className="py-15 px-10 bg-white  border border-gray-300 shadow-2xl rounded-2xl hover:-translate-y-3 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
          <span className="text-5xl pb-10 block">🔧</span>
          <h1 className="text-xl font-bold pb-7">Support & Maintenance</h1>
          <p className=" text-gray-600 text-sm pb-5">
            Ongoing sypport and maintennance to keep your website secure,update,
            and running.
          </p>

          <ul className="list-disc list-style-size-sm list-inside text-gray-500 text-sm">
            <li>Regular Updates & Patches</li>
            <li>Security Monitorung</li>
            <li>Automate Backup Solutions</li>
            <li>Technicat Support</li>
          </ul>
        </div>
        {/* end card */}
      </div>
    </div>
  );
}
export default Service;
