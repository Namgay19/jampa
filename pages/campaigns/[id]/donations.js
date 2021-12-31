import DonationList from "../../../components/donations/donationList";
import Wrapper from "../../../components/wrapper";
import MainCampaign from "../../../components/campaigns/mainCampaign";

const Donations = () => {
  return (
    <Wrapper>
      <div className="px-2 lg:px-40 md:px-12 mt-2 md:mt-4 py-2 md:py-4 mb-8 md:mb-0 ">
        <MainCampaign borderStyle="rounded-lg"/>
        <hr className="mt-5 md:mt-10"/>
        <h1 className="px-2 md:px-0 text-xl md:text-3xl font-semibold mb-4 mt-4 md:mt-8">Donation History</h1>
        <div className="flex gap-10">
          <div className="mb-4 ml-2">
            <input id="recent" type="radio" value="Recent donations" name="order" className=""/>
            <label htmlFor="recent"> Recent donations</label>
          </div>
          <div>
            <input id="highest" type="radio" value="Highest donations" name="order"/>
            <label htmlFor="highest"> Highest donations</label>
          </div>
        </div>
        <DonationList />
      </div>
    </Wrapper>
  );
};

export default Donations;
