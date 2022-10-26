import { useContext, useState } from "react";
import myContext from "../../Context";
import classes from "./myBooks.module.css";
import Profile from "../profile/Profile";
import Modal from "../modal/Modal";
import Categorized from "../categorized/Categorized";

const MyBooks = (props) => {
  const ctx = useContext(myContext);
  const [showStars, setShowStars] = useState(true);

  let readBookContent = <h3>no read books yet.</h3>;
  let wantToReadBookContent = <h3>no want to read books yet.</h3>;
  let currentlyReadingBookContent = <h3>no currently reading books yet.</h3>;
  let favoritesBookContent = <h3>no favorite books yet.</h3>;

  if (ctx.statusState.read.length > 0) {
    readBookContent = ctx.statusState.read.map((book) => {
      return <Categorized key={book.id} book={book} showStars={showStars} />;
    });
  }
  if (ctx.statusState.wantToRead.length > 0) {
    wantToReadBookContent = ctx.statusState.wantToRead.map((book) => {
      return <Categorized key={book.id} book={book} />;
    });
  }
  if (ctx.statusState.currentlyReading.length > 0) {
    currentlyReadingBookContent = ctx.statusState.currentlyReading.map(
      (book) => {
        return <Categorized book={book} showStars={showStars} />;
      }
    );
  }

  if (ctx.statusState.favorites.length > 0) {
    favoritesBookContent = ctx.statusState.favorites.map((book) => {
      return <Categorized book={book} showStars={showStars} />;
    });
  }

  return (
    <div className={classes.books}>
      {ctx.showModal && <Modal />}
      <Profile />

      <div className={classes.main}>
        <div
          className={ctx.categoryMenu === 1 ? classes.category : classes.hide}
        >
          <h2>Read books</h2>
          <div className={classes.booksContainer}>{readBookContent}</div>
        </div>

        <div
          className={ctx.categoryMenu === 2 ? classes.category : classes.hide}
        >
          <h2>Want to read books</h2>
          <div className={classes.booksContainer}>{wantToReadBookContent}</div>
        </div>

        <div
          className={ctx.categoryMenu === 3 ? classes.category : classes.hide}
        >
          <h2>Currently reading books</h2>
          <div className={classes.booksContainer}>
            {currentlyReadingBookContent}
          </div>
        </div>
        <div
          className={ctx.categoryMenu === 4 ? classes.category : classes.hide}
        >
          <h2>Favorite books</h2>
          <div className={classes.booksContainer}>{favoritesBookContent}</div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
