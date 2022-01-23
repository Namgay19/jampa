import CampaignButton from "./campaignButton";

const MainCampaign = (props) => {
  const difference = Math.abs(new Date(props.campaign.end_date) - Date.now())
  const remainingDays = Math.floor(difference/(1000 * 3600 * 24))

  let image = "/default.jpg"
  if (Object.keys(props.campaign).length !== 0) {
    image = `http://${props.campaign.Image.image_url}`
  } 

  return (
    <li className={`bg-primary lg:px-4 md:px-2 md:py-4 md:border-b-2 ${props.borderStyle}`}>
    <div className={`md:grid md:grid-cols-12 md:grid-rows-12 lg:gap-5 md:gap-2 md:border-b-2 bg-white md:rounded-md ${props.bottomBorder}`}>
      <div className="md:rounded-l-md lg:col-span-4 md:col-span-5 md:h-64">
        <img src={image} alt="campaign image" className={`md:rounded-l-md object-fill w-full h-48 md:h-full ${props.borderStyle}`}/>
      </div>
      <div className="lg:col-span-8 md:col-span-7 py-2 px-1 md:px-0">
        <h3 className="lg:text-xl text-lg underline font-semibold lg:mx-2 md:mx-1 md:-mt-1">
          {props.campaign.header}
        </h3>
        <p className="lg:mt-1 mt-0 opacity-80 lg:mx-2 md:mx-1 lg:text-base text-sm">
          {props.campaign.sub_header}
        </p>
        <div className="flex justify-start gap-2 lg:mx-2 md:mx-1 lg:mt-3 mt-2 opacity-80 lg:text-base text-sm">
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
          {remainingDays} days remaining
        </div>
        <hr className="lg:mb-4 mb-3" />

        <div className="bg-primary py-2 lg:py-2 md:py-0 flex justify-evenly rounded-lg w-11/12 mx-4 lg:mx-2 md:mx-1 lg:mb-4 mb-3 lg:text-base text-sm">
          <div className="leading-6 md:leading-8">
            <p>Amount needed</p>
            <p className="text-center text-base">
              <span className="opacity-80">Nu.</span>{" "}
              <span className="font-semibold">{props.campaign.target_amount}</span>
            </p>
          </div>
          <div className="leading-6 md:leading-8">
            <p>Amount raised</p>
            <p className="text-center text-base">
              <span className="opacity-80">Nu.</span>{" "}
              <span className="font-semibold">{props.campaign.collected_amount}</span>
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:justify-start">
          <CampaignButton message="Go to Campaign" id={props.campaign.id}></CampaignButton>
        </div>
      </div>
    </div>
    </li>
  );
};

export default MainCampaign;
