import Header from "../components/header";
import MiniCampaign from "../components/miniCampaign";
import Question from "../components/question";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Header></Header>
      <MiniCampaign></MiniCampaign>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}
