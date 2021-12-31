import CampaignButton from "./campaignButton";

const CampaignCard = () => {
  return (
    <div className="shadow overflow-hidden mx-2 md:mx-0 rounded-lg pb-2 bg-white">
      <img src="/demoHealth.jpg" alt="campaign image" className="rounded-none md:rounded-t-md" />
      <h3 className="text-lg mt-2 lg:text-xl md:text-lg lg:mt-4 md:mt-3 underline font-semibold mx-2">
        Pema's Surgery
      </h3>
      <p className="text-sm lg:mt-2 md:mt-0 lg:text-base md:text-sm opacity-80 mx-2">
        Pema needs funding to go to Bangkok for surgery. She has been diagnosed
        with cancer.
      </p>
      <div className="flex justify-start gap-2 mx-2 mt-2 text-sm lg:mt-4 md:mt-3 lg:text-base md:text-sm opacity-50">
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
        3 days till campaign ends
      </div>

      <hr className="mb-2 lg:mb-6 md:mb-3" />

      <div className="bg-primary p-2 flex justify-evenly rounded-lg w-11/12 my-2 lg:my-4 md:my-2 mx-2">
        <div className="leading-6 md:leading-8">
          <p className="text-sm">Amount needed</p>
          <p className="text-center">
            <span className="opacity-80">Nu.</span>
            <span className="font-semibold">100,000</span>
          </p>
        </div>
        <div className="leading-6 md:leading-8">
          <p className="text-sm">Amount raised</p>
          <p className="text-center">
            <span className="opacity-80">Nu.</span>
            <span className="font-semibold">100,000</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <CampaignButton message="Go to Campaign" id="1"></CampaignButton>
      </div>
    </div>
  );
};

export default CampaignCard;
