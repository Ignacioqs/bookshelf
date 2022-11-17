import classes from "./card.module.css";
import StarRating from "../starRating/starRating";
import Options from "../options/Options";
import { useContext } from "react";
import ModalContext from "../../Contexts/ModalContext";

const Card = (props) => {
  const ctx = useContext(ModalContext);

  const handleModal = (e) => {
    ctx.setShowModal(true);
    ctx.setCurrentCardData(props.book);
  };

  const cardImage = props.book.thumbnail ? (
    <img src={props.book.thumbnail} alt="book cover" />
  ) : (
    <p>
      no cover <br /> available
    </p>
  );

  return (
    <div>
      <div className={classes.cardImg} onClick={handleModal}>
        {cardImage}
      </div>
      <div className={classes.cardInfo}>
        <p>{props.book.title ? props.book.title : "No Title Available"}</p>
        <p>{props.book.authors ? props.book.authors : "No Author Available"}</p>
      </div>
      <div className={classes.star}>{props.showStars && <StarRating />}</div>
      <Options book={props.book} defaultValue={props.book.selected} />
    </div>
  );
};

export default Card;
