import CampaignButton from "./campaignButton";
import CampaignCard from "./campaignCard"

const MiniCampaign = () => {
  return (
    <div className="bg-secondary w-full pb-20">
      <div className="px-40">
        <div className="pt-20 flex justify-between">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold shadow-sm shadow-transparent tracking-wide">
              Help fund someones medical expenditures.
            </h2>
            <p className="tracking-wide mt-4 opacity-50">
              Although Bhutan has free universal healthcare, There are
              occassions where the goverment cant fund the medical expenditures.
              This is where we can run a crowdfunding campaign to help the
              people in need.
            </p>
          </div>
          <div className="w-3/3">
            <CampaignButton message="Go to Campaigns"></CampaignButton>
          </div>
        </div>

        <div className="flex justify-evenly gap-10 mt-10">
          <CampaignCard></CampaignCard>
          <CampaignCard></CampaignCard>
          <CampaignCard></CampaignCard>
        </div>
      </div>
    </div>
  );
};

export default MiniCampaign;
