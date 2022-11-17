import classes from "./modal.module.css";
import { useContext, useState } from "react";
import ModalContext from "../../Contexts/ModalContext";
import Options from "../options/Options";

const Modal = (props) => {
  const ctx = useContext(ModalContext);
  ctx.setIsReadMore(false);
  const [desc, setDesc] = useState("");

  const handleModal = (e) => {
    if (
      e.target.value !== "select" &&
      e.target.getAttribute("name") !== "span"
    ) {
      ctx.setShowModal(false);
    }
  };

  let description = ctx.currentCardData?.description;

  if (description?.length > 350) {
    description = description.slice(0, 350);
    ctx.setIsReadMore(true);
  }

  const cardImage = ctx.currentCardData?.thumbnail ? (
    <img src={ctx.currentCardData?.thumbnail} alt="" />
  ) : (
    <p>
      no cover <br />
      available
    </p>
  );

  const handleReadMore = () => {
    setDesc(ctx.currentCardData?.description);
  };

  return (
    <div className={classes.background} onClick={handleModal}>
      <div className={classes.container} key={ctx.currentCardData?.id}>
        <div className={classes.x}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.cardImg}>
          {cardImage}
          <Options book={ctx.currentCardData} />
        </div>
        <div className={classes.info}>
          <p className={classes.title}>{ctx.currentCardData?.title}</p>
          <p className={classes.author}>{ctx.currentCardData?.authors}</p>
          <p>
            <span>Pages:</span>
            {ctx.currentCardData?.pageCount
              ? ctx.currentCardData?.pageCount
              : "no page count available"}
          </p>
          <p>
            <span>Genre:</span>
            {ctx.currentCardData?.genre
              ? ctx.currentCardData?.genre
              : "no genre info available"}
          </p>
          <p>
            <span>Publisher:</span>
            {ctx.currentCardData?.publisher
              ? ctx.currentCardData?.publisher
              : "no publisher info available"}
          </p>
          <div className={classes.description}>
            {!desc && (
              <p>
                {ctx.currentCardData?.description
                  ? description
                  : "no description available"}
                <span name="span" onClick={handleReadMore}>
                  {ctx.isReadMore ? "read more" : ""}
                </span>
              </p>
            )}
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
