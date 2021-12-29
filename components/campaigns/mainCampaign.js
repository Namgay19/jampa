import CampaignButton from "./campaignButton";
import Image from "next/image";

const MainCampaign = (props) => {
  return (
    <div className="bg-primary lg:px-4 md:px-2 py-4 border-b-2">
    <div className="grid grid-cols-12 grid-rows-12 lg:gap-5 md:gap-2 border-b-2 bg-secondary rounded-md">
      <div className="rounded-l-md lg:col-span-4 md:col-span-5">
        <img src="/demoHealth.jpg" alt="campaign image" className="rounded-l-md object-fill w-full lg:h-full md:h-full"/>
      </div>
      <div className="lg:col-span-8 md:col-span-7 py-2">
        <h3 className="lg:text-xl md:text-lg underline font-semibold lg:mx-2 md:mx-1 -mt-1">
          Pema's Surgery
        </h3>
        <p className="lg:mt-1 md:mt-0 opacity-80 lg:mx-2 md:mx-1 lg:text-base md:text-sm">
          Pema needs funding to go to Bangkok for surgery. She has been
          diagnosed with cancer.
        </p>
        <div className="flex justify-start gap-2 lg:mx-2 md:mx-1 lg:mt-3 md:mt-2 opacity-80 lg:text-base md:text-sm">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
            ></path>
          </svg>
          3 days remaining
        </div>
        <hr className="lg:mb-4 md:mb-3 bg-black" />

        <div className="bg-primary lg:py-2 md:py-0 flex justify-evenly rounded-lg w-11/12 lg:mx-2 md:mx-1 lg:mb-4 md:mb-3 lg:text-base md:text-sm">
          <div className="leading-8">
            <p>Amount needed</p>
            <p className="text-center">
              <span className="opacity-80">Nu.</span>{" "}
              <span className="font-semibold">100,000</span>
            </p>
          </div>
          <div className="leading-8">
            <p>Amount raised</p>
            <p className="text-center">
              <span className="opacity-80">Nu.</span>{" "}
              <span className="font-semibold">100,000</span>
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <CampaignButton message="Go to Campaign"></CampaignButton>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainCampaign;
