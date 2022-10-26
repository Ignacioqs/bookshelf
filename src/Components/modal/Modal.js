import classes from "./modal.module.css";
import { useContext } from "react";
import myContext from "../../Context";
import Options from "../options/Options";

const Modal = (props) => {
  const ctx = useContext(myContext);

  const handleModal = (e) => {
    if (e.target.value !== "select") {
      ctx.setShowModal(false);
    }
  };

  const cardImage = ctx.currentCardData?.thumbnail ? (
    <img src={ctx.currentCardData?.thumbnail} alt="" />
  ) : (
    <div className="noImage">
      no
      <br /> cover <br />
      available
    </div>
  );

  return (
    <div className={classes.background} onClick={handleModal}>
      <div className={classes.container} key={ctx.currentCardData?.id}>
        <div className={classes.mainData}>
          <div className={classes.options}>
            {cardImage}
            <Options book={ctx.currentCardData} />
          </div>

          <div className={classes.info}>
            <p className={classes.title}>{ctx.currentCardData?.title}</p>
            <p className={classes.author}>{ctx.currentCardData?.authors}</p>
            <p>
              <span className={classes.bold}>Pages:</span>
              {ctx.currentCardData?.pageCount}
            </p>
            <p>
              <span className={classes.bold}>Genre:</span>
              {ctx.currentCardData?.genre}
            </p>
            <p>
              <span className={classes.bold}>Publisher:</span>
              {ctx.currentCardData?.publisher}
            </p>
            <div className={classes.description}>
              <p>{ctx.currentCardData?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
