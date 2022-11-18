import { useContext, useEffect, useState } from "react";
import myContext from "../../Contexts/Context";
import classes from "./myBooks.module.css";
import Profile from "../../Components/profile/Profile";
import Modal from "../../Components/modal/Modal";
import CommentModal from "../../Components/commentModal/CommentModal";
import Categorized from "../../Components/categorized/Categorized";
import MenuContext from "../../Contexts/MenuContext";
import ModalContext from "../../Contexts/ModalContext";
import Image from "../../assets/images/hero.jpg";

const MyBooks = (props) => {
  const ctx = useContext(myContext);
  const MenuCtx = useContext(MenuContext);
  const ModalCtx = useContext(ModalContext);
  const [showStars, setShowStars] = useState(true);

  let readContent =
    ctx.statusState.read?.length > 0 ? (
      ctx.statusState.read?.map((book) => (
        <Categorized key={book.id} book={book} showStars={showStars} />
      ))
    ) : (
      <div className={classes.noBooksContainer}>
        <h1>no read books yet.</h1>
        <img src={Image} />
      </div>
    );

  let wantToReadContent =
    ctx.statusState.wantToRead?.length > 0 ? (
      ctx.statusState.wantToRead?.map((book) => (
        <Categorized key={book.id} book={book} />
      ))
    ) : (
      <div className={classes.noBooksContainer}>
        <h1>no want to read books yet.</h1>
        <img src={Image} />
      </div>
    );

  let currentlyContent =
    ctx.statusState.currentlyReading?.length > 0 ? (
      ctx.statusState.currentlyReading?.map((book) => (
        <Categorized key={book.id} book={book} />
      ))
    ) : (
      <div className={classes.noBooksContainer}>
        <h1>no currently reading books yet.</h1>
        <img src={Image} />
      </div>
    );

  let favoritesContent =
    ctx.statusState.favorites?.length > 0 ? (
      ctx.statusState.favorites?.map((book) => (
        <Categorized key={book.id} book={book} showStars={showStars} />
      ))
    ) : (
      <div className={classes.noBooksContainer}>
        <h1>no favorites books yet.</h1>
        <img src={Image} />
      </div>
    );

  return (
    <div className={classes.books}>
      {ModalCtx.showModal && <Modal />}
      {ModalCtx.showCommentModal && <CommentModal />}
      {/* prettier-ignore */}
      <div className={classes.profile}><Profile /></div>
      {/* prettier-ignore */}
      <div className={MenuCtx.menu === 1 ? classes.booksContainer : classes.hide}>{readContent}</div>
      {/* prettier-ignore */}
      <div className={MenuCtx.menu === 2 ? classes.booksContainer : classes.hide}>{wantToReadContent}</div>
      {/* prettier-ignore */}
      <div className={MenuCtx.menu === 3 ? classes.booksContainer : classes.hide}>{currentlyContent}</div>
      {/* prettier-ignore */}
      <div className={MenuCtx.menu === 4 ? classes.booksContainer : classes.hide}>{favoritesContent}</div>
    </div>
  );
};

export default MyBooks;
