import classes from "./CommentModal.module.css";
import { useContext } from "react";
import ModalContext from "../../Contexts/ModalContext";
import myContext from "../../Contexts/Context";

const CommentModal = (props) => {
  const ctx = useContext(ModalContext);
  const mainCtx = useContext(myContext);

  const handleModal = (e) => {
    ctx.setShowCommentModal(false);
  };

  return (
    <div className={classes.background} onClick={handleModal}>
      <div className={classes.container}>
        <div className={classes.x}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.commentContainer}>
          {mainCtx.modalData?.comments?.map((comment) => (
            <p>{comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
