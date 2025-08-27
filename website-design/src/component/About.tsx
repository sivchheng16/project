function About() {
  return (
    <div className="item-center grid grid-cols-1 gap-15 items-center text-center pb-10">
      <div className="text-center px-3">
        <h1 className="font-bold text-2xl p-5 ">About Web Cambodia</h1>
        <p className="text-gray-500">
          We're a team of passionate developers and designers creating digital
          experiences that matter.
        </p>
      </div>

      <div className="p-4 text-left">
        <h1 className="font-bold text-2xl pb-7">We Build Digital Excellence</h1>
        <p className="text-gray-500 pb-5">
          With over 5 year of experience in web development.we're helped
          hundreds of businesses establish their online presence and achieve
          their degitial golds.
        </p>

        <ul>
          <li className="flex items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 bg-blue-500 rounded-3xl mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <span> Custom WEb Development</span>
          </li>

          <li className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 bg-blue-500 rounded-3xl mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>Responsive Desi</span>
          </li>
          <li className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 bg-blue-500 rounded-3xl mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>SEC Optionzation</span>
          </li>
          <li className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 bg-blue-500 rounded-3xl mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>Performance Optionzati</span>
          </li>
          <li className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 bg-blue-500 rounded-3xl mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>24/12 Support</span> and Maintenace
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="w-full bg-gradient-to-br from-indigo-500 to-violet-600 text-center items-center text-white  rounded-2xl p-[40px] grid grid-cols-1 gap-7 mx-3">
          <div className="p-5">
            <h1 className="text-4xl font-bold">200+</h1>
            <p className="text-sm text-gray-200">Project Complet</p>
          </div>
          <div className="p-5">
            <h1 className="text-4xl font-bold">98%</h1>
            <p className="text-sm text-gray-200">Client Satisfaction</p>
          </div>
          <div className="p-5">
            <h1 className="text-4xl font-bold">5+</h1>
            <p className="text-sm text-gray-200">Year Experience</p>
          </div>
          <div className="p-5">
            <h1 className="text-4xl font-bold">24/12</h1>
            <p className="text-sm text-gray-200">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
