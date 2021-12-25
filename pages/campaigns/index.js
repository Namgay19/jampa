import CampaignHeader from "../../components/campaignHeader";
import MainCampaign from "../../components/mainCampaign";
import Pagination from "../../components/pagination";
import Wrapper from "../../components/wrapper";

const Campaigns = () => {
  return (
    <Wrapper>
      <div className="px-40 py-10">
        <h1 className="text-3xl font-semibold">Campaigns</h1>
        <svg
          width="160"
          height="20"
          viewBox="0 0 329 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mt-2"
        >
          <path
            d="M3 16.3353C3 -4.86466 209.667 2.33531 328 16.3353"
            stroke="black"
            strokeWidth="6"
          />
        </svg>

        <div className="pb-4 border-2 shadow overflow-hidden sm:rounded-lg">
          <CampaignHeader />
          <MainCampaign colour="bg-secondary" />
          <MainCampaign colour="bg-secondary" />
          <MainCampaign colour="bg-secondary" />
          <MainCampaign colour="bg-secondary" />
          <MainCampaign colour="bg-secondary"/>
          <Pagination />
        </div>
      </div>
    </Wrapper>
  );
};

export default Campaigns;
