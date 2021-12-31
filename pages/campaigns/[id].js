import Wrapper from "../../components/wrapper";
import CampaignTop from "../../components/campaigns/campaignTop";
import MiniDonation from "../../components/donations/miniDonation";
import ApplicantDetails from "../../components/applicantDetails";

const Campaign = () => {
  return (
    <Wrapper>
      <div className="px-2 lg:px-40 md:px-10 mt-4 mb-5 lg:mb-20 md:mb-10">
        <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">Someones surgery</h1>
        <CampaignTop />
        <div className="lg:p-4 md:p-2 lg:flex gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-xl opacity-50 font-bold my-2 md:my-4">
              Needs funding to go Thailand for surgery
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              posuere lobortis ipsum sed gravida. Maecenas sed eros accumsan,
              iaculis augue eget, scelerisque purus. Mauris vitae turpis ornare,
              tempor odio in, volutpat velit. In lacus tellus, aliquet venenatis
              leo a, sodales tincidunt neque. In sodales nulla vel posuere
              varius. Vestibulum at quam posuere, aliquet enim at, tempus augue.
              Duis libero ante, convallis eget lacinia sed, venenatis eu urna.
              Quisque volutpat, enim vitae aliquam laoreet, leo nibh commodo
              felis, non dictum dolor orci eu metus. Cras sed diam a nulla
              egestas commodo. Phasellus et tellus in ex ornare vulputate cursus
              vel libero. Nulla suscipit tincidunt interdum. Fusce nisi diam,
              pulvinar eu magna sit amet, tincidunt ornare sem. Suspendisse
              rhoncus eleifend sem, eu placerat felis. Fusce vestibulum nulla
              vehicula magna tempus, ut volutpat felis porta. Vivamus molestie
              rutrum tincidunt. Aliquam quis consequat eros. Sed a consectetur
              massa. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Nulla egestas porttitor lorem,
              vitae euismod erat vehicula id. Phasellus rhoncus accumsan velit
              lacinia scelerisque. Pellentesque commodo pellentesque dui eget
              convallis. Sed sodales nec dolor sed lobortis. Nam eu augue rutrum
              quam vehicula convallis.
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
