import { useContext } from "react";
import myContext from "../../Context";
import classes from "./profile.module.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const ctx = useContext(myContext);
  const history = useNavigate();

  const setMenuItem = (index) => {
    ctx.setCategoryMenu(index);
    history("/myBooks");
  };

  return (
    <div className={classes.profile}>
      <p>
        User: <span className={classes.user}></span>
      </p>

      <div
        className={classes.data}
        onClick={() => {
          setMenuItem(1);
        }}
      >
        <p>
          <span
            className={ctx.categoryMenu === 1 ? classes.active : classes.accent}
          >
            Read
          </span>
        </p>
        <div className={classes.number}>{ctx.statusState.read?.length}</div>
      </div>

      <div
        className={classes.data}
        onClick={() => {
          setMenuItem(2);
        }}
      >
        <p>
          <span
            className={ctx.categoryMenu === 2 ? classes.active : classes.accent}
          >
            Want To Read
          </span>
        </p>
        <div className={classes.number}>
          {ctx.statusState.wantToRead?.length}
        </div>
      </div>

      <div
        className={classes.data}
        onClick={() => {
          setMenuItem(3);
        }}
      >
        <p>
          <span
            className={ctx.categoryMenu === 3 ? classes.active : classes.accent}
          >
            Currently Reading
          </span>
        </p>
        <div className={classes.number}>
          {ctx.statusState.currentlyReading?.length}
        </div>
      </div>

      <div
        className={classes.data}
        onClick={() => {
          setMenuItem(4);
        }}
      >
        <p>
          <span
            className={ctx.categoryMenu === 4 ? classes.active : classes.accent}
          >
            Favorites
          </span>
        </p>
        <div className={classes.number}>
          {ctx.statusState.favorites?.length}
        </div>
      </div>
    </div>
  );
};

export default Profile;
