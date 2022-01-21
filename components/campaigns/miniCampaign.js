import { useState, useEffect } from "react";
import CampaignButton from "./campaignButton";
import CampaignCard from "./campaignCard";
import useCustomHttp from "../../hooks/custom-http";

const MiniCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { isLoading, error, sendRequest } = useCustomHttp();

  useEffect(() => {
    const requestConfig = {
      url: `/campaigns?perPage=3`,
      method: "GET",
    };

    const getData = (data) => {
      setCampaigns(data.data);
    };

    sendRequest(requestConfig, getData);
  }, []);

  return (
    <div className="bg-secondary w-full pb-8 lg:pb-16 md:pb-12">
      <div className="px-2 lg:px-40 md:px-12">
        <div className="pt-4 lg:pt-16 md:pt-10 flex justify-between">
          <div className="w-10/12 md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold shadow-sm shadow-transparent tracking-wide">
              Help fund someones medical expenditures.
            </h2>
          </div>
          <div className="hidden md:block md:w-3/3">
            <CampaignButton message="Go to Campaigns"></CampaignButton>
          </div>
          <div className="md:hidden w-1/12">
            <button>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="clinic-medical"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width="30"
                height="30"
              >
                <path
                  fill="gray"
                  d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm96 261a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8zm186.69-139.72l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <p className="text-sm tracking-tight mt-2 lg:tracking-wide w-full lg:w-4/6 md:w-5/6 lg:mt-4 md:mt-2 md:tracking-normal lg:text-base md:text-sm opacity-50">
          Although Bhutan has free universal healthcare, There are occassions
          where the goverment cant fund the medical expenditures. This is where
          we can run a crowdfunding campaign to help the people in need.
        </p>
        {campaigns.length !== 0 && (
          <div className="md:flex md:justify-evenly md:gap-10 mt-4 lg:mt-10 md:mt-6">
            <CampaignCard campaign={campaigns[0]}></CampaignCard>
            <div className="hidden md:block">
              <CampaignCard campaign={campaigns[1]}></CampaignCard>
            </div>
            <div className="hidden lg:block">
              <CampaignCard campaign={campaigns[2]}></CampaignCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCampaign;
