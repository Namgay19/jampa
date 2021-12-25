import DonationList from "../../../components/donationList";
import Wrapper from "../../../components/wrapper";
import MainCampaign from "../../../components/mainCampaign";

const Donations = () => {
  return (
    <Wrapper>
      <div className="px-40 mt-4 py-4">
        <MainCampaign />
        <hr className="mt-10"/>
        <h1 className="text-3xl font-semibold mb-4 mt-8">Donation History</h1>
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
