import { useState } from "react";
import classes from "./starRating.module.css";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        let ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={(e) => setRating(ratingValue)}
            />
            <FaStar
              className={classes.star}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={17}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
