import NavBar from "./navBar";
import Footer from "./footer";

const Wrapper = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Wrapper;
