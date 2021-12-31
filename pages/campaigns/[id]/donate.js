import Wrapper from "../../../components/wrapper";
import MainCampaign from "../../../components/campaigns/mainCampaign";
import DonationForm from "../../../components/donations/donationForm";

const Donate = () => {
  return (
    <Wrapper>
      <div className="px-2 lg:px-40 md:px-12 mt-4 py-4">
        <MainCampaign borderStyle="rounded-lg" />
        <hr className="md:mt-10 mt-4" />
        <h1 className="px-2 md:px-0 text-2xl md:text-3xl font-semibold mb-4 mt-4 md:mt-8">Donate</h1>
        <DonationForm />
      </div>
    </Wrapper>
  );
};

export default Donate;
