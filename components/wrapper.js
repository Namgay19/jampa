import NavBar from "./navBar";
import Footer from "./footer";

const Wrapper = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Wrapper;
