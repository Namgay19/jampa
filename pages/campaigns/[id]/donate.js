import Wrapper from "../../../components/wrapper";
import MainCampaign from "../../../components/campaigns/mainCampaign";
import DonationForm from "../../../components/donations/donationForm";
import useCustomHttp from "../../../hooks/custom-http";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}

const Donate = () => {
  const router = useRouter()
  const [campaign, setCampaign] = useState({});
  const { isLoading, error, sendRequest } = useCustomHttp();

  const { id } = router.query;

  useEffect(()=>{
    const requestCampaignConfig = {
      url: `/campaigns/${id}`,
      method: "GET",
    };

    const getCampaign = (data) => {
      setCampaign(data)
    }

    sendRequest(requestCampaignConfig, getCampaign)
  },[]);

  return (
    <Wrapper>
      <div className="px-2 lg:px-40 md:px-12 mt-4 py-4">
        <MainCampaign borderStyle="rounded-lg" campaign={campaign} />
        <hr className="md:mt-10 mt-4" />
        <h1 className="px-2 md:px-0 text-2xl md:text-3xl font-semibold mb-4 mt-4 md:mt-8">Donate</h1>
        <DonationForm />
      </div>
    </Wrapper>
  );
};

export default Donate;
