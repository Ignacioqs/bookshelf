import Card from "../card/Card";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import myContext from "../../Context";
import classes from "./home.module.css";
import Profile from "../profile/Profile";
import Modal from "../modal/Modal";

const Books = () => {
  const ctx = useContext(myContext);
  const inputRef = useRef();

  const [showStars, setShowStars] = useState(false);

  useEffect(() => {});
  const submitHandler = (e) => {
    e.preventDefault();

    ctx.fetchBook(inputRef.current.value);
    inputRef.current.value = "";
  };

  const bookContent = ctx.fetchedBookData.map((book) => {
    return <Card key={book.id} book={book} showStars={showStars} />;
  });

  return (
    <div className={classes.books}>
      {ctx.showModal && <Modal />}
      <Profile />

      <div className={classes.main}>
        <form onSubmit={submitHandler}>
          <h3>Search Books</h3>
          <input type="text" placeholder="enter book info" ref={inputRef} />
          <button>Search</button>
        </form>

        <div className={classes.booksContainer}>{bookContent}</div>
      </div>
    </div>
  );
};

export default Books;
