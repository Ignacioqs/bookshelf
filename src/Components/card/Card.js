import classes from "./card.module.css";
import StarRating from "../starRating/starRating";
import Options from "../options/Options";
import { useContext } from "react";
import myContext from "../../Context";

const Card = (props) => {
  const ctx = useContext(myContext);

  const handleModal = (e) => {
    ctx.setShowModal(true);
    ctx.setCurrentCardData(props.book);
  };

  const cardImage = props.book.thumbnail ? (
    <img src={props.book.thumbnail} alt="" />
  ) : (
    <div className="noImage">
      no
      <br /> cover <br />
      available
    </div>
  );

  return (
    <div className={classes.card} key={props.book.id}>
      <div className={classes.cardImg} onClick={handleModal}>
        {cardImage}
      </div>
      <div className={classes.cardInfo}>
        <p>{props.book.title}</p>
        <p>{props.book.authors}</p>
      </div>
      <div className={classes.star}>{props.showStars && <StarRating />}</div>
      <Options book={props.book} defaultValue={props.book.selected} />
    </div>
  );
};

export default Card;
