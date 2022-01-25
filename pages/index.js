import MiniCampaign from "../components/campaigns/miniCampaign";
import Question from "../components/question";
import Story from "../components/story";
import MiniStory from "../components/miniStory";
import Wrapper from "../components/wrapper";
import Header from "../components/header";

export default function Home() {
  const stories = [
    {
      image: "/success_1.png",
      header: "I want to thank everyone who donated for my cause.",
      cite: "John Cena",
      sub_header:
        "John was diagnosed with a certain disease, and needed financial assitance to undergo his treatment.",
    },
    {
      image: "/success_2.png",
      header: "Yup, this thing works and I need a certain string length",
      cite: "John Cena",
      sub_header:
      "John was diagnosed with a certain disease, and needed financial assitance to undergo his treatment.",
    },
    {
      image: "/success_3.png",
      header: "Man, if life was easy",
      cite: "John Cena",
      sub_header:
        "John was diagnosed with a certain disease, and needed financial assitance to undergo his treatment.",
    },
  ];

  return (
    <div className="font-sans">
      <Wrapper>
        <Header></Header>
        <MiniCampaign></MiniCampaign>
        <div className="hidden md:block">
          <Story stories={stories}/>
        </div>
        <div className="block md:hidden">
          <MiniStory stories={stories}/>
        </div>
        <Question></Question>
      </Wrapper>
    </div>
  );
}
