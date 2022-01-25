import DonationList from "../../../components/donations/donationList";
import Wrapper from "../../../components/wrapper";
import MainCampaign from "../../../components/campaigns/mainCampaign";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useCustomHttp from "../../../hooks/custom-http";

const Donations = () => {
  const router = useRouter();
  const { isLoading, error, sendRequest } = useCustomHttp();
  const [campaign, setCampaign] = useState({});
  const [donations, setDonations] = useState([]);
  const [donationCategory, setDonationCategory] = useState("Recent");
  const [page, setPage] = useState(1)

  useEffect(()=> {
    const { id } = router.query;

    const requestCampaignConfig = {
      url: `/campaigns/${id}`,
      method: "GET",
    };

    const requestDonationConfig = {
      url: `/campaigns/${id}/donations?sortBy=${donationCategory}&page=${page}&pageSize=10`,
      method: "GET",
    };

    const getCampaign = (data) => {
      setCampaign(data)
    }

    const getDonations = data => {
      setDonations(data.data)
    }

    sendRequest(requestCampaignConfig, getCampaign)
    sendRequest(requestDonationConfig, getDonations)
  },[donationCategory, page])

  const categorySelectionHandler = (event) => {
    setDonationCategory(event.target.value);
  };

  const pageChangeHandler = operation => {
    if (operation === "add") {
      setPage((prevPage) => {
        return prevPage + 1;
      });
    } else {
      if (page == 1) {
        setPage(1)
      } else {
        setPage((prevPage) => {
          return prevPage - 1;
        });
      }
    }
  }

  return (
    <Wrapper>
      <div className="px-2 lg:px-40 md:px-12 mt-2 md:mt-4 py-2 md:py-4 mb-8 md:mb-0">
        <MainCampaign campaign={campaign} borderStyle="rounded-lg"/>
        <hr className="mt-5 md:mt-10"/>
        <h1 className="px-2 md:px-0 text-xl md:text-3xl font-semibold mb-4 mt-4 md:mt-8">Donation History</h1>
        <div className="flex gap-10">
          <div className="mb-4 ml-2">
            <input id="recent" type="radio" value="Recent" name="order" onClick={categorySelectionHandler}/>
            <label htmlFor="recent"> Recent donations</label>
          </div>
          <div>
            <input id="highest" type="radio" value="Highest" name="order" onClick={categorySelectionHandler}/>
            <label htmlFor="highest"> Highest donations</label>
          </div>
        </div>
        <DonationList donations={donations} onPageChange={pageChangeHandler}/>
      </div>
    </Wrapper>
  );
};

export default Donations;
