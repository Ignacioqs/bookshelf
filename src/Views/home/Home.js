import Card from "../../Components/card/Card";
import { useRef } from "react";
import { useContext } from "react";
import myContext from "../../Contexts/Context";
import ModalContext from "../../Contexts/ModalContext";
import classes from "./home.module.css";
import Modal from "../../Components/modal/Modal";
import Image from "../../assets/images/hero.jpg";

const Books = () => {
  const ctx = useContext(myContext);
  const modalCtx = useContext(ModalContext);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    ctx.fetchBook(inputRef.current.value);
    inputRef.current.value = "";
  };

  const bookContent = ctx.fetchedBookData.map((book) => {
    return <Card key={book.id} book={book} />;
  });

  let heroText = <h1>search for a book</h1>;

  if (ctx.isLoading) {
    heroText = <h1>Loading...</h1>;
  }
  if (ctx.error) {
    heroText = <h1>{ctx.error}</h1>;
  }

  return (
    <div className={classes.books}>
      {modalCtx.showModal && <Modal />}

      <div className={classes.form}>
        <div className={classes.categories}>
          {/* prettier-ignore */}
          <p>read:<span>{ctx.statusState.read.length}</span></p>
          {/* prettier-ignore */}
          <p>want to read:<span>{ctx.statusState.wantToRead.length}</span></p>
          {/* prettier-ignore */}
          <p>currently reading: <span>{ctx.statusState.currentlyReading.length}</span></p>
          {/* prettier-ignore */}
          <p>favorites:<span>{ctx.statusState.favorites.length}</span></p>
        </div>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="enter book data" ref={inputRef} />
          <button>Search</button>
        </form>
      </div>

      {/* prettier-ignore */}

      <div className={ ctx.fetchedBookData.length === 0 ? classes.slogan : classes.hide}>
      {heroText}
        <img src={Image} />
      </div>

      <div className={classes.booksContainer}>{bookContent}</div>
    </div>
  );
};

export default Books;
