import MiniCampaign from "../components/miniCampaign";
import Question from "../components/question";
import Story from "../components/story";
import Wrapper from "../components/wrapper";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="font-sans">
      <Wrapper>
        <Header></Header>
        <MiniCampaign></MiniCampaign>
        <Story></Story>
        <Question></Question>
      </Wrapper>
    </div>
  );
}
