import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CampaignHeader from "../../components/campaigns/campaignHeader";
import MainCampaign from "../../components/campaigns/mainCampaign";
import Pagination from "../../components/pagination";
import Wrapper from "../../components/wrapper";
import useCustomHttp from "../../hooks/custom-http";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { isLoading, error, sendRequest } = useCustomHttp();
  const [filterStatus, setFilterStatus] = useState("active");
  const [queryStatus, setQueryStatus] = useState("");
  const [pageStatus, setPageStatus] = useState(1);

  useEffect(() => {
    const requestConfig = {
      url: `/campaigns?status=${filterStatus}&query=${queryStatus}&page=${pageStatus}&pageSize=5`,
      method: "GET",
    };

    const getData = (data) => {
      setCampaigns(data.data);
    };

    sendRequest(requestConfig, getData);
  }, [filterStatus, queryStatus, pageStatus]);

  const filterHandler = (filter) => {
    setFilterStatus(filter);
  };

  const queryHandler = (query) => {
    setQueryStatus(query);
  };

  const pageHandler = (operation) => {
    if (operation === "add") {
      setPageStatus((prevStatus) => {
        return prevStatus + 1;
      });
    } else {
      if (pageStatus == 1) {
        setPageStatus(1)
      } else {
        setPageStatus((prevStatus) => {
          return prevStatus - 1;
        });
      }
    }
  };

  const formattedCampaigns = campaigns.map((campaign) => (
    <MainCampaign
      bottomBorder="border-b-4"
      campaign={campaign}
      key={campaign.id}
    />
  ));

  return (
    <Wrapper>
      <div className="lg:px-40 md:px-12 py-6 lg:py-10 md:py-5">
        <div className="flex justify-between">
          <div>
            <h1 className="px-2 md:px-0 text-2xl lg:text-3xl md:text-2xl font-semibold">
              Campaigns
            </h1>
            <svg
              viewBox="0 0 329 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="px-2 md:px-0 w-36 lg:w-40 lg:mb-4 md:mb-2"
            >
              <path
                d="M3 16.3353C3 -4.86466 209.667 2.33531 328 16.3353"
                stroke="black"
                strokeWidth="6"
              />
            </svg>
          </div>
          <div>
            <Link href="/campaigns/create">
              <button className="hidden border-2 py-1 px-1 rounded-md bg-primary font-semibold md:flex text-base w-full shadow-md">
                Create a Campaign
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-double-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="25"
                  height="25"
                  className="ml-2"
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-2 md:mt-0 pb-2 lg:pb-2 md:pb-2 border-2 shadow overflow-hidden sm:rounded-lg">
          <CampaignHeader onFilter={filterHandler} onQuery={queryHandler} />
          <ul className="">{formattedCampaigns}</ul>
          <Pagination onPageChange={pageHandler} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Campaigns;
