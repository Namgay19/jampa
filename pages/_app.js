import "../styles/globals.css";
import ModalContext from "../store/modal-context";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [displayModal, setDisplayModal] = useState(false);

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal: displayModal,
        setShowModal: openModal,
        setHideModal: closeModal,
      }}
    >
      <Component {...pageProps} />
    </ModalContext.Provider>
  );
}

export default MyApp;
