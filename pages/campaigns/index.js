import CampaignHeader from "../../components/campaigns/campaignHeader";
import MainCampaign from "../../components/campaigns/mainCampaign";
import Pagination from "../../components/pagination";
import Wrapper from "../../components/wrapper";

const Campaigns = () => {
  return (
    <Wrapper>
      <div className="lg:px-40 md:px-12 lg:py-10 md:py-5">
        <h1 className="lg:text-3xl md:text-2xl font-semibold">Campaigns</h1>
        <svg
          viewBox="0 0 329 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-32 lg:w-40 lg:mb-4 md:mb-2"
        >
          <path
            d="M3 16.3353C3 -4.86466 209.667 2.33531 328 16.3353"
            stroke="black"
            strokeWidth="6"
          />
        </svg>

        <div className="lg:pb-4 md:pb-2 border-2 shadow overflow-hidden sm:rounded-lg">
          <CampaignHeader />
          <MainCampaign />
          <MainCampaign />
          <MainCampaign />
          <MainCampaign />
          <MainCampaign />
          <Pagination />
        </div>
      </div>
    </Wrapper>
  );
};

export default Campaigns;
