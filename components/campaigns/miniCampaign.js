import CampaignButton from "./campaignButton";
import CampaignCard from "./campaignCard";

const MiniCampaign = () => {
  return (
    <div className="bg-secondary w-full lg:pb-16 md:pb-12">
      <div className="lg:px-40 md:px-12">
        <div className="lg:pt-16 md:pt-10 flex justify-between">
          <div className="w-2/3">
            <h2 className="text-2xl font-bold shadow-sm shadow-transparent tracking-wide">
              Help fund someones medical expenditures.
            </h2>
          </div>
          <div className="w-3/3">
            <CampaignButton message="Go to Campaigns"></CampaignButton>
          </div>
        </div>
        <p className="lg:tracking-wide lg:w-4/6 md:w-5/6 lg:mt-4 md:mt-2 md:tracking-normal lg:text-base md:text-sm opacity-50">
          Although Bhutan has free universal healthcare, There are occassions
          where the goverment cant fund the medical expenditures. This is where
          we can run a crowdfunding campaign to help the people in need.
        </p>
        <div className="flex justify-evenly gap-10 lg:mt-10 md:mt-6">
          <CampaignCard></CampaignCard>
          <CampaignCard></CampaignCard>
          <div className="md:hidden lg:block">
            <CampaignCard></CampaignCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCampaign;
