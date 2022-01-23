import React from "react";
const ModalContext = React.createContext({
  showModal: false,
  setShowModal: () => {},
  setHideModal: () => {},
});

export default ModalContext;
