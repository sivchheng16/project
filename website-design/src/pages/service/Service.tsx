import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <div
      className="bg-gray-100 py-15 px-3 grid grid-cols-1  md:px-5 "
      id="service"
    >
      <div className="container mx-auto ">
        <div className="text-center md:py-5 pb-7 lg:my-10">
          <h1 className="font-bold text-2xl pb-5 md:text-5xl">Out Service</h1>
          <p className="text-gray-500 md:text-xl md:py-3">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {/* 1 */}
          <div className="service-card">
            <ServiceCard
              icon="💻"
              title=" Web Cambodia"
              dectiption="Custom websites built with modern tochnologies like
                React,Vue,and Note.js for optimal performace and scalabilty."
            />
            <ul className="card-list">
              <li>Responsive Web Design</li>
              <li>Performance Optimization</li>
              <li>SCO Implementation</li>
              <li>Cross-browser Compatibility</li>
            </ul>
          </div>
          {/* <div className="py-15 px-15 bg-white border border-gray-300 shadow-2xl rounded-2xl hover:-translate-y-3 hover:duration-400 hover:shadow-2xl hover:shadow-gray-500">
            <div className="">
              <span className="service-icon">
                💻
              </span>
              <h1 className="text-xl font-bold py-7 lg:text-3xl">
                Web Development
              </h1>
              <p className=" text-gray-600 text-sm lg:text-xl ">
                Custom websites built with modern tochnologies like
                React,Vue,and Note.js for optimal performace and scalabilty.
              </p>

              <ul className="list-disc list-style-size-sm list-inside text-gray-500 text-sm lg:text-xl py-10">
                <li>Responsive Web Design</li>
                <li>Performance Optimization</li>
                <li>SCO Implementation</li>
                <li>Cross-browser Compatibility</li>
              </ul>
            </div>
          </div> */}
          {/* 2 */}
          <div className="service-card">
            <ServiceCard
              icon="🎨"
              title="UX/UI Design"
              dectiption=" Butiful, user-friendly designs that convert visites tnto customers
              and provide exceptional user exerpriences."
            />
            <ul className="card-list">
              <li>User Reserch & Analysis</li>
              <li>Wrieframing & Prototype</li>
              <li>Visual Design Systems</li>
              <li>Usabilit Testing</li>
            </ul>
          </div>

          {/* 3 */}

          <div className="service-card">
            <ServiceCard
              icon="🛒"
              title="E-commerce Solutions"
              dectiption="Complete online store with secure payment intergration, inverntory
              mangement, and comprehensive analytics."
            />
            <ul className="card-list">
              <li>Payment Gateway Intergration</li>
              <li>Inventory Management System</li>
              <li>Order Processing & tracking</li>
              <li>Custommer Management</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="service-card">
            <ServiceCard
              icon="📱"
              title="Mobile Application"
              dectiption="Nativeand hybird mobile applications for iOS and android platform
              with seamles user experiences."
            />
            <ul className="card-list">
              <li>iOS App Development</li>
              <li>Android Ap development</li>
              <li>Cross-platform Solutions</li>
              <li>App Store Optimizaton</li>
            </ul>
          </div>

          {/* 5 */}

          <div className="service-card">
            <ServiceCard
              icon="⚡"
              title=" Performance Optimization"
              dectiption="Website optimization services to improve loading speed, search
              rankings, and overall user engagement."
            />
            <ul className="card-list">
              <li>Speed Optimization</li>
              <li>SEO Audits & Implementation</li>
              <li>Performance Monitoring</li>
              <li>Core Wrb Vitals Optimization</li>
            </ul>
          </div>

          {/* 6 */}

          <div className="service-card">
            <ServiceCard
              icon="🔧"
              title="  Support & Maintenance"
              dectiption="Ongoing sypport and maintennance to keep your website
              secure,update, and running."
            />
            <ul className="card-list">
              <li>Regular Updates & Patches</li>
              <li>Security Monitorung</li>
              <li>Automate Backup Solutions</li>
              <li>Technicat Support</li>
            </ul>
          </div>

          {/* end card */}
        </div>
      </div>
    </div>
  );
}
export default Service;
