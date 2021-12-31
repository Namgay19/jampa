import CampaignCard from "../../components/campaigns/campaignCard";
import CampaignHeader from "../../components/campaigns/campaignHeader";
import MainCampaign from "../../components/campaigns/mainCampaign";
import Pagination from "../../components/pagination";
import Wrapper from "../../components/wrapper";

const Campaigns = () => {
  return (
    <Wrapper>
      <div className="lg:px-40 md:px-12 py-4 lg:py-10 md:py-5">
        <h1 className="px-2 md:px-0 text-xl lg:text-3xl md:text-2xl font-semibold">
          Campaigns
        </h1>
        <svg
          viewBox="0 0 329 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="px-2 md:px-0 w-32 lg:w-40 lg:mb-4 md:mb-2"
        >
          <path
            d="M3 16.3353C3 -4.86466 209.667 2.33531 328 16.3353"
            stroke="black"
            strokeWidth="6"
          />
        </svg>

        <div className="mt-2 md:mt-0 pb-2 lg:pb-4 md:pb-2 border-2 shadow overflow-hidden sm:rounded-lg">
          <CampaignHeader />
          <div className="">
            <MainCampaign bottomBorder="border-b-4" />
            <MainCampaign bottomBorder="border-b-4" />
            <MainCampaign bottomBorder="border-b-4" />
            <MainCampaign bottomBorder="border-b-4" />
            <MainCampaign bottomBorder="border-b-4" />
          </div>
          <Pagination />
        </div>
      </div>
    </Wrapper>
  );
};

export default Campaigns;
