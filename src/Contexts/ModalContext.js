import { createContext, useState } from "react";

const ModalContext = createContext();
export default ModalContext;

export const ModalContextProvider = (props) => {
  const [currentCardData, setCurrentCardData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        setCurrentCardData,
        currentCardData,
        showModal,
        setShowModal,
        isReadMore,
        setIsReadMore,
        showCommentModal,
        setShowCommentModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
