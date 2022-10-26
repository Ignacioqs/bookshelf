import classes from "./categorized.module.css";
import StarRating from "../starRating/starRating";
import Options from "../options/Options";
import { useContext, useRef, useState } from "react";
import myContext from "../../Context";

const Categorized = (props) => {
  const ctx = useContext(myContext);
  const commentRef = useRef();
  const [comments, setComments] = useState("");

  const cardImage = props.book.thumbnail ? (
    <img src={props.book.thumbnail} alt="" />
  ) : (
    <div className="noImage">
      no
      <br /> cover <br />
      available
    </div>
  );

  const commentHandler = () => {
    setComments(commentRef.current.value);
    console.log(comments);
  };

  return (
    <div className={classes.row} key={props.book.id}>
      <div className={classes.cardImg}>
        {cardImage}
        <Options book={props.book} defaultValue={props.book.selected} />
        <p className={classes.commentList}>
          <span className={classes.bold}>Comments</span>(0)
        </p>
      </div>

      <div className={classes.data}>
        <p className={classes.bold}>{props.book.title}</p>
        <p>{props.book.authors}</p>
        <div>{props.showStars && <StarRating />}</div>

        <p>
          <span className={classes.bold}>Pages:</span>
          {props.book.pageCount}
        </p>
        <p>
          <span className={classes.bold}>Genre:</span>
          {props.book.genre}
        </p>

        <div>
          <label for="comment">
            <span className={classes.bold}>write a comment:</span>
          </label>
          <textarea
            className={classes.textarea}
            id="comment"
            name="comment"
            ref={commentRef}
          ></textarea>

          <button className={classes.submit} onClick={commentHandler}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categorized;
