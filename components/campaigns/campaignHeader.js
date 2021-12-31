const CampaignHeader = () => {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between bg-gray-300 pt-1 pb-1 lg:pt-4 lg:pb-2 md:py-2 px-2 md:px-2">
      <div className="flex justify-start gap-5 md:gap-10 opacity-80 w-full md:w-1/2 mt-2 mb-1 md:mt-0 md:mb-0 ">
        <button className="font-semibold hover:bg-gray-200 w-full md:w-3/12 rounded-lg px-2 bg-white py-1 md:py-0 shadow-md">
          Active
        </button>
        <button className="font-semibold hover:bg-gray-200 w-full md:w-4/12 rounded-lg px-2 py-1 md:py-0 shadow-md">Completed</button>
      </div>
      <div className="p-1 w-full md:w-1/3 rounded-lg border-2 border-gray-600 flex gap-2">
        <svg
          width="22"
          height="22"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6" clipPath="url(#clip0_19_751)">
            <path
              d="M42.4121 37.1799L34.0389 28.8066C33.6609 28.4287 33.1486 28.2188 32.6111 28.2188H31.2422C33.5602 25.2541 34.9375 21.5252 34.9375 17.4688C34.9375 7.81895 27.1186 0 17.4688 0C7.81895 0 0 7.81895 0 17.4688C0 27.1186 7.81895 34.9375 17.4688 34.9375C21.5252 34.9375 25.2541 33.5602 28.2188 31.2422V32.6111C28.2188 33.1486 28.4287 33.6609 28.8066 34.0389L37.1799 42.4121C37.9693 43.2016 39.2459 43.2016 40.027 42.4121L42.4037 40.0354C43.1932 39.2459 43.1932 37.9693 42.4121 37.1799ZM17.4688 28.2188C11.5311 28.2188 6.71875 23.4148 6.71875 17.4688C6.71875 11.5311 11.5227 6.71875 17.4688 6.71875C23.4064 6.71875 28.2188 11.5227 28.2188 17.4688C28.2188 23.4064 23.4148 28.2188 17.4688 28.2188Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_751">
              <rect width="43" height="43" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <input
          placeholder="Search for campaigns"
          className="outline-none truncate"
          type="text"
          className="bg-gray-300 w-full outline-none"
        />
      </div>
    </div>
  );
};

export default CampaignHeader;
