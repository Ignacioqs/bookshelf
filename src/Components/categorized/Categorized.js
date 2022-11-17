import classes from "./categorized.module.css";
import StarRating from "../starRating/starRating";
import Options from "../options/Options";
import { useRef, useState, useContext } from "react";
import ModalContext from "../../Contexts/ModalContext";

const Categorized = (props) => {
  const commentRef = useRef();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const ctx = useContext(ModalContext);

  const cardImage = props.book.thumbnail ? (
    <img src={props.book.thumbnail} alt="" />
  ) : (
    <p>
      no cover <br />
      available
    </p>
  );

  const commentHandler = () => {
    setComment(commentRef.current.value);
    if (comment !== "") {
      setComments((comments) => [...comments, comment]);
    }

    console.log(comment);
  };

  const handleModal = (e) => {
    if (
      e.target.value === "5" ||
      e.target.value === "4" ||
      e.target.value === "3" ||
      e.target.value === "2" ||
      e.target.value === "1" ||
      e.target.value === "select" ||
      e.target.value === "read" ||
      e.target.value === "wantToRead" ||
      e.target.value === "currentlyReading" ||
      e.target.value === "favorites" ||
      e.target.value === "remove" ||
      e.target.getAttribute("name") === "submit" ||
      e.target.getAttribute("name") === "comment"
    ) {
      ctx.setShowModal(false);
      return;
    }
    ctx.setShowModal(true);
    ctx.setCurrentCardData(props.book);
  };

  return (
    <div className={classes.box} key={props.book.id} onClick={handleModal}>
      <div className={classes.cardImg}>
        {cardImage}
        <Options book={props.book} defaultValue={props.book.selected} />
      </div>

      <div className={classes.data}>
        <div>
          <span>
            {props.book.title ? props.book.title : "no info available"}
          </span>
          <p>{props.book.authors ? props.book.authors : "no info available"}</p>
          {props.showStars && <StarRating />}
        </div>

        <div className={classes.dataMid}>
          <p>
            <span>Pages:</span>
            {props.book.pageCount ? props.book.pageCount : "no info available"}
          </p>
          <p>
            <span>Genre:</span>
            {props.book.genre ? props.book.genre : "no info available"}
          </p>
        </div>

        <div className={classes.comment}>
          <label for="comment">write a comment:</label>
          <textarea id="comment" name="comment" ref={commentRef} />
          <div>
            <button
              className={classes.saveBtn}
              onClick={commentHandler}
              name="submit"
            >
              submit
            </button>
            <p>
              comments
              <span className={classes.commentNumber}>({comments.length})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorized;
