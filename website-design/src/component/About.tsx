function About() {
  return (
    <div
      className="item-center grid grid-cols-1 gap-15 items-center text-center pb-10 md:py-20 
    "
      id="about"
    >
      <div className="container mx-auto">
        <div className="text-center px-3 md:mx-40">
          <h1 className="font-bold text-2xl p-5 md:text-5xl">
            About Web Cambodia
          </h1>
          <p className="text-gray-500 text-xl">
            We're a team of passionate developers and designers creating digital
            experiences that matter.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-10 md:text-xl">
          <div className="p-4 md:pl-0 text-left ">
            <h1 className="font-bold text-2xl pb-7">
              We Build Digital Excellence
            </h1>
            <p className="text-gray-500 pb-5">
              With over 5 year of experience in web development.we're helped
              hundreds of businesses establish their online presence and achieve
              their degitial golds.
            </p>

            <ul className="md:text-gray-500">
              <li className="flex items-center md:pb-3.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5  bg-blue-500 rounded-3xl mr-2 md:size-7 md:text-white md:mr-5 md:text-xl"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span> Custom WEb Development</span>
              </li>

              <li className="flex items-center md:pb-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5  bg-blue-500 rounded-3xl mr-2 md:size-7 md:text-white md:mr-5 md:text-xl"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Responsive Desi</span>
              </li>
              <li className="flex items-center md:pb-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5  bg-blue-500 rounded-3xl mr-2 md:size-7 md:text-white md:mr-5 md:text-xl"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>SEC Optionzation</span>
              </li>
              <li className="flex items-center md:pb-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5  bg-blue-500 rounded-3xl mr-2 md:size-7 md:text-white md:mr-5 md:text-xl"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Performance Optionzati</span>
              </li>
              <li className="flex items-center md:pb-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5  bg-blue-500 rounded-3xl mr-2 md:size-7 md:text-white md:mr-5 md:text-xl"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>24/7 Support</span> and Maintenace
              </li>
            </ul>

            {/* button md */}

            <button className="hidden md:block bg-blue-500 p-4 text-white px-6 rounded-xl hover:bg-blue-600 mt-6 font-bold hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-gray-500 hover:duration-500">
              Learn More About Us
            </button>
            {/* end button md */}
          </div>
          <div className="flex justify-center md:my-10">
            <div className="w-full bg-gradient-to-br from-indigo-500 to-violet-600 text-center items-center text-white  rounded-2xl p-[40px] grid grid-cols-1 gap-7 mx-3 md:grid-cols-2 md:p-0 md:gap-0">
              <div className="p-5 md:py-10 ">
                <h1 className="text-4xl font-bold md:text-5xl">200+</h1>
                <p className="text-sm text-gray-200 md:text-xl md:pt-6  ">
                  Projects Complete
                </p>
              </div>
              <div className="p-5 md:py-10 ">
                <h1 className="text-4xl font-bold md:text-5xl">98%</h1>
                <p className="text-sm text-gray-200 md:text-xl md:pt-6  ">
                  Client Satisfaction
                </p>
              </div>
              <div className="p-5 md:py-10 ">
                <h1 className="text-4xl font-bold md:text-5xl">5+</h1>
                <p className="text-sm text-gray-200 md:text-xl md:pt-6  ">
                  Year Experience
                </p>
              </div>
              <div className="p-5 md:py-10 ">
                <h1 className="text-4xl font-bold md:text-5xl">24/12</h1>
                <p className="text-sm text-gray-200 md:text-xl md:pt-6  ">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
