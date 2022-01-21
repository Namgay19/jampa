import Wrapper from "../../components/wrapper";
import CampaignTop from "../../components/campaigns/campaignTop";
import MiniDonation from "../../components/donations/miniDonation";
import ApplicantDetails from "../../components/applicantDetails";
import ModalContext from "../../store/modal-context";
import { useContext, useState } from "react/cjs/react.development";
import Modal from "../../components/UI/modal";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useCustomHttp from "../../hooks/custom-http"

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}

const Campaign = () => {
  const router = useRouter();
  const modCtx = useContext(ModalContext);
  const { isLoading, error, sendRequest } = useCustomHttp();
  const [campaign, setCampaign] = useState({})

  const modalDetails = (
    <Modal
      showNormalModal={true}
      hasBackdrop={false}
      alignMiddle={false}
      hasButtons={false}
      header="Campaign created successfully"
      subHeader="Your campaign has been succesfully created. You can click on the edit campaign button to edit your campaign details."
    />
  );

  useEffect(() => {
    const { id } = router.query;
    const requestConfig = {
      url: `/campaigns/${id}`,
      method: "GET",
    };

    const getData = (data) => {
      setCampaign(data)
    }

    sendRequest(requestConfig, getData)

    const modalTimer = setTimeout(() => {
      modCtx.setHideModal()
    }, 2000);

    return () => {
      clearTimeout(modalTimer);
    };
  }, []);

  return (
    <Wrapper>
      {modCtx.showModal && modalDetails}
      <div className="px-2 lg:px-40 md:px-10 mt-4 mb-5 lg:mb-20 md:mb-10">
        <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
          {campaign.header}
        </h1>
        <CampaignTop campaign={campaign} />
        <div className="lg:p-4 md:p-2 lg:flex gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-xl opacity-50 font-bold my-2 md:my-4">
              {campaign.sub_header}
            </h2>
            <p className="mb-4">
              {campaign.description}
            </p>
            <ApplicantDetails />
          </div>

          <div className="lg:w-1/3 h-auto my-4">
            <MiniDonation />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Campaign;
