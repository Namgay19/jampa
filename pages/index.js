import MiniCampaign from "../components/campaigns/miniCampaign";
import Question from "../components/question";
import Story from "../components/story";
import MiniStory from "../components/miniStory";
import Wrapper from "../components/wrapper";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="font-sans">
      <Wrapper>
        <Header></Header>
        <MiniCampaign></MiniCampaign>
        <div className="hidden md:block">
          <Story />
        </div>
        <div className="block md:hidden">
          <MiniStory />
        </div>
        <Question></Question>
      </Wrapper>
    </div>
  );
}
