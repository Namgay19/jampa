import Wrapper from "../../../components/wrapper";
import MainCampaign from "../../../components/campaigns/mainCampaign";
import DonationForm from "../../../components/donations/donationForm";

const Donate = () => {
  return (
    <Wrapper>
      <div className="px-40 mt-4 py-4">
        <MainCampaign />
        <hr className="mt-10" />
        <h1 className="text-3xl font-semibold mb-4 mt-8">Donate</h1>
        <DonationForm />
      </div>
    </Wrapper>
  );
};

export default Donate;
